const { read, write } = require("../read-write");

//Create - POST - WITHOUT SERVER
// const addStudent = async (studentData) => {
//   const students = await read("data.json");
//   //ovde imame const bidejki students e niza t.e non-primitive data type sto znaci moze da se promenuva
//   students.push(studentData);
//   await write("data.json", students);
// };

// POST Request
const addStudent = async (req, res) => {
  const students = await read("data.json");
  //ovde imame const bidejki students e niza t.e non-primitive data type sto znaci moze da se promenuva
  students.push(req.body);
  await write("data.json", students);
  res.status(201).send("Student created successfully!");
};

// Without SERVER
// const getAllStudents = async () => {
//   await return read();
// };

//Read - GET
const getAllStudents = async (req, res) => {
  // const test = {
  //   ime: "test objekt",
  // };

  // test.ime = "no test";
  // test.prezime = "prezime test";
  // console.log(test);
  const students = await read("data.json");
  // students =[{"ime":"Semos","prezime":"Edukacija","godina":1995},{"ime":"Stanko","prezime":"Stankovski","godina":1995}]
  res.status(200).send(students);
};

//Update - PUT - Should update the whole resourse
const editStudent = async (req, res) => {
  // req.params.index
  const { index } = req.params;
  // const { index: preimenuvanjeNaIndex } = req.params;

  let students = await read("data.json");
  students = students.map((student, i) => {
    if (i === Number(index)) {
      return {
        ...student,
        ...req.body,
      };
    }
    return student;
  });

  await write("data.json", students);
  res.status(200).send(`Student with index ${index} updated!`);
};

// Should update only part of the object
const editPartialStudent = async (req, res) => {
  //
};

//Delete - DELETE
const deleteStudent = async (req, res) => {
  let students = await read("data.json");
  const { index } = req.params;

  students = students.filter((student, i) => Number(index) !== i);
  await write("data.json", students);
  res.status(200).send(`Student with index ${index} deleted!`);
};

module.exports = {
  getAllStudents,
  addStudent,
  editStudent,
  deleteStudent,
};
