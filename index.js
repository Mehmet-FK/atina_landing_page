const onScrollHeroAnimation = () => {
  const h = document.querySelector("header").clientHeight;
  const opacity = 1 - (window.scrollY * 2) / h;
  heroTextContainer.style.transform = `translate(${window.scrollY / 2}px, 0)`;
  if (opacity >= 0) {
    heroTextContainer.style.opacity = opacity;
  }
};

const heroTextContainer = document.querySelector(".hero-bg .text-wrapper");
document.addEventListener("scroll", onScrollHeroAnimation);

document.addEventListener("DOMContentLoaded", () => {
  const warning = document.querySelector(".warning");
  setTimeout(() => {
    warning.classList.add("warning-block");
  }, 1500);
});
