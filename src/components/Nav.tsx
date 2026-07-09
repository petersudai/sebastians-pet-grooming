import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Fresh Cuts" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-paper/90 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-ink md:px-10">
        <a href="#top" className="transition-transform hover:-rotate-2" onClick={() => setOpen(false)}>
          <Logo />
        </a>
        <ul className="hidden items-center gap-8 font-display text-sm font-medium tracking-wide md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative py-1 transition-colors hover:text-coral-dark after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-coral after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="tel:+19097865171"
            className="hidden rounded-full border-2 border-ink bg-ink px-5 py-2 font-mono text-xs font-bold tracking-wide text-paper transition-colors hover:bg-coral hover:border-coral sm:inline-block"
          >
            (909) 786-5171
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink md:hidden"
          >
            <span className="relative flex h-3.5 w-4 flex-col justify-between">
              <span
                className={`h-[2px] w-full origin-center bg-ink transition-transform duration-300 ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-[2px] w-full bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-[2px] w-full origin-center bg-ink transition-transform duration-300 ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line/60 md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4 font-display text-lg font-medium">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setOpen(false)} className="block py-2">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="tel:+19097865171" onClick={() => setOpen(false)} className="mt-1 block py-2 text-coral-dark">
                  (909) 786-5171
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
