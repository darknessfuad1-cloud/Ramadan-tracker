import { PDF_TEXT_PAGES, PLANNER_SECTIONS, getPdfPageText } from "@/data/pdf-content";
import { t } from "@/i18n/copy";
import { Locale } from "@/types/planner";

interface OriginalBookViewProps {
  locale: Locale;
}

export function OriginalBookView({ locale }: OriginalBookViewProps) {
  return (
    <section className="view-shell">
      <div className="section-title-wrap">
        <h2>{t(locale, "originalBook")}</h2>
        <p>{t(locale, "bookIntro")}</p>
      </div>

      <article className="panel">
        <h3>{t(locale, "bookStructure")}</h3>
        <div className="section-outline">
          {PLANNER_SECTIONS.map((section) => (
            <div className="outline-item" key={`section-${section.id}`}>
              <strong>{section.title[locale]}</strong>
              <span>
                {t(locale, "page")} {section.pages[0]}-{section.pages[section.pages.length - 1]}
              </span>
            </div>
          ))}
        </div>
      </article>

      <div className="book-text-grid">
        {PDF_TEXT_PAGES.map((entry) => (
          <details className="panel page-text-card" key={`book-page-text-${entry.page}`}>
            <summary>
              {t(locale, "page")} {entry.page}
            </summary>
            <pre className="script-box">{getPdfPageText(entry.page)}</pre>
          </details>
        ))}
      </div>
    </section>
  );
}
