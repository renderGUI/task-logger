import classes from "./LoggedTasks.module.css";
import { useContext } from "react";
import { tasksContext } from "../contexts/tasksContext";

const LoggedTasks = (props) => {
  const { tasks } = useContext(tasksContext);
  return (
    <>
      {tasks.length > 0 &&
        tasks.map((task) => {
          return (
            <div className={classes.container} key={task.id}>
              <p className={classes.task}>{task.loggedTask}</p>
              <p className={classes.time}>{task.loggedTime}</p>
            </div>
          );
        })}
      {tasks.length === 0 && (
        <div className={classes["empty-list-container"]}>
          <p>No logged tasks today!</p>
        </div>
      )}
    </>
  );
};

export default LoggedTasks;
