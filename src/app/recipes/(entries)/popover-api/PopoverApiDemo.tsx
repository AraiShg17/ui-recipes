import styles from "./PopoverApiDemo.module.css";

export function PopoverApiDemo() {
  return (
    <div className={styles.wrap}>
      <button type="button" className={styles.trigger} popoverTarget="chrome150-menu">
        メニューを開く
      </button>

      <div id="chrome150-menu" className={styles.menu} popover="auto">
        <div className={styles.menuHeader}>
          <h2>Popover stack</h2>
          <button
            type="button"
            className={styles.closeButton}
            popoverTarget="chrome150-menu"
            popoverTargetAction="hide"
            aria-label="閉じる"
          >
            ×
          </button>
        </div>
        <p>
          `popover=auto` の内側から `popover=hint` を開いても、Chrome 150 では意図せず親を閉じにくくなりました。
        </p>
        <button type="button" className={styles.hintButton} popoverTarget="chrome150-hint">
          hint popover を開く
        </button>
      </div>

      <div id="chrome150-hint" className={styles.hint} popover="hint">
        hint は補助情報向け。親の auto popover と組み合わせやすくなっています。
      </div>
    </div>
  );
}
