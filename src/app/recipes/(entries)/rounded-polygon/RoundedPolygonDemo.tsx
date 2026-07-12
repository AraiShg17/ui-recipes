import styles from "./RoundedPolygonDemo.module.css";

const shapes = [
  { label: "Hex", className: "hex" },
  { label: "Badge", className: "badge" },
  { label: "Pointer", className: "pointer" },
];

export function RoundedPolygonDemo() {
  return (
    <div className={styles.wrap}>
      <p className={styles.lead}>
        `polygon(round 16px, ...)` のように角丸半径を先頭に指定して、点列はそのまま保てます。
      </p>

      <div className={styles.shapeGrid}>
        {shapes.map((shape) => (
          <div key={shape.label} className={styles.shapeItem}>
            <div className={`${styles.shape} ${styles[shape.className]}`}>
              {shape.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
