import styles from "./SymbolsBlock.module.css";

type SymbolsBlockProps = { items: string[] };

export function SymbolsBlock({ items }: SymbolsBlockProps) {
  return (
    <section className={styles.symbolsCard}>
      <h2>Symbols</h2>
      
      <ul>
        {items.map((item, i) => {
          const isVerseHeader = i === 0;

          if (isVerseHeader) {
            return (
              <li key={i} className={styles.verseHeader}>
                <strong>{item}</strong>
              </li>
            );
          }

          const [title, ...rest] = item.split(":");
          const description = rest.join(":");

          return (
            <li key={i}>
              <strong>{title}:</strong>
              {description && <span> {description}</span>}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
