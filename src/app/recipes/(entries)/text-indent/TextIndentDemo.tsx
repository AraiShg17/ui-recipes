import styles from "./TextIndentDemo.module.css";

const SEG_A = "吾輩は猫である。名前はまだない。どこで生まれたかとんと見当がつかぬ。";
const SEG_B = "何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。";


const baseCards = [
  {
    label: "hanging",
    code: "text-indent: 1em hanging",
    className: styles.hanging,
  },
  {
    label: "each-line",
    code: "text-indent: 1em each-line",
    className: styles.eachLine,
  },
  {
    label: "hanging + each-line",
    code: "text-indent: 1em hanging each-line",
    className: styles.hangingEachLine,
  },
] as const;

export function TextIndentDemo() {
  return (
    <div className={styles.wrap}>
      {baseCards.map((card) => (
        <div key={card.label} className={styles.card}>
          <p className={styles.cardLabel}>{card.label}</p>
          <code className={styles.cardCode}>{card.code}</code>
          <p className={card.className}>
            {SEG_A}
            <br />
            {SEG_B}
          </p>
        </div>
      ))}
    </div>
  );
}
