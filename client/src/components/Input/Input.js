import React, { Component } from "react";
import "./Input.css";

export class Input extends Component {
  render() {
    const { setMessage, sendMessage, message } =this.props;
    return (
      <div>
        <form className="form">
          <input
            className="input"
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyPress={(event) =>
              event.key === "Enter" ? sendMessage(event) : null
            }
          />
          <button className="sendButton" onClick={(e) => sendMessage(e)}>
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default Input;
