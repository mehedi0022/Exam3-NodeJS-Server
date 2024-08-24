const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  res.write("This is the Home Page");
  res.end();
});

app.get("/about", (req, res) => {
  res.write("This is the About Page");
  res.end();
});

app.get("/contact", (req, res) => {
  res.write("This is the Contact Page");
  res.end();
});

app.get("/file-write", (req, res) => {
  fs.writeFile("demo.txt", "Hello World", (err) => {
    if (err) {
      res.status(500).send("There was a File Write Error!");
    } else {
      res.status(200).write("File Create Success");
      res.end();
    }
  });
});

app.listen(5500, (err) => {
  if (err) {
    console.log("server listening faild.");
  } else {
    console.log("server listening on port 5500.");
  }
});
