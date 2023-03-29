const express = require("express");
const { createUser, getUsers } = require("../controller/users");
const router = express.Router();

router.get("/", getUsers);
router.post("/signUp", createUser);

module.exports = router;
