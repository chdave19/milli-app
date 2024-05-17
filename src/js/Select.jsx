import React, { Component } from "react";
import logo from "../img/milli-game-bg.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import QuizItem from "./QuizItem";
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
      quizzes: Object.values(this.props.data),
      responseOk: false,
      searchQuery: "",
      fullData: Object.values(this.props.data),
      dataFetched: false,
      loadingText: 'Please wait...  ',
      loadingTime: 0,
      loadingInterval: null,
    };
  }

  componentDidMount() {
    this.props.setFetchData(true);
    this.setState({
      loadingInterval: setInterval(()=>{
       this.setState(prev=>({
        loadingTime: prev.loadingTime + 1,
       }),()=>{
        switch(this.state.loadingTime){
          case 10: this.setState({loadingText: 'Fetching resources...'}); break;
          case 34: this.setState({loadingText: 'We are getting there...'}); break;
          case 44: this.setState({loadingText: 'I know you have patience...'}); break;
          case 55: this.setState({loadingText: 'Wow, you are actually waiting...'}); break;
          case 63: this.setState({loadingText: "You won't regret waiting fr..."}); break;
          case 76: this.setState({loadingText: 'We are almost there...'}); break;
          case 84: this.setState({loadingText: 'Should be done in 10s or so...'}); break;
          case 91: this.setState({loadingText: 'Thanks for waiting, resources fully fetched...'}); break;
          default: 
        }
       })
      }, 1000)
    })

  }

  componentWillUnmount(){
    clearInterval(this.state.loadingInterval);
  }

  componentDidUpdate() {
    if (this.props.dataFetched) {
      this.props.setDataFetched(false);
      this.props.setFetchNewData(false);
      this.setState({
        fullData: Object.values(this.props.data),
        quizzes: Object.values(this.props.data),
        dataFetched: true,
      });
    }
  }

  filterData = (e) => {
    e.target.type === "text" &&
      this.setState({ searchQuery: e.target.value }, () => {
        this.searchData();
      });
  };

  displayInput = (i) => {
    const { fullData } = this.state;
    this.setState({ searchQuery: Object.values(fullData).at(i).title });
  };

  searchData = () => {
    const { fullData } = this.state;
    this.setState({
      quizzes: fullData.filter((_) =>
        _.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
      ),
    });
  };

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
                {searchQuery && (
                  <button
                    onClick={() => {
                      this.setState({ searchQuery: "", quizzes: fullData });
                    }}
                  >
                    <IoIosClose
                      style={{ fontSize: "1.4rem", color: "orange" }}
                    />
                  </button>
                )}
                <input
                  type="text"
                  value={searchQuery}
                  onChange={this.filterData}
                />
                <button onClick={this.searchData}>
                  <FaSearch style={{ fontSize: "1.3rem", color: "orange" }} />
                </button>
              </div>
            </div>
          </header>
          <div className="container">
            {dataFetched || !this.props.fetchNewData ? (
              quizzes.length > 0 ? (
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
                  <figure>
                    <img src={SearchPng} alt="Try a different keywords" />
                  </figure>
                  <span style={{ fontSize: "1.2rem" }}>Suggested Keywords</span>
                  <div className="suggestions">
                    {fullData &&
                      fullData.map((_, i) => (
                        <span key={i} onClick={() => this.displayInput(i)}>
                          {_.title}
                        </span>
                      ))}
                  </div>
                </div>
              )
            ) : (
              <>
              {Array.from({ length: 16 }, () => "").map((_, i) => (
                <LoadingComponent key={i} />
              ))}
              <div className="online-indicator"><span>{`${this.state.loadingText}${this.state.loadingTime}s`}</span><div className="load abs"></div></div>
              </>
            )}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
