import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <p className="font-serif text-6xl font-semibold text-primary-deep">404</p>
      <h1 className="mt-4 font-serif text-2xl font-semibold text-ink">
        Page not found
      </h1>
      <p className="mt-2 text-muted">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
        <Link
          href="/"
          className="rounded-lg bg-primary px-5 py-3 font-semibold text-white hover:bg-primary-deep"
        >
          Back to Home
        </Link>
        <Link
          href="/resources"
          className="rounded-lg border border-line bg-card px-5 py-3 font-semibold text-primary hover:bg-surface-alt"
        >
          Resources
        </Link>
        <Link
          href="/contact"
          className="rounded-lg border border-line bg-card px-5 py-3 font-semibold text-primary hover:bg-surface-alt"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
