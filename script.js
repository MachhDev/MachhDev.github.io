const portrait = document.querySelector(".arch-portrait");
const rotatingCta = document.querySelector("[data-rotating-cta]");

//dynamic CTA box
const ctaLines = [
  "Give me the story. I will make it sing.",
  "Working on a project? Let me help!",
  "Need it done quickly? I got this.",
  "Contact me before another team does."
];

let ctaIndex = 0;

function rotateCta() {
  if (!rotatingCta) return;
  ctaIndex = (ctaIndex + 1) % ctaLines.length;
  rotatingCta.textContent = ctaLines[ctaIndex];
}

if (rotatingCta) {
  window.setInterval(rotateCta, 3300);
}

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      card.classList.toggle("is-open");
    }
  });
});

//hamburger menu
document.querySelectorAll(".page-header").forEach((header) => {
  const toggle = header.querySelector(".menu-toggle");
  const nav = header.querySelector(".nav-tabs");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-menu-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-menu-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
});
