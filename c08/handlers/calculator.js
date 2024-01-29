//get -> gi gledame site produkti
//post -> imame nekoja forma koja treba da ja popolnime so podatoci i da ja ispratime, req.body
const fs = require("fs");

const getCalculator = async (req, res) => {
  try {
    let output = await parseTemplate("calculator_form");
    res.status(200).send(output);
  } catch (err) {
    res.status(500).send("Invalid server error!");
  }
};

const postCalculator = async (req, res) => {
  const { a, b, op } = req.body;
  if (a === "" || b === "") {
    return res.status(400).send("Bad request!");
  }

  let result = "";

  switch (op) {
    case "sobiranje":
      result = `${Number(a) + Number(b)}`;
      break;
    case "odzemanje":
      result = `${Number(a) - Number(b)}`;
      break;
    case "delenje":
      result = `${Number(a) / Number(b)}`;
      break;
    case "mnozenje":
      result = `${Number(a) * Number(b)}`;
      break;
    default:
      result = `nepoznat operator!`;
  }

  const test = {
    ime: "semos",
    bdp: 10000,
  };

  // Pristap do vrednostite na objektite preku klucot
  //   test.ime
  //   test["ime"]

  try {
    let output = await parseTemplate("calculator", {
      data: result,
      ime: "Semos",
    });

    res.status(200).send(output);
  } catch (err) {
    res.status(500).send("Invalid server error!");
  }
};

const parseTemplate = async (template, data = null) => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      `${__dirname}/../views/${template}.html`,
      "utf-8",
      (err, content) => {
        if (err) {
          return reject(err);
        }

        if (data) {
          for (d in data) {
            // d e klucot, klucot se zamenuva taka sto imame match
            // d vo prva iteracija e data
            // vrednost na prvoto mesto kade vo calculator.html imame data izgleda vaka {{data}} i zatoa pravi match

            //d vo vtora iteracija e (kluc) ime

            // result ke go zema na prva iteracija -> data["data"]
            // ime ke go zema na vtora iteracija -> data["ime"]
            content = content.replace(`{{${d}}}`, data[d]);
          }
        }

        return resolve(content);
      }
    );
  });
};

module.exports = {
  getCalculator,
  postCalculator,
};
