import React, { Component } from "react";
import Footer from "./Footer";
import Ribbon from "./Ribbon";
import logo from "../img/milli-game-bg.png";
import { Link } from "react-router-dom";
import Milli1 from "../img/audience-milli.png";
import Milli2 from "../img/triple-milli-bg-1.png";
import Milli3 from "../img/triple-milli-bg-2.png";
import Milli4 from "../img/triple-milli-bg-3.png";
import Wave from "../img/wave.png";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      milli_bg: [Milli1, Milli2, Milli3, Milli4],
      currentBg: Math.floor(Math.random()*4),
      imageLoop: null,
      imageClass: '',
    };
  }

  componentDidMount() {
    this.setState({
      imageLoop: setInterval(() => {
        this.setState((prev) => ({
          currentBg:
            prev.currentBg < this.state.milli_bg.length-1
              ? prev.currentBg + 1
              : 0,
          imageClass: this.state.imageClass?'':'fade',    
        }),()=>{this.setState({imageClass: "fade",})});
      }, 10000),
    });
  }

  componentWillUnmount(){
    clearInterval(this.state.imageLoop);
  }

  render() {
    return (
      <>
        <div className="start">
          {/* <figure className="start-banner">
        <img src={logo} alt="" />
        </figure> */}
          <Link to="/" className="logo">
            <img src={logo} alt=""/>
            <span>MilliTrivia</span>
          </Link>
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
          <figure className="milli">
            <img src={this.state.milli_bg[this.state.currentBg]} alt="" className={this.state.imageClass}/>
            <figcaption><span>Welcome to MilliTrivia</span><img src={Wave} alt="" width='40px'/></figcaption>
          </figure>
          <Link className="start-btn" to="/quiz">
            Get Started
          </Link>
        </div>
        <Footer />
      </>
    );
  }
}
