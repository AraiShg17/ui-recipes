import styles from "./AnimationTriggerDemo.module.css";

const CARDS = [
  { id: 1, label: "カード 1", text: "ビューポートに入ると play-forwards、出ると play-backwards。" },
  { id: 2, label: "カード 2", text: "timeline-trigger で view() の entry/exit 範囲を指定。" },
  { id: 3, label: "カード 3", text: "animation-trigger で --t に play-forwards / play-backwards を紐付け。" },
  { id: 4, label: "カード 4", text: "Chrome 145+ で利用可能（2026）。" },
];

export function AnimationTriggerDemo() {
  return (
    <div className={styles.wrap}>
      <p className={styles.note}>
        timeline-trigger / animation-trigger 非対応のブラウザではカードはそのまま表示されます。下にスクロールして確認。
      </p>
      <div className={styles.scrollWrap}>
        <div className={styles.spacer} aria-hidden />
        {CARDS.map((card) => (
          <article
            key={card.id}
            className={styles.card}
          >
            <h3 className={styles.cardTitle}>{card.label}</h3>
            <p className={styles.cardText}>{card.text}</p>
          </article>
        ))}
        <div className={styles.spacer} aria-hidden />
      </div>
    </div>
  );
}
