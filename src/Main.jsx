import React, { Component } from "react";
import "./main.css";
import Ans from "./Ans";
import Timer from "./Timer";
import Money from "./Money";
import Banner from "./milli-game-bg.png";
import { AiOutlineBars,AiTwotoneInfoCircle } from "react-icons/ai";


export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: this.props.data,
      no: 1,
      stop: false,
      timer: true,
      earned: "$0",
      listClass: "",
      listClassFailed: "",
      interval: null,
      selectedAnswer: null,
      ansData: {},
      clickable: true,
      menuActive: "",
      questionList: 15
    };
  }

  click = (e) => {
    if (
      this.state.question[this.state.no - 1].answer[e].correct &&
      this.state.clickable
    ) {
      this.setState({
        listClass: "correct",
        selectedAnswer: this.state.question[this.state.no - 1].answer[e].ans,
        ansData: { ...this.state.ansData, Q: this.state.selectedAnswer },
        clickable: false,
      });
      setTimeout(() => {
        this.props.audio.playSound("correct");
      }, 2000);
      this.stopInterval();
      this.setTimer(null);
      setTimeout(() => {
        this.props.audio.playSound("wait");
        this.setState((prev) => ({ no: prev.no + 1, clickable: true }));
      }, 6000);
    } else if (this.state.clickable) {
      this.setState({
        listClass: "failed",
        selectedAnswer: this.state.question[this.state.no - 1].answer[e].ans,
        listClassFailed: "correct-bg",
        clickable: false,
      });
      this.stopInterval();
      setTimeout(() => {
        this.props.audio.playSound("wrong");
      }, 2000);
      setTimeout(() => {
        this.setState({ stop: true, clickable: true });
      }, 6000);
    }
  };

  stopGame = () => {
    this.setState({ stop: true, listClass: "", selectedAnswer: null });
    this.props.audio.playSound("play");
  };

  restartGame = () => {
    this.props.audio.playSound("wait");
    this.setState((prev) => ({
      no: 1,
      stop: false,
      selectedAnswer: null,
      ansData: {},
      listClassFailed: "",
      question: this.randomiseQuestion(prev.question),
      earned: "$0",
    }));
  };

  setEarned = (earn) => {
    this.setState({ earned: earn });
  };

  setTimer = (timer) => {
    this.setState({ interval: timer });
  };

  stopInterval = () => {
    clearInterval(this.state.interval);
  };

  resetSelectedAnswer = () => {
    this.setState({ selectedAnswer: null, listClassFailed: "" });
  };

  componentWillUnmount() {
    this.stopInterval();
  }

  componentDidMount() {}

  randomiseQuestion(arr) {
    let randArr = arr;
    for (let i = randArr.length - 1; i >= 0; i--) {
      let temp = Math.floor(Math.random() * i);
      let tempV = randArr[temp];
      randArr[temp] = randArr[i];
      randArr[i] = tempV;
    }
    return randArr;
  }

  onMenu = () => {
    this.setState({ menuActive: "menu-active" });
    console.log('menu')
  };

  resetMenu =()=>{
    this.setState({ menuActive: "" });
  }

  render() {
    const styles = { color: "red" };
    const {
      no,
      stop,
      earned,
      listClass,
      selectedAnswer,
      interval,
      listClassFailed,
      menuActive,
    } = this.state;

    return !stop && this.state.no <= this.state.questionList ? (
      <div className="main">
        <figure className="game-banner">
          <img src={Banner} alt="" />
        </figure>
        <button className="menu" onClick={() => this.onMenu()}>  
          <AiOutlineBars />
        </button>
        <button className="info">
          <AiTwotoneInfoCircle/>
        </button>
        <div className="mon">
          <Timer
            stopGame={this.stopGame}
            questionNo={no}
            setTimer={this.setTimer}
            resetAns={this.resetSelectedAnswer}
            stopInterval={this.stopInterval}
            interval={interval}
          />
          <Money
            list={no}
            questionNo={no}
            money={this.setEarned}
            menuActive={menuActive}
            resetMenu={this.resetMenu}
          />
        </div>
        <Ans
          data={this.state.question}
          no={no}
          click={this.click}
          animate={listClass}
          animateFail={listClassFailed}
          selectedAnswer={selectedAnswer}
        />
      </div>
    ) : (
      <div className="fail">
        {this.state.no === this.state.questionList+1 ? (
          <span>Congratulations</span>
        ) : (
          <span style={styles}>Failed</span>
        )}
        <span>{`You won ${earned}`}</span>
        <button onClick={this.restartGame}>Play again</button>
      </div>
    );
  }
}
