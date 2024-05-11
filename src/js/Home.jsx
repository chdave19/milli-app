import React, { Component } from 'react';
import Footer from "./Footer";
import Ribbon from "./Ribbon";
import logo from "../img/milli-game-bg.png";
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
        <>
        <div className="start">
        <figure className="start-banner">
        <img src={logo} alt="" />
        </figure>
          <Link to='/' className="logo"><img src={logo} alt="" /><span>MilliTrivia</span></Link>
          {/* <div className={`offline-popup`}>Offline</div> */}
          <div className={`anime`}>
            {[...Array(100)].map((_, j) => (
              <Ribbon
                key={j}
                j={j}
                color={`hsl(${j * 75 + 45}, 100%, 50%)`}
              />
            ))}
          </div>
          {/* {checkdataFetched && <span className="load"></span>} */}
          <Link className='start-btn' to='/quiz'>Start</Link>
        </div>
        <Footer />
        </>
    )
  }
}
