const express = require("express");
const app = express();
const dotenv = require('dotenv').config()
const port = 8080;

app.get("/env", (req, res) => {
  res.send(process.env);
});
app.get("/", (req, res) => {
  res.send(process.env.MESSAGE || "HELLO WORLD");
});

app.get("/newR", (req, res) => {
  res.send(process.env.MESSAGE || "Another one bites the dust!");
});

app.listen(port, () => {
  console.log(`Example app listening at port ${port}`);
});
