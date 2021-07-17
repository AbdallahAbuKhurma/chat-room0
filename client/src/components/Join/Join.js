import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Join.css';


export class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      room: "",
    };
  }

  useName = (event) => {
    this.setState({ name: event.target.value });
  };
  useRoom = (event) => {
    this.setState({ room: event.target.value });
  };

  mustNameAndRoom = (event) => {
    if(!this.state.name || !this.state.room){
      event.preventDefault();
    } else {
      return null;
    }
  };

  render() {
    return (
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">Join</h1>
          <div>
            <input
              placeholder="Name"
              className="joinInput"
              type="text"
              onChange={(event) => this.useName(event)}
            />
          </div>
          <div>
            <input
              placeholder="Room"
              className="joinInput mt-20"
              type="text"
              onChange={(event) => this.useRoom(event)}
            />
          </div>
          <Link
            onClick={(event) => this.mustNameAndRoom(event)}
            to={`/chat?name=${this.state.name}&room=${this.state.room}`}
          >
            <button className={"button mt-20"} type="submit">
              Join a Room
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Join;
