import { withBasePath } from "@/lib/path";
import styles from "./SymbolsBlock.module.css";

type SymbolsBlockProps = { items: string[] };

export function SymbolsBlock({ items }: SymbolsBlockProps) {
  if (!items || items.length === 0) return null;

  // Sniff out if the string array uses our layout tags
  const hasPrefixes = items.some(item =>
    item.startsWith("[TITLE]") ||
    item.startsWith("[HEADER]") ||
    item.startsWith("[INTRO]") ||
    item.startsWith("[BULLET]") ||
    item.startsWith("[PARAGRAPH]") ||
    item.startsWith("[DIAGRAM]") ||
    item.startsWith("[SOURCE]")
  );

  // 🌟 PATH A: For complex pages with text paragraphs and headings
  if (hasPrefixes) {
    // Collect and isolate diagram strings, stripping the tag prefix cleanly
    const diagramLines = items
      .filter(line => line.startsWith('[DIAGRAM] '))
      .map(line => line.replace('[DIAGRAM] ', ''));

    // 🌟 2. Extract dynamic source lines from the array
    const sourceLines = items
      .filter(line => line.startsWith('[SOURCE] '))
      .map(line => line.replace('[SOURCE] ', ''));

    return (
      <section
        className={styles.symbolsCard}
        style={{
          backgroundImage: `url(${withBasePath("/images/maa/parchment.png")})`,
        }}
      >
        {items.map((line: string, index: number) => {
          // 1. Dynamic Main Title
          if (line.startsWith('[TITLE] ')) {
            return <h2 key={index}>{line.replace('[TITLE] ', '')}</h2>;
          }

          // 2. Section Sub-headers
          if (line.startsWith('[HEADER] ')) {
            return (
              <div key={index} className={styles.verseHeader}  >
                <strong>{line.replace('[HEADER] ', '')}</strong>
              </div>
            );
          }

          // 3. Four-point star bullet items (Splits text at ":" to bold the first term)
          if (line.startsWith('[BULLET] ')) {
            const cleanText = line.replace('[BULLET] ', '');
            const [title, ...rest] = cleanText.split(":");
            const description = rest.join(":");
            return (
              <ul key={index} style={{ paddingLeft: 0, listStyle: 'none' }}>
                <li>
                  <strong>{title}</strong>
                  {description && <span dangerouslySetInnerHTML={{ __html: description }} />}
                </li>
              </ul>
            );
          }

          // 4. Intros and Content Paragraphs
          if (line.startsWith('[PARAGRAPH] ') || line.startsWith('[INTRO] ')) {
            const cleanText = line.replace('[PARAGRAPH] ', '').replace('[INTRO] ', '');
            return <p key={index} dangerouslySetInnerHTML={{ __html: cleanText }} style={{ marginBottom: "1rem" }} />;
          }

          return null;
        })}

        {/* 🌟 5. Renders the geometry diagram lines combined as a single monospace element */}
        {diagramLines.length > 0 && (
          <pre
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: '0.9rem',
              fontWeight: 700,
              lineHeight: '1.4',
              whiteSpace: 'pre', /* Preserves all exact spaces and connecting alignment lines */
              overflowX: 'auto', /* Prevents screen breaking on mobile layouts */
              background: 'rgba(255, 255, 255, 0.25)',
              padding: '1.25rem',
              borderRadius: '6px',
              marginTop: '1.5rem',
              color: '#78350f',
              border: '1px solid rgba(139, 92, 26, 0.15)'
            }}
          >
            {diagramLines.join('\n')}
          </pre>
        )}

        {/* 🌟 4. Render Dynamic Reference Footer if sources exist in the array */}
        {sourceLines.length > 0 && (
          <footer
            style={{
              marginTop: '3rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(139, 92, 26, 0.15)',
              fontFamily: "'EB Garamond', serif",
              fontSize: '1rem',
              color: '#57534e'
            }}
          >
            <span style={{ fontStyle: 'italic', display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#2c1a0b' }}>
              References & Philosophical Sources:
            </span>
            <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
              {sourceLines.map((sourceText, sIdx) => (
                <li key={sIdx} style={{ paddingLeft: 0, marginBottom: '0.35rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '0.85rem', marginTop: '0.1rem' }}>📖</span>
                  <span dangerouslySetInnerHTML={{ __html: sourceText }} />
                </li>
              ))}
            </ul>
          </footer>
        )}
      </section>
    );
  }

  // 🌟 PATH B: 100% Backwards Compatible Fallback for your original pages
  return (
   <section
        className={styles.symbolsCard}
        style={{
          backgroundImage: `url(${withBasePath("/images/maa/parchment.png")})`,
        }}
      >
      <h2>Story</h2>

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
