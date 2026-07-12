import styles from "./BackgroundClipBorderAreaDemo.module.css";

export function BackgroundClipBorderAreaDemo() {
  return (
    <div className={styles.wrap}>
      <div className={styles.gradientBorder}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>border-area</span>
          <strong className={styles.title}>Gradient border</strong>
          <p className={styles.body}>
            背景をボーダーが描画される領域だけにクリップするため、
            `border-image` なしでグラデーション境界線を作れます。
          </p>
        </div>
      </div>

      <div className={styles.dashedFrame} aria-label="破線ボーダーの例">
        <span>破線や二重線でもボーダー領域にだけ背景を描画</span>
      </div>
    </div>
  );
}
