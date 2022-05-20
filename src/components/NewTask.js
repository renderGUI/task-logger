import classes from "./NewTask.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import Stopwatch from "./Stopwatch";
import { useState, useEffect } from "react";

const NewTask = () => {
  console.log("NewTask.js re-rendered.");
  const [stopwatchIsRunning, setStopwatchIsRunning] = useState(false);
  const [task, setTask] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [showDoneButton, setShowDoneButton] = useState(false);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const toggleStopwatch = () => {
    if (task.trim().length === 0) {
      setStatusMessage("Task field cannot be empty!");
      return;
    }
    setStatusMessage("");
    setStopwatchIsRunning(!stopwatchIsRunning);
    setIsDisabled(true);
  };

  useEffect(() => {
    return () => {
      if (stopwatchIsRunning) {
        setShowDoneButton(true);
      } else {
        setShowDoneButton(false);
      }
    };
  }, [stopwatchIsRunning]);

  return (
    <div>
      <div
        className={classes.container}
        style={{
          boxShadow: stopwatchIsRunning ? "0px 0px 15px #01315A" : "",
        }}
      >
        <input
          className={classes.input}
          type="text"
          placeholder="What are you about to do?"
          value={task}
          onChange={changeHandler}
          disabled={isDisabled}
        ></input>
        <Stopwatch stopwatchIsRunning={stopwatchIsRunning} />
        <button
          className={classes.btn}
          onClick={toggleStopwatch}
          style={{
            backgroundColor: stopwatchIsRunning ? "#dd7777" : "#77dd77",
          }}
        >
          {stopwatchIsRunning ? (
            <FontAwesomeIcon icon={faPause} />
          ) : (
            <FontAwesomeIcon icon={faPlay} />
          )}
        </button>
      </div>
      <p className={classes.status}>{statusMessage}</p>
      {showDoneButton && <DoneButton />}
    </div>
  );
};

export default NewTask;
