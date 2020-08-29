const express = require("express");
const { sendMessage, getMessages } = require("../controllers/chat");
var router = express.Router();

router.get("/", getMessages);
router.post("/", sendMessage);

module.exports = router;
