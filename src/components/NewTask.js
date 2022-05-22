import classes from "./NewTask.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import Stopwatch from "./Stopwatch";
import OptionButtons from "./OptionButtons";
import { useState, useEffect } from "react";

const NewTask = (props) => {
  console.log("NewTask.js re-rendered.");
  const [stopwatchIsRunning, setStopwatchIsRunning] = useState(false);
  const [task, setTask] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [showOptionButtons, setShowOptionButtons] = useState(false);
  const [shake, setShake] = useState(0);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const toggleStopwatch = () => {
    if (task.trim().length === 0) {
      setShake(1);
      return;
    }
    setStopwatchIsRunning(!stopwatchIsRunning);
    setIsDisabled(true);
  };

  useEffect(() => {
    return () => {
      if (stopwatchIsRunning) {
        setShowOptionButtons(true);
      } else {
        setShowOptionButtons(false);
      }
    };
  }, [stopwatchIsRunning]);

  const taskLogHandler = () => {
    props.setShowNewTask(false);
    props.setShowTaskLog(true);
  };

  return (
    <div>
      <div
        className={classes.container}
        style={{
          boxShadow: stopwatchIsRunning ? "0px 0px 15px #01315A" : "",
        }}
        onAnimationEnd={() => setShake(0)}
        shake={shake}
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
        <button
          className={classes["view-log"]}
          type="button"
          onClick={taskLogHandler}
        >
          >>>
        </button>
      </div>
      {showOptionButtons && <OptionButtons />}
    </div>
  );
};

export default NewTask;
