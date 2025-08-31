const area = document.getElementById("area");
const buttonStart = document.getElementsByClassName("start");
const buttonReset = document.getElementsByClassName("restart");
const scoreList = document.getElementById("score");
const bestTime = document.getElementById("bestTime");
const clearButton = document.getElementsByClassName("clearStorage");
let best;
let state = "idle";
let time = 0;
let timeOutId = null;

scoreList.innerHTML = localStorage.getItem("scoresHTML") || "";
bestTime.innerHTML = localStorage.getItem("bestTimeHTML") || `Best Time: `;

buttonStart[0].addEventListener("click", () => {
  buttonStart[0].style.display = "none";
  const dot = document.createElement("div");
  let t0 = performance.now();
  const randomNumber = Math.floor(Math.random() * (4000 - 800) + 800);

  if (state == "idle") {
    state = "waiting";
    console.log(state);

    timeOutId = setTimeout(() => {
      state = "ready";
      dot.style.backgroundColor = "red";
      dot.style.width = "300px";
      dot.style.height = "300px";

      area.appendChild(dot);
      buttonReset[0].style.display = "block";
    }, randomNumber);
    console.log(randomNumber);
  }

  dot.addEventListener("mousedown", () => {
    if (time == "") {
      time = `${((performance.now() - t0 - randomNumber) / 1000).toFixed(3)}sg`;
      console.log(time);

      const score = document.createElement("li");
      score.innerHTML = `${time}`;
      score.classList = "scoreList";

      scoreList.appendChild(score);

      localStorage.setItem("scoresHTML", scoreList.innerHTML);

      if (best == 0 || best == "" || best == undefined || best == null) {
        best = time;
        bestTime.innerHTML = `Best time: ${best}`;
        localStorage.setItem("bestTimeHTML", bestTime.innerHTML);
      }

      if (best > time) {
        best = time;
        bestTime.innerHTML = `Best time: ${best}`;
        localStorage.setItem("bestTimeHTML", bestTime.innerHTML);
      }
    } else {
      alert("reset pls");
    }
  });
});

area.addEventListener("click", () => {
  if (state == "waiting" && timeOutId != null) {
    clearTimeout(timeOutId);
    buttonReset[0].style.display = "none";
    buttonStart[0].style.display = "block";
    t0 = 0;
    time = 0;
    score = 0;
    state = "idle";
    alert("dont cheat, lol");
  }
});

buttonReset[0].addEventListener("click", () => {
  area.innerHTML = "";

  buttonReset[0].style.display = "none";
  buttonStart[0].style.display = "block";
  t0 = 0;
  time = 0;
  score = 0;
  state = "idle";
});

clearButton[0].addEventListener("click", () => {
  bestTime.innerHTML = "Best time: ";
  scoreList.innerHTML = "";
  localStorage.setItem("scoresHTML", scoreList.innerHTML);
  localStorage.setItem("bestTimeHTML", bestTime.innerHTML);
});
