import classes from "./LogFooter.module.css";
import { useNavigate } from "react-router-dom";

const LogFooter = (props) => {
  const navigate = useNavigate();

  const newTaskHandler = () => {
    navigate("new-task");
  };

  const editLogHandler = () => {
    props.setEditIsEnabled(!props.editIsEnabled);
  };

  return (
    <>
      <hr className={classes.line}></hr>
      <div className={classes.container}>
        {props.editIsEnabled ? (
          ""
        ) : (
          <button className={classes.newTaskBtn} onClick={newTaskHandler}>
            Start a New Task
          </button>
        )}
        <button className={classes.editLogBtn} onClick={editLogHandler}>
          {props.editIsEnabled ? "Done" : "Edit"}
        </button>
      </div>
    </>
  );
};

export default LogFooter;
