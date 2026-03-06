"use client";

import { useState } from "react";
import { MdMoreVert } from "react-icons/md";
import styles from "./AnchorPositioningDemo.module.css";

export function AnchorPositioningDemo() {
  const [active, setActive] = useState<"A" | "B">("A");

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>1. ツールチップ（ホバー）</h3>
      <div className={styles.wrap}>
        <button
          type="button"
          className={styles.anchorBtn}
          style={{ anchorName: "--btn-anchor" } as React.CSSProperties}
        >
          ホバーでツールチップ
        </button>
        <div className={styles.tooltip} role="tooltip">
          Anchor Positioning で配置したツールチップ
        </div>
      </div>

      <h3 className={styles.sectionTitle}>2. アイコンクリックで右にメニュー</h3>
      <div className={styles.menuWrap}>
        <button
          type="button"
          className={styles.menuTrigger}
          style={{ anchorName: "--menu-anchor" } as React.CSSProperties}
          aria-haspopup="menu"
          popoverTarget="anchor-menu"
        >
          <MdMoreVert className={styles.menuTriggerIcon} aria-hidden />
        </button>
        <div
          id="anchor-menu"
          className={styles.menu}
          role="menu"
          popover="auto"
        >
          <div className={styles.menuInner}>
            <button type="button" className={styles.menuItem} role="menuitem">
              メニュー項目 1
            </button>
            <button type="button" className={styles.menuItem} role="menuitem">
              メニュー項目 2
            </button>
            <button type="button" className={styles.menuItem} role="menuitem">
              メニュー項目 3
            </button>
          </div>
        </div>
      </div>

      <h3 className={styles.sectionTitle}>
        3. スライドする背景（ライトダーク風）
      </h3>
      <div
        className={styles.toggleScope}
        role="radiogroup"
        aria-label="サンプルトグル"
      >
        <div className={styles.toggleIndicator} aria-hidden />
        <label className={styles.toggleOption}>
          <input
            type="radio"
            name="demo-toggle"
            value="A"
            checked={active === "A"}
            onChange={() => setActive("A")}
            className={styles.toggleInput}
          />
          <span className={styles.toggleLabel}>オプション A</span>
        </label>
        <label className={styles.toggleOption}>
          <input
            type="radio"
            name="demo-toggle"
            value="B"
            checked={active === "B"}
            onChange={() => setActive("B")}
            className={styles.toggleInput}
          />
          <span className={styles.toggleLabel}>オプション B</span>
        </label>
      </div>
    </div>
  );
}
