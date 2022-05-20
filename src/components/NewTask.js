import classes from "./NewTask.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import Stopwatch from "./Stopwatch";
import { useState } from "react";

const NewTask = () => {
  const [stopwatchIsRunning, setStopwatchIsRunning] = useState(false);
  console.log("NewTask.js re-rendered.");
  const toggleStopwatch = () => {
    setStopwatchIsRunning(!stopwatchIsRunning);
  };

  return (
    <div className={classes.container}>
      <input
        className={classes.input}
        type="text"
        placeholder="What are you about to do?"
      ></input>
      <Stopwatch stopwatchIsRunning={stopwatchIsRunning} />
      <button
        className={classes.btn}
        onClick={toggleStopwatch}
        style={{ backgroundColor: stopwatchIsRunning ? "#dd7777" : "#77dd77" }}
      >
        {stopwatchIsRunning ? (
          <FontAwesomeIcon icon={faPause} />
        ) : (
          <FontAwesomeIcon icon={faPlay} />
        )}
      </button>
    </div>
  );
};

export default NewTask;
