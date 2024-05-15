import "../css/App.css";
import { useEffect, useRef, useState } from "react";
import Home from "./Home";
import Quiz from "./Quiz";
import Select from "./Select";
import SoundSystem from "./SoundSystem";
import wait from "../soundassets/wait.mp3";
import wrong from "../soundassets/wrong.mp3";
import play from "../soundassets/play.mp3";
import correct from "../soundassets/correct.mp3";
import { Route, Routes } from "react-router-dom";
import { QBank1, randomiseQuestion } from "./QuestionBank";

function App(props) {
  const [track, setTrack] = useState(new SoundSystem());
  const [dataFetched, setDataFetched] = useState(false);
  const [checkdataFetched, setCheckDataFetched] = useState(null);
  const [displayUI, setUI] = useState(false);
  const [data, setData] = useState({});
  const [fetchData, setFetchData] = useState(false);
  const [fetchNewData, setFetchNewData] = useState(true);
  

  const fetchMultipleQuestions = async (calls) => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=50&type=multiple"
        );
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
        console.log('fetch', i)
        await new Promise((resolve) => setTimeout(resolve, timeOffset * i));
        let tempArr = await fetchQuestions();
        if (tempArr && tempArr.results)
          questions = questions.concat(tempArr.results);
        if (i === calls - 1) {
          const d = QBank1(questions);
            setData(d);
            setDataFetched(true);
            console.log('Data fetched');
            setFetchData(false);
        }
      }
    } catch (e) {
      console.log(e);
      setTimeout(() => {
        // setPopUp("slide-in");
      }, 20000);
      return [];
    }
  };

  useEffect(() => {
    track.addSound(wait, "wait");
    track.addSound(wrong, "wrong");
    track.addSound(play, "play");
    track.addSound(correct, "correct");
    console.log("app landed");

    (fetchData && fetchNewData) && fetchMultipleQuestions(10);
  },[fetchData, track, fetchNewData]);

  return (
    <div
      style={{ maxWidth: "1600px", height: "fit-content" }}
      className="main-box"
    >
      {
        <Routes>
          <Route
            path="/quiz/:quizId"
            element={
              <>
                <Quiz data={data} audio={track} />
              </>
            }
          />
          <Route
            path="/quiz"
            element={
              <Select
                audio={track}
                setTrack={setTrack}
                setFetchData={setFetchData}
                dataFetched={dataFetched}
                data={data}
                setDataFetched={setDataFetched}
                setFetchNewData={setFetchNewData}
                fetchNewData={fetchNewData}
              />
            }
          />
          <Route
            exact
            path="/"
            element={<Home checkdataFetched={checkdataFetched} />}
          />
        </Routes>
      }
    </div>
  );
}

export default App;
