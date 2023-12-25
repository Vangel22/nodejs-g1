const http = require("http");

function convertMilesToKm(miles) {
  return miles * 1.6;
}

// GET, POST, PUT, PATCH, DELETE

// const postovi = {
//   naslov: "Test",
//   sodrzina: "za toj naslov",
// };

//192.168.... -> mojotdomen
const server = http.createServer((req, res) => {
  // "/" -> root ili domasna ruta
  // POST baranje
  // convert(10)

  //   if (req.url === "userSearch" && req.method === "POST") {
  // najdi go resursot
  // postovi.find(naslov: req.body.test "test") -> ke go najde po naslovot
  //   }

  //GET i POST
  if (req.url === "/convert" && req.method === "GET") {
    //get
    res.end("<h1>Zdravo jas sum doma</h1>");
  }
  if (req.url === "/convert" && req.method === "POST") {
    res.end("POST BARANJE");
  } else {
    //get
    res.end("Zdravo");
  }
});

server.listen(8080);
