import {
  CHECKLIST_ITEMS,
  DEFAULT_BEFORE_GOALS,
  DEFAULT_DURING_GOALS,
  IFTIKAF_CHECK_DAYS,
  RAMADAN_DAYS,
  SALAH_ROWS
} from "@/data/planner-content";
import dayjs from "@/lib/dayjs";
import {
  ChecklistKey,
  DailyRecord,
  GoalItem,
  PlannerState,
  RamadanTimingInfo,
  SalahKey,
  SpecialTracking
} from "@/types/planner";

export const RAMADAN_TIMEZONE = "Asia/Dhaka";
export const RAMADAN_2026_YEAR = 2026;
export const RAMADAN_2026_START_DATE = "2026-02-19";

function createPrayerState(): Record<SalahKey, { farz: boolean; sunnah: boolean }> {
  return {
    fajr: { farz: false, sunnah: false },
    dhuhr: { farz: false, sunnah: false },
    asr: { farz: false, sunnah: false },
    maghrib: { farz: false, sunnah: false },
    isha: { farz: false, sunnah: false },
    taraweeh: { farz: false, sunnah: false },
    tahajjud: { farz: false, sunnah: false },
    duha: { farz: false, sunnah: false },
    tahiyyatulWudu: { farz: false, sunnah: false }
  };
}

function createChecklistState(): Record<ChecklistKey, boolean> {
  return CHECKLIST_ITEMS.reduce(
    (acc, key) => ({
      ...acc,
      [key]: false
    }),
    {} as Record<ChecklistKey, boolean>
  );
}

export function makeGoalItem(text: string, idSeed: string): GoalItem {
  return {
    id: `${idSeed}-${Math.random().toString(36).slice(2, 8)}`,
    text,
    done: false
  };
}

export function createDailyRecord(day: number): DailyRecord {
  return {
    day,
    dayTaskDone: false,
    quranPlanDone: false,
    hadithPlanDone: false,
    salah: createPrayerState(),
    quran: {
      ayat: "",
      pages: "",
      para: ""
    },
    checklist: createChecklistState(),
    allahNames: [false, false, false],
    duaNote: "",
    reflection: "",
    extraNote: "",
    lastUpdated: new Date().toISOString()
  };
}

export function getIsoDateInTimeZone(timeZone: string, date = new Date()): string {
  return dayjs(date).tz(timeZone).format("YYYY-MM-DD");
}

export function getTodayIsoDate(timeZone = RAMADAN_TIMEZONE): string {
  return getIsoDateInTimeZone(timeZone, new Date());
}

function parseIsoDateInTimezone(isoDate: string, timeZone = RAMADAN_TIMEZONE) {
  return dayjs.tz(`${isoDate}T00:00:00`, timeZone).startOf("day");
}

function getRamadanDayRaw(startDate: string, date = new Date(), timeZone = RAMADAN_TIMEZONE): number {
  const today = dayjs(date).tz(timeZone).startOf("day");
  const start = parseIsoDateInTimezone(startDate, timeZone);
  return today.diff(start, "day") + 1;
}

export function getRamadanDayFromDate(startDate: string, date = new Date(), timeZone = RAMADAN_TIMEZONE): number {
  const dayRaw = getRamadanDayRaw(startDate, date, timeZone);
  return Math.min(RAMADAN_DAYS, Math.max(1, dayRaw));
}

export function isDateWithinRamadan(startDate: string, date = new Date(), timeZone = RAMADAN_TIMEZONE): boolean {
  const dayRaw = getRamadanDayRaw(startDate, date, timeZone);
  return dayRaw >= 1 && dayRaw <= RAMADAN_DAYS;
}

export function getRamadanTimingInfo(startDate: string, date = new Date(), timeZone = RAMADAN_TIMEZONE): RamadanTimingInfo {
  const today = dayjs(date).tz(timeZone).startOf("day");
  const start = parseIsoDateInTimezone(startDate, timeZone);
  const end = start.add(RAMADAN_DAYS - 1, "day");

  if (today.isBefore(start)) {
    return {
      phase: "before",
      currentDay: 1,
      daysUntilStart: start.diff(today, "day"),
      todayIso: today.format("YYYY-MM-DD")
    };
  }

  if (today.isAfter(end)) {
    return {
      phase: "after",
      currentDay: RAMADAN_DAYS,
      daysUntilStart: 0,
      todayIso: today.format("YYYY-MM-DD")
    };
  }

  return {
    phase: "active",
    currentDay: today.diff(start, "day") + 1,
    daysUntilStart: 0,
    todayIso: today.format("YYYY-MM-DD")
  };
}

export function getGregorianDateForRamadanDay(startDate: string, ramadanDay: number, timeZone = RAMADAN_TIMEZONE): string {
  const safeDay = Math.min(RAMADAN_DAYS, Math.max(1, ramadanDay));
  return parseIsoDateInTimezone(startDate, timeZone)
    .add(safeDay - 1, "day")
    .format("YYYY-MM-DD");
}

function buildSpecialTracking(): SpecialTracking {
  return {
    iitikafNights: Array.from({ length: IFTIKAF_CHECK_DAYS.length }, () => false),
    qadrDuaDone: Array.from({ length: IFTIKAF_CHECK_DAYS.length }, () => false),
    eidSunnah: Array.from({ length: 6 }, () => false)
  };
}

export function createInitialState(): PlannerState {
  const ramadanStartDate = RAMADAN_2026_START_DATE;
  const timing = getRamadanTimingInfo(ramadanStartDate);
  const selectedDay = timing.phase === "active" ? timing.currentDay : 1;
  const dailyRecords: Record<number, DailyRecord> = {};

  for (let day = 1; day <= RAMADAN_DAYS; day += 1) {
    dailyRecords[day] = createDailyRecord(day);
  }

  return {
    version: 2,
    language: "bn",
    theme: "light",
    ramadanStartDate,
    selectedDay,
    view: "dashboard",
    beforeRamadanGoals: DEFAULT_BEFORE_GOALS.map((goal) => makeGoalItem(goal, "before")),
    duringRamadanGoals: DEFAULT_DURING_GOALS.map((goal) => makeGoalItem(goal, "during")),
    dailyRecords,
    review: {
      gains: "",
      shortcomings: "",
      nextYearPlan: ""
    },
    special: buildSpecialTracking(),
    globalReflection: "",
    lastOpenedDate: getTodayIsoDate()
  };
}

export function normalizeState(raw: PlannerState): PlannerState {
  const fallback = createInitialState();
  const merged: PlannerState = {
    ...fallback,
    ...raw,
    dailyRecords: { ...fallback.dailyRecords, ...raw.dailyRecords },
    special: { ...fallback.special, ...raw.special },
    review: { ...fallback.review, ...raw.review }
  };

  for (let day = 1; day <= RAMADAN_DAYS; day += 1) {
    if (!merged.dailyRecords[day]) {
      merged.dailyRecords[day] = createDailyRecord(day);
    } else {
      merged.dailyRecords[day] = {
        ...createDailyRecord(day),
        ...merged.dailyRecords[day],
        salah: { ...createPrayerState(), ...merged.dailyRecords[day].salah },
        checklist: { ...createChecklistState(), ...merged.dailyRecords[day].checklist }
      };
    }
  }

  return merged;
}

function countCompletedPrayerBoxes(record: DailyRecord): { total: number; done: number } {
  let total = 0;
  let done = 0;

  SALAH_ROWS.forEach(({ key, hasFarz }) => {
    if (hasFarz) {
      total += 1;
      if (record.salah[key].farz) {
        done += 1;
      }
    }
    total += 1;
    if (record.salah[key].sunnah) {
      done += 1;
    }
  });

  return { total, done };
}

export function getDayProgress(record: DailyRecord): number {
  const prayer = countCompletedPrayerBoxes(record);
  const checklistDone = CHECKLIST_ITEMS.reduce((acc, item) => acc + Number(record.checklist[item]), 0);
  const allahNamesDone = record.allahNames.reduce((acc, value) => acc + Number(value), 0);
  const quranDone = ["ayat", "pages", "para"].reduce((acc, key) => {
    const value = record.quran[key as keyof DailyRecord["quran"]].trim();
    return acc + Number(value.length > 0);
  }, 0);
  const dayTaskDone = Number(record.dayTaskDone);
  const quranPlanDone = Number(record.quranPlanDone);
  const hadithPlanDone = Number(record.hadithPlanDone);
  const reflectionDone = Number(record.reflection.trim().length > 0);

  const completed = prayer.done + checklistDone + allahNamesDone + quranDone + dayTaskDone + quranPlanDone + hadithPlanDone + reflectionDone;
  const total = prayer.total + CHECKLIST_ITEMS.length + 3 + 3 + 1 + 1 + 1 + 1;
  return Math.round((completed / total) * 100);
}

export function getTotalRamadanProgress(state: PlannerState): number {
  const total = Array.from({ length: RAMADAN_DAYS }, (_, index) => getDayProgress(state.dailyRecords[index + 1])).reduce(
    (acc, value) => acc + value,
    0
  );
  return Math.round(total / RAMADAN_DAYS);
}

export function getCurrentStreak(state: PlannerState): number {
  const timing = getRamadanTimingInfo(state.ramadanStartDate);
  const endDay = timing.phase === "active" ? timing.currentDay : state.selectedDay;
  let streak = 0;
  for (let day = endDay; day >= 1; day -= 1) {
    const progress = getDayProgress(state.dailyRecords[day]);
    if (progress >= 50) {
      streak += 1;
    } else {
      break;
    }
  }
  return streak;
}

export function getCompletedDaysCount(state: PlannerState): number {
  return Array.from({ length: RAMADAN_DAYS }, (_, index) => getDayProgress(state.dailyRecords[index + 1])).filter(
    (value) => value === 100
  ).length;
}
