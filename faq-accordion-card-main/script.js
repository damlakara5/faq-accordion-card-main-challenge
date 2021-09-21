let button = document.querySelectorAll(".question");
let arrow = document.querySelectorAll(".arrow");
let answwerList = document.querySelectorAll(".answer");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function (event) {
    let x = event.target;
    let answer = this.nextElementSibling;
    for (let i = 0; i < answwerList.length; i++) {
      answwerList[i] !== answer
        ? answwerList[i].classList.add("hidden")
        : console.log();
    }

    answer.classList.toggle("hidden");
    /*     answer.classList.contains("hidden")
      ? answer.classList.remove("hidden")
      : answer.classList.add("hidden"); */

    arrow[i].classList.contains("rotate")
      ? arrow[i].classList.remove("rotate")
      : arrow[i].classList.add("rotate");

    for (let j = 0; j < button.length; j++) {
      if (button[j] === x) {
        x.classList.contains("bold")
          ? x.classList.remove("bold")
          : x.classList.add("bold");
      } else {
        button[j].classList.remove("bold");
      }
    }

    /*     if (answer.classList.contains("hidden")) {
      button[i].style.color = "hsl(240, 6%, 50%)";
      button[i].style.fontWeight = 300;
    } else {
      button[i].style.color = "black";
      button[i].style.fontWeight = 700;
    } */
  });
}
