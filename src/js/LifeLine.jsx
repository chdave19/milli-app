import React, { Component } from "react";
import { FaHeart } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { PiNumberFiveFill } from "react-icons/pi";
import { PiNumberCircleZeroFill } from "react-icons/pi";
import AudienceBg from "../img/audience-milli.png";

export default class LifeLine extends Component {
  constructor(props) {
    super(props);

    this.state = { correctAnswer: "", displayTrue: "display-f", press: true };
  }

  componentDidUpdate(props){
    this.props.questionNo !== props.questionNo && this.setState({press: true})
  }

  render() {
    const { fiftyBonus, askAudience, life, setFiftyState, setAskAudience } =
      this.props;
    return (
      <div className="lifeline">
        <div className={`audience ${this.state.displayTrue}`}>
          <figure>
            <img src={AudienceBg} alt="" />
          </figure>
          {Math.floor(Math.random() * 2) === 1 ? (
            <p>
              MilliTrivia thinks the answer might be
              <br /> {`"${this.state.correctAnswer}"`}
            </p>
          ) : (
            <p>Sorry, MilliTrivia doesn't know the answer</p>
          )}
        </div>
        <button>
          <div className="num">{life}</div>
          <FaHeart style={life <= 0 ? { color: "red" } : { margin: "0px" }} />
        </button>
        <button
          onClick={() => {
            if (this.state.press) {
              setAskAudience();
              this.props.resetAudiencePressed(true);
              this.props.data[this.props.questionNo - 1].answer.forEach(
                (value) => {
                  value.correct &&
                    this.setState({
                      correctAnswer: value.ans,
                      displayTrue: "display-t",
                      press: false,
                    });
                  setTimeout(() => {
                    this.setState({ displayTrue: "display-t" }, () => {
                      this.props.resetAudiencePressed(false);
                    });
                  }, 4000);
                }
              );
            }
          }}
        >
          <div className="num">{askAudience}</div>
          <IoIosPeople
            style={askAudience <= 0 ? { color: "red" } : { margin: "0px" }}
          />
        </button>
        <button style={{ fontSize: "14px" }} onClick={() => setFiftyState()}>
          <div className="num">{fiftyBonus}</div>
          <div style={fiftyBonus <= 0 ? { color: "red" } : { margin: "0px" }}>
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
