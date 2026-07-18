const portrait = document.querySelector(".arch-portrait");
const rotatingCta = document.querySelector("[data-rotating-cta]");

const ctaLines = [
  "Give me the brief. I will make it sing.",
  "Hiring? I am unusually useful.",
  "Need story, strategy, and polish? Say hello.",
  "Contact me before another team does."
];

let ctaIndex = 0;

function wink() {
  if (!portrait) return;
  portrait.classList.remove("is-winking");
  window.requestAnimationFrame(() => {
    portrait.classList.add("is-winking");
  });
}

function rotateCta() {
  if (!rotatingCta) return;
  ctaIndex = (ctaIndex + 1) % ctaLines.length;
  rotatingCta.textContent = ctaLines[ctaIndex];
}

if (portrait) {
  portrait.addEventListener("mouseenter", wink);
  portrait.addEventListener("click", wink);
  window.setInterval(wink, 5200);
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
