import classes from "./OptionButtons.module.css";
import { useContext } from "react";
import { tasksContext } from "../contexts/tasksContext";

const OptionButtons = (props) => {
  const { tasks, setTasks } = useContext(tasksContext);

  const deleteHandler = () => {
    window.location.reload();
  };

  const saveHandler = async () => {
    const taskObject = {
      loggedTask: props.task.current.value,
      loggedTime: props.retrievedTime,
    };
    const response = await fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskObject),
    });
    const data = await response.json();
    setTasks(tasks.concat(data));
  };

  return (
    <div className={classes.container}>
      <button className={classes["delete-btn"]} onClick={deleteHandler}>
        Delete Task
      </button>
      <button className={classes["save-btn"]} onClick={saveHandler}>
        Save Task
      </button>
    </div>
  );
};

export default OptionButtons;
