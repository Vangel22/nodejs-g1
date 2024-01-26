const { read, write } = require("./read-write");

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

//Update - PUT
const editStudent = async (studentIndex, studentData) => {
  // editStudent(0, { ime: "Jane", prezime: "Doe" })
  let students = await read("data.json");
  students = students.map((student, index) => {
    if (studentIndex === index) {
      // student = {"ime":"Vangel","prezime":"Hristov","godina":1999}
      return {
        //return ni vrakja objekt i bidejki podolu pravime spread operator site podatoci gi pravi kluc i vrednost
        ...student, // po spread operator se sto ima vnatre se zema kako kluc i vrednost
        // ime: "Vangel",
        // prezime: "Hristov",
        // godina: 1999,
        ...studentData,
        // ime: "Jane",
        // prezime: "Doe"
        // {"ime":"Jane","prezime":"Hristov","godina":1999}
      };
    }
    return student;
  });
  await write("data.json", students);
};

//Delete - DELETE
const deleteStudent = async (studentIndex) => {
  let students = await read("data.json");
  // const test = {
  //   ime: "Test"
  // }

  // delete test.ime;
  students = students.filter((student, index) => index !== studentIndex);
  await write("data.json", students);
};

module.exports = {
  getAllStudents,
  addStudent,
  editStudent,
  deleteStudent,
};
