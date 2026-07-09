import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-ink px-6 pt-10 pb-8 text-paper/70 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-dashed border-paper/20 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-paper/90">
          <Logo variant="dark" />
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs tracking-wide">
          <a href="#services" className="hover:text-butter">
            Services
          </a>
          <a href="#gallery" className="hover:text-butter">
            Fresh Cuts
          </a>
          <a href="#about" className="hover:text-butter">
            About
          </a>
          <a href="#visit" className="hover:text-butter">
            Visit
          </a>
        </nav>
        <p className="font-mono text-xs text-paper/40">
          &copy; {new Date().getFullYear()} Sebastian&rsquo;s Pet Grooming LLC
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-6xl font-mono text-[0.65rem] tracking-wide text-paper/35">
        For more pics and fun facts, find us on Instagram, YouTube, and Facebook as Sebastian&rsquo;s Pet Grooming.
      </p>
    </footer>
  );
}
