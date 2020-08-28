const express = require("express");
const {
  studentToMentor,
  getMessages,
  studentT,
} = require("../controllers/chat");
var router = express.Router();

router.get("/", getMessages);
router.post("/", studentToMentor);

module.exports = router;
