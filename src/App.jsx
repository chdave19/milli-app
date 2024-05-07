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

function App(props) {
  const [game, setGame] = useState(false);
  const [track, setTrack] = useState(new SoundSystem());
  const [dataFetched, setDataFetched] = useState(false);
  const [checkdataFetched, setCheckDataFetched] = useState(null);
  const [dots, setDots] = useState(".");
  const dotRef = useRef(dots);
  const checkDataRef = useRef(dataFetched);
  const [data, setData] = useState(null);


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

  useEffect(() => {
    dotRef.current = dots;
    checkDataRef.current = dataFetched;

    if (checkDataRef.current) {
      clearInterval(checkdataFetched);
      setTimeout(() => {
        setCheckDataFetched(null);
        setGame(true);
        track.playSound("wait");
      }, 2000);
    }
  }, [dots, dataFetched, checkdataFetched, track]);

  return (
    <>
      {game && dataFetched ? (
        <Main data={data} audio={track}/>
      ) : (
        <div className="start">
          {checkdataFetched && <span className="load">{`Please wait${dots}`}</span>}
          <button onClick={() => start()}>Start</button>
        </div>
      )}
    </>
  );
}

export default App;
