import Image from "next/image";

type VerseImageProps = {
  src: string;
  alt: string;
};

export function VerseImage({ src, alt }: VerseImageProps) {
  return (
    <div className="verse-image">
      <Image
        src={src}
        alt={alt}
        width={900}
        height={600}
        className="rounded-xl shadow-md"
      />
    </div>
  );
}