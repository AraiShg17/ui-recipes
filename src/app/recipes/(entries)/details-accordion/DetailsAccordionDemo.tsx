import styles from "./DetailsAccordionDemo.module.css";

export function DetailsAccordionDemo() {
  return (
    <div className={styles.demoWrap}>
      <div className={styles.group}>
        <details className={styles.accordion} open>
          <summary className={styles.summary}>
            <span className={styles.summaryLabel}>アコーディオンの使いどころ</span>
            <span className={styles.summaryIcon} aria-hidden>
              ▾
            </span>
          </summary>
          <div className={styles.panelInner}>
            <p className={styles.text}>
              「詳細はたまにしか読まれないが、あると嬉しい」情報に向いています。規約や補足説明など、
              初見では折りたたんでおきたい内容に。
            </p>
          </div>
        </details>

        <details className={styles.accordion}>
          <summary className={styles.summary}>
            <span className={styles.summaryLabel}>details/summary の利点</span>
            <span className={styles.summaryIcon} aria-hidden>
              ▾
            </span>
          </summary>
          <div className={styles.panelInner}>
            <p className={styles.text}>
              ネイティブ要素なので、キーボード操作やスクリーンリーダー対応が最初から整っています。
              JS なしでも開閉できるのも利点です。
            </p>
          </div>
        </details>

        <details className={styles.accordion}>
          <summary className={styles.summary}>
            <span className={styles.summaryLabel}>アニメーションのポイント</span>
            <span className={styles.summaryIcon} aria-hidden>
              ▾
            </span>
          </summary>
          <div className={styles.panelInner}>
            <p className={styles.text}>
              本文ラッパーではなく ::details-content 疑似要素に対して height / opacity
              をトランジションさせると、height: auto でもスムーズに開閉できます。
            </p>
          </div>
        </details>
      </div>
    </div>
  );
}

