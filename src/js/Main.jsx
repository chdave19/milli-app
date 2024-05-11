import React, { Component } from "react";
import "../css/main.css";
import Ans from "./Ans";
import Timer from "./Timer";
import Money from "./Money";
import Banner from "../img/milli-game-bg.png";
import { AiOutlineBars, AiTwotoneInfoCircle } from "react-icons/ai";
import Footer from "./Footer";
import Sad from "../img/sad.png";
import Happy from "../img/happy.png";
import LifeLine from "./LifeLine";
import { Link } from "react-router-dom";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.quizId = this.props.quizId;
    
    this.state = {
      question: this.props.data[this.quizId].data,
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
      questionList: 15,
      addLoad: false,
      fiftyBonus: 2,
      life: 2,
      askAudience: 1,
      fiftyPressed: false,
      audiencePressed: false,
      disableFifty: false,
      timeDuration: this.props.data[this.quizId].duration
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
        clickable: false,
        disableFifty: true,
      });
      setTimeout(() => {
        this.props.audio.playSound("correct");
      }, 2000);
      this.stopInterval();
      this.setTimer(null);
      setTimeout(() => {
        this.props.audio.playSound("wait");
        this.setState((prev) => ({
          no: prev.no + 1,
          clickable: true,
          fiftyPressed: false,
          disableFifty: false,
        }));
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
        if (this.state.life < 1) {
          this.setState({ stop: true, clickable: true });
        } else {
          this.props.audio.playSound("wait");
          this.setState((prev) => ({
            no: prev.no + 1,
            clickable: true,
            fiftyPressed: false,
            disableFifty: false,
            life: prev.life-1
          }));
        }
      }, 6000);
    }
  };

  stopGame = () => {
    if (this.state.life < 1) {
      this.setState({ stop: true, listClass: "", selectedAnswer: null });
      this.props.audio.playSound("play");
    } else {
      this.setState((prev) => ({ life: prev.life - 1 }));
    }
  };

  restartGame = () => {
    this.props.setFetchNewData(true);
    this.setState({ addLoad: true });
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
    this.props.audio.stopSound();
  }

  componentDidMount() {
    this.props.setNewDataFetched(false);
    this.props.setFetchNewData(false);
    this.setState({earned: '$0'});
    this.props.audio.playSound("wait");
  }

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
  };

  resetMenu = () => {
    this.setState({ menuActive: "" });
  };

  cleanUpUpdate = () => {
    // console.log('update is new')
    this.props.setNewDataFetched(false);
    this.props.audio.playSound("wait");
    this.setState((prev) => ({
      no: 1,
      stop: false,
      selectedAnswer: null,
      ansData: {},
      listClassFailed: "",
      question: this.props.data,
      earned: "$0",
      addLoad: false,
      fiftyPressed: false,
      life: 2,
      fiftyBonus: 2,
      askAudience: 1,
      disableFifty: false,
    }));
  };

  componentDidUpdate() {
    this.props.newDataFetched && this.cleanUpUpdate();
  }

  setFiftyState = () => {
    !this.state.disableFifty &&
      this.state.fiftyBonus > 0 &&
      this.setState((prev) => ({
        fiftyBonus: prev.fiftyBonus - 1,
        fiftyPressed: true,
        disableFifty: true,
      }));
  };

  setAskAudience = () => {
    this.setState((prev) => ({ askAudience: prev.askAudience - 1 }));
  };

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
      addLoad,
      fiftyBonus,
      askAudience,
      life,
      timeDuration,
    } = this.state;

    return !stop && this.state.no <= this.state.questionList ? (
      <div className="main">
        <Link to='./' className="logo"><img src={Banner} alt="" /><span>MilliTrivia</span></Link>
        <figure className="game-banner">
          <img src={Banner} alt="" />
        </figure>
        <button className="menu" onClick={() => this.onMenu()}>
          <AiOutlineBars />
        </button>
        <button className="info">
          <AiTwotoneInfoCircle />
        </button>
        <div className="mon">
          <LifeLine
            fiftyBonus={fiftyBonus}
            askAudience={askAudience}
            life={life}
            setFiftyState={this.setFiftyState}
            setAskAudience={this.setAskAudience}
          />
          <Timer
            stopGame={this.stopGame}
            questionNo={no}
            setTimer={this.setTimer}
            resetAns={this.resetSelectedAnswer}
            stopInterval={this.stopInterval}
            interval={interval}
            timeDuration={timeDuration}
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
          fiftyPressed={this.state.fiftyPressed}
        />
        <Footer />
      </div>
    ) : (
      <>
        <div className="fail">
        <a href='/' className="logo"><img src={Banner} alt="" /><span>MilliTrivia</span></a>
          {this.state.no === this.state.questionList + 1 ? (
            <>
              <span>Congratulations</span>
              <figure className="sad">
                <img src={Happy} alt="" />
              </figure>
            </>
          ) : (
            <>
              <span style={styles} className="fail-text">
                Failed
              </span>
              <figure className="sad">
                <img src={Sad} alt="" />
              </figure>
            </>
          )}
          <span className="earn">{`Amount earned: ${earned}`}</span>
          <button onClick={this.restartGame} className="fail-btn">
            Play again
          </button>
          {addLoad && (
            <span
              className="load"
              style={{ marginTop: "1rem", top: "92%" }}
            ></span>
          )}
        </div>
        <Footer />
      </>
    );
  }
}
