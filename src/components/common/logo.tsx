export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="4" width="10" height="24" rx="2" fill="currentColor" />
      <rect x="18" y="9" width="10" height="14" rx="2" fill="currentColor" opacity="0.5" />
    </svg>
  );
}
