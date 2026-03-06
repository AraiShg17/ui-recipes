"use client";

import styles from "./HeightAutoAnimationDemo.module.css";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";

export function HeightAutoAnimationDemo() {
  return (
    <div className={styles.section}>
      {/* 1. interpolate-size（:root で指定） */}
      <div className={styles.block}>
        <h3 className={styles.title}>1. interpolate-size（:root で指定）</h3>
        <p className={styles.caption}>
          :root に interpolate-size: allow-keywords を指定し、開いたときに height: auto を指定するだけ。display は使わず height だけで開閉する。
        </p>
        <input
          type="checkbox"
          id="height-demo-root"
          className={styles.toggle}
          aria-label="パネルを開閉（interpolate-size）"
        />
        <label htmlFor="height-demo-root" className={styles.trigger}>
          開閉する
        </label>
        <div className={styles.panelRoot} role="region" aria-label="interpolate-size デモ">
          <div className={styles.panelInner}>
            <p>{lorem}</p>
          </div>
        </div>
      </div>

      {/* 2. calc-size() */}
      <div className={styles.block}>
        <h3 className={styles.title}>2. calc-size()</h3>
        <p className={styles.caption}>
          開いたときに height: calc-size(auto, size) を指定。内容の高さを明示的に補間する。
        </p>
        <input
          type="checkbox"
          id="height-demo-calc"
          className={styles.toggle}
          aria-label="パネルを開閉（calc-size）"
        />
        <label htmlFor="height-demo-calc" className={styles.trigger}>
          開閉する
        </label>
        <div className={styles.panelCalc} role="region" aria-label="calc-size デモ">
          <div className={styles.panelInner}>
            <p>{lorem}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
