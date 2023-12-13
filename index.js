// Primitive data types
// 1. Number - numeric data
// 2. String - textual data
// 3. Boolean - true and false
// 4. Null - vrednost na objekt koj sto ne postoi
// 5. Undefined - neinicijalizirana variabla
// 6. Symbol - unikatna i nepromenliva vrednost

// Non Primitive data types
// 1. Array
// 2. Object
// 3. Function

// global scope
{
  //scope
}

// Functions
// 1. Named
function add(a, b) {
  return a + b;
}

//2. Anonymous
const res = function (a, b) {
  return a + b;
};

//3. Arrow
const result = (a, b) => a + b;
const resultTwo = (a, b) => {
  return a + b;
};

//4. Generator - yield keyword

//5. Recursive - bonus
// base case
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

//6. Higher Order Functions - Concept is called Closure
function operate(func, a, b) {
  return func(a, b); // a + b
}

//7. IIFE (Immediately invoked function expression)
(function () {
  console.log("I am running from IIFE");
  let test = "i am test var";
  console.log(test);
})();

//with arrow
(() => {
  console.log("I am running from IIFE arrow");
  //   console.log(test);
})();

//8. Callback
function performAction(callback) {
  callback();
}

function greetMe() {
  console.log("Hello!");
}

performAction(greetMe);

// Uslovi
const tryOut = false;
const tryOutTwo = true;

if (!tryOut || tryOutTwo) {
  console.log("test me");
}

// && - true
// od dvete strani treba da imame tocni - "true" iskazi
// ||
// za da bide tocno eden od dvata iskazi treba da bide tocen

// Napravete vas folder ime-broj
// Vpisete komanda za startuvanje na node js proekt
// Napravete fajl koj ke se vika index.js
// vo index.js ispecatete go vaseto ime
// prikacete go na github

console.log("Vangel Hristov");

//git init
//git add .
//git commit -m "Initial commit"
//git push --set-upstream master

// Napravete funkcija koja ke presmetuva zbir, razlika, mnozenje, delenje na dva broja

//HINT -> operation e string koj sodrzi +, -, /, *
function calculate(operation, a, b) {
  //switch
  //if
}

calculate("+", 4, 5);
