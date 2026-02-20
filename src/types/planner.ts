export type Locale = "en" | "bn" | "ar";
export type Theme = "light" | "dark";
export type Division =
  | "Dhaka"
  | "Chattogram"
  | "Rajshahi"
  | "Khulna"
  | "Barishal"
  | "Sylhet"
  | "Rangpur"
  | "Mymensingh";
export type RamadanPhase = "before" | "active" | "after";

export type AppView =
  | "dashboard"
  | "daily"
  | "calendar"
  | "goals"
  | "reflections"
  | "review"
  | "special"
  | "resources";

export type SalahKey =
  | "fajr"
  | "dhuhr"
  | "asr"
  | "maghrib"
  | "isha"
  | "taraweeh"
  | "tahajjud"
  | "duha"
  | "tahiyyatulWudu";

export type ChecklistKey =
  | "morningDhikr"
  | "eveningDhikr"
  | "charity"
  | "dailyWork"
  | "jamaahPrayer"
  | "istighfar70"
  | "quranRecitation"
  | "allahNameMemorize"
  | "duaMemorize"
  | "miswak"
  | "callRelative"
  | "learnSomethingNew";

export interface PrayerRecord {
  farz: boolean;
  sunnah: boolean;
}

export interface QuranRecord {
  ayat: string;
  pages: string;
  para: string;
}

export interface DailyRecord {
  day: number;
  dayTaskDone: boolean;
  quranPlanDone: boolean;
  hadithPlanDone: boolean;
  salah: Record<SalahKey, PrayerRecord>;
  quran: QuranRecord;
  checklist: Record<ChecklistKey, boolean>;
  allahNames: [boolean, boolean, boolean];
  duaNote: string;
  reflection: string;
  extraNote: string;
  lastUpdated: string;
}

export interface GoalItem {
  id: string;
  text: string;
  done: boolean;
}

export interface RamadanReview {
  gains: string;
  shortcomings: string;
  nextYearPlan: string;
}

export interface SpecialTracking {
  iitikafNights: boolean[];
  qadrDuaDone: boolean[];
  eidSunnah: boolean[];
}

export interface PlannerState {
  version: number;
  language: Locale;
  theme: Theme;
  ramadanStartDate: string;
  selectedDay: number;
  view: AppView;
  beforeRamadanGoals: GoalItem[];
  duringRamadanGoals: GoalItem[];
  dailyRecords: Record<number, DailyRecord>;
  review: RamadanReview;
  special: SpecialTracking;
  globalReflection: string;
  lastOpenedDate: string;
}

export interface RamadanTimingInfo {
  phase: RamadanPhase;
  currentDay: number;
  daysUntilStart: number;
  todayIso: string;
}

export interface ProfileRow {
  id: string;
  division: Division | null;
  language: Locale | null;
  theme: Theme | null;
  before_goals: GoalItem[] | null;
  during_goals: GoalItem[] | null;
  review: RamadanReview | null;
  special: SpecialTracking | null;
  global_reflection: string | null;
  created_at: string;
  updated_at: string;
}

export interface RamadanProgressRow {
  id: number;
  user_id: string;
  ramadan_day: number;
  surah_completed: boolean;
  hadith_completed: boolean;
  record: Partial<DailyRecord> | null;
  created_at: string;
  updated_at: string;
}

export interface PrayerTimeRow {
  id: number;
  division: Division;
  ramadan_day: number;
  gregorian_date: string;
  sehri_end: string;
  iftar: string;
  tahajjud_recommended: string;
  created_at: string;
  updated_at: string;
}
