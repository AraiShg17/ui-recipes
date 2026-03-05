"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import styles from "./ThemeLoadingOverlay.module.css";

const FADEOUT_MS = 280;

export function ThemeLoadingOverlay() {
  const { isThemeReady } = useTheme();
  const [phase, setPhase] = useState<"loading" | "fadingOut" | "done">(
    "loading"
  );

  useEffect(() => {
    if (!isThemeReady || phase !== "loading") return;
    setPhase("fadingOut");
    const t = setTimeout(() => setPhase("done"), FADEOUT_MS);
    return () => clearTimeout(t);
  }, [isThemeReady, phase]);

  if (phase === "done") return null;

  return (
    <div
      className={`${styles.overlay} ${phase === "fadingOut" ? styles.fadeOut : ""}`}
      role="status"
      aria-live="polite"
      aria-label={phase === "fadingOut" ? "" : "読み込み中"}
    >
      <div className={styles.spinner} aria-hidden="true" />
    </div>
  );
}
