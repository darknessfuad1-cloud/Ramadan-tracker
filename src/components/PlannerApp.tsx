"use client";

import { useMemo, useState } from "react";
import { TopBar } from "@/components/TopBar";
import { ViewNav } from "@/components/ui/ViewNav";
import { CalendarView } from "@/components/views/CalendarView";
import { DailyPlannerView } from "@/components/views/DailyPlannerView";
import { DashboardView } from "@/components/views/DashboardView";
import { GoalsView } from "@/components/views/GoalsView";
import { ReflectionsView } from "@/components/views/ReflectionsView";
import { ResourcesView } from "@/components/views/ResourcesView";
import { ReviewView } from "@/components/views/ReviewView";
import { SpecialView } from "@/components/views/SpecialView";
import { t } from "@/i18n/copy";
import { rt } from "@/i18n/runtime-text";
import { usePlannerStore } from "@/hooks/usePlannerStore";
import { Division } from "@/types/planner";

const DIVISIONS: Division[] = ["Dhaka", "Chattogram", "Rajshahi", "Khulna", "Barishal", "Sylhet", "Rangpur", "Mymensingh"];

function AuthScreen({
  locale,
  isSubmitting,
  onSignIn
}: {
  locale: "en" | "bn" | "ar";
  isSubmitting: boolean;
  onSignIn: () => Promise<void>;
}) {
  return (
    <main className="auth-shell">
      <section className="auth-card">
        <h1>{rt(locale, "authTitle")}</h1>
        <p>{rt(locale, "authSubtitle")}</p>
        <button type="button" className="outline-btn auth-btn" onClick={() => void onSignIn()} disabled={isSubmitting}>
          {isSubmitting ? rt(locale, "signingIn") : rt(locale, "continueWithGoogle")}
        </button>
      </section>
    </main>
  );
}

function DivisionScreen({
  locale,
  onSubmit
}: {
  locale: "en" | "bn" | "ar";
  onSubmit: (division: Division) => Promise<void>;
}) {
  const [division, setDivision] = useState<Division>("Dhaka");
  const [saving, setSaving] = useState(false);

  async function handleSave() {
    setSaving(true);
    await onSubmit(division);
    setSaving(false);
  }

  return (
    <main className="auth-shell">
      <section className="auth-card">
        <h1>{rt(locale, "divisionSetupTitle")}</h1>
        <p>{rt(locale, "divisionSetupSubtitle")}</p>

        <div className="top-field">
          <label htmlFor="division-select">{rt(locale, "division")}</label>
          <select id="division-select" value={division} onChange={(event) => setDivision(event.target.value as Division)}>
            {DIVISIONS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <button type="button" className="outline-btn auth-btn" onClick={handleSave} disabled={saving}>
          {saving ? rt(locale, "saving") : rt(locale, "saveDivision")}
        </button>
      </section>
    </main>
  );
}

export function PlannerApp() {
  const {
    hydrated,
    authLoading,
    supabaseConfigured,
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
    actions
  } = usePlannerStore();
  const [isSigningIn, setIsSigningIn] = useState(false);
  const locale = state.language;

  const jumpHint = useMemo(() => {
    if (ramadanTiming.phase === "before") {
      return rt(locale, "ramadanCountdown", { days: ramadanTiming.daysUntilStart });
    }
    if (ramadanTiming.phase === "after") {
      return rt(locale, "ramadanEnded");
    }
    return t(locale, "autoDayMode");
  }, [locale, ramadanTiming.daysUntilStart, ramadanTiming.phase]);

  async function handleGoogleSignIn() {
    setIsSigningIn(true);
    await actions.signInWithGoogle();
    setIsSigningIn(false);
  }

  async function handleDivisionSave(division: Division) {
    await actions.setDivision(division);
  }

  if (!supabaseConfigured) {
    return (
      <main className="loading-shell">
        <h2>{rt("en", "missingConfigTitle")}</h2>
        <p>{rt("en", "missingConfigHint")}</p>
      </main>
    );
  }

  if (authLoading) {
    return <main className="loading-shell">{t(locale, "loading")}</main>;
  }

  if (!user) {
    return <AuthScreen locale={locale} isSubmitting={isSigningIn} onSignIn={handleGoogleSignIn} />;
  }

  if (!hydrated) {
    return <main className="loading-shell">{t(locale, "loading")}</main>;
  }

  if (!profile) {
    return (
      <main className="auth-shell">
        <section className="auth-card">
          <h1>{rt(locale, "syncErrorTitle")}</h1>
          <p>{error ?? rt(locale, "syncErrorHint")}</p>
          <button type="button" className="outline-btn auth-btn" onClick={() => void actions.logout()}>
            {rt(locale, "logout")}
          </button>
        </section>
      </main>
    );
  }

  if (!profile.division) {
    return <DivisionScreen locale={locale} onSubmit={handleDivisionSave} />;
  }

  const userDivision = profile.division;

  function renderView() {
    switch (state.view) {
      case "dashboard":
        return (
          <DashboardView
            locale={locale}
            todayProgress={todayProgress}
            totalProgress={totalProgress}
            streak={streak}
            quranPlanProgress={quranPlanProgress}
            hadithPlanProgress={hadithPlanProgress}
            allDayProgress={allDayProgress}
            selectedDay={state.selectedDay}
            division={userDivision}
            ramadanTiming={ramadanTiming}
            prayerTimes={prayerTimes}
          />
        );
      case "daily":
        return (
          <DailyPlannerView
            locale={locale}
            day={state.selectedDay}
            isWithinRamadan={isWithinRamadan}
            record={selectedRecord}
            onSelectDay={actions.setSelectedDay}
            onToggleSalah={actions.toggleSalah}
            onToggleChecklist={actions.toggleChecklist}
            onSetQuranField={actions.setQuranField}
            onToggleAllahName={actions.toggleAllahName}
            onSetDayTaskDone={actions.setDayTaskDone}
            onToggleQuranPlanDone={actions.toggleQuranPlanDone}
            onToggleHadithPlanDone={actions.toggleHadithPlanDone}
            onSetText={actions.setDailyText}
            onResetDay={actions.resetCurrentDay}
          />
        );
      case "calendar":
        return (
          <CalendarView
            locale={locale}
            selectedDay={state.selectedDay}
            todayDay={isWithinRamadan ? todayDay : 0}
            progress={allDayProgress}
            onSelectDay={actions.setSelectedDay}
          />
        );
      case "goals":
        return (
          <GoalsView
            locale={locale}
            beforeGoals={state.beforeRamadanGoals}
            duringGoals={state.duringRamadanGoals}
            onToggleGoal={actions.toggleGoal}
            onAddGoal={actions.addGoal}
          />
        );
      case "reflections":
        return (
          <ReflectionsView
            locale={locale}
            records={state.dailyRecords}
            globalReflection={state.globalReflection}
            onGlobalReflection={actions.setGlobalReflection}
          />
        );
      case "review":
        return <ReviewView locale={locale} review={state.review} onUpdateReview={actions.updateReview} />;
      case "special":
        return (
          <SpecialView
            locale={locale}
            itikafNights={state.special.iitikafNights}
            qadrDuaDone={state.special.qadrDuaDone}
            eidSunnah={state.special.eidSunnah}
            onToggleItikaf={actions.toggleItikaf}
            onToggleQadrDua={actions.toggleQadrDua}
            onToggleEidSunnah={actions.toggleEidSunnah}
          />
        );
      case "resources":
        return <ResourcesView locale={locale} />;
      default:
        return null;
    }
  }

  return (
    <main className="app-shell">
      <div className="bg-layer" />
      <section className="hero-card">
        <p className="hero-kicker">{rt(locale, "bangladeshTimezone")}</p>
        <h1>{t(locale, "appTitle")}</h1>
        <p>{t(locale, "appSubtitle")}</p>
        <p className="hero-greeting">{t(locale, "greeting")}</p>
      </section>

      <TopBar
        locale={locale}
        theme={state.theme}
        division={userDivision}
        userEmail={user.email ?? user.id}
        onThemeChange={actions.setTheme}
        onLocaleChange={actions.setLanguage}
        onLogout={() => void actions.logout()}
      />

      <section className="jump-row">
        <button type="button" className="outline-btn" onClick={actions.jumpToToday} disabled={!isWithinRamadan}>
          {t(locale, "setToday")} ({t(locale, "day")} {todayDay})
        </button>
        <p>{jumpHint}</p>
      </section>

      {error ? (
        <section className="error-banner" role="alert">
          {error}
        </section>
      ) : null}

      <ViewNav locale={locale} activeView={state.view} onChange={actions.setView} />

      <section className="content-wrap">{renderView()}</section>
    </main>
  );
}
