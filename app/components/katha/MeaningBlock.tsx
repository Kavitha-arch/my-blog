import styles from "./MeaningBlock.module.css";

type MeaningBlockProps = {
  items: string[];
};

export function MeaningBlock({ items }: MeaningBlockProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className={styles.meaningCard}>
      <h2>Meaning</h2>

      {items.map((item, i) => (
        <p
          key={i}
          dangerouslySetInnerHTML={{ __html: item }}
        />
      ))}
    </section>
  );
}
