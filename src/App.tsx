import { Analytics } from "@vercel/analytics/react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import PawTrail from "./components/PawTrail";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-paper text-ink">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Gallery />
        <PawTrail />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
