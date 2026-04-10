import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const scrollTo = (e, id) => {
    e.preventDefault();
    closeMenu();
    const el = document.querySelector(id);
    if (!el) return;
    const offset = 86;
    window.scrollTo({ top: el.offsetTop - offset, behavior: "smooth" });
  };

  return (
    <>
      <header id="header" className={scrolled ? "scrolled" : ""}>
        <div className="container">
          <div className="header-inner">
            <a
              href="#hero"
              className="logo-mark"
              onClick={(e) => scrollTo(e, "#hero")}
            >
              <div className="logo-emblem">
                <img src="/images/logo.jpg" alt="DOI-TECK Logo" />
              </div>
              <div className="logo-text">
                DOI-TECK
                <span>Construction Company</span>
              </div>
            </a>
            <nav>
              <ul className={`nav-links${menuOpen ? " open" : ""}`}>
                {[
                  ["#hero", "Home"],
                  ["#about", "About"],
                  ["#portfolio", "Portfolio"],
                  ["#services", "Services"],
                  ["#testimonials", "Testimonials"],
                  ["#contact-form", "Contact"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a href={href} onClick={(e) => scrollTo(e, href)}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contact-form"
                className="nav-cta"
                onClick={(e) => scrollTo(e, "#contact-form")}
              >
                Get a Quote
              </a>
              <button
                className={`hamburger${menuOpen ? " open" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <span />
                <span />
                <span />
              </button>
            </nav>
          </div>
        </div>
      </header>
      {menuOpen && <div className="nav-overlay active" onClick={closeMenu} />}
    </>
  );
}
