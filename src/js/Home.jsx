import React, { Component } from 'react';
import Footer from "./Footer";
import Ribbon from "./Ribbon";
import logo from "../img/milli-game-bg.png";
import { Link } from 'react-router-dom';
import Milli from '../img/audience-milli.png';


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
          {/* <div className={`anime`}>
            {[...Array(100)].map((_, j) => (
              <Ribbon
                key={j}
                j={j}
                color={`hsl(${j * 75 + 45}, 100%, 50%)`}
              />
            ))}
          </div> */}
          {/* {checkdataFetched && <span className="load"></span>} */}
          <figure className='milli'>
            <img src={Milli} alt="" />
            <figcaption>Welcome to MilliTrivia</figcaption>
          </figure>
          <Link className='start-btn' to='/quiz'>Get Started</Link>
        </div>
        <Footer />
        </>
    )
  }
}
