const express = require("express");
const app = express();
const port = 3010;
const path = require("path");

app.use(express.static("static"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("pages/index.html"));
});
app.get("/data", (req, res) => {
  res.send({ message: "success", data: { name: "Navin" } });
});
app.get("/about", (req, res) => {
  res.send({ message: "success", data: { name: "About" } });
});
app.get("/home", (req, res) => {
  res.send({ message: "success", data: { name: "Home" } });
});
app.listen(process.env.PORT || 3010, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
