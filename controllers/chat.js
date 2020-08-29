const GlobalSocket = require("../globalSocket");
const Message = require("../models/Message");

exports.sendMessage = async (req, res, next) => {
  try {
    console.log(req.body.message, "requeest");
    const msg = req.body.message;
    const content = req.body.message.msg;

    const newMessage = await Message.create({
      content,
      student: req.body.message.student,
      stdName: req.body.message.stdName,
    });
    if (newMessage) {
      GlobalSocket.io.emit(`RecieveMessage`, msg);
      res.json({ success: true, msg });
    } else {
      res.json({ success: false, error: "Message not created" });
    }
  } catch (error) {
    console.log("error in studentto mentor", error);
    res.status(500).json({
      error: "internal server error",
    });
  }
};

exports.getMessages = async (req, res, next) => {
  try {
    let messageArray = await Message.find({});

    if (messageArray) {
      res.json({
        success: true,
        messages: messageArray,
      });
    }
  } catch (error) {
    console.log("error in messageArray", error);
    next(error);
  }
};
