const readingBar = document.querySelector(".reading-progress span");
const storySections = Array.from(document.querySelectorAll("[data-section]"));
const storyLinks = Array.from(document.querySelectorAll(".story-nav a"));

let readingFrame = 0;

function updateReadingView() {
  const scrollTop = window.scrollY;
  const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollRange > 0 ? Math.min(1, Math.max(0, scrollTop / scrollRange)) : 0;

  if (readingBar) {
    readingBar.style.width = `${progress * 100}%`;
  }

  let currentSection = storySections[0]?.id;
  storySections.forEach((section) => {
    if (section.getBoundingClientRect().top <= 170) {
      currentSection = section.id;
    }
  });

  storyLinks.forEach((link) => {
    const isCurrent = link.getAttribute("href") === `#${currentSection}`;
    link.classList.toggle("is-active", isCurrent);
    if (isCurrent) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  readingFrame = 0;
}

function requestReadingViewUpdate() {
  if (readingFrame) return;
  readingFrame = window.requestAnimationFrame(updateReadingView);
}

window.addEventListener("scroll", requestReadingViewUpdate, { passive: true });
window.addEventListener("resize", requestReadingViewUpdate);
window.addEventListener("load", updateReadingView);
updateReadingView();
