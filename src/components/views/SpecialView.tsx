import { IFTIKAF_CHECK_DAYS } from "@/data/planner-content";
import { getPdfPageText } from "@/data/pdf-content";
import { eidSunnahList, t } from "@/i18n/copy";
import { Locale } from "@/types/planner";

interface SpecialViewProps {
  locale: Locale;
  itikafNights: boolean[];
  qadrDuaDone: boolean[];
  eidSunnah: boolean[];
  onToggleItikaf: (index: number) => void;
  onToggleQadrDua: (index: number) => void;
  onToggleEidSunnah: (index: number) => void;
}

export function SpecialView({
  locale,
  itikafNights,
  qadrDuaDone,
  eidSunnah,
  onToggleItikaf,
  onToggleQadrDua,
  onToggleEidSunnah
}: SpecialViewProps) {
  const eidItems = eidSunnahList(locale);

  return (
    <section className="view-shell">
      <div className="section-title-wrap">
        <h2>{t(locale, "specialNights")}</h2>
      </div>

      <article className="panel">
        <h3>{t(locale, "laylatulQadrGuide")}</h3>
        <pre className="script-box">{getPdfPageText(26)}</pre>
      </article>

      <div className="two-col">
        <article className="panel">
          <h3>{t(locale, "itikaf")}</h3>
          <div className="check-grid">
            {IFTIKAF_CHECK_DAYS.map((day, index) => (
              <label key={`itikaf-${day}`} className="check-row">
                <input type="checkbox" checked={itikafNights[index]} onChange={() => onToggleItikaf(index)} />
                <span>
                  {t(locale, "day")} {day}
                </span>
              </label>
            ))}
          </div>
        </article>

        <article className="panel">
          <h3>{t(locale, "qadrDua")}</h3>
          <div className="check-grid">
            {IFTIKAF_CHECK_DAYS.map((day, index) => (
              <label key={`qadr-${day}`} className="check-row">
                <input type="checkbox" checked={qadrDuaDone[index]} onChange={() => onToggleQadrDua(index)} />
                <span>
                  {t(locale, "day")} {day}
                </span>
              </label>
            ))}
          </div>
        </article>
      </div>

      <article className="panel">
        <h3>{t(locale, "eidPrep")}</h3>
        <pre className="script-box">{getPdfPageText(37)}</pre>
      </article>

      <article className="panel">
        <h3>{t(locale, "eidPrepChecklist")}</h3>
        <div className="check-grid">
          {eidItems.map((item, index) => (
            <label key={`eid-sunnah-${index}`} className="check-row">
              <input type="checkbox" checked={eidSunnah[index]} onChange={() => onToggleEidSunnah(index)} />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </article>
    </section>
  );
}
