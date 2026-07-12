import styles from "./CssTextFitDemo.module.css";

const samples = ["SHIP", "Chrome 150", "Responsive typography"];

export function CssTextFitDemo() {
  return (
    <div className={styles.wrap}>
      <p className={styles.lead}>
        コンテナ幅に合わせてフォントサイズを拡大・縮小する見出し向けの指定。
      </p>

      <div className={styles.demoGrid}>
        <section className={styles.panel} aria-labelledby="text-fit-grow-title">
          <h2 id="text-fit-grow-title" className={styles.panelTitle}>
            text-fit: grow consistent
          </h2>
          <div className={styles.fitStack}>
            {samples.map((sample) => (
              <p key={sample} className={styles.fitLine}>
                {sample}
              </p>
            ))}
          </div>
        </section>

        <section className={styles.panel} aria-labelledby="text-fit-shrink-title">
          <h2 id="text-fit-shrink-title" className={styles.panelTitle}>
            text-fit: shrink consistent
          </h2>
          <div className={styles.ticket}>
            <span className={styles.ticketLabel}>予約番号</span>
            <strong className={styles.shrinkLine}>UIRECIPES-2026-CHROME150</strong>
          </div>
        </section>
      </div>

      <p className={styles.note}>
        非対応ブラウザでは通常の `font-size` と `overflow-wrap` で読みやすさを維持します。
      </p>
    </div>
  );
}
