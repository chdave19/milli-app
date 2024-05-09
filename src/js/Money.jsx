import React, { Component } from "react";
import { AiOutlineClose } from "react-icons/ai";


export default class Money extends Component {
  constructor(props) {
    super(props);
// AMOUNT IS 15
    this.state = {
      amount: [
        "$100",
        "$200",
        "$300",
        "$500",
        "$1,000",
        "$2,000",
        "$4,000",
        "$8,000",
        "$16,000",
        "$32,000",
        "$64,000",
        "$125,000",
        "$250,000",
        "$500,000",
        "$1 MILLION",
      ],
    };
  }

  componentDidUpdate(props){
    !(props.questionNo===this.props.questionNo) && props.money(this.state.amount[props.questionNo-1])
  }


  closeMenu=()=>{
    this.props.resetMenu();
  }

  render() {
    return (
      <ul className={`amount ${this.props.menuActive}`}>
        <button className="close" onClick={this.closeMenu}><AiOutlineClose/></button>
        {this.state.amount
          .map((item, index) => (
            <li key={item} className={(index===this.props.questionNo-1)?'li-bg-green':'li-bg-grey'}>  
              <span>{index+1}</span><span>{item}</span>
            </li>
          ))
          .reverse()}
      </ul>
    );
  }
}
