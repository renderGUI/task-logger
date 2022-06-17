import classes from "./Stopwatch.module.css";
import { useState, useEffect } from "react";

const Stopwatch = (props) => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const minTwoDigits = (n) => {
    return (n < 10 ? "0" : "") + n;
  };

  const time = `${minTwoDigits(hour)}:${minTwoDigits(minute)}:${minTwoDigits(
    second
  )}`;

  useEffect(() => {
    let timer;
    if (props.stopwatchIsRunning) {
      timer = setInterval(() => {
        setSecond((previousSecond) => previousSecond + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [props.stopwatchIsRunning, time]);

  useEffect(() => {
    if (second === 60) {
      setSecond(0);
      setMinute((previousMinute) => previousMinute + 1);
    }

    if (minute === 60) {
      setMinute(0);
      setHour((previousHour) => previousHour + 1);
    }
  }, [second, minute]);

  props.stopwatchTime(time);

  return (
    <>
      <p className={classes.time}>{time}</p>
    </>
  );
};

export default Stopwatch;
