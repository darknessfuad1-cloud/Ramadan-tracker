import { ALLAH_NAMES_BY_DAY, CHECKLIST_ITEMS, DAILY_FOCUS, SALAH_ROWS } from "@/data/planner-content";
import { getHadithPlanByDay } from "@/data/hadith-plan";
import { getQuranPlanByDay } from "@/data/quran-plan";
import { checklistLabel, salahLabel, t } from "@/i18n/copy";
import { getDayProgress } from "@/lib/planner-utils";
import { ChecklistKey, DailyRecord, Locale, SalahKey } from "@/types/planner";

interface DailyPlannerViewProps {
  locale: Locale;
  day: number;
  isWithinRamadan: boolean;
  record: DailyRecord;
  onSelectDay: (day: number) => void;
  onToggleSalah: (day: number, key: SalahKey, column: "farz" | "sunnah") => void;
  onToggleChecklist: (day: number, key: ChecklistKey) => void;
  onSetQuranField: (day: number, key: keyof DailyRecord["quran"], value: string) => void;
  onToggleAllahName: (day: number, index: 0 | 1 | 2) => void;
  onSetDayTaskDone: (day: number, value: boolean) => void;
  onToggleQuranPlanDone: (day: number) => void;
  onToggleHadithPlanDone: (day: number) => void;
  onSetText: (day: number, field: "duaNote" | "reflection" | "extraNote", value: string) => void;
  onResetDay: () => void;
}

function LocalizedDailyFocus({ locale, day }: { locale: Locale; day: number }) {
  const dayIndex = day - 1;
  const focus = DAILY_FOCUS[dayIndex];
  return <p>{focus[locale]}</p>;
}

export function DailyPlannerView({
  locale,
  day,
  isWithinRamadan,
  record,
  onSelectDay,
  onToggleSalah,
  onToggleChecklist,
  onSetQuranField,
  onToggleAllahName,
  onSetDayTaskDone,
  onToggleQuranPlanDone,
  onToggleHadithPlanDone,
  onSetText,
  onResetDay
}: DailyPlannerViewProps) {
  const dayIndex = day - 1;
  const names = ALLAH_NAMES_BY_DAY[dayIndex];
  const quranPlan = getQuranPlanByDay(day);
  const hadithPlan = getHadithPlanByDay(day);
  const dayProgress = getDayProgress(record);

  return (
    <section className="view-shell">
      <div className="section-title-wrap daily-headline">
        <div>
          <h2>
            {t(locale, "dailyPlanner")} - {t(locale, "day")} {day}
          </h2>
          <LocalizedDailyFocus locale={locale} day={day} />
        </div>
        <div className="daily-headline-actions">
          <button type="button" className="outline-btn" onClick={() => onSelectDay(Math.max(1, day - 1))} disabled={day === 1}>
            {"<"}
          </button>
          <button type="button" className="outline-btn" onClick={() => onSelectDay(Math.min(30, day + 1))} disabled={day === 30}>
            {">"}
          </button>
        </div>
      </div>

      <article className="panel">
        <div className="day-progress-row">
          <strong>
            {t(locale, "todayProgress")}: {dayProgress}%
          </strong>
          <button type="button" className="outline-btn" onClick={onResetDay}>
            {t(locale, "resetDay")}
          </button>
        </div>
        <p className="muted-text">
          {isWithinRamadan ? t(locale, "autoDayMode") : t(locale, "manualDayMode")}
        </p>
      </article>

      <article className="panel">
        <h3>{t(locale, "dayTask")}</h3>
        <label className="check-row">
          <input type="checkbox" checked={record.dayTaskDone} onChange={(event) => onSetDayTaskDone(day, event.target.checked)} />
          <span>{t(locale, "dayTaskDone")}</span>
        </label>
      </article>

      <div className="daily-grid">
        <article className="panel">
          <h3>{t(locale, "quranPlanTitle")}</h3>
          <p className="muted-text">
            {t(locale, "day")} {day}: {quranPlan.surahNameTransliteration} ({quranPlan.surahNameArabic}) - {quranPlan.verseCount}{" "}
            {t(locale, "verses")}
          </p>
          <label className="check-row">
            <input type="checkbox" checked={record.quranPlanDone} onChange={() => onToggleQuranPlanDone(day)} />
            <span>{t(locale, "markQuranDone")}</span>
          </label>

          <h4>{t(locale, "arabicText")}</h4>
          <pre className="script-box arabic-text">{quranPlan.arabic}</pre>

          <h4>{t(locale, "transliteration")}</h4>
          <pre className="script-box">{quranPlan.transliteration}</pre>

          <h4>{t(locale, "banglaMeaning")}</h4>
          <pre className="script-box">{quranPlan.banglaMeaning}</pre>

          <h4>{t(locale, "englishMeaning")}</h4>
          <pre className="script-box">{quranPlan.englishMeaning}</pre>
        </article>

        <article className="panel">
          <h3>{t(locale, "hadithPlanTitle")}</h3>
          <p className="muted-text">
            {t(locale, "day")} {day}: {hadithPlan.title}
          </p>
          <label className="check-row">
            <input type="checkbox" checked={record.hadithPlanDone} onChange={() => onToggleHadithPlanDone(day)} />
            <span>{t(locale, "markHadithDone")}</span>
          </label>

          <h4>{t(locale, "arabicText")}</h4>
          <pre className="script-box arabic-text">{hadithPlan.arabic}</pre>

          <h4>{t(locale, "banglaMeaning")}</h4>
          <pre className="script-box">{hadithPlan.bangla}</pre>

          <h4>{t(locale, "englishMeaning")}</h4>
          <pre className="script-box">{hadithPlan.english}</pre>

          <h4>{t(locale, "reference")}</h4>
          <p className="muted-text">{hadithPlan.reference}</p>
        </article>
      </div>

      <div className="daily-grid">
        <article className="panel">
          <h3>{t(locale, "salahTracker")}</h3>
          <div className="salah-grid">
            <div />
            <strong>{t(locale, "farz")}</strong>
            <strong>{t(locale, "sunnah")}</strong>
            {SALAH_ROWS.map((row) => (
              <div className="salah-row" key={row.key}>
                <span>{salahLabel(locale, row.key)}</span>
                {row.hasFarz ? (
                  <input
                    type="checkbox"
                    checked={record.salah[row.key].farz}
                    onChange={() => onToggleSalah(day, row.key, "farz")}
                    aria-label={`${salahLabel(locale, row.key)} farz`}
                  />
                ) : (
                  <span className="dash-cell">-</span>
                )}
                <input
                  type="checkbox"
                  checked={record.salah[row.key].sunnah}
                  onChange={() => onToggleSalah(day, row.key, "sunnah")}
                  aria-label={`${salahLabel(locale, row.key)} sunnah`}
                />
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <h3>{t(locale, "quranTracker")}</h3>
          <div className="quran-inputs">
            <label>
              <span>{t(locale, "ayat")}</span>
              <input
                type="number"
                min="0"
                value={record.quran.ayat}
                onChange={(event) => onSetQuranField(day, "ayat", event.target.value)}
              />
            </label>
            <label>
              <span>{t(locale, "pages")}</span>
              <input
                type="number"
                min="0"
                value={record.quran.pages}
                onChange={(event) => onSetQuranField(day, "pages", event.target.value)}
              />
            </label>
            <label>
              <span>{t(locale, "para")}</span>
              <input
                type="number"
                min="0"
                value={record.quran.para}
                onChange={(event) => onSetQuranField(day, "para", event.target.value)}
              />
            </label>
          </div>

          <h4>{t(locale, "allahNames")}</h4>
          <div className="allah-name-list">
            {names.map((name, index) => (
              <label className="allah-name-item" key={`${name.arabic}-${index}`}>
                <input
                  type="checkbox"
                  checked={record.allahNames[index as 0 | 1 | 2]}
                  onChange={() => onToggleAllahName(day, index as 0 | 1 | 2)}
                />
                <div>
                  <span className="arabic-text">{name.arabic}</span>
                  <p>{name[locale]}</p>
                </div>
              </label>
            ))}
          </div>
        </article>

        <article className="panel">
          <h3>{t(locale, "dailyChecklist")}</h3>
          <div className="check-grid">
            {CHECKLIST_ITEMS.map((item) => (
              <label className="check-row" key={item}>
                <input
                  type="checkbox"
                  checked={record.checklist[item]}
                  onChange={() => onToggleChecklist(day, item)}
                />
                <span>{checklistLabel(locale, item)}</span>
              </label>
            ))}
          </div>
        </article>
      </div>

      <div className="daily-grid">
        <article className="panel">
          <h3>{t(locale, "duaNote")}</h3>
          <textarea
            value={record.duaNote}
            placeholder={t(locale, "notesPlaceholder")}
            onChange={(event) => onSetText(day, "duaNote", event.target.value)}
          />
        </article>
        <article className="panel">
          <h3>{t(locale, "reflection")}</h3>
          <textarea
            value={record.reflection}
            placeholder={t(locale, "notesPlaceholder")}
            onChange={(event) => onSetText(day, "reflection", event.target.value)}
          />
        </article>
      </div>

      <article className="panel">
        <h3>{t(locale, "extraNote")}</h3>
        <textarea
          value={record.extraNote}
          placeholder={t(locale, "notesPlaceholder")}
          onChange={(event) => onSetText(day, "extraNote", event.target.value)}
        />
      </article>
    </section>
  );
}
