import React, { Component } from "react";
import logo from "../img/milli-game-bg.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import QuizItem from "./QuizItem";
import { QBank1, randomiseQuestion } from "./QuestionBank";
import { FaSearch } from "react-icons/fa";
import LoadingComponent from "./LoadingPlaceHolder";
import { FaFilter } from "react-icons/fa";
import styles from "../css/milli.module.css";
import SearchPng from "../img/search.png";
import { IoIosClose } from "react-icons/io";

export default class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quizzes: [],
      responseOk: false,
      searchQuery: "",
      fullData: null,
      dataFetched: false,
    };
  }

  componentDidMount() {
    this.fetchMultipleQuestions(3);
    console.log("mounted");
  }

  fetchMultipleQuestions = async (calls) => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=50&type=multiple"
        );
        response.ok && this.setState({ responseOk: true });
        let result = await response.json();
        return result;
      } catch (e) {
        console.log(e);
        return null;
      }
    };
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
            const d = QBank1(questions);
            this.props.setData(d);
            let mainData = randomiseQuestion(Object.values(d));
            console.log(mainData.length)
            this.setState({
              dataFetched: true,  
              quizzes: mainData,
              fullData: mainData,
            });
          }
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
  };

  filterData = (e) => {
    e.target.type==='text' && this.setState({ searchQuery: e.target.value },
        ()=>{this.searchData()});
  };

  displayInput=(i)=>{
    const {fullData} = this.state;
    this.setState({searchQuery: Object.values(fullData).at(i).title},);
  }

  searchData=()=>{
    const {fullData} = this.state;
    this.setState({
        quizzes: fullData.filter((_) =>
          _.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
        ),
      })
  }

  render() {
    const { quizzes, searchQuery, fullData, dataFetched } = this.state;
    return (
      <>
        <div className="select-quiz">
          <header>
            <Link to="/" className="logo-select">
              <img src={logo} alt="" />
              <span>MilliTrivia</span>
            </Link>
            <div className={styles.btn_section}>
              <button className={styles.filter}>
                <FaFilter />
              </button>
              <div className="search-quiz">
                {searchQuery&&<button onClick={()=>{this.setState({searchQuery: '', quizzes: fullData})}}><IoIosClose style={{fontSize: '1.4rem', color: 'orange'}}/></button>}
                <input
                  type="text"
                  value={searchQuery}
                  onChange={this.filterData}
                />
                <button onClick={this.searchData}><FaSearch style={{fontSize: '1.3rem', color: 'orange'}}/></button>
              </div>
            </div>
          </header>
          <div className="container">
            {dataFetched?(quizzes.length > 0 ? (
              this.state.quizzes.map((item, key) =>
                item.data.length >= 0 ? (
                  <QuizItem
                    key={key}
                    imageUrl={item.imgUrl}
                    pageUrl={item.name}
                    title={item.title}
                    mode={item.tag}
                    quote={item.quote}
                    duration={item.duration}
                    length={item.data.length}
                  />
                ) : null
              )
            ) : (
              
              <div className="not-found">
                <span>Not found</span>
                <span>Try another keyword</span>
                <figure><img src={SearchPng} alt="Try a different keywords" /></figure>
                <span style={{fontSize: '1.2rem'}}>Suggested Keywords</span>
                <div className="suggestions">
                    {fullData && fullData.map((_,i)=><span key={i} onClick={()=>this.displayInput(i)}>{_.title}</span>)}
                </div>
              </div>
            )): Array.from({ length: 16 }, () => "").map((_, i) => (
            <LoadingComponent key={i} />
                ))}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
