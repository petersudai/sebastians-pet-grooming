type PawIconProps = {
  className?: string;
};

export default function PawIcon({ className }: PawIconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="32" cy="42" rx="16" ry="13" />
      <ellipse cx="12" cy="24" rx="7" ry="9" transform="rotate(-18 12 24)" />
      <ellipse cx="28" cy="14" rx="7.5" ry="9.5" transform="rotate(-4 28 14)" />
      <ellipse cx="46" cy="15" rx="7.5" ry="9.5" transform="rotate(8 46 15)" />
      <ellipse cx="56" cy="30" rx="7" ry="9" transform="rotate(24 56 30)" />
    </svg>
  );
}
