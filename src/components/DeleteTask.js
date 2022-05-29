import classes from "./DeleteTask.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const DeleteTask = () => {
  const deleteTaskHandler = () => {
    console.log("clicked");
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
