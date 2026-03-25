document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger-menu");
  const navLinks = document.querySelector(".nav-links");
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const sections = document.querySelectorAll("section[id]");
  const scrollToTopButton = document.getElementById("scroll-to-top");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    body.style.overflow = navLinks.classList.contains("active")
      ? "hidden"
      : "auto";
  });

  document.addEventListener("click", (e) => {
    if (
      navLinks.classList.contains("active") &&
      !navLinks.contains(e.target) &&
      !hamburger.contains(e.target) &&
      !themeToggle.contains(e.target)
    ) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      body.style.overflow = "auto";
    }
  });
  function showToast(message, type = "success") {
    toast.textContent = message;

    toast.style.background =
      type === "error" ? "#e74c3c" : type === "success" ? "#2ecc71" : "#1e1e1e";

    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(-20px)";
    }, 3000);
  }

  window.showToast = showToast;

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      if (navLinks.classList.contains("active")) {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
        body.style.overflow = "auto";
      }

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerOffset = document.querySelector("header").offsetHeight;
        const offsetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  const reveals = document.querySelectorAll(".reveal");

  const handleScrollAnimations = () => {
    reveals.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      const triggerPoint = viewportHeight * 0.85;

      if (elementTop < triggerPoint && elementTop > -el.offsetHeight) {
        el.classList.add("active");

        const gridItems = el.querySelectorAll(
          ".gallery-item,.choose-us-item,.testimonial-card,.google-review-card",
        );
        gridItems.forEach((item, index) => {
          if (!item.classList.contains("active")) {
            item.style.setProperty("--delay", `${index * 0.1}s`);
            item.classList.add("active");
          }
        });
      } else {
        el.classList.remove("active");
      }
    });
  };

  handleScrollAnimations();
  window.addEventListener("scroll", handleScrollAnimations);

  const setActiveLink = () => {
    let currentActiveSection = "";
    sections.forEach((section) => {
      const sectionTop =
        section.offsetTop - document.querySelector("header").offsetHeight - 10;
      if (window.pageYOffset >= sectionTop) {
        currentActiveSection = section.getAttribute("id");
      }
    });

    navLinks.querySelectorAll("a").forEach((a) => {
      a.classList.remove("active");

      if (a.getAttribute("href") === `#${currentActiveSection}`) {
        a.classList.add("active");
      }
    });
  };
  setActiveLink();
  window.addEventListener("scroll", setActiveLink);

  const setTheme = (mode) => {
    if (mode === "dark") {
      body.classList.add("dark-mode");
      themeToggle
        .querySelector("ion-icon")
        .setAttribute("name", "sunny-outline");
    } else {
      body.classList.remove("dark-mode");
      themeToggle
        .querySelector("ion-icon")
        .setAttribute("name", "moon-outline");
    }
    localStorage.setItem("theme", mode);
  };

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    setTheme("dark");
  } else {
    setTheme("light");
  }

  themeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  });

  const toggleScrollToTopButton = () => {
    if (window.pageYOffset > 300) {
      scrollToTopButton.classList.add("show");
    } else {
      scrollToTopButton.classList.remove("show");
    }
  };

  if (scrollToTopButton) {
    scrollToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  toggleScrollToTopButton();
  window.addEventListener("scroll", toggleScrollToTopButton);

  const currentYearSpan = document.getElementById("current-year");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});

const form = document.querySelector(".quote-form");
const loader = document.getElementById("loading-overlay"); // Corrected ID from 'form-loader' to 'loading-overlay'

function validateNigerianPhone(phone) {
  const cleaned = phone.replace(/\s+/g, "");
  const regex = /^(0|\+234|234)[789][01]\d{8}$/;
  return regex.test(cleaned);
}
function clearErrors() {
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
}

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    clearErrors();

    // Create toast safely if missing
    let toast = document.getElementById("toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast";
      toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #1e1e1e;
        color: #fff;
        padding: 12px 18px;
        border-radius: 8px;
        font-size: 14px;
        z-index: 9999;
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.3s ease;
        max-width: 280px;
      `;
      document.body.appendChild(toast);
    }

    function showToast(message, type = "success") {
      toast.textContent = message;

      toast.style.background = type === "error" ? "#e74c3c" : "#2ecc71";

      toast.style.opacity = "1";
      toast.style.transform = "translateY(0)";

      setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(-20px)";
      }, 3000);
    }

    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const phone = document.getElementById("phone")?.value.trim();
    const project = document.getElementById("project-type")?.value;
    const message = document.getElementById("message")?.value.trim();
    const clientType = document.getElementById("client-type")?.value;

    if (!name) return showToast("Please enter your name", "error");
    if (!email) return showToast("Please enter your email", "error");
    if (!phone || !validateNigerianPhone(phone))
      return showToast("Enter a valid Nigerian phone number", "error");
    if (!project) return showToast("Select a project type", "error");
    if (!message) return showToast("Project details required", "error");

    const subject = `${clientType || "Client"} - Doi-Teck Inquiry`;

    const formData = new FormData(form);
    formData.append("_subject", subject);

    if (loader) loader.style.display = "flex";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        showToast("Message sent successfully 🚀", "success");
        form.reset();
      } else {
        showToast("Form submission failed", "error");
      }
    } catch (err) {
      showToast("Network error. Try again.", "error");
    } finally {
      if (loader) loader.style.display = "none";
    }
  });
}
/* =========================
     YEAR
  ========================== */
const year = document.getElementById("current-year");
if (year) year.textContent = new Date().getFullYear();
