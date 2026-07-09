import { motion } from "framer-motion";
import PawIcon from "./PawIcon";

const DETAILS = [
  {
    label: "Call or text",
    value: "(909) 786-5171",
    href: "tel:+19097865171",
  },
  {
    label: "Email",
    value: "sebastiangomez7@yahoo.com",
    href: "mailto:sebastiangomez7@yahoo.com",
  },
  {
    label: "Visit",
    value: "202 E Baseline Rd, Rialto, CA 92376",
    href: "https://maps.google.com/?q=202+East+Baseline+Rd,+Rialto,+CA+92376",
  },
  {
    label: "Follow along",
    value: "@gomezbulldogs7",
    href: "https://www.instagram.com/gomezbulldogs7",
  },
];

export default function CTA() {
  return (
    <section id="visit" className="relative overflow-hidden bg-ink px-6 py-24 text-paper md:px-10 md:py-32">
      <div
        className="pointer-events-none absolute -top-32 -right-20 h-96 w-96 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--color-coral)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--color-teal)" }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-4xl text-center"
      >
        <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-butter uppercase">
          <PawIcon className="h-4 w-4" />
          Open Paws, Any Day
        </span>
        <h2 className="mt-4 font-display text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Let&rsquo;s get your pet on the books.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-paper/70">
          First-timer or long-time regular, reach out and we&rsquo;ll find a
          slot that works. Every first visit comes with a free toothbrush,
          and if you bring it back, we&rsquo;ll keep brushing those teeth for
          free every time after.
        </p>
        <p className="mx-auto mt-1 max-w-xl font-caption text-lg text-butter/90">
          GRATIS cepillo de dientes en tu primera cita.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+19097865171"
            className="rounded-full bg-coral px-8 py-4 font-display text-sm font-semibold tracking-wide text-ink transition-transform hover:-translate-y-0.5 hover:bg-butter"
          >
            Call to book &rarr;
          </a>
          <a
            href="mailto:sebastiangomez7@yahoo.com"
            className="rounded-full border-2 border-paper/25 px-8 py-4 font-display text-sm font-semibold tracking-wide text-paper transition-colors hover:border-paper/60"
          >
            Send an email
          </a>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-paper/15 bg-paper/15 sm:grid-cols-2 lg:grid-cols-4">
          {DETAILS.map((detail) => (
            <a
              key={detail.label}
              href={detail.href}
              target={detail.href.startsWith("http") ? "_blank" : undefined}
              rel={detail.href.startsWith("http") ? "noreferrer" : undefined}
              className="group bg-ink p-5 text-left transition-colors hover:bg-paper/5"
            >
              <span className="block font-mono text-[0.65rem] tracking-widest text-paper/45 uppercase">
                {detail.label}
              </span>
              <span className="mt-1.5 block text-sm font-medium break-words text-paper/90 group-hover:text-butter">
                {detail.value}
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
