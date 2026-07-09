import { motion } from "framer-motion";
import PawIcon from "./PawIcon";

const BADGES = [
  { label: "CPR Certified", rotate: -6 },
  { label: "IPG Certified", rotate: 4 },
  { label: "ECMI Certified", rotate: -3 },
  { label: "Dogs & Cats", rotate: 5 },
];

export default function About() {
  return (
    <section id="about" className="bg-paper px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs tracking-[0.25em] text-coral-dark uppercase">
            Who&rsquo;s Behind the Clippers
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Open paws, trained hands.
          </h2>
          <p className="mt-6 text-ink-soft">
            Sebastian&rsquo;s Pet Grooming was built on one idea: your pet
            should leave happier than they arrived. Every dog and cat gets
            handled at their own pace, slower for the nervous ones and
            playful for the regulars, by a groomer who&rsquo;s trained
            specifically to keep animals calm and safe through the whole
            visit.
          </p>
          <p className="mt-4 text-ink-soft">
            Based right on Baseline Rd in Rialto, with thousands of happy
            walk-outs and a growing following of pets who show up in style.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {BADGES.map((badge) => (
              <span
                key={badge.label}
                style={{ transform: `rotate(${badge.rotate}deg)` }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-dashed border-ink/30 bg-paper-dim px-4 py-2 font-mono text-xs font-bold tracking-wide text-ink-soft"
              >
                <PawIcon className="h-3.5 w-3.5 text-teal-dark" />
                {badge.label}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto w-full max-w-sm rounded-3xl border-2 border-ink bg-ink p-8 text-paper"
        >
          <div className="flex items-center justify-between border-b border-dashed border-paper/30 pb-4">
            <span className="font-mono text-[0.65rem] tracking-[0.3em] text-butter uppercase">
              Groomer ID
            </span>
            <PawIcon className="h-5 w-5 text-coral" />
          </div>
          <p className="mt-5 font-display text-2xl font-semibold">Sebastian Gomez</p>
          <p className="font-mono text-xs text-paper/60">Owner &amp; Lead Groomer</p>

          <dl className="mt-6 space-y-3 font-mono text-xs">
            <div className="flex justify-between border-b border-paper/10 pb-2">
              <dt className="text-paper/50">Location</dt>
              <dd className="text-right text-paper/85">Rialto, CA</dd>
            </div>
            <div className="flex justify-between border-b border-paper/10 pb-2">
              <dt className="text-paper/50">Specialty</dt>
              <dd className="text-right text-paper/85">Creative Color &amp; Deshedding</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-paper/50">Status</dt>
              <dd className="text-right text-teal">Now booking</dd>
            </div>
          </dl>

          <div className="absolute -right-4 -bottom-4 flex h-16 w-16 rotate-12 items-center justify-center rounded-full border-2 border-coral bg-ink font-mono text-[0.55rem] leading-tight text-coral">
            <span className="text-center">
              CPR
              <br />
              CERT
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
