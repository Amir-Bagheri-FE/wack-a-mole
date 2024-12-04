let hole = document.getElementsByClassName("section");
let score = document.querySelector(".score");
let Time = document.querySelector(".timer");
let disabled = false;
let progress = false;
// sound effect
let pop = document.querySelector("#pop");
let fail = document.querySelector("#fail");

document.addEventListener("dragstart", function (event) {
  event.preventDefault(); // Prevent dragging image
});
const mole = document.createElement("img");
mole.setAttribute("src", "/images/mole.jpg");
mole.classList.add("img");

//adding mole to sections
function addPic() {
  let random = Math.floor(Math.random() * hole.length);
  hole[random].append(mole);
}
function startPlay(n) {
  if (!progress) {
    score.textContent = 0;
    let countD = setInterval(() => {
      Time.textContent = Number(Time.textContent) - 1;
    }, 1000); //decereasing Time every one sec

    progress = true; //used for perventing double execution
    let interval = setInterval(addPic, n);
    setTimeout(() => {
      clearInterval(interval);
      clearInterval(countD);
      progress = false;
      disabled = true;
      Time.textContent = 60;
      alert(`finall score is: ${score.textContent}`);
    }, 60000);
  }
}
for (let i = 0; i < hole.length; i++) {
  hole[i].addEventListener("click", function () {
    if (hole[i].hasChildNodes() && !disabled) {
      score.textContent = Number(score.textContent) + 1;
      pop.play();
    } else if (!hole[i].hasChildNodes() && !disabled && progress) {
      score.textContent = Number(score.textContent) - 1;
      fail.play();
      hole[i].style.backgroundColor = "red";
      setTimeout(() => {
        hole[i].style.backgroundColor = "";
      }, 150);
    }
  });
}
