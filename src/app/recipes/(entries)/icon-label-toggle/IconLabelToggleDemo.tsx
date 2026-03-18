"use client";

import { useState } from "react";
import {
  MdMenu,
  MdHome,
  MdSearch,
  MdFolder,
  MdSettings,
  MdHelp,
} from "react-icons/md";
import styles from "./IconLabelToggleDemo.module.css";

const SIDEBAR_ITEMS = [
  { icon: MdHome, label: "Home" },
  { icon: MdSearch, label: "Search" },
  { icon: MdFolder, label: "Files" },
  { icon: MdSettings, label: "Settings" },
  { icon: MdHelp, label: "Help" },
] as const;

export function IconLabelToggleDemo() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.wrap}>
      <div
        className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`}
        data-open={sidebarOpen ? "" : undefined}
      >
        <button
          type="button"
          className={styles.sidebarToggle}
          onClick={() => setSidebarOpen((o) => !o)}
          aria-pressed={sidebarOpen}
          aria-label={sidebarOpen ? "サイドバーを閉じる" : "サイドバーを開く"}
        >
          <MdMenu className={styles.sidebarToggleIcon} aria-hidden />
          <span className={styles.sidebarToggleLabel}>
            {sidebarOpen ? "Close" : "Open"}
          </span>
        </button>
        <div className={styles.sidebarInner}>
          {SIDEBAR_ITEMS.map(({ icon: Icon, label }) => (
            <button
              key={label}
              type="button"
              className={styles.sidebarItem}
              title={label}
            >
              <Icon className={styles.sidebarItemIcon} aria-hidden />
              <span className={styles.sidebarItemLabel}>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
