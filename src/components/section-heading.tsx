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
        <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-text">
          <span aria-hidden="true" className="h-px w-6 bg-accent" />
          {eyebrow}
        </p>
      )}
      <Title
        id={id}
        className="mt-3 font-serif text-3xl font-semibold tracking-tight text-primary-deep sm:text-4xl"
      >
        {title}
      </Title>
      {intro && (
        <p className="mt-3 text-lg leading-relaxed text-muted">{intro}</p>
      )}
    </div>
  );
}
