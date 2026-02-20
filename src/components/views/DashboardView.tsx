import { StatCard } from "@/components/ui/StatCard";
import { getHadithPlanByDay } from "@/data/hadith-plan";
import { getQuranPlanByDay } from "@/data/quran-plan";
import { t } from "@/i18n/copy";
import { rt } from "@/i18n/runtime-text";
import { Division, Locale, PrayerTimeRow, RamadanTimingInfo } from "@/types/planner";

interface DashboardViewProps {
  locale: Locale;
  todayProgress: number;
  totalProgress: number;
  streak: number;
  quranPlanProgress: number;
  hadithPlanProgress: number;
  allDayProgress: number[];
  selectedDay: number;
  division: Division;
  ramadanTiming: RamadanTimingInfo;
  prayerTimes: PrayerTimeRow | null;
}

function compactTime(value: string): string {
  return value.slice(0, 5);
}

export function DashboardView({
  locale,
  todayProgress,
  totalProgress,
  streak,
  quranPlanProgress,
  hadithPlanProgress,
  allDayProgress,
  selectedDay,
  division,
  ramadanTiming,
  prayerTimes
}: DashboardViewProps) {
  const plannerDay = ramadanTiming.phase === "active" ? ramadanTiming.currentDay : selectedDay;
  const quranPlan = getQuranPlanByDay(plannerDay);
  const hadithPlan = getHadithPlanByDay(plannerDay);

  let statusLabel = `${rt(locale, "currentRamadanDay")}: ${plannerDay}`;
  if (ramadanTiming.phase === "before") {
    statusLabel = rt(locale, "ramadanCountdown", { days: ramadanTiming.daysUntilStart });
  } else if (ramadanTiming.phase === "after") {
    statusLabel = rt(locale, "ramadanEnded");
  }

  return (
    <section className="view-shell">
      <div className="section-title-wrap">
        <h2>{t(locale, "dashboardOverview")}</h2>
        <p>{statusLabel}</p>
      </div>

      <div className="stat-grid">
        <StatCard label={rt(locale, "currentRamadanDay")} value={`Day ${plannerDay}`} accent="mint" />
        <StatCard label={t(locale, "todayProgress")} value={`${todayProgress}%`} accent="green" />
        <StatCard label={t(locale, "totalProgress")} value={`${totalProgress}%`} accent="gold" />
        <StatCard label={t(locale, "streak")} value={`${streak} ${t(locale, "days")}`} accent="mint" />
        <StatCard label={t(locale, "quranPlanTitle")} value={`${quranPlanProgress}%`} accent="green" />
        <StatCard label={t(locale, "hadithPlanTitle")} value={`${hadithPlanProgress}%`} accent="gold" />
      </div>

      <article className="panel">
        <h3>{rt(locale, "prayerTimes")}</h3>
        <p className="muted-text">
          {division} | {rt(locale, "bangladeshTimezone")}
        </p>
        {prayerTimes ? (
          <div className="prayer-grid">
            <div className="prayer-cell">
              <span>{rt(locale, "sehriEnd")}</span>
              <strong>{compactTime(prayerTimes.sehri_end)}</strong>
            </div>
            <div className="prayer-cell">
              <span>{rt(locale, "iftar")}</span>
              <strong>{compactTime(prayerTimes.iftar)}</strong>
            </div>
            <div className="prayer-cell">
              <span>{rt(locale, "tahajjud")}</span>
              <strong>{compactTime(prayerTimes.tahajjud_recommended)}</strong>
            </div>
          </div>
        ) : (
          <p className="muted-text">-</p>
        )}
        <p className="muted-text">{rt(locale, "prayerScheduleSource")}</p>
      </article>

      <div className="daily-grid">
        <article className="panel">
          <h3>{t(locale, "quranPlanTitle")}</h3>
          <p className="muted-text">
            {t(locale, "day")} {plannerDay}
          </p>
          <p>
            {quranPlan.surahNameTransliteration} ({quranPlan.surahNameArabic})
          </p>
        </article>
        <article className="panel">
          <h3>{t(locale, "hadithPlanTitle")}</h3>
          <p className="muted-text">
            {t(locale, "day")} {plannerDay}
          </p>
          <p>{hadithPlan.title}</p>
          <p className="muted-text">{hadithPlan.reference}</p>
        </article>
      </div>

      <article className="panel">
        <h3>{t(locale, "progressByDay")}</h3>
        <div className="progress-bars">
          {allDayProgress.map((progress, index) => (
            <div className="progress-bar-item" key={`day-progress-${index + 1}`}>
              <span>{index + 1}</span>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: `${progress}%` }} />
              </div>
              <strong>{progress}%</strong>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
