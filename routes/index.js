var express = require("express");
var router = express.Router();
const GlobalSocket = require("../globalSocket");

var hash = "bundle.1d65d2f76b041c598746";

/* GET home page. */
router.get("*", function (req, res, next) {
  GlobalSocket.io.emit(`connection`, "msg");
  const cssPath =
    process.env.NODE_ENV == "production"
      ? `/bundle/${hash}.css`
      : "/static/bundle.css";
  const jsPath =
    process.env.NODE_ENV == "production"
      ? `/bundle/${hash}.js`
      : "/static/bundle.js";
  res.render("index", { title: "Chat", jsPath, cssPath });
});

module.exports = router;
