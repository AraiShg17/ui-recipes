import styles from "./CssShapeFunctionDemo.module.css";

export function CssShapeFunctionDemo() {
  return (
    <div className={styles.wrap}>
      <p className={styles.lead}>
        `path()` と違い、`shape()` は `%` や CSS 変数を使えるため、レスポンシブな曲線クリップを CSS だけで扱えます。
      </p>

      <div className={styles.flagGrid}>
        <div className={`${styles.flag} ${styles.flagSoft}`}>
          <span>soft wave</span>
        </div>
        <div className={`${styles.flag} ${styles.flagDeep}`}>
          <span>deep wave</span>
        </div>
      </div>
    </div>
  );
}
