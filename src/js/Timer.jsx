import React, { PureComponent } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default class Timer extends PureComponent {
  constructor(props) {
    super(props);
    this.styles = {
      height: "100px",
      width: "100px",
      borderRadius: "50%",
      display: "grid",
      placeContent: "center",
      fontSize: "3rem",
      fontWeight: "600",
      fontFamily: '"Tauri", sans-serif',
      letterSpacing: "4px",
    };
    this.state = {
      timer: this.props.timeDuration,
      timerPathColor: "rgb(30, 247, 15)",
      compTimer: null,
      pauseTimer: true,
    };
  }

  componentDidMount() {}

  componentWillUnmount() {
    this.props.stopInterval();
  }

  add = () => {
    // console.log('still running')
    if (!this.props.audiencePressed && this.props.startGame) {
      this.setState((prev) => ({
        timer: Number(
          (
            this.props.timeDuration -
            (Date.now() - prev.compTimer) / 1000
          ).toFixed(0)
        ),
        pauseTimer: true,
      }));
    } else {
      if (this.state.pauseTimer) {
        this.setState({ pauseTimer: false }, () => {
          this.setState((prev) => ({ compTimer: prev.compTimer + 4300 }));
        });
      }
    }
  };

  resetTimer = () => {
    this.props.resetAns();
    setTimeout(
      () => {
        this.setState({
          timer: this.props.timeDuration,
          timerPathColor: "rgb(30, 247, 15)",
          compTimer: Date.now(),
        });
        this.props.setTimer(setInterval(this.add, 1000));
      },
      this.props.answerWrong ? 0 : 3000
    );
  };

  componentDidUpdate(prevProps) {
    this.state.timer <= 0 && this.props.stopGame();
    prevProps.questionNo !== this.props.questionNo && this.resetTimer();
    this.state.timer === Number((0.6 * this.props.timeDuration).toFixed(0)) &&
      this.setState({ timerPathColor: "orange" });
    this.state.timer === Number((0.25 * this.props.timeDuration).toFixed(0)) &&
      this.setState({ timerPathColor: "red" });
    if (this.props.startGame !== prevProps.startGame) {
      this.setState({ compTimer: Date.now() }, () => {
        this.props.setTimer(setInterval(this.add, 1000));
      });
    }
  }

  render() {
    return (
      <div className="timer" style={this.styles}>
        <CircularProgressbar
          value={(this.state.timer * 100) / this.props.timeDuration}
          text={this.state.timer < 0 ? "0" : `${this.state.timer}`}
          styles={buildStyles({
            textColor: "#fff",
            pathColor: this.state.timerPathColor,
            trailColor: "black",
            textSize: "2.4rem",
          })}
        />
      </div>
    );
  }
}
