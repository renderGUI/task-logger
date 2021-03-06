import classes from "./OptionButtons.module.css";
import { useContext } from "react";
import { tasksContext } from "../contexts/tasksContext";
import { useNavigate } from "react-router-dom";

const OptionButtons = (props) => {
  const { tasks, setTasks } = useContext(tasksContext);
  const navigate = useNavigate();

  const deleteHandler = () => {
    window.location.reload();
  };

  const saveHandler = async () => {
    const taskObject = {
      loggedTask: props.task.current.value,
      loggedTime: props.retrievedTime,
    };
    const response = await fetch(
      "https://tasks-rendergui.herokuapp.com/tasks",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskObject),
      }
    );
    const data = await response.json();
    setTasks(tasks.concat(data));
    navigate("/");
  };

  return (
    <div className={classes.container}>
      <button className={classes.deleteBtn} onClick={deleteHandler}>
        Delete Task
      </button>
      <button className={classes.saveBtn} onClick={saveHandler}>
        Save Task
      </button>
    </div>
  );
};

export default OptionButtons;
