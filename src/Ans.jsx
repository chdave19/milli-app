import React, { Component } from "react";

export default class Ans extends Component {
  constructor(props) {
    super(props);

    this.state = {data: this.props.data};
  }


  render() {

    return (
      <div className="ans">
        <section className="ques">
          {this.state.data[this.props.no - 1].question}
        </section>
        <ul>
          {this.state.data[this.props.no - 1].answer.map((data, i) => (
            <li
              key={i}
              onClick={() => this.props.click(i)}
              className={
                (this.state.data[this.props.no - 1].answer[i].ans===this.props.selectedAnswer)?
                this.props.animate:
                (!(this.state.data[this.props.no - 1].answer[i].ans===this.props.selectedAnswer) && (this.state.data[this.props.no - 1].answer[i].correct))?
                this.props.animateFail: ''
              }
            >
              {data.ans}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
