import styles from "./VerseHero.module.css";
type VerseHeroProps = {
  text: string;
};

export function VerseHero({ text }: VerseHeroProps) {
  return (
     <div className={styles.heroSubtitle}>
      {text
        .trim()
        .split("\n")
        .map((line, i) => (
          <p key={i}>{line.trim()}</p>
        ))}
    </div>
  );
}