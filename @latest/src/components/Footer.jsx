export default function Footer() {
  return (
    <footer>
      <div className="footer-glow" />
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/images/logo.jpg" alt="DOI-TECK" />
              <h3>
                DOI-TECK
                <br />
                <span>Construction</span>
              </h3>
            </div>
            <p>
              Port Harcourt's premier construction company, delivering
              excellence in residential, commercial, and civil engineering
              projects.
            </p>
            <div className="footer-social">
              <a
                href="https://www.facebook.com/doiteckconstruction"
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a
                href="https://www.instagram.com/doiteckconstruction/"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram" />
              </a>
              <a
                href="https://www.linkedin.com/company/doi-teck-construction-company"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in" />
              </a>
              <a
                href="https://wa.me/2348039360199"
                target="_blank"
                rel="noopener"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp" />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>Residential Construction</li>
              <li>Commercial Construction</li>
              <li>Civil Engineering</li>
              <li>Renovation &amp; Remodeling</li>
              <li>Project Management</li>
              <li>
                <em>And so much more...</em>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#reviews">Reviews</a>
              </li>
              <li>
                <a href="#contact-form">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="tel:+2348039360199">+234 803 936 0199</a>
              </li>
              <li>
                <a
                  href="https://wa.me/2348039360199"
                  target="_blank"
                  rel="noopener"
                >
                  WhatsApp Us
                </a>
              </li>
              <li>4 Khana St, D-line</li>
              <li>Port Harcourt 500101</li>
              <li>Rivers State, Nigeria</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 DOI-TECK Construction Company Ltd. All rights reserved.</p>
          <p className="footer-tagline">Building Excellence in Port Harcourt</p>
        </div>
      </div>
    </footer>
  );
}
