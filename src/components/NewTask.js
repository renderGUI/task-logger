import classes from "./NewTask.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import Stopwatch from "./Stopwatch";
import OptionButtons from "./OptionButtons";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const NewTask = (props) => {
  console.log("NewTask.js re-rendered.");
  const [stopwatchIsRunning, setStopwatchIsRunning] = useState(false);
  const task = useRef();
  const [isDisabled, setIsDisabled] = useState(false);
  const [showOptionButtons, setShowOptionButtons] = useState(false);
  const [shake, setShake] = useState(0);
  const [retrievedTime, setRetrievedTime] = useState("");
  const navigate = useNavigate();

  const toggleStopwatch = () => {
    if (task.current.value.trim().length === 0) {
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
    navigate("/");
  };

  const stopwatchTime = (retrievedTime) => {
    setRetrievedTime(retrievedTime);
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
          ref={task}
          disabled={isDisabled}
        ></input>
        <Stopwatch
          stopwatchIsRunning={stopwatchIsRunning}
          stopwatchTime={stopwatchTime}
        />
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
        {stopwatchIsRunning || showOptionButtons ? (
          ""
        ) : (
          <button
            className={classes["view-log"]}
            type="button"
            onClick={taskLogHandler}
          >
            >>>
          </button>
        )}
      </div>
      {showOptionButtons && (
        <OptionButtons task={task} retrievedTime={retrievedTime} />
      )}
    </div>
  );
};

export default NewTask;
