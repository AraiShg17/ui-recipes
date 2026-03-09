"use client";

import { useState } from "react";
import { MdDashboard, MdBarChart, MdLayers } from "react-icons/md";
import styles from "./SegmentedBorderButtonsDemo.module.css";

const SEGMENTS = [
  { id: "grid", icon: MdDashboard, label: "グリッド" },
  { id: "chart", icon: MdBarChart, label: "グラフ" },
  { id: "layers", icon: MdLayers, label: "レイヤー" },
] as const;

export function SegmentedBorderButtonsDemo() {
  const [activeId, setActiveId] = useState<string>("grid");

  return (
    <div className={styles.wrap}>
      <div
        className={styles.segmented}
        role="group"
        aria-label="表示切り替え"
      >
        {SEGMENTS.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            type="button"
            className={styles.segment}
            aria-pressed={activeId === id}
            aria-label={label}
            onClick={() => setActiveId(id)}
          >
            <span
              className={`${styles.segmentInner} ${activeId === id ? styles.segmentInnerActive : ""}`}
            >
              <Icon className={styles.segmentIcon} aria-hidden />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
