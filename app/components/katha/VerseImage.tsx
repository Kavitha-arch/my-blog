import { withBasePath } from "@/lib/path";
import Image from "next/image";
import styles from "./VerseImage.module.css";

type VerseImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export function VerseImage({ src, alt, width = 900, height = 600 }: VerseImageProps) {
  return (
    <div className={styles.verseImage}>
      <Image
        src={withBasePath(src)}
        alt={alt}
        width={width}
        height={height}
        className="rounded-xl shadow-md"
      />
    </div>
  );
}