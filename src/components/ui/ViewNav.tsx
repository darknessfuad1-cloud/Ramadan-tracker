import { NAV_VIEWS } from "@/data/planner-content";
import { navLabel } from "@/i18n/copy";
import { AppView, Locale } from "@/types/planner";

interface ViewNavProps {
  locale: Locale;
  activeView: AppView;
  onChange: (view: AppView) => void;
}

export function ViewNav({ locale, activeView, onChange }: ViewNavProps) {
  return (
    <nav className="view-nav" aria-label="Planner sections">
      {NAV_VIEWS.map((view) => (
        <button
          key={view}
          type="button"
          className={`chip ${activeView === view ? "chip-active" : ""}`}
          onClick={() => onChange(view)}
        >
          {navLabel(locale, view)}
        </button>
      ))}
    </nav>
  );
}
