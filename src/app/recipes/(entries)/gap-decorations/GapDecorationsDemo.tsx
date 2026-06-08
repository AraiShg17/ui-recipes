"use client";

import { useMemo, useState } from "react";
import rulePattern from "./images/rule-pattern.svg";
import styles from "./GapDecorationsDemo.module.css";

type LayoutMode = "grid" | "flex";
type RuleStyle =
  | "solid"
  | "dashed"
  | "dotted"
  | "double"
  | "groove"
  | "ridge";
type RuleLook = "single" | "multi-color" | "image";
type RuleBreak = "normal" | "intersection" | "none";

const RULE_STYLES: { value: RuleStyle; label: string }[] = [
  { value: "solid", label: "solid" },
  { value: "dashed", label: "dashed" },
  { value: "dotted", label: "dotted" },
  { value: "double", label: "double" },
  { value: "groove", label: "groove" },
  { value: "ridge", label: "ridge" },
];

const RULE_LOOKS: { value: RuleLook; label: string; hint: string }[] = [
  {
    value: "single",
    label: "単色",
    hint: "row-rule-color / column-rule-color に1色",
  },
  {
    value: "multi-color",
    label: "交互色",
    hint: "色をカンマ列や repeat() で gap ごとに変える",
  },
  {
    value: "image",
    label: "画像パターン",
    hint: "row-rule-image（未対応時は色+太めの線で代用）",
  },
];

const RULE_BREAKS: { value: RuleBreak; label: string }[] = [
  { value: "normal", label: "normal" },
  { value: "intersection", label: "intersection" },
  { value: "none", label: "none" },
];

export function GapDecorationsDemo() {
  const [layout, setLayout] = useState<LayoutMode>("grid");
  const [gap, setGap] = useState(20);
  const [ruleWidth, setRuleWidth] = useState(2);
  const [ruleStyle, setRuleStyle] = useState<RuleStyle>("solid");
  const [ruleLook, setRuleLook] = useState<RuleLook>("single");
  const [ruleBreak, setRuleBreak] = useState<RuleBreak>("normal");

  const boardStyle = useMemo(
    () =>
      ({
        "--gap": `${gap}px`,
        "--rule-width":
          ruleLook === "image" ? `${Math.max(ruleWidth, 6)}px` : `${ruleWidth}px`,
        "--rule-style": ruleLook === "image" ? "solid" : ruleStyle,
        "--rule-break": ruleBreak,
        "--rule-color":
          ruleLook === "image"
            ? "light-dark(#c4a882, #a88860)"
            : "light-dark(#9aa8bc, #6b8ab8)",
        "--rule-color-list":
          "light-dark(#c27a6b, #e8a090), light-dark(#5a9e9e, #7ec8c0)",
        "--rule-image-url": `url(${rulePattern.src})`,
      }) as React.CSSProperties,
    [gap, ruleWidth, ruleStyle, ruleLook, ruleBreak]
  );

  const boardClassName = [
    layout === "grid" ? styles.boardGrid : styles.boardFlex,
    styles.board,
    ruleLook === "multi-color" && styles.boardMultiColor,
    ruleLook === "image" && styles.boardRuleImage,
  ]
    .filter(Boolean)
    .join(" ");

  const cells = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <div className={styles.wrap}>
      <p className={styles.lead}>
        <code>gap</code> のあいだに <code>row-rule</code> /{" "}
        <code>column-rule</code>（または <code>rule</code> 一括）で区切りを描きます。
        線種は <code>border-style</code> と同じ値（<code>dotted</code> /{" "}
        <code>dashed</code> など）が使えます。
      </p>

      <div className={styles.controls}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>レイアウト</legend>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="gap-layout"
              value="grid"
              checked={layout === "grid"}
              onChange={() => setLayout("grid")}
            />
            grid
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="gap-layout"
              value="flex"
              checked={layout === "flex"}
              onChange={() => setLayout("flex")}
            />
            flex（wrap）
          </label>
        </fieldset>

        <div className={styles.controlRow}>
          <label htmlFor="rule-style-select" className={styles.label}>
            row-rule-style / column-rule-style
          </label>
          <select
            id="rule-style-select"
            className={styles.select}
            value={ruleStyle}
            onChange={(e) => setRuleStyle(e.target.value as RuleStyle)}
            disabled={ruleLook === "image"}
            aria-label="線種"
          >
            {RULE_STYLES.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.controlRow}>
          <label htmlFor="rule-look-select" className={styles.label}>
            見た目
          </label>
          <select
            id="rule-look-select"
            className={styles.select}
            value={ruleLook}
            onChange={(e) => setRuleLook(e.target.value as RuleLook)}
            aria-label="単色・交互色・画像"
          >
            {RULE_LOOKS.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.controlRow}>
          <label htmlFor="rule-break-select" className={styles.label}>
            rule-break
          </label>
          <select
            id="rule-break-select"
            className={styles.select}
            value={ruleBreak}
            onChange={(e) => setRuleBreak(e.target.value as RuleBreak)}
            aria-label="交点での切り方"
          >
            {RULE_BREAKS.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.controlRow}>
          <label htmlFor="gap-slider" className={styles.label}>
            gap: {gap}px
          </label>
          <input
            id="gap-slider"
            type="range"
            className={styles.slider}
            min={8}
            max={48}
            step={2}
            value={gap}
            onChange={(e) => setGap(Number(e.target.value))}
            aria-label="gap"
          />
        </div>

        <div className={styles.controlRow}>
          <label htmlFor="rule-width-slider" className={styles.label}>
            rule-width: {ruleWidth}px
          </label>
          <input
            id="rule-width-slider"
            type="range"
            className={styles.slider}
            min={1}
            max={12}
            step={1}
            value={ruleWidth}
            onChange={(e) => setRuleWidth(Number(e.target.value))}
            aria-label="row-rule-width / column-rule-width"
          />
        </div>
      </div>

      <p className={styles.controlHint}>
        {RULE_LOOKS.find((o) => o.value === ruleLook)?.hint}
        {ruleLook === "image" &&
          " — 画像は仕様で検討中（row-rule-image）。未対応ブラウザでは単色の太線になります。"}
      </p>

      <div
        className={boardClassName}
        style={boardStyle}
        aria-label="gap decorations デモ"
      >
        {cells.map((n) => (
          <div key={n} className={styles.cell}>
            {n}
          </div>
        ))}
      </div>

      <section
        className={styles.animSection}
        aria-labelledby="gap-anim-title"
      >
        <h2 id="gap-anim-title" className={styles.guideTitle}>
          アニメーション（rule-color / rule-inset）
        </h2>
        <p className={styles.animLead}>
          <code>rule-color</code>・<code>rule-width</code>・<code>rule-inset</code>{" "}
          などは transition 可能です（Chrome 149+）。各サンプルにホバー／フォーカスしてみてください。
        </p>

        <div className={styles.animGrid}>
          <article className={styles.animCard}>
            <h3 className={styles.animCardTitle}>グリッド全体 — 色だけ変える</h3>
            <p className={styles.animCardHint}>
              <code>transition: rule-color</code>
            </p>
            <div
              className={`${styles.animBoard} ${styles.animColorGrid}`}
              aria-label="ホバーで区切り線の色が変わるグリッド"
            >
              {["A", "B", "C", "D", "E", "F"].map((label) => (
                <div key={label} className={styles.animCell}>
                  {label}
                </div>
              ))}
            </div>
          </article>

          <article className={styles.animCard}>
            <h3 className={styles.animCardTitle}>グリッド全体 — 線が伸びる</h3>
            <p className={styles.animCardHint}>
              <code>rule-inset: 10px → 0</code>
            </p>
            <div
              className={`${styles.animBoard} ${styles.animInsetGrid}`}
              aria-label="ホバーで区切り線が gap 端まで伸びるグリッド"
            >
              {["1", "2", "3", "4", "5", "6"].map((label) => (
                <div key={label} className={styles.animCell}>
                  {label}
                </div>
              ))}
            </div>
          </article>

          <article className={styles.animCard}>
            <h3 className={styles.animCardTitle}>カレンダー — 交点がつながる</h3>
            <p className={styles.animCardHint}>
              <code>rule-inset-cap: 0</code> +{" "}
              <code>rule-inset-junction: 12px → 0</code>（3行以上の格子で交点が見える）
            </p>
            <div
              className={`${styles.animBoard} ${styles.animCalendarGrid}`}
              aria-label="ホバーで交点付近の線が接続するカレンダーグリッド"
            >
              {Array.from({ length: 21 }, (_, i) => (
                <div key={i} className={styles.animCellSmall}>
                  {i + 1}
                </div>
              ))}
            </div>
          </article>

          <article className={styles.animCard}>
            <h3 className={styles.animCardTitle}>
              行ごと — ホバーしたカードの下だけ
            </h3>
            <p className={styles.animCardHint}>
              mini grid（2行）の <code>row-rule</code> +
              <code>rule-inset-cap</code>（端を内側へ）。交点用の junction ではない。
            </p>
            <div className={styles.animTimeline} role="list">
              {["Inbox", "Drafts", "Archive", "Trash"].map((label) => (
                <div
                  key={label}
                  className={styles.animRowRule}
                  role="listitem"
                  tabIndex={0}
                >
                  <div className={styles.animRowCard}>{label}</div>
                  <div className={styles.animRowSpacer} aria-hidden />
                </div>
              ))}
            </div>
          </article>

          <article className={styles.animCard}>
            <h3 className={styles.animCardTitle}>太さも変える</h3>
            <p className={styles.animCardHint}>
              <code>rule-width: 1px → 3px</code> + 色
            </p>
            <div
              className={`${styles.animBoard} ${styles.animWidthGrid}`}
              aria-label="ホバーで区切り線が太くなるグリッド"
            >
              {["α", "β", "γ", "δ"].map((label) => (
                <div key={label} className={styles.animCell}>
                  {label}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className={styles.propsGuide} aria-labelledby="gap-props-title">
        <h2 id="gap-props-title" className={styles.guideTitle}>
          主なプロパティ（軽い解説）
        </h2>
        <dl className={styles.propsList}>
          <div className={styles.propsItem}>
            <dt>
              <code>row-rule</code> / <code>column-rule</code> /{" "}
              <code>rule</code>
            </dt>
            <dd>
              ショートハンド。<code>幅 || 線種 || 色</code>（例:{" "}
              <code>2px dashed #999</code>）。row / column / 両方をまとめて指定。
            </dd>
          </div>
          <div className={styles.propsItem}>
            <dt>
              <code>row-rule-width</code> / <code>column-rule-width</code>
            </dt>
            <dd>
              線の太さ。<code>repeat(2, 1px) 4px</code> のように gap
              ごとに変えられる。
            </dd>
          </div>
          <div className={styles.propsItem}>
            <dt>
              <code>row-rule-style</code> / <code>column-rule-style</code>
            </dt>
            <dd>
              <code>border-style</code> と同じ（<code>solid</code>,{" "}
              <code>dashed</code>, <code>dotted</code>, <code>double</code>,{" "}
              <code>groove</code>, <code>ridge</code> など）。gap
              ごとにカンマ列や <code>repeat()</code> も可。
            </dd>
          </div>
          <div className={styles.propsItem}>
            <dt>
              <code>row-rule-color</code> / <code>column-rule-color</code>
            </dt>
            <dd>
              線の色。<code>red, blue, red</code> のように gap
              単位で色を変えられる（交互色デモ）。
            </dd>
          </div>
          <div className={styles.propsItem}>
            <dt>
              <code>row-rule-break</code> / <code>column-rule-break</code> /{" "}
              <code>rule-break</code>
            </dt>
            <dd>
              交点の切り方。<code>intersection</code> は十字で途切れる、
              <code>none</code> は交点を貫通して1本の線になる。
            </dd>
          </div>
          <div className={styles.propsItem}>
            <dt>
              <code>rule-inset-cap</code> / <code>rule-inset-junction</code>
            </dt>
            <dd>
              <code>rule-inset-cap</code> は線の端（T字の先端）を内側に寄せる。1列リストの
              下線はこちら。<code>rule-inset-junction</code> は十字の交点だけ。
              カレンダーは <code>cap: 0</code> + <code>junction</code> の組み合わせ。
            </dd>
          </div>
          <div className={styles.propsItem}>
            <dt>
              <code>transition: rule-color</code> ほか
            </dt>
            <dd>
              <code>rule-color</code>・<code>rule-width</code>・
              <code>rule-inset</code> はアニメーション可能。グリッドの区切り線そのものを
              hover で強調できる（装飾的 enhancement）。
            </dd>
          </div>
          <div className={styles.propsItem}>
            <dt>
              <code>rule-visibility-items</code>
            </dt>
            <dd>
              <code>all</code> / <code>around</code> / <code>between</code>{" "}
              で線を出す gap を制御。
            </dd>
          </div>
          <div className={styles.propsItem}>
            <dt>
              <code>row-rule-image</code>（将来・一部検討中）
            </dt>
            <dd>
              <code>border-image</code> 的に画像で区切る案。現行 Chrome
              149 では width / style / color が中心。画像モードでは{" "}
              <code>row-rule-image: url(...)</code> を試し、未対応なら色の線にフォールバック。
            </dd>
          </div>
        </dl>
      </section>

      <p className={styles.note}>
        対応: Chrome / Edge 149+ など。未対応ブラウザでは <code>gap</code>{" "}
        のみ有効（プログレッシブエンハンスメント）。詳細は{" "}
        <a
          href="https://developer.chrome.com/blog/gap-decorations-stable"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gap decorations
        </a>
        。
      </p>
    </div>
  );
}
