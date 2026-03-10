"use client";

import { MdSearch } from "react-icons/md";
import styles from "./IndirectLightInputDemo.module.css";

export function IndirectLightInputDemo() {
  return (
    <div className={styles.demoWrap}>
      <div className={styles.wrap}>
        <div className={styles.field}>
        <input
          type="search"
          className={styles.input}
          placeholder="Input"
          aria-label="検索"
        />
        <MdSearch className={styles.icon} aria-hidden />
        </div>
      </div>
    </div>
  );
}
