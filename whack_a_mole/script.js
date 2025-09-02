const moleZone = document.querySelector("#moleZone");
const buttonStart = document.querySelector("#buttonStart");
const time = document.querySelector("#spanTime");
const points = document.querySelector("#spanPoints");
let intervalId;
let timer = 10;

function timerCounter() {
  buttonStart.style.display = "none";
  intervalId = setInterval(() => {
    if (timer == 0) {
      clearInterval(intervalId);
      console.log("STOPPED");
    } else {
      timer--;
      time.innerHTML = `Time: ${timer}`;
    }
  }, 1000);
}

const item1 = document.querySelector(".item-1");
const item2 = document.querySelector(".item-2");
const item3 = document.querySelector(".item-3");
const item4 = document.querySelector(".item-4");
const item5 = document.querySelector(".item-5");
const item6 = document.querySelector(".item-6");
const item7 = document.querySelector(".item-7");
const item8 = document.querySelector(".item-8");
const item9 = document.querySelector(".item-9");

let state = "idle";

buttonStart.addEventListener("click", timerCounter);
