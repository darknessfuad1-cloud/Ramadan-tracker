import dayjs from "dayjs";
import { Division, PrayerTimeRow } from "@/types/planner";
import { RAMADAN_2026_START_DATE } from "@/lib/planner-utils";

const TOTAL_RAMADAN_DAYS = 30;

type BaselineEntry = {
  day: number;
  sehriEnd: string;
  iftar: string;
};

const DHAKA_BASELINE: BaselineEntry[] = [
  { day: 1, sehriEnd: "05:12:00", iftar: "17:58:00" },
  { day: 2, sehriEnd: "05:11:00", iftar: "17:59:00" },
  { day: 3, sehriEnd: "05:10:00", iftar: "17:59:00" },
  { day: 4, sehriEnd: "05:09:00", iftar: "18:00:00" },
  { day: 5, sehriEnd: "05:08:00", iftar: "18:00:00" },
  { day: 6, sehriEnd: "05:07:00", iftar: "18:01:00" },
  { day: 7, sehriEnd: "05:06:00", iftar: "18:01:00" },
  { day: 8, sehriEnd: "05:05:00", iftar: "18:02:00" },
  { day: 9, sehriEnd: "05:04:00", iftar: "18:02:00" },
  { day: 10, sehriEnd: "05:03:00", iftar: "18:03:00" },
  { day: 11, sehriEnd: "05:02:00", iftar: "18:03:00" },
  { day: 12, sehriEnd: "05:01:00", iftar: "18:03:00" },
  { day: 13, sehriEnd: "05:00:00", iftar: "18:04:00" },
  { day: 14, sehriEnd: "04:59:00", iftar: "18:04:00" },
  { day: 15, sehriEnd: "04:58:00", iftar: "18:05:00" },
  { day: 16, sehriEnd: "04:57:00", iftar: "18:05:00" },
  { day: 17, sehriEnd: "04:56:00", iftar: "18:06:00" },
  { day: 18, sehriEnd: "04:55:00", iftar: "18:06:00" },
  { day: 19, sehriEnd: "04:53:00", iftar: "18:06:00" },
  { day: 20, sehriEnd: "04:52:00", iftar: "18:07:00" },
  { day: 21, sehriEnd: "04:51:00", iftar: "18:07:00" },
  { day: 22, sehriEnd: "04:50:00", iftar: "18:08:00" },
  { day: 23, sehriEnd: "04:49:00", iftar: "18:08:00" },
  { day: 24, sehriEnd: "04:47:00", iftar: "18:09:00" },
  { day: 25, sehriEnd: "04:46:00", iftar: "18:09:00" },
  { day: 26, sehriEnd: "04:45:00", iftar: "18:09:00" },
  { day: 27, sehriEnd: "04:44:00", iftar: "18:10:00" },
  { day: 28, sehriEnd: "04:43:00", iftar: "18:10:00" },
  { day: 29, sehriEnd: "04:41:00", iftar: "18:11:00" },
  { day: 30, sehriEnd: "04:40:00", iftar: "18:11:00" }
];

const DIVISION_OFFSETS: Record<Division, { sehri: number; iftar: number }> = {
  Dhaka: { sehri: 0, iftar: 0 },
  Chattogram: { sehri: -5, iftar: -4 },
  Rajshahi: { sehri: 6, iftar: 6 },
  Khulna: { sehri: 4, iftar: 4 },
  Barishal: { sehri: -1, iftar: 1 },
  Sylhet: { sehri: -8, iftar: -8 },
  Rangpur: { sehri: 5, iftar: 4 },
  Mymensingh: { sehri: -1, iftar: -1 }
};

function addMinutes(timeValue: string, minutes: number): string {
  const hhmm = timeValue.slice(0, 5);
  const shifted = dayjs(`2026-01-01T${hhmm}:00`).add(minutes, "minute");
  return shifted.format("HH:mm:ss");
}

export function getPrayerTimeFallback(division: Division, ramadanDay: number): PrayerTimeRow | null {
  if (ramadanDay < 1 || ramadanDay > TOTAL_RAMADAN_DAYS) {
    return null;
  }

  const base = DHAKA_BASELINE.find((item) => item.day === ramadanDay);
  if (!base) {
    return null;
  }

  const offsets = DIVISION_OFFSETS[division];
  const sehri = addMinutes(base.sehriEnd, offsets.sehri);
  const iftar = addMinutes(base.iftar, offsets.iftar);
  const tahajjud = addMinutes(sehri, -60);
  const gregorianDate = dayjs(`${RAMADAN_2026_START_DATE}T00:00:00`).add(ramadanDay - 1, "day").format("YYYY-MM-DD");

  return {
    id: -1,
    division,
    ramadan_day: ramadanDay,
    gregorian_date: gregorianDate,
    sehri_end: sehri,
    iftar,
    tahajjud_recommended: tahajjud,
    created_at: "",
    updated_at: ""
  };
}
