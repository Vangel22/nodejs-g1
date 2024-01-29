// Infrastucture code
const express = require("express");
const app = express();

const { getCalculator, postCalculator } = require("./handlers/calculator");

//body parser
app.use(express.urlencoded({ extended: true }));

app.get("/calculator", getCalculator);
app.post("/calculator", postCalculator);

app.listen(3000, () => console.log("Server started at port 3000"));
