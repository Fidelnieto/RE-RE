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

//
//
//

const user = { username: "starvesito", password: "123456" };
console.log(user);

const loginStatus = login(user);
console.log(loginStatus);
console.warn(`The password is now ${user.password}`);

function login(userCredential) {
  if (userCredential.password === "123456") {
    let randomString = Math.random().toString(36).slice(-16);
    userCredential.password = randomString;
    return `Terrible password. Your password has been reset to a random string`;
  }
  return "Logged in";
}

console.log(user);

function sortList(sortBy, ...items) {
  console.log(items);
}

sortList("alphabetical", "jose", "fidel", "mario");
//
//
//

function makeList() {
  let numberedList = "<ol>";
  for (let i = 0; i < arguments.length; i++) {
    numberedList += `<li>${arguments[i]}</li>`;
  }
  numberedList += "</ol>";
  return numberedList;
}

// ingredients.innerHTML = makeList(1, 2, 3, 4, 5, 3);

function greetInSpanish(name) {
  return `Hola ${name}`;
}
function getUserName(callback) {
  // let firstName = prompt("Enter your first name");
  return callback();
}

console.log(getUserName(greetInSpanish));

//
//

function makeUnorderList(array = []) {
  if (typeof array !== "number" && typeof array !== "string") {
    let listItem = array.map(function (element) {
      return `<li>${element}</li>`;
    });
    return `<ul>${listItem.join("")}</ul>`;
  } else {
    console.log(`Are you trying to put a Number? like ${array}`);
  }
}

const ar = [1, 2, 3, 4];
console.log(makeUnorderList());

//

//

const bookStore = {
  books: ["Ulysses", "The Great Getaby"],
  displayBookStore() {
    const renderTarget = document.getElementById("bookstore");
    const bookList = this.books.map((book) => `<p>${book}</p>`);
    renderTarget.innerHTML = bookList.join("");

    shoppingCart.displayCart(this.removeBook.bind(this));
  },
  removeBook(title) {
    let newList = this.books.filter((book) => book != title);
    this.books = newList;
    this.displayBookStore();
  },
};

const shoppingCart = {
  itemsInCart: ["The Great Getaby"],
  handleClick(removeBook) {
    removeBook(this.itemsInCart);
  },
  displayCart(clickHandler) {
    const renderTarget = document.getElementById("cart");
    const itemsInCarrito = this.itemsInCart.map((item) => `<p>${item}</p>`);
    const checkOutButton = "<button id='checkout'>Check Out</button>";

    renderTarget.innerHTML = itemsInCarrito.join("") + checkOutButton;

    document
      .getElementById("checkout")
      .addEventListener("click", () => this.handleClick(clickHandler));
  },
};

bookStore.displayBookStore();

//
//
//

let current = 0;

function render() {
  count.innerHTML = current;
}

let count = document.getElementById("numberToCount");
let buttonIncr = document.getElementById("incr");
let buttonDecr = document.getElementById("decr");
let buttonReset = document.getElementById("reset");

buttonIncr.addEventListener("click", () => {
  current++;
  render();
});

buttonDecr.addEventListener("click", () => {
  current--;
  render();
});

buttonReset.addEventListener("click", () => {
  current = 0;
  render();
});

//
//
//

const container = document.getElementById("colorRandom");
const buttonColorChange = document.getElementById("changeColor");

function randomRGBNumber() {
  return Math.floor(Math.random() * 256);
}

buttonColorChange.addEventListener("click", () => {
  container.style.backgroundColor = `rgb(${randomRGBNumber()}, ${randomRGBNumber()}, ${randomRGBNumber()})`;
});

//
//
// Tienes una lista de nombres. Al escribir en un input, se muestran solo los que coinciden con lo que escribes.

const names = [
  "Fidel",
  "Jorgelis",
  "Raul",
  "Miye",
  "Angelis",
  "Alejandro",
  "Samuel",
  "Luis",
  "Diego",
];
const inputValueName = document.getElementById("lookForName");
const displayer = document.getElementById("displayNames");

function renderNames(names) {
  displayer.innerHTML = "";
  names.map((name) => {
    const li = document.createElement("li");
    li.textContent = name;
    displayer.appendChild(li);
  });
}

renderNames(names);

inputValueName.addEventListener("input", () => {
  const text = inputValueName.value.toLowerCase();
  const filtered = names.filter((n) => n.toLowerCase().includes(text));
  renderNames(filtered);
});

//

// La compu genera un número aleatorio entre 1 y 100.
// Tú escribes un número en un input y presionas “Probar”.
// El programa te dice si es muy alto, muy bajo o correcto.

let randomNumberToGuess;
const guessValue = document.getElementById("inputToGuess");
const resultado = document.getElementById("result");
const buttonToBegin = document.getElementById("begin");

buttonToBegin.addEventListener("click", () => {
  randomNumberToGuess = Math.floor(Math.random() * 100);
  console.log(randomNumberToGuess);
  buttonToBegin.style.display = "none";
  return randomNumberToGuess;
});

guessValue.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    if (guessValue.value == randomNumberToGuess) {
      resultado.innerHTML = `AMAZING YOU GOT THE NUMBER!! IT WAS ${randomNumberToGuess}`;
      buttonToBegin.style.display = "";
    } else if (guessValue.value > randomNumberToGuess) {
      resultado.innerHTML = `Too high, try one lower`;
    } else if (guessValue.value < randomNumberToGuess) {
      resultado.innerHTML = `Too low, try one higher`;
    }
  } else if (e.code === "Backspace") {
    resultado.innerHTML = "";
  }
});

//
//
// simple to-do list

const inputToDo = document.getElementById("inputToDo");
const list = document.getElementById("list");
const noteArray = [];

inputToDo.addEventListener("keydown", (e) => {
  if (e.code === "Enter" && inputToDo.value !== "") {
    noteArray.push(inputToDo.value);
    renderList();
    inputToDo.value = "";
    console.log(noteArray);
  }
});

function renderList() {
  list.innerHTML = "";
  noteArray.forEach((x, i) => {
    list.innerHTML += `<li>${x}<button class="erase" data-index="${i}">X</button></li>`;
  });
}

list.addEventListener("click", (e) => {
  console.log(e.target.classList.contains("erase"));
  if (e.target.classList.contains("erase")) {
    console.log(e.target.dataset.index);
    let index = e.target.dataset.index;
    noteArray.splice(index, 1);
    renderList();
  }
});

const robot = {
  currentActivty: undefined,
  walk() {
    this.currentActivty = "walking";
    return this;
  },
  talk() {
    this.currentActivty = "talking";
    return this;
  },
};

console.log(robot.walk().talk());

//
//

class Cat {
  static species = "Feliz catus";
  #isSleeping;
  paws = 4;
  sound = "meow";

  constructor(name, favoriteToy) {
    this.name = name;
    this.favoriteToy = favoriteToy;
  }
  static herd() {
    throw new Error(`You can't do that`);
  }
  play() {
    console.log(
      `${this.name} is playing with ${this.favoriteToy} on his ${this.paws} paws`
    );
    this.#takeNap();
  }
  #takeNap() {
    this.#isSleeping = true;
  }
}

const cat1 = new Cat("Milo", "tinfoil");
const cat2 = new Cat("Otto", "box");

cat1.play();

console.log(cat1);
console.log(cat2);

console.log("///////////////////////");

class ShortHair extends Cat {
  fur = "short";

  constructor(name, favoriteToy) {
    super(name, favoriteToy);
  }
}

const cat3 = new ShortHair("Pololo", "keyboard");

console.log(cat3);

//
//
//

const buttonToPlay = document.getElementById("botonJugar");
const selectionOfPlayer = document.getElementById("rPS");
const plays = ["tijera", "papel", "piedra"];

// buttonToPlay.addEventListener("click", () => {
//   const randomSelection = Math.floor(Math.random() * 3);
//   if (selectionOfPlayer.value == plays[randomSelection]) {
//     alert("Empate");
//   } else if (
//     plays[randomSelection == "tijera" && selectionOfPlayer.value == "piedra"]
//   ) {
//     alert("Player ha ganado a CPU con piedra");
//   } else if (
//     plays[randomSelection] == "papel" &&
//     selectionOfPlayer.value == "piedra"
//   ) {
//     alert("CPU ha ganado a Player con papel");
//   } else if(plays[randomSelection] == "piedra" && selectionOfPlayer.value == "papel")

//   console.log(randomSelection);
// });

buttonToPlay.addEventListener("click", () => {
  const randomSelection = Math.floor(Math.random() * 3);
  if (
    selectionOfPlayer.value == "tijera" &&
    plays[randomSelection] == "papel"
  ) {
    alert("Player gana a Papel con Tijeras");
  } else if (
    selectionOfPlayer.value == "papel" &&
    plays[randomSelection == "piedra"]
  ) {
    alert("Player gana a Piedra con Papel");
  } else if (
    selectionOfPlayer.value == "piedra" &&
    plays[randomSelection] == "tijera"
  ) {
    alert("Player gana a Tijeras con Piedra");
  } else if (selectionOfPlayer.value === plays[randomSelection]) {
    alert("Empate");
  } else {
    alert(
      `CPU gana a ${selectionOfPlayer.value} con ${plays[randomSelection]}`
    );
  }
  console.log(plays[randomSelection]);
});

//
//
//

const mousePosition = document.getElementById("mousePosition");
const savedPosition = document.getElementById("clickedPosition");
const trackingArea = document.getElementById("trackingArea");
let currentColor = "red";
let painting = false;
let currentSize = 6;

trackingArea.addEventListener("mousemove", (e) => {
  mousePosition.innerHTML = `X: ${e.offsetX}, Y: ${e.offsetY}`;

  if (painting) {
    const divsito = document.createElement("div");
    divsito.style.position = "absolute";
    divsito.style.backgroundColor = currentColor;
    divsito.style.width = `${currentSize}px`;
    divsito.style.height = `${currentSize}px`;
    divsito.style.borderRadius = "50%";
    divsito.style.pointerEvents = "none";
    divsito.style.top = `${e.offsetY - 5}px`;
    divsito.style.left = `${e.offsetX - 5}px `;

    trackingArea.appendChild(divsito);
  }
});

trackingArea.addEventListener("mousedown", (e) => {
  painting = true;

  const savePosition = mousePosition.innerHTML;
  savedPosition.innerHTML = `You clicked on ${savePosition}`;

  const divsito = document.createElement("div");
  divsito.style.position = "absolute";
  divsito.style.backgroundColor = currentColor;
  divsito.style.width = `${currentSize}px`;
  divsito.style.height = `${currentSize}px`;
  divsito.style.borderRadius = "50%";
  divsito.style.pointerEvents = "none";
  divsito.style.top = `${e.offsetY - 3}px`;
  divsito.style.left = `${e.offsetX - 3}px `;

  trackingArea.appendChild(divsito);
});

window.addEventListener("mouseup", () => {
  painting = false;
});

trackingArea.addEventListener("mouseleave", () => {
  painting = false;
});

window.addEventListener("keydown", (e) => {
  if (e.code == "KeyB") {
    currentColor = "blue";
  } else if (e.code == "KeyR") {
    currentColor = "red";
  } else if (e.code == "KeyG") {
    currentColor = "green";
  } else if (e.code == "Equal") {
    currentSize += 1;
  } else if (e.code == "Minus") {
    currentSize -= 1;
  } else if (e.code == "KeyJ") {
    trackingArea.innerHTML = "";
  }
});
