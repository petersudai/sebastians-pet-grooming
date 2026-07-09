import { motion } from "framer-motion";
import type { ComponentType } from "react";
import {
  BathIcon,
  CombIcon,
  HeartPulseIcon,
  PawTrimIcon,
  ScissorsIcon,
  ShieldIcon,
  SparkleIcon,
} from "./ServiceIcons";

type Service = {
  num: string;
  title: string;
  copy: string;
  note?: string;
  icon: ComponentType<{ className?: string }>;
};

const SERVICES: Service[] = [
  {
    num: "01",
    title: "Deshedding",
    copy: "Don't feel guilty about a day at the salon while the fur gets everywhere at home. This deep-coat treatment pulls loose undercoat out before it lands on your couch, a favorite for Huskies, Shepherds, and Akitas.",
    icon: CombIcon,
  },
  {
    num: "02",
    title: "Full Grooming",
    copy: "The whole visit, tailored to your fur baby's breed and coat: bath, cut, brush-out, and finishing touches, done at your dog's own pace.",
    note: "Starting at $55",
    icon: SparkleIcon,
  },
  {
    num: "03",
    title: "Bath & Blowout",
    copy: "A proper wash and hand-dry for pups who just need to feel (and smell) fresh between full grooms.",
    icon: BathIcon,
  },
  {
    num: "04",
    title: "Haircuts & Creative Color",
    copy: "Breed-standard trims, or something louder: safe, pet-grade color styling for owners who want a dog nobody forgets.",
    icon: ScissorsIcon,
  },
  {
    num: "05",
    title: "Nail Trim",
    copy: "Quick, calm, and precise nail trims, offered on their own or added to any groom.",
    icon: PawTrimIcon,
  },
  {
    num: "06",
    title: "Gland Expression",
    copy: "The kind of routine upkeep that's easy to put off, recommended if your dog's dealing with a constant odor back there. Added on request to any bath or groom.",
    icon: ShieldIcon,
  },
  {
    num: "07",
    title: "Extra Care",
    copy: "We take the extra step for the pets who need it: CPR-certified handling for seniors, nervous first-timers, and anything outside the usual routine.",
    icon: HeartPulseIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-paper px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <span className="font-mono text-xs tracking-[0.25em] text-coral-dark uppercase">
            The Menu
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Pull a ticket, pick a service.
          </h2>
          <p className="mt-4 text-ink-soft">
            Every visit is booked like a real appointment slip, not a
            checkout form. Here&rsquo;s what we can do for your fur baby, mix
            and match for the full treatment.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.num}
                initial={{ opacity: 0, y: 28, rotate: i % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, rotate: i % 2 === 0 ? -1 : 1 }}
                className="relative flex rounded-2xl border-2 border-ink bg-paper-dim"
              >
                <div className="relative flex w-20 shrink-0 flex-col items-center justify-between border-r-2 border-dashed border-ink/35 py-4">
                  <span className="font-mono text-[0.65rem] text-ink-soft">
                    N&deg;{service.num}
                  </span>
                  <Icon className="h-8 w-8 text-teal-dark" />
                  <span className="rotate-180 font-mono text-[0.6rem] tracking-widest text-ink-soft [writing-mode:vertical-rl]">
                    SPG
                  </span>
                  <span className="absolute -top-2.5 left-[calc(5rem-0.5rem)] h-4 w-4 rounded-full bg-paper" />
                  <span className="absolute -bottom-2.5 left-[calc(5rem-0.5rem)] h-4 w-4 rounded-full bg-paper" />
                </div>
                <div className="flex-1 p-6">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <h3 className="font-display text-xl font-semibold">
                      {service.title}
                    </h3>
                    {service.note && (
                      <span className="font-mono text-xs font-bold text-coral-dark">
                        {service.note}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {service.copy}
                  </p>
                </div>
              </motion.article>
            );
          })}

          <motion.a
            href="#visit"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="group flex flex-col items-start justify-center gap-3 rounded-2xl border-2 border-dashed border-ink/40 p-6 transition-colors hover:border-coral hover:bg-paper-dim"
          >
            <span className="font-mono text-[0.65rem] tracking-widest text-ink-soft uppercase">
              Not sure what you need?
            </span>
            <span className="font-display text-xl font-semibold">
              Ask Sebastian directly &rarr;
            </span>
            <span className="text-sm text-ink-soft">
              Text or call and describe the coat, and we&rsquo;ll build
              the visit around it.
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
