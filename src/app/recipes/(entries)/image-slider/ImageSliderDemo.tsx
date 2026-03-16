import styles from "./ImageSliderDemo.module.css";

const IMAGES = [
  {
    id: 1,
    src: "https://picsum.photos/id/100/1200/630",
    alt: "画像1：セピア色の海辺の写真",
  },
  {
    id: 2,
    src: "https://picsum.photos/id/101/1200/630",
    alt: "画像2：廃墟と青空の写真",
  },
  {
    id: 3,
    src: "https://picsum.photos/id/102/1200/630",
    alt: "画像3：野苺の写真",
  },
  {
    id: 4,
    src: "https://picsum.photos/id/103/1200/630",
    alt: "画像4：公園でくつろぐ場面を撮った写真",
  },
  {
    id: 5,
    src: "https://picsum.photos/id/106/1200/630",
    alt: "画像5：枝に咲く花と青空の写真",
  },
];

export function ImageSliderDemo() {
  return (
    <div className={styles.scope}>
      <div className={styles.structure}>
        <div className={styles.scroller} tabIndex={0}>
          {IMAGES.map((image) => (
            <div key={image.id} className={styles.item}>
              <img
                src={image.src}
                alt={image.alt}
                width={1200}
                height={630}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* 補助用アイコン: ::scroll-button 対応ブラウザでボタン位置の目安にする */}
        <svg
          className={styles.icon}
          data-dir="prev"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path d="M16 4L8 12L16 20" />
        </svg>
        <svg
          className={styles.icon}
          data-dir="next"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path d="M8 4L16 12L8 20" />
        </svg>
      </div>
    </div>
  );
}

