const express = require("express");
const app = express();
const port = 9000;
const users = require("./router/users");
const signUp = require("./router/signUp");
const connect = require("./db/db");



app.use("/users", users);
app.use(signUp);
connect();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
