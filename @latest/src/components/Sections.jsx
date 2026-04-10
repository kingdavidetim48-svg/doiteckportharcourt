// Marquee.jsx
export function Marquee() {
  const items = [
    "Residential Construction",
    "Commercial Buildings",
    "Civil Engineering",
    "Renovation & Remodeling",
    "Project Management",
    "Quality Assured",
    "Port Harcourt's Finest",
  ];
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span className="marquee-item" key={i}>
            {item} <i className="fa-solid fa-diamond" />
          </span>
        ))}
      </div>
    </div>
  );
}

// About.jsx
export function About() {
  return (
    <section className="intro-section" id="about">
      <div className="container">
        <div className="intro-grid">
          <div className="intro-left reveal-left">
            <div className="section-label">About DOI-TECK</div>
            <h2 className="section-title">
              Crafting Spaces
              <br />
              That Stand the
              <br />
              <em>Test of Time</em>
            </h2>
            <p>
              DOI-TECK Construction Company is Port Harcourt's premier building
              and civil engineering firm — trusted by private clients,
              government bodies, and commercial developers to deliver structures
              of enduring quality.
            </p>
            <p>
              From the groundbreaking to the finishing touch, our team of
              seasoned professionals brings technical mastery, aesthetic
              sensibility, and an unwavering commitment to on-time delivery on
              every single project.
            </p>
            <div className="intro-signature">
              <img src="/images/logo.jpg" alt="DOI-TECK" />
              <div className="intro-sig-text">
                DOI-TECK Construction Company Ltd.
                <small>
                  Registered &amp; Certified — Port Harcourt, Nigeria
                </small>
              </div>
            </div>
          </div>
          <div className="intro-right reveal-right">
            <div className="intro-img-box tall">
              <img
                src="/images/image4.jpg"
                alt="Residential Duplex"
                loading="lazy"
              />
              <div className="intro-badge">
                <div className="intro-badge-num">10+</div>
                <div className="intro-badge-label">
                  Years
                  <br />
                  Building
                </div>
              </div>
            </div>
            <div className="intro-img-box">
              <img
                src="/images/image1.jpg"
                alt="Legislative Building"
                loading="lazy"
              />
            </div>
            <div className="intro-img-box">
              <img
                src="/images/image5.jpg"
                alt="Health Center"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services.jsx
const services = [
  {
    num: "01",
    icon: "fa-comments",
    title: "Client-Centric Approach",
    desc: "Your vision is our blueprint. Transparent communication from concept to completion — every decision reflects your goals.",
  },
  {
    num: "02",
    icon: "fa-trophy",
    title: "Expert Quality",
    desc: "High-quality materials, certified professionals, rigorous quality control at every stage. Delivered on time, every time.",
  },
  {
    num: "03",
    icon: "fa-gears",
    title: "Innovative Solutions",
    desc: "Modern construction methodologies and cutting-edge technology to deliver superior results for every project type.",
  },
  {
    num: "04",
    icon: "fa-house",
    title: "Residential Construction",
    desc: "Luxury duplexes to family estates — we build homes with soul. Premium finishes and timeless design on every project.",
  },
  {
    num: "05",
    icon: "fa-building",
    title: "Commercial & Industrial",
    desc: "Office complexes, government facilities, health centers — precision and professionalism on every commercial build.",
  },
  {
    num: "06",
    icon: "fa-screwdriver-wrench",
    title: "Renovation & Remodeling",
    desc: "Breathing new life into existing structures — transforming outdated spaces into modern, functional environments.",
  },
];

export function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-header">
          <div className="reveal-left">
            <div className="section-label">What We Offer</div>
            <h2 className="section-title">
              Built on Six
              <br />
              Core Strengths
            </h2>
          </div>
          <p className="reveal-right">
            Every project we undertake is guided by our commitment to client
            satisfaction, uncompromising quality, and engineering innovation
            that lasts generations.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div
              className="service-card reveal"
              key={s.num}
              style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
            >
              <div className="service-num">{s.num}</div>
              <div className="service-icon">
                <i className={`fa-solid ${s.icon}`} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Portfolio.jsx
export function Portfolio() {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <div className="portfolio-header reveal">
          <div className="section-label" style={{ justifyContent: "center" }}>
            Our Portfolio
          </div>
          <h2 className="section-title">
            Projects That Define
            <br />
            <em>Our Legacy</em>
          </h2>
          <p>
            A curated selection of completed projects — each a testament to our
            craft, precision, and dedication to excellence.
          </p>
        </div>
        <div className="portfolio-grid">
          <div className="portfolio-item p-large reveal">
            <img
              src="/images/488662660_1247334740730529_7442360847893219608_n.jpg"
              alt="Legislative Building"
              loading="lazy"
            />
            <div className="portfolio-overlay">
              <span className="portfolio-tag">Government / Institutional</span>
              <h3>Legislative Building — OBALGA</h3>
              <p>
                Quality standards maintained from substructure to finish. A
                landmark of civic architecture.
              </p>
            </div>
          </div>
          <div
            className="portfolio-item reveal"
            style={{ transitionDelay: "0.1s" }}
          >
            <img
              src="/images/image4.jpg"
              alt="Luxury Residential Duplex"
              loading="lazy"
            />
            <div className="portfolio-overlay">
              <span className="portfolio-tag">Residential</span>
              <h3>5-Bedroom Contemporary Duplex</h3>
              <p>Modern luxury meets comfort — premium finishes throughout.</p>
            </div>
          </div>
          <div
            className="portfolio-item reveal"
            style={{ transitionDelay: "0.05s" }}
          >
            <img
              src="/images/image1.jpg"
              alt="Industrial Building"
              loading="lazy"
            />
            <div className="portfolio-overlay">
              <span className="portfolio-tag">Industrial</span>
              <h3>Legislative Complex — Exterior</h3>
              <p>Structural excellence from foundation to roofline.</p>
            </div>
          </div>
          <div
            className="portfolio-item reveal"
            style={{ transitionDelay: "0.15s" }}
          >
            <img src="/images/image5.jpg" alt="Health Center" loading="lazy" />
            <div className="portfolio-overlay">
              <span className="portfolio-tag">Healthcare</span>
              <h3>Health Center — PH City Council</h3>
              <p>Modern design with premium medical-grade finishes.</p>
            </div>
          </div>
          <div
            className="portfolio-item p-video reveal"
            style={{ transitionDelay: "0.2s" }}
          >
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=316&href=https%3A%2F%2Fwww.facebook.com%2Fdoiteckconstruction%2Fvideos%2F929486521414604%2F&show_text=false&width=560&t=0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="DOI-TECK Project Video"
            />
            <div className="portfolio-overlay video-overlay">
              <span className="portfolio-tag">Featured Video</span>
              <h3>Watch Us Build</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials.jsx
const testimonials = [
  {
    quote:
      "They build not just a perfect house, but a perfect HOME. The attention to detail and care they put into every room was extraordinary.",
    author: "Jecinta Okafor",
    origin: "Port Harcourt, Nigeria",
  },
  {
    quote:
      "Professionalism at its peak. The very best in the business. DOI-TECK delivered on every promise, on time and on budget.",
    author: "Ekua Douye",
    origin: "Nigeria",
  },
  {
    quote:
      "An exceptional construction giant. I have worked with them on several projects and was very impressed each time without exception.",
    author: "Galaxy Summit",
    origin: "Nigeria",
  },
];

export function Testimonials() {
  return (
    <section className="testimonial-section" id="testimonials">
      <div className="container">
        <div className="testimonial-grid">
          <div className="testimonial-left">
            <div className="section-label reveal">Client Voices</div>
            <h2 className="section-title reveal">
              What Our
              <br />
              Clients Say
              <br />
              <em>About Us</em>
            </h2>
            <div className="testimonial-cards">
              {testimonials.map((t, i) => (
                <div
                  className="t-card reveal"
                  key={i}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="t-stars">
                    {[...Array(5)].map((_, j) => (
                      <i className="fa-solid fa-star" key={j} />
                    ))}
                  </div>
                  <p className="t-quote">"{t.quote}"</p>
                  <div className="t-author">{t.author}</div>
                  <div className="t-origin">{t.origin}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="testimonial-video reveal-right">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fweb.facebook.com%2Freel%2F1497384440793700%2F&show_text=false&width=267&t=0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Client Testimonial Video"
            />
            <div className="testimonial-video-label">
              <i className="fa-solid fa-play" /> Live Client Testimonial
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reviews.jsx
const reviews = [
  {
    text: "DOI-TECK is an exceptional construction giant based in Port Harcourt with the experience to bring your dreams to reality. Very impressive work throughout.",
    author: "Galaxy Summit",
  },
  {
    text: "They are the best! Their customer service is extraordinary. I love DOI-TECK Construction Company — truly a class above the rest in Port Harcourt.",
    author: "Hannah Amarachi",
  },
  {
    text: "Very efficient and trustworthy in the construction game. Professional, reliable, and genuinely committed to quality. I highly recommend them.",
    author: "Karen Nzeka",
  },
];

export function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <div className="reviews-header reveal">
          <div>
            <div className="section-label">Google Reviews</div>
            <h2 className="section-title">
              5-Star Rated
              <br />
              <em>on Google</em>
            </h2>
          </div>
          <a
            href="https://www.google.com/search?q=DOI-TECK+Construction+Company+reviews"
            target="_blank"
            rel="noopener"
            className="google-btn"
          >
            <i className="fa-brands fa-google" /> Read All Reviews
          </a>
        </div>
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div
              className="review-card reveal"
              key={i}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="review-stars">
                {[...Array(5)].map((_, j) => (
                  <i className="fa-solid fa-star" key={j} />
                ))}
              </div>
              <p>"{r.text}"</p>
              <div className="review-author">{r.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CEO.jsx
export function CEO() {
  const scrollTo = (e) => {
    e.preventDefault();
    const el = document.querySelector("#contact-form");
    if (el) window.scrollTo({ top: el.offsetTop - 86, behavior: "smooth" });
  };
  return (
    <section className="ceo-section" id="ceo">
      <div className="container">
        <div className="ceo-inner">
          <div className="ceo-text reveal-left">
            <div className="section-label">A Word From Leadership</div>
            <h2 className="section-title">
              Our CEO's
              <br />
              Commitment
              <br />
              <em>to You</em>
            </h2>
            <p>
              At DOI-TECK, every project is personal. Our CEO speaks directly to
              our philosophy: construction is not merely about structures — it
              is about building futures, communities, and legacies that endure
              for generations.
            </p>
            <a href="#contact-form" className="btn-primary" onClick={scrollTo}>
              <span>Start Your Project</span>
              <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
          <div className="ceo-video-wrap reveal-right">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1303777680238722%2F&show_text=false&width=560&t=0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="CEO Message"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA.jsx
export function CTA() {
  const scrollTo = (e) => {
    e.preventDefault();
    const el = document.querySelector("#contact-form");
    if (el) window.scrollTo({ top: el.offsetTop - 86, behavior: "smooth" });
  };
  return (
    <section className="cta-section" id="cta">
      <div className="cta-inner">
        <div className="cta-left reveal-left">
          <h2>
            Ready to Build Something
            <br />
            <em>Extraordinary?</em>
          </h2>
          <p>
            Contact DOI-TECK today and let's turn your vision into an
            architectural reality that stands for generations.
          </p>
          <a href="#contact-form" className="btn-dark" onClick={scrollTo}>
            Get Free Consultation <i className="fa-solid fa-arrow-right" />
          </a>
        </div>
        <div className="cta-right reveal-right">
          <div className="contact-info-item">
            <div className="contact-icon">
              <i className="fa-solid fa-phone" />
            </div>
            <div className="contact-info-text">
              <h4>Call Us Now</h4>
              <a href="tel:+2348039360199">+234 803 936 0199</a>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-icon">
              <i className="fa-solid fa-location-dot" />
            </div>
            <div className="contact-info-text">
              <h4>Our Office</h4>
              <a
                href="https://www.google.com/maps/place/Doi-Teck+Construction+Company+Ltd/@4.8076644,6.9995221,17z"
                target="_blank"
                rel="noopener"
              >
                4 Khana St, D-line, Port Harcourt,
                <br />
                Rivers State, Nigeria
              </a>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-icon">
              <i className="fa-brands fa-whatsapp" />
            </div>
            <div className="contact-info-text">
              <h4>WhatsApp</h4>
              <a
                href="https://wa.me/2348039360199"
                target="_blank"
                rel="noopener"
              >
                Chat with us instantly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
