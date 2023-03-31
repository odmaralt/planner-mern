const express = require("express");
const { authLoginWithJwt } = require("../authentication/auth");
const { getTasks, createTask, deleteTask } = require("../controller/tasks");
const { createUser, getUsers } = require("../controller/users");
const { checkToken } = require("../authentication/jwt");

const router = express.Router();

router.get("/", getUsers);
router.post("/tasks", createTask);
router.get("/tasks", getTasks);
router.delete("/tasks/:taskId", deleteTask);
router.post("/signUp", createUser);
router.post("/login", authLoginWithJwt);

module.exports = router;
