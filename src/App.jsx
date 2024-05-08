import "./App.css";
import { useEffect, useRef, useState } from "react";
import Form from "./Form";
import Main from "./Main";
import { QBank1 } from "./QuestionBank";
import SoundSystem from "./SoundSystem";
import wait from "./sounds/wait.mp3";
import wrong from "./sounds/wrong.mp3";
import play from "./sounds/play.mp3";
import correct from "./sounds/correct.mp3";
import Footer from "./Footer";
import Balloon from './Balloon';
import Ribbon from './Ribbon';



function App(props) {
  const [game, setGame] = useState(false);
  const [track, setTrack] = useState(new SoundSystem());
  const [dataFetched, setDataFetched] = useState(false);
  const [checkdataFetched, setCheckDataFetched] = useState(null);
  const [dots, setDots] = useState(".");
  const dotRef = useRef(dots);
  const checkDataRef = useRef(dataFetched);
  const [data, setData] = useState(null);
  const [fetchNewData, setFetchNewData] = useState(false);
  const [newDataFetched, setNewDataFetched] = useState(false);
  const [display, setDisplay] = useState("");

  const start = () => {
    track.addSound(wait, "wait");
    track.addSound(wrong, "wrong");
    track.addSound(play, "play");
    track.addSound(correct, "correct");

    fetch("https://opentdb.com/api.php?amount=50&type=multiple")
      .then((response) => response.json())
      .then((data) => {
        setDataFetched(true);
        setData(QBank1(data.results));
      })
      .catch((e) => {
        console.log(e);
      });

    setCheckDataFetched(
      setInterval(() => {
        if (dotRef.current.length < 4) {
          setDots((pre) => pre + ".");
        } else {
          setDots(".");
        }
      }, 400)
    );
  };

  // GET A FRESH SET OF QUESTIONS WHEN GAME RESTARTS
  function getFreshData(){
    fetch("https://opentdb.com/api.php?amount=50&type=multiple")
      .then((response) => response.json())
      .then((data) => {
        setNewDataFetched(true);
        setFetchNewData(false);
        setData(QBank1(data.results));
        // console.log("new data fetched")
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    dotRef.current = dots;
    checkDataRef.current = dataFetched;

    if (checkDataRef.current) {
      clearInterval(checkdataFetched);
      setTimeout(() => {
        setCheckDataFetched(null);
        setDisplay("none")
        setGame(true);
      }, 2000);
    }

    fetchNewData && getFreshData();
  }, [dots, dataFetched, checkdataFetched, track, fetchNewData]);



  return (
    <>
    <div className={`anime ${display}`} >
      {[...Array(250)].map((_, j) => (
        <Ribbon key={j} j={j} color={`hsl(${j * 75 + 45}, 100%, 50%)`} />
      ))}
    </div>
      {game && dataFetched ? (
        <Main data={data} audio={track} setFetchNewData={setFetchNewData} newDataFetched={newDataFetched} setNewDataFetched={setNewDataFetched}/>
      ) : (
        <>
        <div className="start">
          {checkdataFetched && (
            <span className="load">{`Please wait${dots}`}</span>
          )}
          <button onClick={() => start()}>Start</button>
        </div>
        <Footer/>
        </>
      )}
    </>
  );
}

export default App;
