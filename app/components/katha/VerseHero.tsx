type VerseHeroProps = {
  text: string;
};

export function VerseHero({ text }: VerseHeroProps) {
  return (
     <div className="hero-subtitle ">
      {text
        .trim()
        .split("\n")
        .map((line, i) => (
          <p key={i}>{line.trim()}</p>
        ))}
    </div>
  );
}