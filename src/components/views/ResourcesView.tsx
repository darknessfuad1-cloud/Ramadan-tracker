import { getPdfPageText } from "@/data/pdf-content";
import { t } from "@/i18n/copy";
import { Locale } from "@/types/planner";

interface ResourcesViewProps {
  locale: Locale;
}

export function ResourcesView({ locale }: ResourcesViewProps) {
  const pages = [39, 40, 41, 42, 43];

  return (
    <section className="view-shell">
      <div className="section-title-wrap">
        <h2>{t(locale, "resources")}</h2>
        <p>{t(locale, "donationsInfo")}</p>
      </div>

      <div className="resource-grid">
        {pages.map((pageNumber) => (
          <article className="panel" key={`resource-page-${pageNumber}`}>
            <h3>
              {t(locale, "page")} {pageNumber}
            </h3>
            <pre className="script-box">{getPdfPageText(pageNumber)}</pre>
          </article>
        ))}
      </div>
    </section>
  );
}
