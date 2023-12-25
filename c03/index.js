const fs = require("fs");
const http = require("http");
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

// WWW - ova se operacii na internet
// HTTP - Hyper Text Transfer Protocol - vrsi razmena na fajlovi kako "cist tekst"
// HTTPs - Hyper Text Transfer Protocol Secure - vrsi razmena na enkriptirani fajlovi

// HTTP metodi:
// 1. GET - da zemame podatoci od nekoj resurs, nema telo -> readFile
// 2. POST - da zapiseme podatoci vo nekoj resurs, ima telo -> writeFile
// 3. PUT - da se azurira odreden resurs (data.txt), ima telo, i ke go zameni teloto koe sto veke postoi, nemozeme da azurirame resurs koj ne postoi
// 4. PATCH - moze da izmeni samo odreden kluc-vrednost vo fajlot, t.e samo odreden segment, ima telo
// 5. DELETE - opcionalno telo, ni ovozmozuva da go izbriseme resursot

// Soft delete, hard delete

// Client/Server Arhitektura
// Request/Response

const server = http.createServer((req, res) => {
  //req.body
  //req.method
  //req.query
  //req.params
  //req.headers

  console.log("request url", req.url);

  //Po default sekoja ruta vrakja GET baranje

  //ruta -> /home
  //   if(req.url === "/convert") {
  //  if (req.method === "POST") {
  //        const data = convertToMiles();
  //        res.end("For 2 miles in km is 4km")
  //   }
  //   if (req.url === "/home") {
  //     if (req.method === "POST") {
  //       console.log("POST");
  //     }
  //     if (req.method === "GET") {
  //       console.log("GET");
  //     }
  // res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("<h1>Welcome home Vangel!</h1>");
  //   } else {
  //     //bilo koja druga ruta
  //     res.writeHead(200, { "Content-Type": "text/plain" });
  //     res.end("Hello Vangel!");
  //   }
});

// bazicna ruta ni e samo "/"

server.listen(8080);

// const server = http.createServer(function (req, res) {});

//Link for HTTP: https://www.w3schools.com/whatis/whatis_http.asp
