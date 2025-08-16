const dt = new Date();
console.log(dt);
const hours = dt.getHours();
console.log(hours);
let msg;
msg = hours < 12 ? "Good morning" : "Welcome";
console.log(msg);

let message = document.getElementById("message");

const months = dt.getMonth();

// switch (months) {
//   case 0:
//     message.innerHTML = "January";
//     break;
//   case 1:
//     message.innerHTML = "February";
//     break;
//   case 2:
//     message.innerHTML = "March";
//     break;
//   case 3:
//     message.innerHTML = "April";
//     break;
//   case 7:
//     message.innerHTML = "August";
//     break;
//   default:
//     message.innerHTML = "Not the first 4 months, lol";
// }

console.log(months);
("");

let inputValue = document.getElementById("numberToGuess");
let root = document.getElementById("number");
let guessTries = 0;
let guess;

inputValue.addEventListener("keydown", function (e) {
  if (e.code == "Enter") {
    if (inputValue.value > 100) {
      root.innerHTML =
        "You tried to fool me, enter a number JUST between 0 and 100 please!";
    } else {
      while (guess != inputValue.value) {
        guess = Math.floor(Math.random() * 100);
        guessTries++;
      }
      root.innerHTML = `It took me ${guessTries} times to guess that the number you choosed was ${inputValue.value}`;
      guessTries = 0;
    }
  } else {
    return;
  }
});

//Write a program with the pattern
// *
// **
// ***
// and try to get it by an input too

let piramid = document.getElementById("piramid");
let amountOfRows = document.getElementById("rows");

amountOfRows.addEventListener("keydown", function (e) {
  if ((e.code = "Enter")) {
    if (piramid.innerHTML !== "") {
      piramid.innerHTML = "";
    }

    for (let i = 1; i <= amountOfRows.value; i++) {
      for (let j = 0; j < i; j++) {
        piramid.innerHTML += "*";
      }
      piramid.innerHTML += "<br>";
      console.log(i);
    }
  } else {
    return;
  }
});
