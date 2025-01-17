import React from "react";

import axios from "axios";

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

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("payload",this.state.message)
    axios
      .post("/api/v1/chats", { message: this.state.message })
      .then((data) => {
        console.log("data", data);
        this.setState({
          message: "",
        });
      });
  };

  handleChange = (e) => {
    if (e.target.name === "mentor") {
      this.setState({
        message: {
          student: false,
          msg: e.target.value,
        },
      });
    } else {
      this.setState({
        message: {
          student: true,
          msg: e.target.value,
        },
      });
    }
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

        <form className="msger-inputarea" onSubmit={this.handleSubmit}>
          <input
            name="mentor"
            type="text"
            className="msger-input"
            placeholder="Enter your message...mentor"
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
