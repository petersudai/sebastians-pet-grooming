import type { CSSProperties } from "react";
import PawIcon from "./PawIcon";

type Step = {
  x: number;
  y: number;
  rotate: number;
  delay: number;
  opacity: number;
  size: number;
};

// A wandering path, not a straight line: normal stride, then a tight cluster
// of prints where the pet circles and pauses (sniffing something), then a
// longer gap before the stride picks back up and continues off the edge.
//
// PawIcon's toes point "up" (north) at rotate 0, so a paw walking left to
// right (east) needs a baseline rotation of ~90deg, with small alternation
// per step for natural left/right variance. The sniff cluster breaks from
// that baseline to show the pet turning in place before it resumes course.
const STEPS: Step[] = [
  { x: 3, y: 60, rotate: 75, delay: 0.0, opacity: 0.3, size: 1 },
  { x: 11, y: 34, rotate: 112, delay: 0.6, opacity: 0.26, size: 0.9 },
  { x: 19, y: 56, rotate: 64, delay: 1.2, opacity: 0.32, size: 1 },
  { x: 27, y: 30, rotate: 106, delay: 1.8, opacity: 0.27, size: 0.9 },
  { x: 35, y: 50, rotate: 78, delay: 2.4, opacity: 0.31, size: 1 },
  { x: 42, y: 44, rotate: 30, delay: 2.9, opacity: 0.4, size: 0.85 },
  { x: 45, y: 53, rotate: 130, delay: 3.2, opacity: 0.42, size: 0.8 },
  { x: 43, y: 37, rotate: 230, delay: 3.5, opacity: 0.4, size: 0.85 },
  { x: 58, y: 55, rotate: 72, delay: 6.0, opacity: 0.3, size: 1 },
  { x: 68, y: 32, rotate: 105, delay: 6.6, opacity: 0.26, size: 0.9 },
  { x: 78, y: 58, rotate: 75, delay: 7.2, opacity: 0.32, size: 1 },
  { x: 88, y: 35, rotate: 110, delay: 7.8, opacity: 0.27, size: 0.9 },
  { x: 96, y: 55, rotate: 80, delay: 8.4, opacity: 0.3, size: 1 },
];

export default function PawTrail() {
  return (
    <div className="relative h-28 overflow-hidden bg-paper-dim md:h-32" aria-hidden="true">
      {STEPS.map((step, i) => (
        <span
          key={i}
          className="absolute text-ink animate-paw-step"
          style={
            {
              left: `${step.x}%`,
              top: `${step.y}%`,
              width: `${step.size * 1.1}rem`,
              height: `${step.size * 1.1}rem`,
              animationDelay: `${step.delay}s`,
              "--paw-rotate": `${step.rotate}deg`,
              "--paw-opacity": step.opacity,
            } as CSSProperties
          }
        >
          <PawIcon className="h-full w-full" />
        </span>
      ))}
    </div>
  );
}
