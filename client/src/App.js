import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChatForm from "./components/ChatForm";
import io from "socket.io-client";

const socket = io();

class App extends Component {
  constructor() {
    super();
    this.state = {
      allmessages: [],
    };
  }
  componentDidMount() {
    socket.connect();
    socket.on("RecieveMessage", (msg) => {
      this.setState({
        allmessages: [...this.state.allmessages, msg],
      });
    });
  }

  render() {
    return (
      <>
        <section className="msger">
          <header className="msger-header">
            <div className="msger-header-options"></div>
          </header>

          <main className="msger-chat">
            <div className="msg left-msg">
              <div
                className="msg-img"
                style={{
                  backgroundImage:
                    "url(https://image.flaticon.com/icons/svg/327/327779.svg)",
                }}
              ></div>

              <div className="msg-bubble">
                <div className="msg-info">
                  <div className="msg-info-name">BOT</div>
                  <div className="msg-info-time">12:45</div>
                </div>

                <div className="msg-text">
                  Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
                </div>
              </div>
            </div>

            <div className="msg right-msg">
              <div
                className="msg-img"
                style={{
                  backgroundImage:
                    "url(https://image.flaticon.com/icons/svg/145/145867.svg)",
                }}
              ></div>

              <div className="msg-bubble">
                <div className="msg-info">
                  <div className="msg-info-name">Sajad</div>
                  <div className="msg-info-time">12:46</div>
                </div>

                <div className="msg-text">
                  You can change your name in JS section!
                </div>
              </div>
            </div>
          </main>
          <hr />
        </section>
        <ChatForm />;
      </>
    );
  }
}

export default App;
