"use client";

import { useRef, useState, useCallback, useMemo } from "react";
import styles from "./FrostedTileCursorDemo.module.css";

const TILE_SIZE = 48;
const COLS = 24;
const ROWS = 8;

export function FrostedTileCursorDemo() {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(
    null,
  );
  const wrapRef = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);
  const onMouseLeave = useCallback(() => setPosition(null), []);

  const tiles = useMemo(
    () => Array.from({ length: COLS * ROWS }, (_, i) => i),
    [],
  );

  return (
    <div
      ref={wrapRef}
      className={styles.wrap}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={
        {
          "--mouse-x": position ? `${position.x}px` : undefined,
          "--mouse-y": position ? `${position.y}px` : undefined,
        } as React.CSSProperties
      }
    >
      {/* 円: --mouse-x / --mouse-y でマウス位置に追従 */}
      <div className={styles.cursorGlow} aria-hidden />

      {/* タイル: 各要素に backdrop-filter blur ＋ inset box-shadow */}
      <div className={styles.tileGrid}>
        {tiles.map((i) => (
          <div key={i} className={styles.tile} aria-hidden />
        ))}
      </div>
    </div>
  );
}
