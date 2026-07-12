"use client";

import { useState } from "react";
import type { HTMLAttributes } from "react";
import styles from "./FocusgroupAttributeDemo.module.css";

const toolbarFocusgroup = {
  focusgroup: "toolbar wrap",
} as HTMLAttributes<HTMLDivElement> & { focusgroup: string };

const tablistFocusgroup = {
  focusgroup: "tablist wrap",
} as HTMLAttributes<HTMLDivElement> & { focusgroup: string };

const tabs = ["概要", "CSS", "HTML"];

export function FocusgroupAttributeDemo() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className={styles.wrap}>
      <section className={styles.panel} aria-labelledby="focusgroup-toolbar-title">
        <h2 id="focusgroup-toolbar-title" className={styles.panelTitle}>
          Toolbar
        </h2>
        <div
          className={styles.toolbar}
          role="toolbar"
          aria-label="テキスト装飾"
          {...toolbarFocusgroup}
        >
          <button type="button" className={styles.toolButton}>
            Bold
          </button>
          <button type="button" className={styles.toolButton}>
            Italic
          </button>
          <button type="button" className={styles.toolButton}>
            Link
          </button>
          <button type="button" className={styles.toolButton}>
            Quote
          </button>
        </div>
      </section>

      <section className={styles.panel} aria-labelledby="focusgroup-tab-title">
        <h2 id="focusgroup-tab-title" className={styles.panelTitle}>
          Tabs
        </h2>
        <div className={styles.tabs} role="tablist" {...tablistFocusgroup}>
          {tabs.map((tab) => {
            const selected = tab === activeTab;

            return (
              <button
                key={tab}
                type="button"
                className={selected ? styles.tabActive : styles.tab}
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            );
          })}
        </div>
        <p className={styles.tabPanel} role="tabpanel">
          Tab キーでグループに入り、矢印キーで同じグループ内を移動します。
        </p>
      </section>
    </div>
  );
}
