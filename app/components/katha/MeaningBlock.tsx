 type MeaningBlockProps = {
  items: string[];
};

export function MeaningBlock({ items }: MeaningBlockProps) {
  return (
    <section className="meaning-card">
      <h2>Meaning</h2>

      {items.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </section>
  );
}