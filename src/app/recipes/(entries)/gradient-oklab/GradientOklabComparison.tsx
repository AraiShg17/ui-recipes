import styles from "./GradientOklabComparison.module.css";

export function GradientOklabComparison() {
  return (
    <div className={styles.gradientOklabComparison}>
      <article className={styles.gradientOklabComparisonItem}>
        <h3 className={styles.gradientOklabComparisonTitle}>sRGB（in srgb）</h3>
        <div className={styles.gradientOklabComparisonBarSrgb} />
      </article>

      <article className={styles.gradientOklabComparisonItem}>
        <h3 className={styles.gradientOklabComparisonTitle}>
          sRGB Linear（in srgb-linear）
        </h3>
        <div className={styles.gradientOklabComparisonBarSrgbLinear} />
      </article>

      <article className={styles.gradientOklabComparisonItem}>
        <h3 className={styles.gradientOklabComparisonTitle}>CIELAB（in lab）</h3>
        <div className={styles.gradientOklabComparisonBarLab} />
      </article>

      <article className={styles.gradientOklabComparisonItem}>
        <h3 className={styles.gradientOklabComparisonTitle}>OKLab（in oklab）</h3>
        <div className={styles.gradientOklabComparisonBarOklab} />
      </article>

      <article className={styles.gradientOklabComparisonItem}>
        <h3 className={styles.gradientOklabComparisonTitle}>OKLCH（in oklch）</h3>
        <div className={styles.gradientOklabComparisonBarOklch} />
      </article>
    </div>
  );
}
