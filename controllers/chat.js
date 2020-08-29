const GlobalSocket = require("../globalSocket");
const Message = require("../models/Message");

exports.sendMessage = async (req, res, next) => {
  try {
    console.log(req.body.message, "requeest");
    const msg = req.body.message;
    const content = req.body.message.msg;
    let path = req.body.message.path.split("/").join("");
    console.log(path, "path");

    const newMessage = await Message.create({
      content,
      student: req.body.message.student,
      sessionId: path,
    });
    if (newMessage) {
      console.log(msg.path);
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
    const { sessionId } = req.params;
    let messageArray = await Message.find({ sessionId });
    console.log(messageArray, "message arraay");
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
