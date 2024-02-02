const studenti = require("../models/students");

const getForm = (req, res) => {
  res.render("formular");
  //formular.ejs
};

const postForm = async (req, res) => {
  //posle klik na kopceto Isprati ke dojde vo ovaa funkcija
  const { ime, prezime, prosek } = req.body;

  //   let data = {
  //     ime: ime,
  //     prezime: prezime,
  //     prosek: prosek,
  //   };

  let data = {
    ime,
    prezime,
    prosek,
  };

  await studenti.add(data);
  res.redirect("/students");
};

const getStudents = async (req, res) => {
  let data = await studenti.list();
  res.render("studenti", { data }); //studenti.ejs
};

const deleteStudents = async (req, res) => {
  await studenti.remove(req.query.index);
  res.redirect("/students");
};

module.exports = {
  getForm,
  postForm,
  getStudents,
  deleteStudents,
};
