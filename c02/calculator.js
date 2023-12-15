//CommonJS module
function calculate(operation, a, b) {
  if (operation === "+") return a + b;
  else if (operation === "-") return a - b;
  else if (operation === "*") return a * b;
  else if (operation === "/") return a / b;
  else return "Invalid opration";
}

function greetMe() {
  console.log("Zdravo studenti!");
}

function testMe() {
  return 1;
}

//ES module
// export function calculate(operation, a, b) {
//   if (operation === "+") return a + b;
//   else if (operation === "-") return a - b;
//   else if (operation === "*") return a * b;
//   else if (operation === "/") return a / b;
//   else return "Invalid opration";
// }

// export function greetMe() {
//   console.log("Zdravo studenti!");
// }

module.exports = {
  calculate,
  greetMe,
};
