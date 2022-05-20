import classes from "./Stopwatch.module.css";
import { useState, useEffect } from "react";

const Stopwatch = (props) => {
  console.log("Stopwatch.js re-rendered.");
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    let timer;
    if (props.stopwatchIsRunning) {
      timer = setInterval(() => {
        setSecond((previousSecond) => previousSecond + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [props.stopwatchIsRunning]);

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

  const hourZero = hour < 10 && 0;
  const minuteZero = minute < 10 && 0;
  const secondZero = second < 10 && 0;

  return (
    <>
      <p className={classes.time}>
        {hourZero}
        {hour}:{minuteZero}
        {minute}:{secondZero}
        {second}
      </p>
    </>
  );
};

export default Stopwatch;
