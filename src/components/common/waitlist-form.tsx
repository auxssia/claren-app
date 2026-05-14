"use client";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeYys7uZMx7vHbu2qjM2C5WQtEX06hHnOSDrMp4kddnnqwykQ/viewform?usp=publish-editor";

export function WaitlistForm() {
  const handleClick = () => {
    window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center justify-center rounded-lg bg-foreground text-background px-5 py-2.5 text-sm font-medium transition-all hover:opacity-90"
    >
      Join waitlist
    </button>
  );
}
