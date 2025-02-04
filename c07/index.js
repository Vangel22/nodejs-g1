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

// $and
// &&

// $or
// ||

// if(!user.exists() && !user.hasPayed)
// $nor
// false && false

// $not
// !

// const test = false
// const testTrue = !false;

// Task - 1 (MongoDB - Users):

// 1. Find all users and display them on the screen.
// 2. Sort users in ascending order based on their age,
// then in descending order.
// 3. Find a user by their name.
// 4. Find all users older than 30.
// 5. Find all users younger than 30.
// 6. Find 2 users aged 25.
// Ako nemate korisnika po 25 godini napravete
