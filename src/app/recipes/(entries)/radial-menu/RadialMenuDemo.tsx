"use client";

import { useState } from "react";
import styles from "./RadialMenuDemo.module.css";

type Item = {
  id: number;
  label: string;
  icon: string;
};

const ITEMS: Item[] = [
  { id: 0, label: "ユーザー", icon: "👤" },
  { id: 1, label: "設定", icon: "⚙️" },
  { id: 2, label: "検索", icon: "🔎" },
  { id: 3, label: "通知", icon: "💬" },
  { id: 4, label: "お気に入り", icon: "⭐️" },
  { id: 5, label: "ファイル", icon: "📄" },
];

const OUTER_RADIUS = 96;
const INNER_RADIUS = 60;

const BURST_ITEMS: Item[] = [
  { id: 0, label: "ユーザー", icon: "👤" },
  { id: 1, label: "設定", icon: "⚙️" },
  { id: 2, label: "検索", icon: "🔎" },
  { id: 3, label: "通知", icon: "💬" },
  { id: 4, label: "お気に入り", icon: "⭐️" },
  { id: 5, label: "ファイル", icon: "📄" },
  { id: 6, label: "共有", icon: "🔗" },
  { id: 7, label: "ヘルプ", icon: "❓" },
];

function polarToCartesian(radius: number, angleDeg: number) {
  const rad = (Math.PI / 180) * angleDeg;
  const x = 100 + radius * Math.cos(rad);
  const y = 100 + radius * Math.sin(rad);
  return { x, y };
}

function createSegmentPath(startAngle: number, endAngle: number) {
  const outerStart = polarToCartesian(OUTER_RADIUS, startAngle);
  const outerEnd = polarToCartesian(OUTER_RADIUS, endAngle);
  const innerEnd = polarToCartesian(INNER_RADIUS, endAngle);
  const innerStart = polarToCartesian(INNER_RADIUS, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${OUTER_RADIUS} ${OUTER_RADIUS} 0 ${largeArcFlag} 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${INNER_RADIUS} ${INNER_RADIUS} 0 ${largeArcFlag} 0 ${innerStart.x} ${innerStart.y}`,
    "Z",
  ].join(" ");
}

type RingVariant = {
  totalArcDeg: number;
  startBase: number;
  label: string;
};

const HORSESHOE: RingVariant = {
  totalArcDeg: 300,
  startBase: 300,
  label: "蹄形",
};

function RingMenu({
  totalArcDeg,
  startBase,
}: Pick<RingVariant, "totalArcDeg" | "startBase">) {
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const segmentAngle = totalArcDeg / ITEMS.length;

  const fullRingPath = createSegmentPath(startBase, startBase + totalArcDeg);
  const baseHighlightPath = createSegmentPath(
    startBase,
    startBase + segmentAngle,
  );
  const highlightRotDeg =
    hoveredIndex == null ? 0 : hoveredIndex * segmentAngle;

  return (
    <div className={styles.menu}>
      <button
        type="button"
        className={styles.centerButton}
        aria-expanded={open}
        onClick={() =>
          setOpen((v) => {
            const next = !v;
            if (!next) setHoveredIndex(null);
            return next;
          })
        }
      >
        <span className={styles.centerButtonIcon}>≡</span>
      </button>

      <svg className={styles.ring} viewBox="0 0 200 200" aria-hidden>
        <path
          d={fullRingPath}
          className={styles.ringPath}
          data-open={open || undefined}
        />

        {/* ホバー追従ハイライト: 1枚のセグメントを回転させて追従 */}
        <g
          className={styles.highlight}
          data-show={(open && hoveredIndex != null) || undefined}
          style={{ "--rot": `${highlightRotDeg}deg` } as React.CSSProperties}
        >
          <path d={baseHighlightPath} className={styles.highlightPath} />
        </g>
        {ITEMS.map((item, index) => {
          const startAngle = startBase + index * segmentAngle;
          const endAngle = startAngle + segmentAngle;
          const segmentPathD = createSegmentPath(startAngle, endAngle);
          const midAngle = (startAngle + endAngle) / 2;
          const iconRadius = (OUTER_RADIUS + INNER_RADIUS) / 2;
          const iconPos = polarToCartesian(iconRadius, midAngle);

          return (
            <g
              key={item.id}
              className={styles.segment}
              data-open={open || undefined}
              style={{ "--index": index } as React.CSSProperties}
            >
              <path
                d={segmentPathD}
                className={styles.segmentHitArea}
                aria-hidden
                onMouseEnter={() => setHoveredIndex(index)}
                onFocus={() => setHoveredIndex(index)}
              />
              <foreignObject
                x={iconPos.x - 10}
                y={iconPos.y - 10}
                width="20"
                height="20"
                className={styles.segmentIconWrap}
              >
                <div className={styles.segmentIcon} aria-hidden>
                  {item.icon}
                </div>
              </foreignObject>
              <title>{item.label}</title>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function BurstMenu() {
  const [open, setOpen] = useState(false);
  const radius = 78;

  return (
    <div className={styles.menu}>
      <button
        type="button"
        className={styles.centerButton}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles.centerButtonIcon}>≡</span>
      </button>

      <div className={styles.burst} data-open={open || undefined}>
        {BURST_ITEMS.map((item, i) => {
          const angle = -90 + (360 / BURST_ITEMS.length) * i;
          const rad = (Math.PI / 180) * angle;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;

          return (
            <button
              key={item.id}
              type="button"
              className={styles.burstItem}
              style={
                {
                  "--x": `${x.toFixed(2)}px`,
                  "--y": `${y.toFixed(2)}px`,
                  "--i": i,
                } as React.CSSProperties
              }
              aria-label={item.label}
              onClick={() => setOpen(false)}
            >
              <span className={styles.burstIcon} aria-hidden>
                {item.icon}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function RadialMenuDemo() {
  return (
    <div className={styles.wrap}>
      <section className={styles.sample}>
        <p className={styles.sampleLabel}>{HORSESHOE.label}</p>
        <RingMenu
          totalArcDeg={HORSESHOE.totalArcDeg}
          startBase={HORSESHOE.startBase}
        />
      </section>

      <section className={styles.sample}>
        <p className={styles.sampleLabel}>バースト</p>
        <BurstMenu />
      </section>
    </div>
  );
}
