"use client";

import { MdPlayArrow } from "react-icons/md";
import styles from "./GlassPillButtonDemo.module.css";

export function GlassPillButtonDemo() {
  return (
    <div className={styles.wrap}>
      <button type="button" className={styles.glassPill}>
        Play
      </button>
      <button
        type="button"
        className={`${styles.glassPill} ${styles.glassPillCircle}`}
        aria-label="再生"
      >
        <MdPlayArrow className={styles.glassPillIcon} aria-hidden />
      </button>
    </div>
  );
}
