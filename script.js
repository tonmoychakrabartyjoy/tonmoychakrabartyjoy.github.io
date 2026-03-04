// Portfolio loaded
console.log("Portfolio Loaded");

// Scroll animation for fade-up
const fadeElements = document.querySelectorAll(".fade-up");

const fadeObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

fadeElements.forEach(el => fadeObserver.observe(el));

// Education timeline animation
const timeline = document.querySelector(".edu-timeline");

if (timeline) {
  const timelineObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        timeline.classList.add("show");
      }
    });
  }, { threshold: 0.4 });

  timelineObserver.observe(timeline);
}