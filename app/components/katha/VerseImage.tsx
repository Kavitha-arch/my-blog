import { withBasePath } from "@/lib/path";
import Image from "next/image";
import styles from "./VerseImage.module.css";

type VerseImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  forPrint?: boolean;
};

export function VerseImage({ src,
  alt,
  width = 900,
  height = 600,
  forPrint = false
}: VerseImageProps) {
  return (
    <figure className={styles.verseImage}>
      <Image
        src={withBasePath(src)}
        alt={alt}
        width={width}
        height={height}
        className="rounded-xl shadow-md"
      />
      {forPrint && (
        <figcaption className={styles.imageTitle}>
          {alt}
        </figcaption>)}
    </figure>

  );
}