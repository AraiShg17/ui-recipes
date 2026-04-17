"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import styles from "./PrimaryColorMixDemo.module.css";

const DEFAULT_HEX = "#2563eb";

export function PrimaryColorMixDemo() {
  const [primaryHex, setPrimaryHex] = useState(DEFAULT_HEX);

  const vars = {
    "--primary-color": primaryHex,
  } as CSSProperties;

  return (
    <div className={styles.wrap} style={vars}>
      <input
        className={styles.colorInput}
        type="color"
        value={primaryHex}
        onChange={(e) => setPrimaryHex(e.target.value)}
        aria-label="primary-color"
      />
      <div className={styles.titleBlock}>
        <table className={styles.mixTable}>
          <caption className={styles.mixCaption}>
            タイトルに指定している color
          </caption>
          <tbody>
            <tr>
              <th scope="row" className={styles.mixLabel}>
                color
              </th>
              <td className={styles.mixValue}>
                <code>
                  color-mix(in oklab, var(--primary-color) 50%, transparent 50%)
                </code>
              </td>
            </tr>
          </tbody>
        </table>
        <p className={styles.title}>タイトルテキストのサンプル</p>
      </div>
    </div>
  );
}
