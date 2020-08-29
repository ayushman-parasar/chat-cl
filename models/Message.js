var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var messageSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  student: {
    type: Boolean,
    required: true,
  },
  stdName: {
    type: String,
  },
});

module.exports = mongoose.model("Message", messageSchema);
