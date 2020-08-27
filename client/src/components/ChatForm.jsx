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
      allmessages: [],
    };
    this.addMessage = this.addMessage.bind(this);
  }
  componentDidMount() {
    socket.connect();
    socket.on("RecieveMessage", (msg) => {
      this.setState({
        allmessages: [...this.state.allmessages, msg]
      })
    });
  }

  addMessage = (data) => {
    this.setState({
      allmessages: [...this.state.allmessages, data],
    });
    console.log(this.state.allmessages, "inside addmessages");
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/v1/chats", { message: this.state.message })
      .then((data) => {
        console.log("data", data);
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
