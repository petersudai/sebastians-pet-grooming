import { motion } from "framer-motion";

// Shared puff clusters, identical placement for both the "before" and
// "after" fill layers, so the comb wipe only changes color, not shape.
const BODY_PUFFS = [
  { cx: 150, cy: 195, r: 52 },
  { cx: 205, cy: 178, r: 60 },
  { cx: 254, cy: 196, r: 50 },
  { cx: 183, cy: 222, r: 46 },
  { cx: 226, cy: 220, r: 44 },
  { cx: 202, cy: 150, r: 40 },
];

const HEAD_PUFFS = [
  { cx: 98, cy: 152, r: 36 },
  { cx: 122, cy: 130, r: 32 },
  { cx: 138, cy: 158, r: 27 },
  { cx: 106, cy: 121, r: 25 },
];

const TAIL_PUFFS = [
  { cx: 300, cy: 148, r: 24 },
  { cx: 319, cy: 138, r: 20 },
  { cx: 308, cy: 164, r: 18 },
];

const ALL_PUFFS = [...BODY_PUFFS, ...HEAD_PUFFS, ...TAIL_PUFFS];

function PuffLayer({ fill }: { fill: string }) {
  return (
    <g fill={fill}>
      {ALL_PUFFS.map((p, i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r={p.r} />
      ))}
    </g>
  );
}

export default function GroomingReveal() {
  return (
    <div className="relative mx-auto w-full max-w-md md:max-w-lg">
      <svg
        viewBox="0 0 400 300"
        className="w-full overflow-visible"
        role="img"
        aria-label="Illustration of a fluffy dog mid-groom, coat turning from plain to a coral, teal and butter creative color style"
      >
        <defs>
          <linearGradient
            id="dyeGradient"
            gradientUnits="userSpaceOnUse"
            x1="62"
            y1="95"
            x2="330"
            y2="240"
          >
            <stop offset="0%" stopColor="var(--color-coral)" />
            <stop offset="48%" stopColor="var(--color-butter)" />
            <stop offset="100%" stopColor="var(--color-teal)" />
          </linearGradient>
        </defs>

        {/* ground shadow */}
        <ellipse cx="205" cy="272" rx="140" ry="12" fill="var(--color-line)" opacity="0.4" />

        {/* ear, tucked so its top sits under the head puffs */}
        <ellipse
          cx="86"
          cy="168"
          rx="19"
          ry="36"
          fill="var(--color-ink-soft)"
          opacity="0.85"
          transform="rotate(12 86 168)"
        />

        {/* legs, drawn first so the body puffs overlap the tops */}
        <g fill="var(--color-ink-soft)" opacity="0.9">
          <rect x="163" y="232" width="20" height="46" rx="10" />
          <rect x="196" y="238" width="20" height="42" rx="10" />
          <rect x="229" y="236" width="20" height="44" rx="10" />
        </g>

        {/* back layer: full creative color */}
        <PuffLayer fill="url(#dyeGradient)" />

        {/* front layer: plain coat, wiped away left-to-right on scroll into view */}
        <motion.g
          initial={{ clipPath: "inset(0 0 0 0%)" }}
          whileInView={{ clipPath: "inset(0 0 0 100%)" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.8, delay: 0.5, ease: [0.65, 0, 0.35, 1] }}
        >
          <PuffLayer fill="var(--color-paper-dim)" />
          <g stroke="var(--color-line)" strokeWidth="1" fill="none" opacity="0.6">
            {ALL_PUFFS.map((p, i) => (
              <circle key={i} cx={p.cx} cy={p.cy} r={p.r} />
            ))}
          </g>
        </motion.g>

        {/* comb, travels in sync with the wipe */}
        <motion.g
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 320, opacity: [0, 1, 1, 0] }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.8, delay: 0.5, ease: [0.65, 0, 0.35, 1] }}
        >
          <g transform="translate(20 90) rotate(35)">
            <rect x="-6" y="0" width="12" height="46" rx="5" fill="var(--color-ink)" />
            {[0, 9, 18, 27, 36].map((y) => (
              <rect key={y} x="-10" y={y + 4} width="20" height="4" rx="2" fill="var(--color-ink)" />
            ))}
          </g>
        </motion.g>

        {/* line-art detail: always on top so the character reads at any point in the wipe */}
        <g stroke="var(--color-ink)" strokeWidth="2.5" fill="none" strokeLinecap="round">
          {ALL_PUFFS.map((p, i) => (
            <circle key={i} cx={p.cx} cy={p.cy} r={p.r} opacity="0.9" />
          ))}
        </g>

        {/* bandana */}
        <path
          d="M118 168 L162 190 L104 196 Z"
          fill="var(--color-coral)"
          stroke="var(--color-ink)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <circle cx="130" cy="180" r="4" fill="var(--color-paper)" />

        {/* face */}
        <circle cx="93" cy="140" r="4.5" fill="var(--color-ink)" />
        <ellipse cx="66" cy="150" rx="7" ry="5" fill="var(--color-ink)" />
        <path
          d="M66 155 Q70 162 76 156"
          stroke="var(--color-ink)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
