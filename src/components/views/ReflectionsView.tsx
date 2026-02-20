import { t } from "@/i18n/copy";
import { DailyRecord, Locale } from "@/types/planner";

interface ReflectionsViewProps {
  locale: Locale;
  records: Record<number, DailyRecord>;
  globalReflection: string;
  onGlobalReflection: (value: string) => void;
}

export function ReflectionsView({ locale, records, globalReflection, onGlobalReflection }: ReflectionsViewProps) {
  const entries = Object.values(records)
    .filter((record) => record.reflection.trim().length > 0 || record.extraNote.trim().length > 0)
    .sort((a, b) => a.day - b.day);

  return (
    <section className="view-shell">
      <article className="panel">
        <h3>{t(locale, "reflectionTimeline")}</h3>
        <textarea
          className="long-note"
          value={globalReflection}
          placeholder={t(locale, "notesPlaceholder")}
          onChange={(event) => onGlobalReflection(event.target.value)}
        />
      </article>

      <article className="panel">
        {entries.length === 0 ? (
          <p>{t(locale, "noReflectionYet")}</p>
        ) : (
          <div className="reflection-list">
            {entries.map((entry) => (
              <div key={`reflection-day-${entry.day}`} className="reflection-item">
                <h4>
                  {t(locale, "day")} {entry.day}
                </h4>
                {entry.reflection.trim() && <p>{entry.reflection}</p>}
                {entry.extraNote.trim() && <p className="muted-text">{entry.extraNote}</p>}
              </div>
            ))}
          </div>
        )}
      </article>
    </section>
  );
}
