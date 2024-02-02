const fs = require("fs");

const read = async (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) return reject(err);
      data = JSON.parse(data);
      return resolve(data);
    });
  });
};

const write = async (fileName, data) => {
  data = JSON.stringify(data);
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) return reject(err);
      return resolve();
    });
  });
};

const add = async (data) => {
  let file = await read("studenti.json");
  file.push(data);
  await write("studenti.json", file);
};

//index treba da bide cast-iran vo tip Number
const remove = async (index) => {
  let file = await read("studenti.json");

  //ova e za da znaete zosto kastirame
  console.log("index type", typeof index);

  file = file.filter((student, i) => Number(index) !== i); // nema da go sodrzi soodvetniot index koj e ispraten kako parametar na remove funkcijata
  console.log("index", index);
  await write("studenti.json", file);
};

const list = async () => {
  return await read("studenti.json");
};

module.exports = {
  read,
  write,
  add,
  remove,
  list,
};
