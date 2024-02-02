const express = require("express");
const {
  getForm,
  postForm,
  getStudents,
  deleteStudents,
} = require("./controllers/formular");

const app = express();

// setiraj view engine
// da napravime middleware
// da setirame staticni fajlovi
// da povikuvame HTTP metodi

app.set("view engine", "ejs");

// specificirame deka req.body ke ocekuvame da bide json
// app.use(express.json())

// dokolku isprakjame forma togas imame drug format
app.use(express.urlencoded({ extended: true }));

// ni gi zema fajlovite od staticniot folder
app.use(express.static("public"));

// Controllers/handlers
// vnesi nov student so ime prezime i prosek
app.get("/form", getForm);
// post na taa forma
app.post("/form", postForm);
// da gi zememe site studenti
app.get("/students", getStudents);
// da izbriseme student so get baranje bidejki preku link se pristapuva linkot istiot mora da koristi GET baranje
app.get("/brishi", deleteStudents);

// fetch(method: "DELETE")

app.listen(3000, () => console.log("Server started at port 3000!"));
