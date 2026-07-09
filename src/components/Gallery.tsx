import { motion } from "framer-motion";

type Photo = {
  id: number;
  caption: string;
  rotate: number;
};

const PHOTOS: Photo[] = [
  { id: 3, caption: "Fresh from the tub", rotate: -4 },
  { id: 7, caption: "Tail wags guaranteed", rotate: 3 },
  { id: 11, caption: "Someone's a good boy", rotate: -2 },
  { id: 5, caption: "Trim of the week", rotate: 5 },
  { id: 22, caption: "Ready for pickup", rotate: -5 },
  { id: 14, caption: "First color day!", rotate: 2 },
  { id: 9, caption: "Not a bad angle in sight", rotate: -3 },
  { id: 26, caption: "Bath time hero", rotate: 4 },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-paper-dim px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-xs tracking-[0.25em] text-teal-dark uppercase">
              Fresh Cuts
            </span>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Straight off the table.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-ink-soft">
            A few recent walk-outs. Follow{" "}
            <a
              href="https://www.instagram.com/gomezbulldogs7"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-coral-dark underline decoration-2 underline-offset-2"
            >
              @gomezbulldogs7
            </a>{" "}
            for the daily lineup.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3 lg:grid-cols-4">
          {PHOTOS.map((photo, i) => (
            <motion.figure
              key={photo.id}
              initial={{ opacity: 0, y: 30, rotate: photo.rotate }}
              whileInView={{ opacity: 1, y: 0, rotate: photo.rotate }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
              className="group relative cursor-default rounded-sm bg-white p-3 pb-10 shadow-[0_10px_24px_-8px_rgba(36,32,27,0.35)] transition-shadow hover:shadow-[0_18px_32px_-8px_rgba(36,32,27,0.45)]"
            >
              <div
                className="absolute -top-3 left-1/2 h-6 w-14 -translate-x-1/2 -rotate-2 bg-butter/70"
                style={{ clipPath: "polygon(0 0,100% 0,94% 100%,6% 100%)" }}
                aria-hidden="true"
              />
              <div className="aspect-[4/5] w-full overflow-hidden bg-line/40">
                <img
                  src={`https://placedog.net/500/625?id=${photo.id}`}
                  alt={photo.caption}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[8%] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="absolute bottom-1.5 left-0 w-full text-center font-caption text-xl text-ink-soft">
                {photo.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
