import React from "react";

import axios from "axios";

class ChatForm extends React.Component {
  constructor() {
    super();
    this.state = {
      message: {
        student: true,
        msg: "",
        stdName:"xyz"
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

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
          stdName:"xyz"
          
        },
      });
    } else {
      this.setState({
        message: {
          student: true,
          msg: e.target.value,
          stdName:"xyz"
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
