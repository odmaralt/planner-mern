const express = require("express");
const { authLoginWithJwt } = require("../authentication/auth");
const { getTasks, createTask, deleteTask } = require("../controller/tasks");
const { createUser, getUsers } = require("../controller/users");
const { checkToken } = require("../authentication/jwt");
const {
  createJournal,
  getJournals,
  getJournal,
  updateJournal,
} = require("../controller/journals");
const { createWater, getWaterValues } = require("../controller/water");
const { createSleep, getSleepValues } = require("../controller/sleep");

const router = express.Router();
router.get("/", getUsers);
router.post("/signUp", createUser);
router.post("/login", authLoginWithJwt);

router.post("/tasks", createTask);
router.get("/tasks", getTasks);
router.delete("/tasks/:taskId", deleteTask);

router.post("/journal", createJournal);
router.get("/journals", getJournals);
router.get("/journals/:journalId", getJournal);
router.put("/journals/:journalId", updateJournal);

router.post("/water", createWater);
router.get("/water", getWaterValues);

router.post("/sleep", createSleep);
router.get("/sleep", getSleepValues);

module.exports = router;
