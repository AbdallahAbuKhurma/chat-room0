import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{trimmedName}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
            </div>
            <p className="sentText pl-10 ">{user}</p>
          </div>
        )
  );
}

export default Message;

// import React, { Component } from "react";
// import ReactEmoji from "react-emoji";
// import "./Message.css";

// export class Message extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isSentByCurrentUser: true,
//     };
//   }

//   isSentByCurrentUser() {
//     const {
//       message: { text, user },
//       name,
//     } = this.props;
//     const trimmedName = name.trim().toLowerCase();
//     if (user === trimmedName) {
//       this.setState({
//         isSentByCurrentUser: true,
//       });
//     }
//   }

//   render() {
//     return (
//       this.state.isSentByCurrentUser
//       ? (
//         <div className="messageContainer justifyEnd">
//           <p className="sentText pr-10">{this.trimmedName}</p>
//           <div className="messageBox backgroundBlue">
//             <p className="messageText colorWhite">{ReactEmoji.emojify(this.text)}</p>
//           </div>
//         </div>
//         )
//         : (
//           <div className="messageContainer justifyStart">
//             <div className="messageBox backgroundLight">
//               <p className="messageText colorDark">{ReactEmoji.emojify(this.text)}</p>
//             </div>
//             <p className="sentText pl-10 ">{this.user}</p>
//           </div>
//         )
//     );
//   }
// }

// export default Message;
