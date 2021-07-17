// I found the scroll thing on the internet and I had to it

// import React from 'react';
// import ScrollToBottom from 'react-scroll-to-bottom';
// import Message from './Message/Message';
// import './Messages.css';

// const Messages = ({ messages, name }) => (
//   <ScrollToBottom className="messages">
//     {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
//   </ScrollToBottom>
// );

// export default Messages;

import React, { Component } from "react";
import Message from './Message/Message';
import './Messages.css';


export class Messages extends Component {
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }
  render() {
    const {name, messages} = this.props;
    return (
      <div>
        <div className="MessageContainer">
          <div className="MessagesList">{messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}</div>
          <div
            style={{ float: "left", clear: "both" }}
            ref={(el) => {
              this.messagesEnd = el;
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Messages;
