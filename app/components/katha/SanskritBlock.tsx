import styles from "./SanskritBlock.module.css";
 
type SanskritBlockProps = {
  text: string;
};

export function SanskritBlock({ text }: SanskritBlockProps) {
  return (
    <div className={styles.sanskritBlock}>
      {text
        .trim()
        .split("\n")
        .map((line, i) => (
          <p key={i}>{line.trim()}</p>
        ))}
    </div>
  );
}