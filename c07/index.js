const express = require("express");
const {
  getAllStudents,
  addStudent,
  editStudent,
  deleteStudent,
} = require("./handlers/students");

const app = express();
// kluc vrednost - form data

//middleware
app.use(express.json());
// ni ovozmozuva baranjata so telo da gi zemame so json

app.get("/students", getAllStudents);
app.post("/students", addStudent);
app.put("/students/:index", editStudent);
app.delete("/students/:index", deleteStudent);

app.listen(3000, () => console.log("Server started at port 3000"));

// app.post();
// app.put();
// app.delete();

//IIFE - Immediately invoked function expression
// (async () => {
//   const dataBefore = await getAllStudents();
//   console.log("data before", dataBefore);

//   await addStudent({
//     ime: "Stanko",
//     prezime: "Stankovski",
//     godina: 1995,
//   });

//   await editStudent(0, {
//     ime: "Jane",
//     prezime: "Doe",
//   });

//   await deleteStudent(0);

//   const dataAfter = await getAllStudents();
//   console.log("data after", dataAfter);
// })();
