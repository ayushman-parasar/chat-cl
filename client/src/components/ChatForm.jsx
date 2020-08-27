import React from "react";
import "../../../public/stylesheets/style.css";
// ES6 import
import io from "socket.io-client";
import axios from "axios";

const socket = io();

class ChatForm extends React.Component {
  constructor() {
    super();
    this.state = {
      message: {
        student: true,
        msg: "",
      },
    };
  }
  componentDidMount() {
}
handleSubmit = (e) => {
    e.preventDefault();

    axios
    .post("/api/v1/chats", { message: this.state.message })
    .then((data) => {
        console.log("data", data);
        window.location.href="/"
    });
};

handleChange = (e) => {
    this.setState({
        message: {
            ...this.state.message,
            msg: e.target.value,
        },
    });
};
render() {
    socket.connect();
    socket.on("connection", (msg) => {
      console.log("socket testing", msg);
    });
    return (
        <>
        <form className="msger-inputarea" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="msger-input"
            placeholder="Enter your message..."
            onChange={this.handleChange}
          />
          <button type="submit" className="msger-send-btn">
            Send
          </button>
        </form>
      </>
    );
  }
}

export default ChatForm;
