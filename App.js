let hole = document.getElementsByClassName("section");
let score = document.querySelector(".score");
let Time = document.querySelector(".timer");
let disabled = false;
let progress = false;

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
function startPlay() {
  if (!progress) {
    let countD = setInterval(() => {
      Time.textContent = Number(Time.textContent) - 1;
    }, 1000); //decereasing Time every one sec

    progress = true; //used for perventing double execution
    let interval = setInterval(addPic, 1000);
    setTimeout(() => {
      clearInterval(interval);
      clearInterval(countD);
      progress = false;
      disabled = true;
      Time.textContent = 60;
    }, 60000);
  }
}
for (let i = 0; i < hole.length; i++) {
  hole[i].addEventListener("click", function () {
    if (hole[i].hasChildNodes() && !disabled) {
      score.textContent = Number(score.textContent) + 1;
    } 
    else if (!hole[i].hasChildNodes()) {
      score.textContent = Number(score.textContent) - 1;
      hole[i].style.backgroundColor = "red";
      setTimeout(() => {
        hole[i].style.backgroundColor = "";
      }, 150);
    }
  });
}
