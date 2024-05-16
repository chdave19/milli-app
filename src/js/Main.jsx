import React, { Component } from "react";
import "../css/main.css";
import Ans from "./Ans";
import Timer from "./Timer";
import Money from "./Money";
import Banner from "../img/milli-game-bg.png";
import { AiOutlineBars, AiTwotoneInfoCircle, AiOutlineClose } from "react-icons/ai";
import Footer from "./Footer";
import Sad from "../img/sad.png";
import Happy from "../img/happy.png";
import Platform from '../img/platform.jpeg';
import Tree from '../img/money-tree.jpeg';
import LifeLine from "./LifeLine";
import { Link } from "react-router-dom";
import { defaultQuestions } from "./QuestionBank";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.quizId = this.props.quizId;
    this.quiz = this.props.data[this.quizId];
    this.state = {
      question: this.quiz.data || this.props.data.data,
      // question: defaultQuestions,
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
      menuActive: "block",
      questionList: 15,
      addLoad: false,
      fiftyBonus: 2,
      life: 2,
      askAudience: 3,
      fiftyPressed: false,
      audiencePressed: false,
      disableFifty: false,
      timeDuration: this.quiz.duration || this.props.data.duration,
      // timeDuration: 40,
      displayProgress: "",
      answerWrong: true,
      actualNo: 1,
      imageUrl: this.quiz.imgUrl,
      startGame: false,
    };
  }

  click = (e) => {
    if (
      this.state.question[this.state.no - 1].answer[e].correct &&
      this.state.clickable && this.state.startGame
    ) {
      this.setState((prev) => ({
        listClass: "correct",
        selectedAnswer: this.state.question[this.state.no - 1].answer[e].ans,
        clickable: false,
        disableFifty: true,
        answerWrong: false,
      }));
      setTimeout(() => {
        this.props.audio.playSound("correct");
      }, 2000);
      this.stopInterval();
      this.setTimer(null);
      setTimeout(() => {
        this.setState({ displayProgress: "active" });
        setTimeout(() => {
          this.setState({ displayProgress: "" });
        }, 4000);
      }, 5000);
      setTimeout(() => {
        this.props.audio.playSound("wait");
        this.setState((prev) => ({
          answerWrong: false,
          no: prev.no + 1,
          clickable: true,
          fiftyPressed: false,
          disableFifty: false,
          actualNo: prev.actualNo + 1,
        }));
      }, 6000);
    } else if (this.state.clickable && this.state.startGame) {
      this.setState({
        listClass: "failed",
        selectedAnswer: this.state.question[this.state.no - 1].answer[e].ans,
        listClassFailed: "correct-bg",
        clickable: false,
        answerWrong: true,
      });
      this.stopInterval();
      setTimeout(() => {
        this.props.audio.playSound("wrong");
      }, 2000);
      setTimeout(() => {
        if (this.state.life < 2) {
          this.setState({ stop: true, clickable: true });
        } else {
          this.props.audio.playSound("wait");
          this.setState((prev) => ({
            no: prev.no + 1,
            clickable: true,
            fiftyPressed: false,
            disableFifty: false,
            life: prev.life - 1,
          }));
        }
      }, 6000);
    }
  };

  stopGame = () => {
    if (this.state.life < 2) {
      this.setState({ stop: true, listClass: "", selectedAnswer: null });
      this.props.audio.playSound("play");
    } else {
      this.setState((prev) => ({ life: prev.life - 1 }));
    }
  };

  restartGame = () => {
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
    this.setState({ earned: "$0" });
  }

  resetAudiencePressed = (value) => {
    this.setState({ audiencePressed: value });
  };

  randomiseQuestion(arr) {
    let size = arr.length;
    for (let i = size - 1; i > 0; i--) {
      let temp = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[temp]] = [arr[temp], arr[i]];
    }
    return arr;
  }

  onMenu = () => {
    this.setState({ menuActive: "menu-active" });
  };

  resetMenu = () => {
    this.setState({ menuActive: "" });
  };

  cleanUpUpdate = () => {
    // console.log('update is new')
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

  componentDidUpdate() {}

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
    this.state.askAudience > 0 &&
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
      displayProgress,
      answerWrong,
      actualNo,
      imageUrl,
      audiencePressed,
      startGame,
    } = this.state;

    return !stop && actualNo < this.state.questionList + 1 ? (
      <div className="main">
        <header
          style={{
            zIndex: "99",
            padding: "1.2rem",
            position: "relative",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        >
          <Link to="/" className="logo-select">
            <img src={Banner} alt="" />
            <span>MilliTrivia</span>
          </Link>
        </header>
        <div className="game-start-info" style={{display: menuActive}}>
          <button className="info">
            <AiTwotoneInfoCircle />
          </button>
          <button className={`close`} onClick={()=>{
            this.setState({menuActive: 'none', startGame: true});
            this.props.audio.playSound("wait");
          }}>
          <AiOutlineClose/>
          </button>
          <h1>
            <span>Welcome to MilliTrivia</span>
            <img src={Happy} alt="" height="30px" width="30px" />
          </h1>
          <h4>Here are some things you need to know</h4>
          <ul>
            <li>
              <span>MilliTrivia is a game inspired by the famous Who Wants To Be A
              Millionaire game. You have to get the answer correctly in order to
              win some cash. You will be given some game boosts to further your
              push in this quest. Use them wisely!.
              </span>
              <img src={Platform} alt="" width='200px'/>
            </li>
            <li>
              <span>
              You have two lives per game you play. Whenever you miss a
              question, you will have to repeat the current position on the
              money tree. The money tree shows your progress in the game. A
              correct answer means one spot up the money tree. A wrong answer
              means you won't move any step up on the money tree as stated
              earlier. You won't be able to see the money tree until you get a
              correct answer.
              </span>
              <img src={Tree} alt="" width='200px'/>
            </li>
            <li >
              You will be given 2 fifty-fifty boost per game. You can use it
              only once for a question. The most vital game feature, which is
              the Ask-Audience boost serve as a cheat in the game. Though, it is not entirely reliable, it depends on whether the audience knows the answer or not.
            </li>
            <li style={{marginTop: '2.4rem'}}>All questions were gotten from<a href="https://opentdb.com/api_config.php" target='_blank' rel='noreferrer' style={{color: 'orange'}}>&nbsp;TriviaAPI.</a> All thanks to them.</li>
          </ul>
        </div>
        <div className="mon">
        <figure className="game-banner">
          <img src={imageUrl} alt="" />
        </figure>
          <LifeLine
            fiftyBonus={fiftyBonus}
            askAudience={askAudience}
            life={life}
            setFiftyState={this.setFiftyState}
            setAskAudience={this.setAskAudience}
            data={this.state.question}
            questionNo={no}
            resetAudiencePressed={this.resetAudiencePressed}
          />
          <Timer
            stopGame={this.stopGame}
            questionNo={no}
            setTimer={this.setTimer}
            resetAns={this.resetSelectedAnswer}
            stopInterval={this.stopInterval}
            interval={interval}
            timeDuration={timeDuration}
            answerWrong={answerWrong}
            audiencePressed={audiencePressed}
            startGame={startGame}
          />
          <Money
            list={no}
            questionNo={no}
            actualNo={actualNo}
            money={this.setEarned}
            menuActive={menuActive}
            resetMenu={this.resetMenu}
            displayProgress={displayProgress}
            answerWrong={answerWrong}
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
          actualNo={actualNo}
        />
        <Footer />
      </div>
    ) : (
      <>
        <div className="fail">
          <a href="/" className="logo">
            <img src={Banner} alt="" />
            <span>MilliTrivia</span>
          </a>
          {this.state.actualNo === this.state.questionList + 1 ? (
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
          <button
            onClick={() => {
              window.history.back();
            }}
            className="fail-btn"
          >
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
