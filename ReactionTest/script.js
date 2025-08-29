const area = document.getElementById("area");
const buttonStart = document.getElementsByClassName("start");
const buttonReset = document.getElementsByClassName("restart");
let state = "idle";
let time = 0;

buttonStart[0].addEventListener("click", () => {
  buttonStart[0].style.display = "none";
  state = "waiting";
  const dot = document.createElement("div");
  let t0 = performance.now();
  const randomNumber = Math.floor(Math.random());

  setTimeout(() => {
    dot.style.backgroundColor = "red";
    dot.style.width = "300px";
    dot.style.height = "300px";

    area.appendChild(dot);
    buttonReset[0].style.display = "block";
    state = "ready";
  }, 2000);

  dot.addEventListener("mousedown", () => {
    time = `${((performance.now() - t0 - 2000) / 1000).toFixed(3)}sg`;
    console.log(time);
  });
});

buttonReset[0].addEventListener("click", () => {
  area.innerHTML = "";
  buttonReset[0].style.display = "none";
  buttonStart[0].style.display = "block";
  t0 = 0;
  time = 0;
});
