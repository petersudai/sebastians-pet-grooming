type LogoProps = {
  variant?: "light" | "dark";
};

export default function Logo({ variant = "light" }: LogoProps) {
  const captionClass = variant === "light" ? "text-ink-soft" : "text-paper/50";

  return (
    <div className="flex items-center gap-2.5">
      <svg viewBox="0 0 56 56" className="h-9 w-9 shrink-0" aria-hidden="true">
        <circle
          cx="28"
          cy="28"
          r="26"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="3.4 3.4"
        />
        <circle cx="28" cy="28" r="20" fill="var(--color-coral)" />
        <g fill="var(--color-paper)">
          <ellipse cx="28" cy="33" rx="9" ry="7.2" />
          <ellipse cx="16.5" cy="20.5" rx="4" ry="5.1" transform="rotate(-18 16.5 20.5)" />
          <ellipse cx="25.5" cy="14.5" rx="4.3" ry="5.4" transform="rotate(-4 25.5 14.5)" />
          <ellipse cx="34.5" cy="15.5" rx="4.3" ry="5.4" transform="rotate(10 34.5 15.5)" />
          <ellipse cx="41.5" cy="23" rx="4" ry="5.1" transform="rotate(24 41.5 23)" />
        </g>
      </svg>
      <span className="font-display text-lg leading-tight font-semibold tracking-tight">
        Sebastian&rsquo;s
        <span className={`block text-[0.65rem] font-mono font-normal tracking-[0.25em] uppercase ${captionClass}`}>
          Pet Grooming
        </span>
      </span>
    </div>
  );
}
