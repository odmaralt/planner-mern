const express = require("express");
const { createUser } = require("../controller/users/users");
const router = express.Router();

router.post("/signUp", createUser);

module.exports = router;
