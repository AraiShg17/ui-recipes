"use client";

import { useRef } from "react";
import styles from "./DialogDemo.module.css";

export function DialogDemo() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <div className={styles.wrap}>
      <button type="button" onClick={openDialog} className={styles.trigger}>
        確認ダイアログを開く
      </button>

      <dialog ref={dialogRef} className={styles.dialog} aria-labelledby="dialog-title">
        <div className={styles.dialogContent}>
          <h2 id="dialog-title" className={styles.dialogTitle}>
            操作の確認
          </h2>
          <p className={styles.dialogBody}>
            この操作を実行してもよろしいですか？取り消すことはできません。
          </p>
          <div className={styles.dialogActions}>
            <button type="button" onClick={closeDialog} className={styles.btnSecondary}>
              キャンセル
            </button>
            <button
              type="button"
              onClick={() => {
                closeDialog();
              }}
              className={styles.btnPrimary}
            >
              実行する
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
