let button = document.querySelectorAll(".question");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    let answer = this.nextElementSibling;
    answer.classList.contains("hidden")
      ? answer.classList.remove("hidden")
      : answer.classList.add("hidden");

    document.querySelector(".arrow").classList.contains("rotate")
      ? document.querySelector(".arrow").classList.remove("rotate")
      : document.querySelector(".arrow").classList.add("rotate");
  });
}
