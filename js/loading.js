const loaderSection = document.getElementById("loader-section");
window.addEventListener("load", () => {
  loaderSection.style.opacity = "0";
  setTimeout(() => {
    loaderSection.style.display = "none";
  }, 500);
});
