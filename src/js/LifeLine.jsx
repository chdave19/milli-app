import React, { Component } from "react";
import { FaHeart } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { PiNumberFiveFill } from "react-icons/pi";
import { PiNumberCircleZeroFill } from "react-icons/pi";

export default class LifeLine extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {fiftyBonus, askAudience, life, setFiftyState, setAskAudience} = this.props;
    return (
      <div className="lifeline">
        <button>
          <div className="num">{life}</div>  
          <FaHeart style={life<=0?{color: 'red'}:{margin: '0px'}}/>
        </button>
        <button onClick={()=>setAskAudience()}>
        <div className="num" >{askAudience}</div>    
          <IoIosPeople style={askAudience<=0?{color: 'red'}:{margin: '0px'}}/>
        </button>
        <button style={{fontSize: '14px'}} onClick={()=>setFiftyState()}>
        <div className="num">{fiftyBonus}</div>    
          <div style={fiftyBonus<=0?{color: 'red'}:{margin: '0px'}}>
          <PiNumberFiveFill />
          <PiNumberCircleZeroFill />
          <PiNumberFiveFill />
          <PiNumberCircleZeroFill />
          </div>
        </button>
      </div>
    );
  }
}
