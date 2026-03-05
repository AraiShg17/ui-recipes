"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={styles.themeToggle}
      role="radiogroup"
      aria-label="テーマ切り替え"
    >
      <div className={styles.themeToggleIndicator} aria-hidden="true" />
      <label className={styles.themeToggleOption}>
        <input
          className={`${styles.themeToggleInput} ${styles.themeToggleInputLight}`}
          type="radio"
          name="theme"
          value="light"
          checked={theme === "light"}
          onChange={() => setTheme("light")}
        />
        <span className={styles.themeToggleLabel}>
          <MdLightMode className={styles.themeToggleIcon} aria-hidden="true" />
          <span className={styles.themeToggleText}>Light</span>
        </span>
      </label>

      <label className={styles.themeToggleOption}>
        <input
          className={`${styles.themeToggleInput} ${styles.themeToggleInputDark}`}
          type="radio"
          name="theme"
          value="dark"
          checked={theme === "dark"}
          onChange={() => setTheme("dark")}
        />
        <span className={styles.themeToggleLabel}>
          <MdDarkMode className={styles.themeToggleIcon} aria-hidden="true" />
          <span className={styles.themeToggleText}>Dark</span>
        </span>
      </label>
    </div>
  );
}
