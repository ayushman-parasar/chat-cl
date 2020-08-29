const express = require("express");
const { sendMessage, getMessages } = require("../controllers/chat");
var router = express.Router();
console.log("chat router");
router.post("/", sendMessage);
router.get("/:sessionId", getMessages);

module.exports = router;
