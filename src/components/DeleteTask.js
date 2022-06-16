import classes from "./DeleteTask.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { tasksContext } from "../contexts/tasksContext";

const DeleteTask = (props) => {
  const { setTasks } = useContext(tasksContext);

  const deleteTaskHandler = async () => {
    const response = await fetch(
      `https://tasks-rendergui.herokuapp.com/tasks/${props.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.json();
    console.log(data);

    fetchData();
  };

  const fetchData = async () => {
    const response = await fetch("https://tasks-rendergui.herokuapp.com/tasks");
    const data = await response.json();
    setTasks(data);
  };

  return (
    <>
      <button className={classes.trash} onClick={deleteTaskHandler}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </>
  );
};

export default DeleteTask;
