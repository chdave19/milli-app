import React, { Component } from "react";
import "../css/error.css";
import Sad from "../img/sad.png";
import { Link } from "react-router-dom";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorFromApp: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return { errorFromApp: true };
  }

  render() {
    return this.state.errorFromApp ? (
      <div className="error-class">
        <div className="error-top">
          <h1>Opps!!!</h1>
          <img src={Sad} alt="" height="50px" width="50px" />
        </div>
        <h4>You might be wondering what happened</h4>
        <h5>Here is a list of what that possibly happened</h5>
        <ul>
          <li>You refreshed the page when the game was still on.</li>
          <li>
            TriviaAPI database didn't respond i.e An error from the MilliTrivia
            app
          </li>
        </ul>
        <Link
          to="/quiz"
          onClick={() => {
            setTimeout(() => {
              window.location.reload(true);
            }, 1000);
          }}
        >
          Select Another Quiz
        </Link>
      </div>
    ) : (
      this.props.children
    );
  }
}
