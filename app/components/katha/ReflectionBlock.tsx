import styles from "./ReflectionBlock.module.css";

type ReflectionBlockProps = {
  // Accepts a raw string or an array of strings safely
  text: string | string[];   
  forPrint?: boolean;
};

export function ReflectionBlock({ 
  text,
  forPrint = false,
}: ReflectionBlockProps) {
  if (!text) return null;

  // 🛠️ FIX: Convert the incoming data into a uniform array of lines
  const lines = Array.isArray(text) 
    ? text 
    : text.split("\n");

  return (
    <section
      className={forPrint ? styles.print  : styles.reflectionCard}
    > 
    
     <h2>✍️ Reflections</h2>

      <blockquote>
        {lines.map((line, i) => {
          // Double check to ensure item is a string before running .trim()
          const cleanLine = typeof line === "string" ? line.trim() : "";
          
          if (!cleanLine) return null; // Skips empty rows safely
          
           return (
          <p key={i}>
            <span dangerouslySetInnerHTML={{ __html: cleanLine }} />
          </p>
        );
 
          
        })}
      </blockquote>
    </section>
  );
}
