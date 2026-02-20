"use client";

import { Session } from "@supabase/supabase-js";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CHECKLIST_ITEMS, RAMADAN_DAYS } from "@/data/planner-content";
import { getPrayerTimeFallback } from "@/data/prayer-times";
import { getSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabase";
import {
  createDailyRecord,
  createInitialState,
  getCurrentStreak,
  getDayProgress,
  getGregorianDateForRamadanDay,
  getRamadanTimingInfo,
  getTotalRamadanProgress,
  normalizeState
} from "@/lib/planner-utils";
import {
  AppView,
  ChecklistKey,
  DailyRecord,
  Division,
  GoalItem,
  Locale,
  PlannerState,
  PrayerTimeRow,
  ProfileRow,
  RamadanProgressRow,
  SalahKey,
  SpecialTracking,
  Theme
} from "@/types/planner";

function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "bn" || value === "ar";
}

function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark";
}

function normalizeGoals(raw: GoalItem[] | null | undefined, fallback: GoalItem[]): GoalItem[] {
  if (!Array.isArray(raw)) {
    return fallback;
  }

  const sanitized = raw
    .map((goal, index) => {
      if (!goal || typeof goal.text !== "string" || !goal.text.trim()) {
        return null;
      }

      return {
        id: typeof goal.id === "string" && goal.id ? goal.id : `goal-${index}-${Math.random().toString(36).slice(2, 8)}`,
        text: goal.text.trim(),
        done: Boolean(goal.done)
      };
    })
    .filter(Boolean) as GoalItem[];

  return sanitized.length > 0 ? sanitized : fallback;
}

function normalizeSpecial(raw: SpecialTracking | null | undefined, fallback: SpecialTracking): SpecialTracking {
  if (!raw) {
    return fallback;
  }

  const iitikafNights = Array.isArray(raw.iitikafNights)
    ? raw.iitikafNights.slice(0, fallback.iitikafNights.length).map(Boolean)
    : fallback.iitikafNights;
  const qadrDuaDone = Array.isArray(raw.qadrDuaDone)
    ? raw.qadrDuaDone.slice(0, fallback.qadrDuaDone.length).map(Boolean)
    : fallback.qadrDuaDone;
  const eidSunnah = Array.isArray(raw.eidSunnah)
    ? raw.eidSunnah.slice(0, fallback.eidSunnah.length).map(Boolean)
    : fallback.eidSunnah;

  return {
    iitikafNights: [...iitikafNights, ...fallback.iitikafNights.slice(iitikafNights.length)],
    qadrDuaDone: [...qadrDuaDone, ...fallback.qadrDuaDone.slice(qadrDuaDone.length)],
    eidSunnah: [...eidSunnah, ...fallback.eidSunnah.slice(eidSunnah.length)]
  };
}

function dailyRecordFromRow(day: number, row: RamadanProgressRow): DailyRecord {
  const base = createDailyRecord(day);
  const payload = row.record && typeof row.record === "object" ? row.record : {};
  const allahNames = Array.isArray(payload.allahNames)
    ? [Boolean(payload.allahNames[0]), Boolean(payload.allahNames[1]), Boolean(payload.allahNames[2])]
    : base.allahNames;

  return {
    ...base,
    ...payload,
    day,
    quranPlanDone: Boolean(row.surah_completed),
    hadithPlanDone: Boolean(row.hadith_completed),
    salah: { ...base.salah, ...(payload.salah ?? {}) },
    quran: { ...base.quran, ...(payload.quran ?? {}) },
    checklist: { ...base.checklist, ...(payload.checklist ?? {}) },
    allahNames: allahNames as [boolean, boolean, boolean],
    lastUpdated: row.updated_at ?? payload.lastUpdated ?? new Date().toISOString()
  };
}

function applyProfileToState(baseState: PlannerState, profile: ProfileRow | null): PlannerState {
  if (!profile) {
    return baseState;
  }

  const next = { ...baseState };

  if (isLocale(profile.language)) {
    next.language = profile.language;
  }

  if (isTheme(profile.theme)) {
    next.theme = profile.theme;
  }

  next.beforeRamadanGoals = normalizeGoals(profile.before_goals, baseState.beforeRamadanGoals);
  next.duringRamadanGoals = normalizeGoals(profile.during_goals, baseState.duringRamadanGoals);
  if (profile.review) {
    next.review = { ...baseState.review, ...profile.review };
  }
  next.special = normalizeSpecial(profile.special, baseState.special);
  if (typeof profile.global_reflection === "string") {
    next.globalReflection = profile.global_reflection;
  }

  return next;
}

function buildStateFromRemote(profile: ProfileRow | null, rows: RamadanProgressRow[]): PlannerState {
  const base = applyProfileToState(createInitialState(), profile);
  const dailyRecords: Record<number, DailyRecord> = { ...base.dailyRecords };

  rows.forEach((row) => {
    if (row.ramadan_day >= 1 && row.ramadan_day <= RAMADAN_DAYS) {
      dailyRecords[row.ramadan_day] = dailyRecordFromRow(row.ramadan_day, row);
    }
  });

  const merged = normalizeState({
    ...base,
    dailyRecords
  });
  const timing = getRamadanTimingInfo(merged.ramadanStartDate);
  return {
    ...merged,
    selectedDay: timing.phase === "active" ? timing.currentDay : merged.selectedDay
  };
}

export function usePlannerStore() {
  const supabase = useMemo(() => getSupabaseBrowserClient(), []);
  const [state, setState] = useState<PlannerState>(createInitialState);
  const [hydrated, setHydrated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<ProfileRow | null>(null);
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimeRow | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [clock, setClock] = useState(() => Date.now());

  const user = session?.user ?? null;
  const userId = user?.id ?? null;

  const ramadanTiming = useMemo(() => getRamadanTimingInfo(state.ramadanStartDate, new Date(clock)), [clock, state.ramadanStartDate]);

  const prayerLookupDay = ramadanTiming.phase === "active" ? ramadanTiming.currentDay : state.selectedDay;
  const prayerLookupDate = useMemo(
    () => getGregorianDateForRamadanDay(state.ramadanStartDate, prayerLookupDay),
    [prayerLookupDay, state.ramadanStartDate]
  );

  useEffect(() => {
    const timer = window.setInterval(() => setClock(Date.now()), 60 * 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = state.theme;
    document.documentElement.lang = state.language;
    document.documentElement.dir = state.language === "ar" ? "rtl" : "ltr";
  }, [state.language, state.theme]);

  useEffect(() => {
    if (!supabase) {
      setAuthLoading(false);
      setHydrated(true);
      return;
    }

    let mounted = true;

    void supabase.auth.getSession().then(({ data, error: sessionError }) => {
      if (!mounted) {
        return;
      }
      if (sessionError) {
        setError(sessionError.message);
      }
      setSession(data.session);
      setAuthLoading(false);
      if (!data.session) {
        setHydrated(true);
      }
    });

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      if (!mounted) {
        return;
      }
      setSession(nextSession);
      setAuthLoading(false);
      if (!nextSession) {
        setProfile(null);
        setPrayerTimes(null);
        setState(createInitialState());
        setHydrated(true);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [supabase]);

  useEffect(() => {
    if (!supabase || !userId) {
      return;
    }

    let active = true;
    setHydrated(false);
    setError(null);

    const bootstrap = async () => {
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .upsert({ id: userId }, { onConflict: "id" })
        .select("*")
        .single();

      if (!active) {
        return;
      }

      if (profileError) {
        setError(profileError.message);
        setProfile(null);
        setHydrated(true);
        return;
      }

      const { data: progressRows, error: progressError } = await supabase
        .from("ramadan_progress")
        .select("*")
        .eq("user_id", userId);

      if (!active) {
        return;
      }

      if (progressError) {
        setError(progressError.message);
      }

      const typedProfile = profileData as ProfileRow;
      const typedRows = ((progressRows ?? []) as RamadanProgressRow[]).sort((a, b) => a.ramadan_day - b.ramadan_day);
      setProfile(typedProfile);
      setState(buildStateFromRemote(typedProfile, typedRows));
      setHydrated(true);
    };

    void bootstrap();

    return () => {
      active = false;
    };
  }, [supabase, userId]);

  useEffect(() => {
    if (!supabase || !userId) {
      return;
    }

    const progressChannel = supabase
      .channel(`ramadan-progress-${userId}`)
      .on("postgres_changes", { event: "*", schema: "public", table: "ramadan_progress", filter: `user_id=eq.${userId}` }, (payload) => {
        if (payload.eventType === "DELETE") {
          const oldRow = payload.old as RamadanProgressRow;
          if (!oldRow?.ramadan_day) {
            return;
          }
          setState((prev) => ({
            ...prev,
            dailyRecords: {
              ...prev.dailyRecords,
              [oldRow.ramadan_day]: createDailyRecord(oldRow.ramadan_day)
            }
          }));
          return;
        }

        const nextRow = payload.new as RamadanProgressRow;
        if (!nextRow?.ramadan_day) {
          return;
        }

        const nextRecord = dailyRecordFromRow(nextRow.ramadan_day, nextRow);
        setState((prev) => ({
          ...prev,
          dailyRecords: {
            ...prev.dailyRecords,
            [nextRow.ramadan_day]: nextRecord
          }
        }));
      })
      .subscribe();

    const profileChannel = supabase
      .channel(`profile-${userId}`)
      .on("postgres_changes", { event: "UPDATE", schema: "public", table: "profiles", filter: `id=eq.${userId}` }, (payload) => {
        const nextProfile = payload.new as ProfileRow;
        setProfile(nextProfile);
        setState((prev) => applyProfileToState(prev, nextProfile));
      })
      .subscribe();

    return () => {
      void supabase.removeChannel(progressChannel);
      void supabase.removeChannel(profileChannel);
    };
  }, [supabase, userId]);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    setState((prev) => {
      if (prev.lastOpenedDate === ramadanTiming.todayIso) {
        return prev;
      }

      return {
        ...prev,
        selectedDay: ramadanTiming.phase === "active" ? ramadanTiming.currentDay : prev.selectedDay,
        lastOpenedDate: ramadanTiming.todayIso
      };
    });
  }, [hydrated, ramadanTiming.currentDay, ramadanTiming.phase, ramadanTiming.todayIso]);

  useEffect(() => {
    if (!supabase || !profile?.division) {
      setPrayerTimes(null);
      return;
    }
    const division = profile.division;

    let active = true;

    const loadPrayerTime = async () => {
      const fallback = getPrayerTimeFallback(division, prayerLookupDay);
      const { data, error: prayerError } = await supabase
        .from("prayer_times")
        .select("*")
        .eq("division", division)
        .eq("gregorian_date", prayerLookupDate)
        .maybeSingle();

      if (!active) {
        return;
      }

      if (prayerError) {
        if (fallback) {
          setPrayerTimes(fallback);
          setError(null);
        } else {
          setPrayerTimes(null);
          setError(prayerError.message);
        }
        return;
      }

      setError(null);
      setPrayerTimes((data as PrayerTimeRow | null) ?? fallback ?? null);
    };

    void loadPrayerTime();

    return () => {
      active = false;
    };
  }, [supabase, profile?.division, prayerLookupDate, prayerLookupDay]);

  const persistProfilePatch = useCallback(
    async (patch: Record<string, unknown>) => {
      if (!supabase || !user) {
        return;
      }

      const { data, error: patchError } = await supabase.from("profiles").update(patch).eq("id", user.id).select("*").single();
      if (patchError) {
        setError(patchError.message);
        return;
      }
      setProfile(data as ProfileRow);
    },
    [supabase, user]
  );

  const persistDayRecord = useCallback(
    async (day: number, record: DailyRecord) => {
      if (!supabase || !user) {
        return;
      }

      const payload = {
        user_id: user.id,
        ramadan_day: day,
        surah_completed: record.quranPlanDone,
        hadith_completed: record.hadithPlanDone,
        record,
        updated_at: new Date().toISOString()
      };

      const { error: dayError } = await supabase.from("ramadan_progress").upsert(payload, {
        onConflict: "user_id,ramadan_day"
      });

      if (dayError) {
        setError(dayError.message);
      }
    },
    [supabase, user]
  );

  const selectedRecord = state.dailyRecords[state.selectedDay] ?? createDailyRecord(state.selectedDay);
  const todayDay = ramadanTiming.currentDay;
  const isWithinRamadan = ramadanTiming.phase === "active";
  const todayProgress = getDayProgress(state.dailyRecords[isWithinRamadan ? todayDay : state.selectedDay]);
  const totalProgress = getTotalRamadanProgress(state);
  const streak = getCurrentStreak(state);
  const quranPlanProgress = useMemo(() => {
    const done = Array.from({ length: RAMADAN_DAYS }, (_, index) => Number(state.dailyRecords[index + 1].quranPlanDone)).reduce(
      (acc, value) => acc + value,
      0
    );
    return Math.round((done / RAMADAN_DAYS) * 100);
  }, [state.dailyRecords]);
  const hadithPlanProgress = useMemo(() => {
    const done = Array.from({ length: RAMADAN_DAYS }, (_, index) => Number(state.dailyRecords[index + 1].hadithPlanDone)).reduce(
      (acc, value) => acc + value,
      0
    );
    return Math.round((done / RAMADAN_DAYS) * 100);
  }, [state.dailyRecords]);

  const updateDailyRecord = useCallback(
    (day: number, updater: (record: DailyRecord) => DailyRecord) => {
      setState((prev) => {
        const current = prev.dailyRecords[day] ?? createDailyRecord(day);
        const nextRecord = {
          ...updater(current),
          day,
          lastUpdated: new Date().toISOString()
        };

        void persistDayRecord(day, nextRecord);
        return {
          ...prev,
          dailyRecords: {
            ...prev.dailyRecords,
            [day]: nextRecord
          }
        };
      });
    },
    [persistDayRecord]
  );

  function setTheme(theme: Theme) {
    setState((prev) => ({ ...prev, theme }));
    void persistProfilePatch({ theme });
  }

  function setLanguage(language: Locale) {
    setState((prev) => ({ ...prev, language }));
    void persistProfilePatch({ language });
  }

  function setView(view: AppView) {
    setState((prev) => ({ ...prev, view }));
  }

  function setSelectedDay(day: number) {
    setState((prev) => ({ ...prev, selectedDay: Math.min(RAMADAN_DAYS, Math.max(1, day)), view: "daily" }));
  }

  function jumpToToday() {
    setState((prev) => ({
      ...prev,
      selectedDay: ramadanTiming.phase === "active" ? ramadanTiming.currentDay : prev.selectedDay,
      view: "daily"
    }));
  }

  function setRamadanStartDate(value: string) {
    setState((prev) => ({ ...prev, ramadanStartDate: value }));
  }

  function toggleSalah(day: number, key: SalahKey, column: "farz" | "sunnah") {
    updateDailyRecord(day, (record) => ({
      ...record,
      salah: {
        ...record.salah,
        [key]: {
          ...record.salah[key],
          [column]: !record.salah[key][column]
        }
      }
    }));
  }

  function toggleChecklist(day: number, key: ChecklistKey) {
    updateDailyRecord(day, (record) => ({
      ...record,
      checklist: {
        ...record.checklist,
        [key]: !record.checklist[key]
      }
    }));
  }

  function setQuranField(day: number, key: keyof DailyRecord["quran"], value: string) {
    updateDailyRecord(day, (record) => ({
      ...record,
      quran: {
        ...record.quran,
        [key]: value
      }
    }));
  }

  function toggleAllahName(day: number, index: 0 | 1 | 2) {
    updateDailyRecord(day, (record) => {
      const next = [...record.allahNames] as [boolean, boolean, boolean];
      next[index] = !next[index];
      return {
        ...record,
        allahNames: next
      };
    });
  }

  function setDayTaskDone(day: number, value: boolean) {
    updateDailyRecord(day, (record) => ({
      ...record,
      dayTaskDone: value
    }));
  }

  function toggleQuranPlanDone(day: number) {
    updateDailyRecord(day, (record) => ({
      ...record,
      quranPlanDone: !record.quranPlanDone
    }));
  }

  function toggleHadithPlanDone(day: number) {
    updateDailyRecord(day, (record) => ({
      ...record,
      hadithPlanDone: !record.hadithPlanDone
    }));
  }

  function setDailyText(day: number, field: "duaNote" | "reflection" | "extraNote", value: string) {
    updateDailyRecord(day, (record) => ({
      ...record,
      [field]: value
    }));
  }

  function toggleGoal(which: "beforeRamadanGoals" | "duringRamadanGoals", id: string) {
    setState((prev) => {
      const nextGoals = prev[which].map((goal) => (goal.id === id ? { ...goal, done: !goal.done } : goal));
      const patchKey = which === "beforeRamadanGoals" ? "before_goals" : "during_goals";
      void persistProfilePatch({ [patchKey]: nextGoals });
      return {
        ...prev,
        [which]: nextGoals
      };
    });
  }

  function addGoal(which: "beforeRamadanGoals" | "duringRamadanGoals", text: string) {
    if (!text.trim()) {
      return;
    }
    const seed = which === "beforeRamadanGoals" ? "before" : "during";
    const newGoal: GoalItem = {
      id: `${seed}-${Date.now().toString(36)}`,
      text: text.trim(),
      done: false
    };

    setState((prev) => {
      const nextGoals = [newGoal, ...prev[which]];
      const patchKey = which === "beforeRamadanGoals" ? "before_goals" : "during_goals";
      void persistProfilePatch({ [patchKey]: nextGoals });
      return {
        ...prev,
        [which]: nextGoals
      };
    });
  }

  function updateReview(field: "gains" | "shortcomings" | "nextYearPlan", value: string) {
    setState((prev) => {
      const nextReview = {
        ...prev.review,
        [field]: value
      };
      void persistProfilePatch({ review: nextReview });
      return {
        ...prev,
        review: nextReview
      };
    });
  }

  function setGlobalReflection(value: string) {
    setState((prev) => ({
      ...prev,
      globalReflection: value
    }));
    void persistProfilePatch({ global_reflection: value });
  }

  function toggleItikaf(index: number) {
    setState((prev) => {
      const next = [...prev.special.iitikafNights];
      next[index] = !next[index];
      const nextSpecial = {
        ...prev.special,
        iitikafNights: next
      };
      void persistProfilePatch({ special: nextSpecial });
      return {
        ...prev,
        special: nextSpecial
      };
    });
  }

  function toggleQadrDua(index: number) {
    setState((prev) => {
      const next = [...prev.special.qadrDuaDone];
      next[index] = !next[index];
      const nextSpecial = {
        ...prev.special,
        qadrDuaDone: next
      };
      void persistProfilePatch({ special: nextSpecial });
      return {
        ...prev,
        special: nextSpecial
      };
    });
  }

  function toggleEidSunnah(index: number) {
    setState((prev) => {
      const next = [...prev.special.eidSunnah];
      next[index] = !next[index];
      const nextSpecial = {
        ...prev.special,
        eidSunnah: next
      };
      void persistProfilePatch({ special: nextSpecial });
      return {
        ...prev,
        special: nextSpecial
      };
    });
  }

  function resetCurrentDay() {
    updateDailyRecord(state.selectedDay, () => {
      const fresh = createDailyRecord(state.selectedDay);
      fresh.reflection = state.dailyRecords[state.selectedDay].reflection;
      return fresh;
    });
  }

  async function signInWithGoogle() {
    if (!supabase) {
      return;
    }

    const redirectTo = typeof window !== "undefined" ? `${window.location.origin}/` : undefined;
    const { error: loginError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo,
        queryParams: {
          prompt: "select_account"
        }
      }
    });

    if (loginError) {
      setError(loginError.message);
    }
  }

  async function logout() {
    if (!supabase) {
      return;
    }

    const { error: logoutError } = await supabase.auth.signOut();
    if (logoutError) {
      setError(logoutError.message);
      return;
    }

    setSession(null);
    setProfile(null);
    setPrayerTimes(null);
    setState(createInitialState());
    setHydrated(true);
  }

  async function setDivision(division: Division): Promise<boolean> {
    if (!supabase || !user) {
      return false;
    }

    const { data, error: divisionError } = await supabase.from("profiles").update({ division }).eq("id", user.id).select("*").single();
    if (divisionError) {
      setError(divisionError.message);
      return false;
    }

    setProfile(data as ProfileRow);
    return true;
  }

  const allDayProgress = useMemo(
    () => Array.from({ length: RAMADAN_DAYS }, (_, index) => getDayProgress(state.dailyRecords[index + 1])),
    [state.dailyRecords]
  );

  const checklistCompletion = useMemo(() => {
    const day = state.dailyRecords[state.selectedDay];
    const done = CHECKLIST_ITEMS.reduce((acc, key) => acc + Number(day.checklist[key]), 0);
    return Math.round((done / CHECKLIST_ITEMS.length) * 100);
  }, [state.dailyRecords, state.selectedDay]);

  return {
    hydrated,
    authLoading,
    supabaseConfigured: isSupabaseConfigured,
    user,
    profile,
    prayerTimes,
    ramadanTiming,
    error,
    state,
    selectedRecord,
    todayDay,
    isWithinRamadan,
    todayProgress,
    totalProgress,
    streak,
    quranPlanProgress,
    hadithPlanProgress,
    allDayProgress,
    checklistCompletion,
    actions: {
      signInWithGoogle,
      logout,
      setDivision,
      setTheme,
      setLanguage,
      setView,
      setSelectedDay,
      jumpToToday,
      setRamadanStartDate,
      toggleSalah,
      toggleChecklist,
      setQuranField,
      toggleAllahName,
      setDayTaskDone,
      toggleQuranPlanDone,
      toggleHadithPlanDone,
      setDailyText,
      toggleGoal,
      addGoal,
      updateReview,
      setGlobalReflection,
      toggleItikaf,
      toggleQadrDua,
      toggleEidSunnah,
      resetCurrentDay
    }
  };
}
