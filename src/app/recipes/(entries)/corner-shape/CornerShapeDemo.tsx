"use client";

import { useCallback, useState } from "react";
import styles from "./CornerShapeDemo.module.css";

/* キーワードは superellipse(k) のプリセット。shape で選ぶとスライダーがこの k になる */
const SHAPE_PRESETS: { value: string; label: string; k: number }[] = [
  { value: "round", label: "round", k: 1 },
  { value: "squircle", label: "squircle", k: 2 },
  { value: "square", label: "square", k: 10 },
  { value: "bevel", label: "bevel", k: 0 },
  { value: "scoop", label: "scoop", k: -1 },
  { value: "notch", label: "notch", k: -10 },
];

const toSuperellipse = (k: number) => `superellipse(${k})`;

export function CornerShapeDemo() {
  const [shapePreset, setShapePreset] = useState("round");
  const [superellipseK, setSuperellipseK] = useState(1);
  const [radius, setRadius] = useState(32);

  const cornerShapeValue = toSuperellipse(superellipseK);

  const handleShapePresetChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      setShapePreset(value);
      const preset = SHAPE_PRESETS.find((p) => p.value === value);
      if (preset) {
        setSuperellipseK(preset.k);
      }
    },
    []
  );

  const boxStyle = {
    "--corner-shape": cornerShapeValue,
    "--radius": `${radius}px`,
  } as React.CSSProperties;

  return (
    <div className={styles.wrap}>
      <div className={styles.controls}>
        <div className={styles.controlRow}>
          <label htmlFor="shape-select" className={styles.label}>
            shape（プリセット）
          </label>
          <select
            id="shape-select"
            className={styles.select}
            value={shapePreset}
            onChange={handleShapePresetChange}
            aria-label="角の形のプリセットを選択"
          >
            {SHAPE_PRESETS.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.controlRow}>
          <label htmlFor="radius-slider" className={styles.label}>
            border-radius: {radius}px
          </label>
          <input
            id="radius-slider"
            type="range"
            className={styles.slider}
            min={0}
            max={80}
            step={2}
            value={radius}
            onChange={(e) => setRadius(Number(e.target.value))}
            aria-label="border-radius"
          />
        </div>

        <div className={styles.controlRow}>
          <label htmlFor="superellipse-slider" className={styles.label}>
            superellipse(k): {superellipseK}
          </label>
          <input
            id="superellipse-slider"
            type="range"
            className={styles.slider}
            min={-10}
            max={10}
            step={0.1}
            value={superellipseK}
            onChange={(e) => setSuperellipseK(Number(e.target.value))}
            aria-label="superellipse の k（形の適用度合い）"
          />
        </div>
      </div>

      <div className={styles.previewRow} aria-hidden>
        <div
          className={`${styles.previewBox} ${styles.previewBoxSquare}`}
          style={boxStyle}
        >
          <span className={styles.previewLabel}>正方形 160×160</span>
        </div>
        <div
          className={`${styles.previewBox} ${styles.previewBoxRect}`}
          style={boxStyle}
        >
          <span className={styles.previewLabel}>長方形 240×160</span>
        </div>
      </div>

      <section
        className={styles.presetGallery}
        aria-labelledby="corner-shape-preset-gallery-title"
      >
        <h2 id="corner-shape-preset-gallery-title" className={styles.galleryTitle}>
          プリセット比較（border-radius 32px 固定）
        </h2>
        <p className={styles.galleryHint}>
          同じ半径で superellipse(k) の違いだけを並べています。
        </p>
        <div className={styles.presetGrid}>
          {SHAPE_PRESETS.map(({ value, label, k }) => (
            <div key={value} className={styles.presetItem}>
              <div
                className={styles.presetBox}
                style={
                  {
                    "--corner-shape": toSuperellipse(k),
                    "--radius": "32px",
                  } as React.CSSProperties
                }
                title={`${label} — superellipse(${k})`}
              />
              <span className={styles.presetCaption}>{label}</span>
              <span className={styles.presetK}>k = {k}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
