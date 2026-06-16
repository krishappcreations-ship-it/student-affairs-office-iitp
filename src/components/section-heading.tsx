interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  id?: string;
  /** Heading level for the title. Page titles use "h1"; in-page sections "h2". */
  as?: "h1" | "h2";
}

/** Consistent section header: small accent eyebrow + serif title + optional intro. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  as = "h2",
}: SectionHeadingProps) {
  const Title = as;
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wide text-accent-text">
          {eyebrow}
        </p>
      )}
      <Title
        id={id}
        className="mt-2 font-serif text-3xl font-semibold text-primary-deep sm:text-4xl"
      >
        {title}
      </Title>
      {intro && <p className="mt-3 text-lg text-muted">{intro}</p>}
    </div>
  );
}
