const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 6969;

const server = app.listen(port, () => {
  console.log(`Server online -> Port ${server.address().port}`);
});

app.get("/", (req, res) => res.send("Hello World"));

console.log(app);

console.log(69);
console.log(420);

const cuteDog = "Dayzee";

const andrew = {
  firstName: "Andrew",
  lastName: "Riefenstahl",
  dateOfBirth: "11-09-1988",
  instrument: "Vox/Guitar",
};
