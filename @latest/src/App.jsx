import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import {
  Marquee,
  About,
  Services,
  Portfolio,
  Testimonials,
  Reviews,
  CEO,
  CTA,
} from "./components/Sections";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { useScrollReveal } from "./hooks/useScrollReveal";

function Cursor() {
  useEffect(() => {
    const dot = document.getElementById("cursorDot");
    const ring = document.getElementById("cursorRing");
    if (
      !dot ||
      !ring ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    )
      return;
    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;
    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };
    document.addEventListener("mousemove", onMove);
    let raf;
    (function anim() {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      dot.style.cssText = `left:${mx}px;top:${my}px`;
      ring.style.cssText = `left:${rx}px;top:${ry}px`;
      raf = requestAnimationFrame(anim);
    })();
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <>
      <div className="cursor-dot" id="cursorDot" />
      <div className="cursor-ring" id="cursorRing" />
    </>
  );
}

function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      id="scroll-to-top"
      className={show ? "show" : ""}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <i className="fa-solid fa-chevron-up" />
    </button>
  );
}

export default function App() {
  useScrollReveal();

  return (
    <>
      <Cursor />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Reviews />
        <CEO />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
      <a
        href="https://wa.me/2348039360199"
        className="whatsapp-float"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
      >
        <i className="fa-brands fa-whatsapp" />
      </a>
      <ScrollToTop />
    </>
  );
}
