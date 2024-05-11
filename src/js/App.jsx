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


function App(props) {
  const [game, setGame] = useState(false);
  const [track, setTrack] = useState(new SoundSystem());
  const [dataFetched, setDataFetched] = useState(false);
  const [checkdataFetched, setCheckDataFetched] = useState(null);
  const [displayUI, setUI] = useState(false);
  const [data, setData] = useState(null);
  const [fetchNewData, setFetchNewData] = useState(false);
  const [newDataFetched, setNewDataFetched] = useState(false);
  const [display, setDisplay] = useState("");
  const [popUp, setPopUp] = useState("slide-out");
  const [clickable, setClickable] = useState(true);
  const UIRef = useRef(displayUI);
  
  // const start = () => {
  //   if (clickable) {
  //     setClickable(false);
  //     track.addSound(wait, "wait");
  //     track.addSound(wrong, "wrong");
  //     track.addSound(play, "play");
  //     track.addSound(correct, "correct");

  //     fetchMultipleQuestions(2);
  //     setCheckDataFetched(setInterval(() => {}, 400));
  //   }
  // };

  // // GET A FRESH SET OF QUESTIONS WHEN GAME RESTARTS
  // function getFreshData() {
  //   fetch("https://opentdb.com/api.php?amount=50&type=multiple")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setNewDataFetched(true);
  //       setFetchNewData(false);
  //       setData(QBank1(data.results));
  //       // console.log("new data fetched")
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }

  // useEffect(() => {
  //   UIRef.current = displayUI;
  // fetchMultipleQuestions(2);
  //   fetchNewData && getFreshData();
  // }, [fetchNewData, displayUI]);

  // async function fetchMultipleQuestions(calls) {
  //   async function fetchQuestions() {
  //     try {
  //       const response = await fetch(
  //         "https://opentdb.com/api.php?amount=50&type=multiple"
  //       );
  //       // if (!response.ok) {
  //       //   throw new Error(
  //       //     "Error from server: Error status: " +
  //       //       response.status +
  //       //       "==" +
  //       //       response
  //       //   );
  //       // }
  //       let result = await response.json();
  //       setUI(true);
  //       return result;
  //     } catch (e) {
  //       console.log(e);
  //       return null;
  //     }
  //   }
  //   try {
  //     const timeOffset = 1400;
  //     let questions = [];
  //     for (let i = 0; i < calls; i++) {
  //       await new Promise((resolve) => setTimeout(resolve, timeOffset * i));
  //       let tempArr = await fetchQuestions();
  //       if (tempArr && tempArr.results)
  //         questions = questions.concat(tempArr.results);
  //     }
  //     if (UIRef.current) {
  //       setDataFetched(true);
  //       setData(QBank1(questions));
  //       clearInterval(checkdataFetched);
  //       setTimeout(() => {
  //         track.playSound("wait");
  //         setCheckDataFetched(null);
  //         setDisplay("none");
  //         setGame(true);
  //       }, 2500);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //     setTimeout(() => {
  //       setPopUp("slide-in");
  //     }, 20000);
  //     return [];
  //   }
  // }

  useEffect(()=>{
    track.addSound(wait, 'wait');
    track.addSound(wrong, 'wrong');
    track.addSound(play, 'play');
    track.addSound(correct, 'correct');
    console.log('app landed')
  }, [track])

  return (
    <>
      {(
        <Routes>
          <Route path='/quiz/:quizId' element={<>
          <Quiz
            data={data}
            audio={track}
            setFetchNewData={setFetchNewData}
            newDataFetched={newDataFetched}
            setNewDataFetched={setNewDataFetched}
          />
        </>}/>
        <Route path="/quiz" element={<Select setData={setData} audio={track} setTrack={setTrack}/>}/>
        <Route exact path="/" element={<Home checkdataFetched={checkdataFetched} />}/> 
        </Routes>
      )}
    </>
  );
}

export default App;
