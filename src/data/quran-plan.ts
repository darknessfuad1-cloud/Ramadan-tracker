import quranPlanJson from "@/data/quran-plan.json";

export interface QuranPlanItem {
  day: number;
  surahNumber: number;
  surahNameArabic: string;
  surahNameTransliteration: string;
  verseCount: number;
  arabic: string;
  transliteration: string;
  banglaMeaning: string;
  englishMeaning: string;
}

export const QURAN_PLAN = quranPlanJson as QuranPlanItem[];

export function getQuranPlanByDay(day: number): QuranPlanItem {
  const found = QURAN_PLAN.find((item) => item.day === day);
  if (!found) {
    return QURAN_PLAN[0];
  }
  return found;
}
