"use client";

import { useState } from "react";
import { MdMenu } from "react-icons/md";
import styles from "./IconLabelToggleDemo.module.css";

export function IconLabelToggleDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrap}>
      <div className={styles.controls}>
        <button
          type="button"
          className={styles.controlBtn}
          onClick={() => setIsOpen(false)}
          aria-pressed={!isOpen}
        >
          Close
        </button>
        <button
          type="button"
          className={styles.controlBtn}
          onClick={() => setIsOpen(true)}
          aria-pressed={isOpen}
        >
          Open
        </button>
      </div>

      <div
        className={`${styles.pill} ${isOpen ? styles.pillOpen : ""}`}
        data-open={isOpen ? "" : undefined}
      >
        <div className={styles.pillInner}>
          <MdMenu className={styles.pillIcon} aria-hidden />
          <span className={styles.pillLabel}>メニュー</span>
        </div>
      </div>
    </div>
  );
}
