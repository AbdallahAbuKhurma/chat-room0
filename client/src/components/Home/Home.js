import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Home.css';

export class Home extends Component {
  render() {
    return (
      <div className='ouuuter'>
          <div className='homeContainer'>
            <h1 className='homeHeading'>
              Chat Rooms
            </h1>
            <p className='homePrgh'>
              Simple and Reliable messaging. With Chat Rooms, you'll get
              fast and simple messaging for <b>FREE</b>, available on
              devices all over the world.
              <br />
              <br />
            </p>
            <Link to="/join-chat" style={{ textDecoration: "none" }}>
              <button className='HomeBtn'
                type="submit"
              >
                Try it out now!
              </button>
            </Link>
          </div>
          <div>
            <img className='homeimg'
              src="https://cdn.dribbble.com/users/2329333/screenshots/9291756/tinder-01_4x.png"
              alt="hero"
            />
          </div>
      </div>
    );
  }
}

export default Home;
