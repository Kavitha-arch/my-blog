import styles from "./MeaningBlock.module.css";

type MeaningBlockProps = {
  items: string[];
  forPrint?: boolean;
};

export function MeaningBlock({
  items,
  forPrint = false,
}: MeaningBlockProps) {
  if (!items || items.length === 0) return null;

  const visibleItems = forPrint
    ? items.filter(
      item => !item.trim().includes("Psychological:")
    )
    : items;

  return (
    <section
      className={forPrint ? styles.print  : styles.meaningCard}
    >
   

      {visibleItems.map((item, i) => (
        <p
          key={i}
          dangerouslySetInnerHTML={{ __html: item }}
        />
      ))}
    </section>
  );
}