import React, { Component } from "react";
import logo from "../img/milli-game-bg.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import QuizItem from "./QuizItem";
import { QBank1, randomiseQuestion } from "./QuestionBank";
import { FaSearch } from "react-icons/fa";
import LoadingComponent from "./LoadingPlaceHolder";

export default class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quizzes: [],
      responseOk: false
    };

  }

  componentDidMount() {
    this.fetchMultipleQuestions(3);
    console.log("mounted");
  }

   fetchMultipleQuestions= async(calls)=> {
     const fetchQuestions= async ()=> {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=50&type=multiple"
        );
        response.ok && this.setState({responseOk: true})
        let result = await response.json();
        return result;
      } catch (e) {
        console.log(e);
        return null;
      }
    }
    try {
      const timeOffset = 1400;
      let questions = [];
      for (let i = 0; i < calls; i++) {
        await new Promise((resolve) => setTimeout(resolve, timeOffset * i));
        let tempArr = await fetchQuestions();
        if (tempArr && tempArr.results)
          questions = questions.concat(tempArr.results);
        if (i === calls - 1) {
          if (this.state.responseOk) {
            this.props.setData(QBank1(questions));
            this.setState({
              quizzes: randomiseQuestion(Object.values(QBank1(questions))),
            });
          }
          console.log(QBank1(questions));
        }
      }
      //   if ('') {
      //     setTimeout(() => {
      //       track.playSound("wait");
      //       setCheckDataFetched(null);
      //       setDisplay("none");
      //       setGame(true);
      //     }, 2500);
      //   }
    } catch (e) {
      console.log(e);
      setTimeout(() => {
        // setPopUp("slide-in");
      }, 20000);
      return [];
    }
  }

  render() {
    const { quizzes } = this.state;
    return (
      <>
        <div className="select-quiz">
          <header>
            <Link to="/" className="logo-select">
              <img src={logo} alt="" />
              <span>MilliTrivia</span>
            </Link>
            <div className="search-quiz">
              <input type="text" />
              <FaSearch />
            </div>
          </header>
          <div className="container">
            {quizzes.length > 0
              ? this.state.quizzes.map((item, key) =>
                  item.data.length >= 0 ? (
                    <QuizItem
                      key={key}
                      imageUrl={item.imgUrl}
                      pageUrl={item.name}
                      title={item.title}
                      mode={item.tag}
                      quote={item.quote}
                      duration={item.duration}
                    />
                  ) : null
                )
              : Array.from({ length: 16 }, () => "").map((_, i) => (
                  <LoadingComponent key={i} />
                ))}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
