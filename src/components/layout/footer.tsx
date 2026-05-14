import Link from "next/link";
import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 mt-section">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6 text-sm text-muted">
          <Link href="/" className="font-medium text-foreground">
            Claren
          </Link>
          <span className="hidden sm:inline text-border/50">/</span>
          <a
            href="https://github.com/auxssia"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
          <Link href="/pricing" className="hover:text-foreground transition-colors">
            Open Source
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
          &copy; {new Date().getFullYear()} Claren. Open source.
        </p>
      </div>
    </footer>
  );
}
