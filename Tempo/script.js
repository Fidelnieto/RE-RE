const number = document.getElementById("numbers");
const buttonAddOne = document.getElementById("ButtonAddOne");
const buttonStart = document.getElementById("buttonStart");
const numberInput = document.getElementById("numberInput");
const buttonStop = document.getElementById("buttonStop");

let counterIntervalId;
let minutes = 0;
let seconds = 0;

number.innerHTML = `${minutes}:${seconds <= 9 ? 0 : ""}${seconds}s`;

numberInput.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    minutes = numberInput.value;
    number.innerHTML = `${minutes}:${seconds <= 9 ? 0 : ""}${seconds}s`;

    numberInput.style.transform = "scale(1.2)";
    setTimeout(() => {
      numberInput.style.transform = "scale(1)";
    }, 100);
  }
});

buttonAddOne.addEventListener("click", () => {
  minutes++;
  number.innerHTML = `${minutes}:${seconds <= 9 ? 0 : ""}${seconds}s`;
});

buttonStart.addEventListener("click", () => {
  if (minutes == 0 && seconds == 0) {
    clearInterval(counterIntervalId);
    console.log("add a number, lol");
  } else {
    counterIntervalId = setInterval(() => {
      if (seconds == 0) {
        minutes--;
        seconds = 60;
        number.innerHTML = `${minutes}:${seconds <= 9 ? 0 : ""}${seconds}s`;
      }

      seconds--;
      number.innerHTML = `${minutes}:${seconds <= 9 ? 0 : ""}${seconds}s`;
    }, 1000);

    buttonStart.style.display = "none";
    buttonAddOne.style.display = "none";
    buttonStop.style.display = "block";
  }
});

buttonStop.addEventListener("click", () => {
  clearInterval(counterIntervalId);
  minutes = 0;
  seconds = 0;
  number.innerHTML = `${minutes}:${seconds <= 9 ? 0 : ""}${seconds}s`;

  buttonStart.style.display = "inline-block";
  buttonAddOne.style.display = "inline-block";
  buttonStop.style.display = "none";
});
