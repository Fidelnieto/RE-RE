const number = document.getElementById("number");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const pause = document.getElementById("pause");
const timesList = document.getElementById("timesList");

let timeIntervalId;
let seconds = 0;
let minutes = 0;
let times = [];
number.innerHTML = `${minutes} : ${seconds}s`;

function startTime() {
  timeIntervalId = setInterval(() => {
    seconds++;

    if (seconds > 60) {
      seconds = 0;
      minutes++;
      number.innerHTML = `${minutes} : ${seconds}s`;
    }
    number.innerHTML = `${minutes} : ${seconds}s`;
  }, 1000);
}

function renderTimes() {
  timesList.innerHTML = "";
  times.map((n) => {
    timesList.innerHTML += `<li>${n}</li>`;
  });
}

start.addEventListener("click", startTime);

pause.addEventListener("click", () => {
  clearInterval(timeIntervalId);
  times.push(number.innerHTML);
  renderTimes();
});

stop.addEventListener("click", () => {
  clearInterval(timeIntervalId);
  minutes = 0;
  seconds = 0;
  timesList.innerHTML = "";
  number.innerHTML = `${minutes} : ${seconds}s`;
});
