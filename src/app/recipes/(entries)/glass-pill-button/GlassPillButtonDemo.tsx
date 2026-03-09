"use client";

import styles from "./GlassPillButtonDemo.module.css";

export function GlassPillButtonDemo() {
  return (
    <div className={styles.wrap}>
      <button type="button" className={styles.glassPill}>
        Play
      </button>
    </div>
  );
}
