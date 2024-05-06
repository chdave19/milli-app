import React, { Component } from "react";

export default class Money extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: [
        "$500",
        "$1000",
        "$2000",
        "$3000",
        "$4000",
        "$5000",
        "$10000",
        "$15000",
        "$20000",
        "$30000",
        "$40000",
        "$50000",
        "$60000",
        "$70000",
        "$80000",
        "$90000",
        "$100000"
      ],
    };
  }

  componentDidUpdate(props){
    !(props.questionNo===this.props.questionNo) && props.money(this.state.amount[props.questionNo-1])
  }

  render() {
    return (
      <ul className="amount">
        {this.state.amount
          .map((item, index) => (
            <li key={item} className={(index===this.props.questionNo-1)?'li-bg-green':'li-bg-grey'}>  
              {item}
            </li>
          ))
          .reverse()}
      </ul>
    );
  }
}
