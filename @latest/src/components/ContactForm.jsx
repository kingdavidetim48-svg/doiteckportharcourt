import { useState, useRef } from "react";

function showToast(toastRef, msg, type) {
  const el = toastRef.current;
  if (!el) return;
  el.textContent = msg;
  el.className = `toast-bar show ${type}`;
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove("show"), 4200);
}

function validateNGPhone(p) {
  return /^(0|\+234|234)[789][01]\d{8}$/.test(p.replace(/\s+/g, ""));
}

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const toastRef = useRef(null);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const project = form["project-type"].value;
    const message = form.message.value.trim();

    if (!name) return showToast(toastRef, "Please enter your name", "error");
    if (!email) return showToast(toastRef, "Please enter your email", "error");
    if (!validateNGPhone(phone))
      return showToast(
        toastRef,
        "Enter a valid Nigerian phone number",
        "error",
      );
    if (!project)
      return showToast(toastRef, "Please select a project type", "error");
    if (!message)
      return showToast(toastRef, "Please describe your project", "error");

    setSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/xgopwbrw", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error();
      showToast(toastRef, "Enquiry sent! We'll be in touch soon.", "success");
      form.reset();
    } catch {
      showToast(toastRef, "Failed to send. Please try again.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="form-section" id="contact-form">
        <div className="container">
          <div className="form-grid">
            <div className="form-left reveal-left">
              <div className="section-label">Get In Touch</div>
              <h2 className="section-title">
                Request a<br />
                Free
                <br />
                <em>Consultation</em>
              </h2>
              <p>
                Tell us about your project and we'll get back to you with a
                detailed, no-obligation quote. Every great structure begins with
                a conversation.
              </p>
              <div className="form-features">
                {[
                  "Free initial consultation",
                  "Detailed project estimates",
                  "Response within 24 hours",
                  "Transparent pricing always",
                ].map((f) => (
                  <div className="form-feature" key={f}>
                    <i className="fa-solid fa-check" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <form
              className="quote-form reveal-right"
              ref={formRef}
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <h3>Project Enquiry</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+234 801 234 5678"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="client-type">Client Status *</label>
                  <select id="client-type" name="client-type" required>
                    <option value="" disabled defaultValue>
                      -- Select --
                    </option>
                    <option value="New Client">New Client</option>
                    <option value="Existing Client">Existing Client</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="project-type">Project Type *</label>
                  <select id="project-type" name="project-type" required>
                    <option value="" defaultValue disabled>
                      -- Select --
                    </option>
                    <option value="residential">
                      Residential Construction
                    </option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="renovation">Renovation / Remodeling</option>
                    <option value="civil-works">Civil Works</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Describe your project — location, scope, timeline, budget..."
                  required
                />
              </div>
              <button
                type="submit"
                className="submit-btn"
                disabled={submitting}
              >
                <span>
                  {submitting ? "Sending..." : "Send Project Enquiry"}
                </span>
                <i
                  className={`fa-solid ${submitting ? "fa-spinner fa-spin" : "fa-paper-plane"}`}
                />
              </button>
            </form>
          </div>
        </div>
      </section>
      <div className="toast-bar" ref={toastRef} />
    </>
  );
}
