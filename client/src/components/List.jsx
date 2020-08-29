import React from "react";
import ChatForm from "./ChatForm";
import io from "socket.io-client";
import axios from "axios";
import "../../../public/stylesheets/style.css";
import { withRouter } from "react-router-dom"

const socket = io();
class List extends React.Component {
  constructor() {
    super();
    this.state = {
      allmessages: [],
    };
  }
  componentDidMount() {
    axios.get(`/api/v1/chats${this.props.location.pathname}`).then((res) => {
      this.setState({
        allmessages: [...res.data.messages],
      });
    });
    socket.connect();
    console.log(socket.connected)
    socket.on(`RecieveMessage`, (msg) => {
      console.log("checking conncetion");
      this.setState({
        allmessages: [...this.state.allmessages, msg],
      });
    });
  }

  render() {
    return (
      <>
        <section className="msger container mt-2">
          <header className="msger-header">
            <div className="msger-header-options"></div>
          </header>

          <main className="msger-chat">
            {this.state.allmessages.length > 0 ? (
              this.state.allmessages.map((incMsg, index) => {
                if (incMsg.student === true) {
                  return (
                    <div className="msg left-msg" key={index}>
                      <div
                        className="msg-img"
                        style={{
                          backgroundImage:
                            "url(https://image.flaticon.com/icons/svg/327/327779.svg)",
                        }}
                      ></div>

                      <div className="msg-bubble">
                        <div className="msg-info">
                          <div className="msg-info-name">STUDENT</div>
                          <div className="msg-info-time">12:45</div>
                        </div>

                        <div className="msg-text">
                          {incMsg.msg || incMsg.content}
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="msg right-msg" key={index}>
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
                          {incMsg.msg || incMsg.content}
                        </div>
                      </div>
                    </div>
                  );
                }
              })
            ) : (
              <p>No messages to display</p>
            )}
          </main>
          <hr />
        </section>
        <ChatForm />
      </>
    );
  }
}

export default withRouter(List);
