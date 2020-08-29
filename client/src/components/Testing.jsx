import React from "react";
import io from "socket.io-client";

const socket = io();

class Testing extends React.Component {
  componentDidMount() {
    socket.on(`RecieveMessage${window.location.pathname}`, (msg) => {
      console.log("recieving messages and idea is not working")
    });
  }

  render() {
      return(

          <h1>Another live window</h1>
      )
  }
}

export default Testing;
