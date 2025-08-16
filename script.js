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

//
//
//

const array = [
  "eggs",
  "milk",
  "cheese",
  "garlic",
  "onion",
  "tomate",
  "salt",
  "pepper",
];

const lastOne = array.pop();
console.log(lastOne);
array.push("grapes");
console.log(array);

const firstOne = array.shift();
console.log(firstOne);
array.unshift("cottage cheese");
console.log(array);

console.log(array.slice(2, 5));
console.log(array.splice(3, 3));

let listItem = array
  .map(function (singleIngredient) {
    return `<li>${singleIngredient}</li>`;
  })
  .join("");

console.log(listItem);
document.getElementById("ingredients").innerHTML = listItem;

//
//
//

function doMath(value, mathToDo) {
  let result = mathToDo(value); // function(4)
  return result;
}

const result = doMath(4, function (pepe) {
  return pepe * 100;
});

console.log(result);

//
//
//

const prices = [5, 5, 5, 4, 5];
let total = prices.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
}, 0);

console.log(total);

//
//
//

array.push("tomate");
console.log(
  array.filter(function (ingredient) {
    return ingredient.endsWith("e");
  })
);

//
//

const [pepe, pepa, cara, boca] = array;
console.log(pepe);

console.log(...array);
const arrayTwo = [...array];
console.log(arrayTwo);

const games = ["zelda", "mario", "pokemon"];
const gamesCopy = games;
const gamesShallowCopy = [...games];
console.log("games copy: " + gamesCopy);
console.log(games);
console.log(gamesShallowCopy);

gamesCopy.push("metroid");
gamesShallowCopy.push("paralel");

console.log(gamesCopy);
console.log(games);
console.log(gamesShallowCopy);

//
//
//

const person = {};
person.hair = "black";
person.hands = 2;
person.name = {
  firstName: "fidel",
  lastName: "nieto",
};

console.log(person.name);
console.log(person.name.firstName);

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

const test1 = { test: "1", test2: "2" };
const test2 = { test: "1", test2: "2" };

console.log(test1 === test2);

const test4 = { ...test1 };
test4.test3 = "3";
const test3 = test2;
test3.test = "2";

console.log(test2 === test3);

test3.test3 = "3";
console.log(test3);

console.log(test1);
