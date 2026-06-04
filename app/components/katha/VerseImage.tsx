import { withBasePath } from "@/lib/path";
import Image from "next/image";
import styles from "./VerseImage.module.css";

type VerseImageProps = {
  src: string;
  alt: string;
};

export function VerseImage({ src, alt }: VerseImageProps) {
  return (
    <div className={styles.verseImage}>
      <Image
         src={withBasePath(src)}
        alt={alt}
        width={900}
        height={600}
        className="rounded-xl shadow-md"
      />
    </div>
  );
}