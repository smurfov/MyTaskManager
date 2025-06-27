import { useTheme } from "../../../shared/hooks/useTheme";
import "./ThemeToggle.scss";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={() => toggleTheme(theme)}
      className="toggle-theme"
      aria-label="Переключить тему"
    >
      <span className={`icon icon-moon ${theme === "dark" ? " visible" : ""}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 12.5A9 9 0 1111.5 3c0 5.25 4.25 9.5 9.5 9.5z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className={`icon icon-sun ${theme === "light" ? " visible" : ""}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="5" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="1" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
            <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="4" y2="12" />
            <line x1="20" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
            <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
          </g>
        </svg>
      </span>
    </button>
  );
}
