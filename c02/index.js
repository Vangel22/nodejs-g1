// Node.js e event-driven, asynchronous
const fs = require("fs"); // CommonJS -> e default za Node.js
// import fs from "fs" -> ES modules

const { greetMe, calculate } = require("./calculator"); // CommonJS
// import { greetMe, calculate } from "./calculator"; -> ES

// ES modulite mora da bidat na vrvot od fajlot
// CommonJS ni ovozmozuvaat da gi iskoristime kade sakame
if (true) {
  const test = require("assert");
  // import test from "assert"
}

// Object destructuring
// Spread operator

// Kluc, vrednost
const obj = {
  name: "Vangel",
  test: "Semos",
  surname: "111",
  tmp: "111",
  temp: "temp",
};

// Go izvlekuvame klucot od objektot vo konstanta
const { name } = obj;
const { surname, ...rest } = obj;
// rest ni e spread operator

console.log("name", name);

console.log(calculate("+", 2, 3));

// ./ - momentalen direktorium
// ../ - cd ..

// ES modules - import export

// CommonJS module - require() module.exports

// Instalacija na paket
// npm install axios
// npm i axios
// Deinstalacija
// npm uninstall axios

// Local - sami si gi kreirame
// Core - doagjaat od Node.js
// Third-party modules - gi instalirame i koristime vo nasiot proekt soglasno dokumentacijata

const arr = ["a", 4, "a", 2, "c"];
const numbers = [1, 2, 3, 4, 5];
// find -> go vrakja prviot clen sto go ispolnuva uslovot
const resFind = arr.find((el) => el === "a");
const resFindWithBody = arr.find((el) => {
  if (el === "a") {
    return el;
  }
});

// map -> ni vrakja niza
const mapEl = numbers.map((num) => num + 1);
// [2,3,4]

// filter
const filterNum = numbers.filter((num) => num > 2);
// 3,4,5

// sort
const sortData = numbers.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  if (a === b) return 0;
});
// reduce
const reducer = numbers.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 1);
//forEach -> izminuvanje, ne vrakja nisto

const loopNum = numbers.forEach((el) => console.log(el));

const studenti = [
  { ime: "Bojan", prosek: 7.5, grad: "Skopje" },
  { ime: "Pero", prosek: 8.3, grad: "Bitola" },
  { ime: "Janko", prosek: 6.9, grad: "Bitola" },
  { ime: "Vesna", prosek: 9.2, grad: "Skopje" },
  { ime: "Elena", prosek: 9.9, grad: "Kumanovo" },
  { ime: "Vancho", prosek: 10, grad: "Tetovo" },
  { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
  { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
  { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
  { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
];

// const studentsEndingWithA = endsWithA(studenti);
// console.log(studentsEndingWithA);
