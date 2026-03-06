import Image from "next/image";
import icon01 from "./images/icon-01.png";
import icon02 from "./images/icon-02.png";
import icon03 from "./images/icon-03.png";
import styles from "./StackedImageHover.module.css";

const icons = [
  { src: icon01, alt: "アイコン1" },
  { src: icon02, alt: "アイコン2" },
  { src: icon03, alt: "アイコン3" },
];

export function StackedImageHover() {
  return (
    <div className={styles.stackRow}>
      {icons.map((icon) => (
        <div key={icon.alt} className={styles.stack}>
          <Image src={icon.src} alt="" aria-hidden />
          <Image src={icon.src} alt={icon.alt} />
        </div>
      ))}
    </div>
  );
}
