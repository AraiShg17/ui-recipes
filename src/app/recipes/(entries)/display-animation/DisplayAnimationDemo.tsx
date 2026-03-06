"use client";

import styles from "./DisplayAnimationDemo.module.css";

export function DisplayAnimationDemo() {
  return (
    <div className={styles.wrap}>
      <input
        type="checkbox"
        id="display-demo-toggle"
        className={styles.toggle}
        aria-label="パネルを開閉"
      />
      <label htmlFor="display-demo-toggle" className={styles.trigger}>
        開閉する
      </label>
      <div
        className={styles.panel}
        role="region"
        aria-label="アニメーションデモ"
      >
        <p className={styles.panelText}>
          display: none → block の切り替え時に、opacity と scale
          がトランジションします。@starting-style と allow-discrete
          で離散プロパティ（display）の変化をアニメーション可能にしています。
        </p>
      </div>
    </div>
  );
}
