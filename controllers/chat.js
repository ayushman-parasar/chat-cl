const GlobalSocket = require("../globalSocket");
const Message = require("../models/Message");

exports.studentToMentor = async (req, res, next) => {
  try {
    console.log(req.body.message, "requeest");
    const msg = req.body.message;
    const content = req.body.message.msg;
    const appsa = await Message.find({});
    console.log(appsa, "appsa");
    const newMessage = await Message.create({
      content,
      student: req.body.message.student,
    });
    if (newMessage) {
      console.log("success");
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
    console.log("sdasdsadadksadhj2132139128398219312938129");
    let messageArray = await Message.find({});
    console.log(messageArray, "array");
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

// exports.studentT = async (req, res, next) => {
//   try {
//     const appsa = await Message.find({});
//     console.log(appsa, "appsa");
//   } catch (error) {
//     console.log("error in studentto mentor", error);
//     res.status(500).json({
//       error: "internal server error",
//     });
//   }
// };
