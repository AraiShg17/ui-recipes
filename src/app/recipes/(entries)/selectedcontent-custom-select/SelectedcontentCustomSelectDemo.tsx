import { createElement } from "react";
import styles from "./SelectedcontentCustomSelectDemo.module.css";

const plans = [
  { value: "compact", name: "Compact", meta: "狭い画面向け", icon: "C" },
  { value: "balanced", name: "Balanced", meta: "通常のカード", icon: "B" },
  { value: "expanded", name: "Expanded", meta: "余白多め", icon: "E" },
];

export function SelectedcontentCustomSelectDemo() {
  return (
    <div className={styles.wrap}>
      <label htmlFor="recipe-select" className={styles.label}>
        表示密度
      </label>
      <select
        id="recipe-select"
        name="density"
        className={styles.select}
        defaultValue="balanced"
      >
        <button type="button" className={styles.customButton}>
          {createElement("selectedcontent", {
            className: styles.selectedContent,
          })}
          <span className={styles.chevron} aria-hidden>
            ▾
          </span>
        </button>

        {plans.map((plan) => (
          <option key={plan.value} value={plan.value} className={styles.option}>
            <span className={styles.optionIcon} aria-hidden>
              {plan.icon}
            </span>
            <span className={styles.optionText}>
              <span className={styles.optionName}>{plan.name}</span>
              <span className={styles.optionMeta}>{plan.meta}</span>
            </span>
          </option>
        ))}
      </select>

      <p className={styles.note}>
        Chrome 150 では複数の `selectedcontent` がある場合の同期や更新タイミングが改善されています。
      </p>
    </div>
  );
}
