"use client";

import { useRef, useState } from "react";
import styles from "./Chrome150CssDomA11yDemo.module.css";

type ScrollResult = void | Promise<boolean>;

export function Chrome150CssDomA11yDemo() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [scrollStatus, setScrollStatus] = useState("未実行");

  const scrollToEnd = async () => {
    const scroller = scrollerRef.current;
    if (!scroller) {
      return;
    }

    const scrollTo = scroller.scrollTo as (options: ScrollToOptions) => ScrollResult;
    const result = scrollTo({
      left: scroller.scrollWidth,
      behavior: "smooth",
    });

    if (result && typeof result.then === "function") {
      const completed = await result;
      setScrollStatus(completed ? "smooth scroll 完了" : "途中で中断");
      return;
    }

    setScrollStatus("Promise 非対応ブラウザでは即時更新");
  };

  return (
    <div className={styles.wrap}>
      <section className={styles.panel}>
        <h2 className={styles.panelTitle}>flex-wrap: balance</h2>
        <div className={styles.balanceRow}>
          <span>CSS</span>
          <span>DOM</span>
          <span>Forms</span>
          <span>Focus</span>
          <span>SVG</span>
        </div>
      </section>

      <section className={styles.panel}>
        <h2 className={styles.panelTitle}>scroll promises</h2>
        <div ref={scrollerRef} className={styles.scroller} tabIndex={0}>
          <span>start</span>
          <span>middle</span>
          <span>end</span>
        </div>
        <button type="button" className={styles.action} onClick={scrollToEnd}>
          右端へ smooth scroll
        </button>
        <p className={styles.status}>{scrollStatus}</p>
      </section>

      <section className={styles.panel}>
        <h2 className={styles.panelTitle}>path-length / zoom</h2>
        <div className={styles.metricCard}>
          <svg className={styles.progress} viewBox="0 0 120 120" aria-hidden>
            <circle className={styles.progressTrack} cx="60" cy="60" r="46" />
            <circle className={styles.progressValue} cx="60" cy="60" r="46" />
          </svg>
          <span>hover で animatable zoom</span>
        </div>
      </section>
    </div>
  );
}
