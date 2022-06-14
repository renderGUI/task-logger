import classes from "./TotalTime.module.css";
import { useContext } from "react";
import { tasksContext } from "../contexts/tasksContext";

const TotalTime = () => {
  const { tasks } = useContext(tasksContext);

  const times = tasks.map((task) => {
    return task.loggedTime.split(":");
  });

  const seconds = times.map((time) => {
    return (
      parseInt(time[0], 10) * 3600 +
      parseInt(time[1], 10) * 60 +
      parseInt(time[2], 10)
    );
  });

  const totalSeconds = seconds.reduce((sum, second) => {
    return (sum += second);
  }, 0);

  const totalResult = new Date(totalSeconds * 1000).toISOString().slice(11, 19);

  return (
    <>
      <h2 className={classes.total}>
        Total: <span>{totalResult}</span>
      </h2>
    </>
  );
};

export default TotalTime;
