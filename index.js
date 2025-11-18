const allToggleButtons = document.querySelectorAll(".toggle-btn");

allToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const liParent = button.closest("li");
    const answer = liParent.querySelector(".faq-answer");
    const img = button.querySelector("img");

    if (answer.classList.contains("hidden")) {
      answer.classList.remove("hidden");
      img.src = "assets/images/icon-minus.svg";
    } else {
      answer.classList.add("hidden");
      img.src = "assets/images/icon-plus.svg";
    }
  });
});
