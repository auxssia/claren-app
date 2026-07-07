import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/50 mt-section">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6 text-sm text-muted">
          <Link href="/" className="font-medium text-foreground">
            Claren
          </Link>
          <span className="hidden sm:inline text-border/50">/</span>
          <Link href="/atlas" className="hover:text-foreground transition-colors">
            Litigate Engine
          </Link>
          <Link href="/philosophy" className="hover:text-foreground transition-colors">
            Philosophy
          </Link>
          <Link href="/blog" className="hover:text-foreground transition-colors">
            Build Log
          </Link>
          <a
            href="https://wa.me/917032659891"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>
        <p className="text-xs text-muted/60">
          &copy; {new Date().getFullYear()} Claren.
        </p>
      </div>
    </footer>
  );
}
