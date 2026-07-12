import styles from "./SystemAccentColorsDemo.module.css";

export function SystemAccentColorsDemo() {
  return (
    <form className={styles.wrap}>
      <div className={styles.callout}>
        <span className={styles.calloutText}>AccentColor</span>
        <span className={styles.calloutSubText}>OS のテーマカラーを UI に反映</span>
      </div>

      <label className={styles.option}>
        <input type="checkbox" defaultChecked />
        <span>通知を受け取る</span>
      </label>

      <label className={styles.rangeLabel}>
        強調度
        <input type="range" defaultValue={70} />
      </label>

      <button type="button" className={styles.action}>
        保存
      </button>
    </form>
  );
}
