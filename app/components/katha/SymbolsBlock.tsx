type SymbolsBlockProps = { items: string[] };

export function SymbolsBlock({ items }: SymbolsBlockProps) {
  return (
    <section className="symbols-card">
      <h2>Symbols</h2>
      <ul>
        {items.map((item, i) => {
          const [title, ...rest] = item.split(":");
          const description = rest.join(":");
          const isVerseHeader = /^[🌸🔱🌊🏔️]/.test(item.trim());

          return (
            <li
              key={i}
              style={{ listStyleType: isVerseHeader ? "none" : "disc" }}
              className={isVerseHeader ? "verse-header" : ""}
            >
              {isVerseHeader ? (
                <strong>{item}</strong>
              ) : (
                <>
                  <strong>{title}:</strong>
                  {description && <span> {description}</span>}
                </>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
