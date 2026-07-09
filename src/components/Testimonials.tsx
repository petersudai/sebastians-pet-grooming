import { motion } from "framer-motion";
import PawIcon from "./PawIcon";

const REVIEWS = [
  {
    quote:
      "Our Shepherd sheds like it's a full-time job. First deshedding here and the difference in one visit was unreal.",
    name: "Marisol T.",
    pet: "Loki, German Shepherd",
  },
  {
    quote:
      "He's nervous with strangers and Sebastian just... got him to relax. First groomer he hasn't shaken through.",
    name: "Danny R.",
    pet: "Biscuit, Bichon mix",
  },
  {
    quote:
      "Asked for something fun for her birthday and she came out looking like a walking rainbow. Whole block stopped us.",
    name: "Priya N.",
    pet: "Mochi, Poodle",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-paper-dim px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <span className="font-mono text-xs tracking-[0.25em] text-teal-dark uppercase">
            Word on the Street
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Regulars talk.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <motion.figure
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="ticket-edge flex flex-col justify-between rounded-2xl border-2 border-ink bg-paper p-6"
            >
              <div>
                <div className="flex gap-1 text-coral">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <PawIcon key={idx} className="h-4 w-4" />
                  ))}
                </div>
                <p className="mt-4 font-display text-lg leading-snug">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>
              <figcaption className="mt-6 border-t border-dashed border-ink/25 pt-4 font-mono text-xs text-ink-soft">
                {review.name} &middot; {review.pet}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
