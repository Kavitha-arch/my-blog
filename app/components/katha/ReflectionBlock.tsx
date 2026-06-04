import styles from "./ReflectionBlock.module.css";

type ReflectionBlockProps = {
  text: string;
};

export function ReflectionBlock({ text }: ReflectionBlockProps) {
  return (
    <section className={styles.reflectionCard}>
      <h2>Reflection</h2>

      <blockquote>{text}</blockquote>
    </section>
  );
}