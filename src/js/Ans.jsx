import React, { Component } from "react";

export default class Ans extends Component {
  constructor(props) {
    super(props);

    this.state = { data: this.props.data };
  }

  render() {
    return (
      <div className="ans">
        <section className="ques" id="ques">
          {this.state.data[this.props.no - 1].question}
        </section>
        <ul>
          {this.state.data[this.props.no - 1].answer.map((data, i) => (
            <li
              key={i}
              onClick={() => this.props.click(i)}
              className={
                this.state.data[this.props.no - 1].answer[i].ans ===
                this.props.selectedAnswer
                  ? this.props.animate
                  : !(
                      this.state.data[this.props.no - 1].answer[i].ans ===
                      this.props.selectedAnswer
                    ) && this.state.data[this.props.no - 1].answer[i].correct
                  ? this.props.animateFail
                  : ""
              }
            >
              {!(this.props.fiftyPressed &&
                !this.state.data[this.props.no - 1].answer[i].correct) ? (
                  <>
                    <span style={{ color: "orange", fontSize: "1.2rem" }}>{`${i + 1}:`}</span><span>{data.ans}</span>
                  </>
                ):(this.state.data[this.props.no - 1].answer[i].selectable)?<><span style={{ color: "orange", fontSize: "1.2rem", opacity:"hidden", transition:"visibility 400ms linear" }}>{`${i + 1}:`}</span><span>{data.ans}</span></>:null}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
