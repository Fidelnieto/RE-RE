const moleZone = document.querySelector("#moleZone");
const buttonStart = document.querySelector("#buttonStart");
const time = document.querySelector("#spanTime");
const points = document.querySelector("#spanPoints");
const difSelection = document.getElementById("difSelection");
const buttonReset = document.querySelector("#buttonReset");

//Score things
const openScores = document.querySelector("#openScores");
const screenScore = document.querySelector("#screenScore");
const closeScore = document.querySelector("#closeScore");
const scoreList = document.querySelector("#scoreList");

let intervalTimerId;
let intervalPickId;
let timer = 5;
let state = "idle";
let lastItemPicked = [];
let pointos;
let score = localStorage.getItem("score");
let scoreListArray = localStorage.getItem("scoreListArray" || 0);
let array = [];

let difficulty = {
  easy: 1200,
  normal: 900,
  hard: 500,
};

//moleZone
const item1 = document.querySelector(".item-1");
const item2 = document.querySelector(".item-2");
const item3 = document.querySelector(".item-3");
const item4 = document.querySelector(".item-4");
const item5 = document.querySelector(".item-5");
const item6 = document.querySelector(".item-6");
const item7 = document.querySelector(".item-7");
const item8 = document.querySelector(".item-8");
const item9 = document.querySelector(".item-9");
const mole = document.querySelectorAll("div#moleZone > div");

function renderScore() {
  //RENDERING SCORE
  points.innerHTML = `Points: ${score}`;
}
setInterval(renderScore, 100); //Little rendering everymilisecond

setInterval(() => {
  scoreList.innerHTML = "";
  for (let i = 0; i < scoreListArray.length; i += 2) {
    scoreList.innerHTML += `<li>${scoreListArray[i]}</li>`;
    console.log(scoreListArray[i]);
  }
}, 5000);

function addOneToScore() {}

function timerCounter() {
  //TIMER AND PICK INTERVAL
  buttonStart.style.display = "none";
  localStorage.setItem("score", 0);
  score = 0;

  state = "running";
  intervalTimerId = setInterval(() => {
    if (timer == 0) {
      clearInterval(intervalTimerId);
      state = "finish";
      console.log("STOPPED");
    } else {
      timer--;
      time.innerHTML = `Time: ${timer}`;
    }
  }, 1000);

  intervalPickId = setInterval(() => {
    if (timer == 0) {
      clearInterval(intervalPickId);
      state = "finish";
      console.log("STOP PICKING");

      array.push(score);
      scoreListArray = (scoreListArray ? scoreListArray : ">") + "," + score;
      localStorage.setItem("scoreListArray", scoreListArray || "");

      console.log(scoreListArray);

      buttonReset.style.display = "block";
    } else {
      randomPick();
    }
  }, difficulty[difSelection.value]); //CHANGE DIFFICULTY HERE, FASTER MOLES
}

function randomPick() {
  // LOGIC BEHIND THE PICKING
  const randomNumber = Math.floor(Math.random() * 9 + 1);
  const itemPicked = document.querySelector(`.item-${randomNumber}`);

  function handleClick() {
    console.log("clicked");
    itemPicked.style.backgroundColor = "transparent";
    score++;
    localStorage.setItem("score", score);
  }

  if (lastItemPicked[lastItemPicked.length - 1] == randomNumber) {
    console.log("The same, trying again");
    return randomPick();
  } else {
    itemPicked.style.backgroundColor = "red";
    itemPicked.addEventListener("mousedown", handleClick);
    itemPicked.addEventListener("mouseup", () => {
      itemPicked.removeEventListener("mousedown", handleClick); // REMOVING CLICK
    });
    lastItemPicked.push(randomNumber);
    console.log(itemPicked.className);

    setTimeout(() => {
      itemPicked.style.backgroundColor = "transparent";
      itemPicked.removeEventListener("mousedown", handleClick);
    }, difficulty[difSelection.value]); // JUST ADJUST TO MAINTAIN A GOOD VISUAL EFFECT
  }
}

buttonStart.addEventListener("click", timerCounter); // START BUTTON
buttonReset.addEventListener("click", () => {
  score = 0;
  localStorage.setItem("score", 0);
  timer = 4;
  time.innerHTML = `Time: ${timer}`;
  points.innerHTML = `Points: ${score}`;

  state = "idle";

  buttonStart.style.display = "block";
  buttonReset.style.display = "none";
});

// SCORE THINGS

openScores.addEventListener("click", () => {
  screenScore.style.display = "block";
});

closeScore.addEventListener("click", () => {
  screenScore.style.display = "none";
});
