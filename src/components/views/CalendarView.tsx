import { RAMADAN_DAYS } from "@/data/planner-content";
import { t } from "@/i18n/copy";
import { Locale } from "@/types/planner";

interface CalendarViewProps {
  locale: Locale;
  selectedDay: number;
  todayDay: number;
  progress: number[];
  onSelectDay: (day: number) => void;
}

export function CalendarView({ locale, selectedDay, todayDay, progress, onSelectDay }: CalendarViewProps) {
  return (
    <section className="view-shell">
      <div className="section-title-wrap">
        <h2>{t(locale, "calendarView")}</h2>
      </div>
      <div className="calendar-grid">
        {Array.from({ length: RAMADAN_DAYS }, (_, index) => {
          const day = index + 1;
          const dayProgress = progress[index];
          return (
            <button
              key={`ramadan-day-${day}`}
              type="button"
              className={`calendar-cell ${selectedDay === day ? "calendar-selected" : ""} ${
                todayDay === day ? "calendar-today" : ""
              }`}
              onClick={() => onSelectDay(day)}
            >
              <span className="calendar-day">
                {t(locale, "day")} {day}
              </span>
              <strong>{dayProgress}%</strong>
              <div className="cell-track">
                <div className="cell-fill" style={{ width: `${dayProgress}%` }} />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
