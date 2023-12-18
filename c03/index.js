const fs = require("fs");
// Promise - ES6
// tri slucai: fullfiled, pending, rejected

// Callback - ES5
// Promises - ES6
// Async/await - ES7

// Local, core, third-party
// fs

// Promise

// step 1
// const writeFile = () => {};

// step 2
// const writeFile = () => {
//   return new Promise();
// };

// step 3

// const writeFile = () => {
//   return new Promise(() => {});
//   //   return new Promise(function () {});
// };

// step 4
// const writeFile = () => {
//   return new Promise((success, fail) => {});
// };

// step 5
// const writeFile = () => {
//   return new Promise((success, fail) => {
//     fs.writeFile("data.txt", "Hello Semos!", (err) => {
//       if (err) {
//         return fail(err);
//       }
//       return success();
//     });
//   });
// };

// writeFile();

const readFile = () => {
  return new Promise((success, fail) => {
    fs.readFile("data.txt", "utf-8", (err, data) => {
      if (err) {
        return fail(err);
      }
      return success(data);
    });
  });
};

// readFile()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(console.log("I read a file."));

// Async/await
async function readMe() {
  try {
    const data = await readFile();
  } catch (err) {
    console.log(err);
  } finally {
    console.log("I red a file.");
  }
}

// fs.writeFile() //async
// let test = "TEST";
// fs.writeFileSync(); //sync
// let testOne = "TEST";

// const fileSystem = {
//     zapisi: function() {

//     },
//     procitaj: function() {

//     }
// }

// Zadaca 1
// 1. Napravete fajl kade sto ke ima tri polinja: fullname, age, profession - Vangel Hristov, 24, Software Engineer
// 2. Read that file and display the contents
// Optional:
// write and read should be in local modules and imported in
