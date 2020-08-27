const GlobalSocket = require("../globalSocket");

exports.studentToMentor = async (req, res, next) => {
  try {
    const msg = {
      messages: req.body.message,
    };
    console.log(req.body.message, "requeest");
    GlobalSocket.io.emit(`connection`, msg);
    res.json({ success: true, msg });
  } catch (error) {
    console.log("error in studentto mentor", error);
  }
};
