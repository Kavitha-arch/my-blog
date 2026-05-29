
type SanskritBlockProps = {
  text: string;
};

export function SanskritBlock({ text }: SanskritBlockProps) {
  return (
    <div className="sanskrit-block">
      {text
        .trim()
        .split("\n")
        .map((line, i) => (
          <p key={i}>{line.trim()}</p>
        ))}
    </div>
  );
}