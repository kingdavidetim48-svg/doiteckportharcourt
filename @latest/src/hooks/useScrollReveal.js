import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right",
    );

    elements.forEach((el) => {
      const parent = el.parentElement;
      if (parent) {
        // Find index relative to other "reveal" siblings
        const revealSiblings = Array.from(parent.children).filter((c) =>
          c.matches(".reveal, .reveal-left, .reveal-right"),
        );
        const index = revealSiblings.indexOf(el);
        if (index > 0) {
          el.style.transitionDelay = `${index * 0.08}s`;
        }
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []); // Added dependency array
}
