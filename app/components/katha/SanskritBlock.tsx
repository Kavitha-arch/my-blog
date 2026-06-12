import styles from "./SanskritBlock.module.css";
 
type SanskritBlockProps = {
  text: string;  
  forPrint?: boolean;
};

export function SanskritBlock({ 
  text,
  forPrint = false,
 }: SanskritBlockProps) {
  return (
    <div className={forPrint ? styles.print :styles.sanskritBlock}>
      {text
        .trim()
        .split("\n")
        .map((line, i) => (
          <p key={i}>{line.trim()}</p>
        ))}
    </div>
  );
}