const express = require("express");

const app = express();

// koga sakame da imame dinamicni podatoci
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let data = {
    ime: "Pero",
    prezime: "Перовски",
    niza: ["Скопје", "Битола", "Куманово", "Тетово", "Охрид", "Велес"],
    studenti: [
      { ime: "Перо", prezime: "Перовски", prosek: 9.2 },
      { ime: "Јанко", prezime: "Јанковски", prosek: 7.1 },
      { ime: "Станко", prezime: "Станковски", prosek: 8.4 },
      { ime: "Иван", prezime: "Ивановски", prosek: 7.0 },
    ],
  };
  //index se odnesuva na /view/index.ejs
  res.render("index", data);

  //parseTemplate("calculator_post", data)
});

app.listen(3000, () => console.log("Server started at port 3000!"));
