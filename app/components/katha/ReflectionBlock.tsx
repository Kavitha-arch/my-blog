type ReflectionBlockProps = {
  text: string;
};

export function ReflectionBlock({ text }: ReflectionBlockProps) {
  return (
    <section className="reflection-card">
      <h2>Reflection</h2>

      <blockquote>{text}</blockquote>
    </section>
  );
}