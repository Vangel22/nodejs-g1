const studenti = require("../models/students");

const getForm = (req, res) => {
  res.render("formular");
  //formular.ejs
};

const postForm = async (req, res) => {
  //posle klik na kopceto Isprati ke dojde vo ovaa funkcija
  const { ime, prezime, prosek } = req.body;
  //ovde zagradite {} se od leva strana i imame object destructuring

  //   let data = {
  //     ime: ime,
  //     prezime: prezime,
  //     prosek: prosek,
  //   };

  //   let data = {
  //     ime: req.body.ime,
  //     prezime: req.body.prezime,
  //     prosek: req.body.prosek,
  //   }

  // ako klucot i vrednosta se isti mozeme da gi zapiseme samo ednas
  // VNIMAVAJTE ako ovie {} se posle ednakvo ne e object destructuring, tuku definiranje na objektot
  const data = {
    ime,
    prezime,
    prosek,
  };

  await studenti.add(data);
  res.redirect("/students");
  //koga ke odime na /students treba da go vidime novo dodadeniot student
};

const getStudents = async (req, res) => {
  //req.body => { ime: "Semos" }
  //req.params => :id
  //req.query => ?

  //req.headers
  //req.auth
  //req.url

  let data = await studenti.list();
  res.render("studenti", { data }); //studenti.ejs
};

const deleteStudents = async (req, res) => {
  //posle prasalnikot ? se ni e req.query
  //vaka izgleda povikot /brishi?index=0
  //Ova znaci deka index ni e kluc a 0 ni e vrednost
  // za da pristapime do brojot 0 treba da napiseme req.query.index
  await studenti.remove(req.query.index);
  res.redirect("/students"); //pravime pogodok ili ja povikuvame funkcijata na getStudents()
};

module.exports = {
  getForm,
  postForm,
  getStudents,
  deleteStudents,
};
