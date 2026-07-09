import PawIcon from "./PawIcon";

const ITEMS = [
  "CPR Certified",
  "IPG Certified",
  "ECMI Certified",
  "Deshedding",
  "Creative Color",
  "Nervous-Pet Friendly",
  "Open 7 Days",
  "Paws & Whiskers Welcome",
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden border-y-2 border-ink bg-ink py-3.5">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex items-center" aria-hidden={copy === 1}>
            {loop.map((item, i) => (
              <li
                key={`${copy}-${i}`}
                className="flex items-center gap-3 px-6 font-display text-sm font-semibold tracking-wide text-paper whitespace-nowrap"
              >
                <PawIcon className="h-4 w-4 text-butter" />
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
