const express = require("express");
const { studentToMentor } = require("../controllers/chat");
var router = express.Router();

router.post("/", studentToMentor);

module.exports = router;
