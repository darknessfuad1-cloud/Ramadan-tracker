import { t } from "@/i18n/copy";
import { Locale, RamadanReview } from "@/types/planner";

interface ReviewViewProps {
  locale: Locale;
  review: RamadanReview;
  onUpdateReview: (field: "gains" | "shortcomings" | "nextYearPlan", value: string) => void;
}

export function ReviewView({ locale, review, onUpdateReview }: ReviewViewProps) {
  return (
    <section className="view-shell">
      <div className="section-title-wrap">
        <h2>{t(locale, "review")}</h2>
      </div>

      <div className="review-grid">
        <article className="panel review-green">
          <h3>{t(locale, "gains")}</h3>
          <textarea
            className="long-note"
            value={review.gains}
            onChange={(event) => onUpdateReview("gains", event.target.value)}
            placeholder={t(locale, "notesPlaceholder")}
          />
        </article>

        <article className="panel review-red">
          <h3>{t(locale, "shortcomings")}</h3>
          <textarea
            className="long-note"
            value={review.shortcomings}
            onChange={(event) => onUpdateReview("shortcomings", event.target.value)}
            placeholder={t(locale, "notesPlaceholder")}
          />
        </article>
      </div>

      <article className="panel">
        <h3>{t(locale, "nextYearPlan")}</h3>
        <textarea
          className="long-note"
          value={review.nextYearPlan}
          onChange={(event) => onUpdateReview("nextYearPlan", event.target.value)}
          placeholder={t(locale, "notesPlaceholder")}
        />
      </article>
    </section>
  );
}
