type SymbolsBlockProps = {
  items: string[];
};

export function SymbolsBlock({ items }: SymbolsBlockProps) {
  return (
    <section className="symbols-card">
      <h2>Symbols</h2>

      <ul>
        {items.map((item, i) => {
          const [title, ...rest] = item.split(":");
          const description = rest.join(":"); // in case ":" appears again

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