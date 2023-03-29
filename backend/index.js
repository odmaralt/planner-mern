const express = require("express");
const connect = require("./db/db");
const userRoutes = require("./router/users");
const app = express();
const port = 9000;

app.use(express.json());

app.use("/api", userRoutes);

connect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
