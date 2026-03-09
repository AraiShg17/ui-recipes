"use client";

import { useState } from "react";
import styles from "./CalcSizeAnimationDemo.module.css";

export function CalcSizeAnimationDemo() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.section}>
      <div className={styles.readMoreCard} data-expanded={expanded || undefined}>
        <div className={styles.readMoreContent} aria-label="本文（折りたたみ）">
          <p className={styles.readMoreText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. Curabitur non nulla sit amet nisl tempus convallis quis ac
            lectus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
          </p>
        </div>
        <button
          type="button"
          className={styles.moreButton}
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? "閉じる" : "もっと見る"}
        </button>
      </div>
    </div>
  );
}
