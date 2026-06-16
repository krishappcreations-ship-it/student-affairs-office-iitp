interface IconProps {
  name: string;
  className?: string;
}

/** Minimal inline icon set (stroke). Decorative — always aria-hidden. */
const PATHS: Record<string, React.ReactNode> = {
  home: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 5.5a3 3 0 0 1 0 5.5" />
      <path d="M17.5 14a6 6 0 0 1 3.5 5.5" />
    </>
  ),
  heart: <path d="M12 20s-7-4.6-9.2-9C1.3 7.6 3 5 6 5c1.9 0 3.1 1.1 4 2.3C10.9 6.1 12.1 5 14 5c3 0 4.7 2.6 3.2 6-2.2 4.4-9.2 9-9.2 9Z" />,
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </>
  ),
  rupee: (
    <>
      <path d="M7 5h10" />
      <path d="M7 9h10" />
      <path d="M7 13h4c2.5 0 4-1.6 4-4" />
      <path d="M7 13l7 6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
};

export function Icon({ name, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {PATHS[name] ?? <circle cx="12" cy="12" r="4" />}
    </svg>
  );
}
