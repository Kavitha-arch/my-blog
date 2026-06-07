import styles from "./ReflectionBlock.module.css";

type ReflectionBlockProps = {
  // Accepts a raw string or an array of strings safely
  text: string | string[]; 
};

export function ReflectionBlock({ text }: ReflectionBlockProps) {
  if (!text) return null;

  // 🛠️ FIX: Convert the incoming data into a uniform array of lines
  const lines = Array.isArray(text) 
    ? text 
    : text.split("\n");

  return (
    <section className={styles.reflectionCard}>
      <h2>✍️ My Reflection</h2>

      <blockquote>
        {lines.map((line, i) => {
          // Double check to ensure item is a string before running .trim()
          const cleanLine = typeof line === "string" ? line.trim() : "";
          
          if (!cleanLine) return null; // Skips empty rows safely
          
          return <p key={i}>{cleanLine}</p>;
        })}
      </blockquote>
    </section>
  );
}
