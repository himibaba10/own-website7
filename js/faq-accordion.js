var faqs = document.getElementsByClassName("faq-question");

for (let i = 0; i < faqs.length; i++) {
  faqs[i].addEventListener("click", function () {
    let faqAnswer = this.nextElementSibling;
    let faqNumber = this.parentNode.previousElementSibling;
    console.log(faqNumber);
    if (faqAnswer.style.maxHeight) {
      faqAnswer.style.maxHeight = null;
      faqNumber.classList.remove("active");
    } else {
      faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
      faqNumber.classList.add("active");
    }
  });
}
