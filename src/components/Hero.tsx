import { motion } from "framer-motion";
import GroomingReveal from "./GroomingReveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--color-teal)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-40 -left-32 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--color-butter)" }}
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-8 md:px-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-paper-dim px-4 py-1.5 font-mono text-xs tracking-wide text-ink-soft"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            NOW BOOKING &middot; RIALTO, CA
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl leading-[1.03] font-semibold tracking-tight text-ink sm:text-6xl md:text-[3.6rem]"
          >
            Every good dog
            <br />
            deserves a
            <br />
            <span className="relative inline-block">
              great groom
              <svg
                viewBox="0 0 300 20"
                className="absolute -bottom-2 left-0 w-full text-coral"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 14 Q 80 4, 150 12 T 298 10"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-8 max-w-md font-body text-lg text-ink-soft"
          >
            Sebastian&rsquo;s Pet Grooming welcomes every dog and cat with open
            paws, from a first-timer&rsquo;s trim to a full creative color
            transformation. CPR &amp; IPG certified, gentle with the nervous
            ones, and a little obsessed with a good tail wag.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#visit"
              className="rounded-full bg-ink px-7 py-3.5 font-display text-sm font-semibold tracking-wide text-paper transition-transform hover:-translate-y-0.5 hover:bg-coral-dark"
            >
              Book the first visit
            </a>
            <a
              href="#services"
              className="rounded-full border-2 border-ink/15 px-7 py-3.5 font-display text-sm font-semibold tracking-wide text-ink transition-colors hover:border-teal hover:text-teal-dark"
            >
              See the menu
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <GroomingReveal />
        </motion.div>
      </div>
    </section>
  );
}
