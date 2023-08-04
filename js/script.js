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
