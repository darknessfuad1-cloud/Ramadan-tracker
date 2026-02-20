import { rt } from "@/i18n/runtime-text";
import { t } from "@/i18n/copy";
import { Division, Locale, Theme } from "@/types/planner";

interface TopBarProps {
  locale: Locale;
  theme: Theme;
  division: Division;
  userEmail: string;
  onThemeChange: (theme: Theme) => void;
  onLocaleChange: (locale: Locale) => void;
  onLogout: () => void;
}

export function TopBar({ locale, theme, division, userEmail, onThemeChange, onLocaleChange, onLogout }: TopBarProps) {
  return (
    <header className="top-bar">
      <div className="top-field">
        <label htmlFor="language-select">{t(locale, "language")}</label>
        <select id="language-select" value={locale} onChange={(event) => onLocaleChange(event.target.value as Locale)}>
          <option value="en">English</option>
          <option value="bn">বাংলা</option>
          <option value="ar">العربية</option>
        </select>
      </div>

      <div className="top-field">
        <label htmlFor="theme-select">{t(locale, "theme")}</label>
        <select id="theme-select" value={theme} onChange={(event) => onThemeChange(event.target.value as Theme)}>
          <option value="light">{t(locale, "themeLight")}</option>
          <option value="dark">{t(locale, "themeDark")}</option>
        </select>
      </div>

      <div className="top-account">
        <span>{rt(locale, "account")}</span>
        <strong>{userEmail}</strong>
      </div>

      <div className="top-account">
        <span>{rt(locale, "division")}</span>
        <strong>{division}</strong>
      </div>

      <div className="top-actions">
        <button type="button" className="outline-btn" onClick={onLogout}>
          {rt(locale, "logout")}
        </button>
      </div>
    </header>
  );
}
