// For navbar
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  const scrolled = window.scrollY;
  if (screen.width >= 768) {
    if (scrolled > 200) {
      header.classList.add("sticky");
      this.setTimeout(() => {
        header.style.top = "0px";
      }, 100);
    } else if (scrolled < 50) {
      header.classList.remove("sticky");
    }
  }
});

// For scroll-to-top
const scrollToTopBtn = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 150) {
    scrollToTopBtn.style.display = "block";
    this.setTimeout(() => {
      scrollToTopBtn.style.opacity = "1";
    }, 100);
  } else {
    scrollToTopBtn.style.opacity = "0";
    () =>
      this.setTimeout(() => {
        scrollToTopBtn.style.display = "none";
      }, 500);
  }
});

scrollToTopBtn.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
