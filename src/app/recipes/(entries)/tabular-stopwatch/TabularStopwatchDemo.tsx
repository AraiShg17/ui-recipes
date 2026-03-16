"use client";

import { useEffect, useState } from "react";
import styles from "./TabularStopwatchDemo.module.css";

type StopwatchState = {
  startedAt: number | null;
  elapsedBeforeStart: number;
};

function formatTime(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const centiseconds = Math.floor((ms % 1000) / 10);

  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");
  const cs = String(centiseconds).padStart(2, "0");

  return `${mm}:${ss}.${cs}`;
}

export function TabularStopwatchDemo() {
  const [{ startedAt, elapsedBeforeStart }, setState] = useState<StopwatchState>({
    startedAt: null,
    elapsedBeforeStart: 0,
  });
  const [now, setNow] = useState(() => performance.now());

  useEffect(() => {
    if (startedAt == null) {
      return;
    }

    const id = window.setInterval(() => {
      setNow(performance.now());
    }, 50);

    return () => window.clearInterval(id);
  }, [startedAt]);

  const isRunning = startedAt != null;
  const elapsed = isRunning ? now - startedAt + elapsedBeforeStart : elapsedBeforeStart;

  return (
    <div className={styles.wrap}>
      <p className={styles.note}>
        同じストップウォッチを 2 つ表示し、右のタイマーだけ{" "}
        <code>font-variant-numeric: tabular-nums;</code> を指定しています。数字がカウントアップしても、tabular-nums
        側は桁幅が固定されるためレイアウトがガタつきにくくなります。
      </p>

      <div className={styles.timers}>
        <div className={styles.timerColumn}>
          <p className={styles.timerLabel}>1つ目：通常（プロポーショナル）</p>
          <p className={styles.timerValue}>{formatTime(elapsed)}</p>
        </div>
        <div className={styles.timerColumn}>
          <p className={styles.timerLabel}>2つ目：tabular-nums を適用</p>
          <p className={`${styles.timerValue} ${styles.tabularNums}`}>{formatTime(elapsed)}</p>
        </div>
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            if (isRunning) {
              // stop
              setState((prev) => ({
                startedAt: null,
                elapsedBeforeStart: elapsed,
              }));
            } else {
              // start
              const now = performance.now();
              setState((prev) => ({
                startedAt: now,
                elapsedBeforeStart: prev.elapsedBeforeStart,
              }));
              setNow(now);
            }
          }}
        >
          {isRunning ? "ストップ" : "スタート"}
        </button>
        <button
          type="button"
          className={styles.secondaryButton}
          onClick={() => {
            setState({
              startedAt: null,
              elapsedBeforeStart: 0,
            });
            setNow(performance.now());
          }}
          disabled={elapsed === 0}
        >
          リセット
        </button>
      </div>
    </div>
  );
}

