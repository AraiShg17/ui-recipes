"use client";

import { useState } from "react";
import styles from "./ViewTransitionApiDemo.module.css";

const items = [
  { id: "spa", title: "SPA state", color: "#2563eb" },
  { id: "mpa", title: "MPA navigation", color: "#0f766e" },
  { id: "shared", title: "Shared element", color: "#7c3aed" },
];

export function ViewTransitionApiDemo() {
  const [activeId, setActiveId] = useState(items[0].id);
  const active = items.find((item) => item.id === activeId) ?? items[0];

  const selectItem = (id: string) => {
    if (!("startViewTransition" in document)) {
      setActiveId(id);
      return;
    }

    document.startViewTransition(() => {
      setActiveId(id);
    });
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.buttonGrid} aria-label="View Transition の対象">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className={item.id === activeId ? styles.cardActive : styles.card}
            onClick={() => selectItem(item.id)}
          >
            <span
              className={styles.swatch}
              style={{ "--swatch-color": item.color } as React.CSSProperties}
              aria-hidden
            />
            {item.title}
          </button>
        ))}
      </div>

      <section className={styles.preview} aria-live="polite">
        <span
          className={styles.previewSwatch}
          style={{ "--swatch-color": active.color } as React.CSSProperties}
          aria-hidden
        />
        <div className={styles.previewText}>
          <h2>{active.title}</h2>
          <p>
            `document.startViewTransition()` で DOM 更新を包み、CSS の
            `view-transition-name` で共有要素をつなげます。
          </p>
        </div>
      </section>
    </div>
  );
}
