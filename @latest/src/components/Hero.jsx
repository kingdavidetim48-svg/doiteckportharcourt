import { useEffect, useRef } from "react";

function runCounter(el) {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || "";
  const minVal = parseFloat(el.dataset.min) || 0;
  const frames = 70;
  let frame = 0;
  const ease = (t) => 1 - Math.pow(1 - t, 4);
  const id = setInterval(() => {
    frame++;
    let current = Math.round(ease(frame / frames) * target);
    if (current < minVal) current = minVal;
    el.textContent = current + suffix;
    if (frame >= frames) {
      el.textContent = target + suffix;
      clearInterval(id);
    }
  }, 22);
}

export default function Hero() {
  const statsRef = useRef(null);

  useEffect(() => {
    if (!statsRef.current) return;
    let fired = false;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !fired) {
            fired = true;
            statsRef.current
              .querySelectorAll(".stat-num[data-target]")
              .forEach(runCounter);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.6 },
    );
    obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 86, behavior: "smooth" });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-image-panel">
        <img src="/images/image.png" alt="DOI-TECK Construction Project" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-line" />
            Port Harcourt, Rivers State
          </div>
          <h1>
            <span className="h1-line">Building</span>
            <span className="h1-line italic">Dreams</span>
            <span className="h1-line bold">Into Reality</span>
          </h1>
          <p className="hero-desc">
            DOI-TECK Construction Company — delivering premium residential,
            commercial, and civil engineering projects across Port Harcourt with
            unmatched precision and craftsmanship.
          </p>
          <div className="hero-actions">
            <a
              href="#portfolio"
              className="btn-primary"
              onClick={(e) => scrollTo(e, "#portfolio")}
            >
              <span>Explore Our Work</span>
              <i className="fa-solid fa-arrow-right" />
            </a>
            <a
              href="#contact-form"
              className="btn-ghost"
              onClick={(e) => scrollTo(e, "#contact-form")}
            >
              Request a Quote <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>

      <div className="hero-stats-bar" id="statsBar" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-num" data-target="10" data-suffix="+">
                10+
              </div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-num" data-target="50" data-suffix="+">
                50+
              </div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div
                className="stat-num"
                data-target="100"
                data-suffix="%"
                data-min="100"
              >
                100%
              </div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-num">
                5<span className="stat-star">★</span>
              </div>
              <div className="stat-label">Google Rated</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
