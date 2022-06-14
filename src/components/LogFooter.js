import classes from "./LogFooter.module.css";

const LogFooter = (props) => {
  const newTaskHandler = () => {
    props.setShowTaskLog(false);
    props.setShowNewTask(true);
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
          <button className={classes["new-task-btn"]} onClick={newTaskHandler}>
            Start a New Task
          </button>
        )}
        <button className={classes["edit-log-btn"]} onClick={editLogHandler}>
          {props.editIsEnabled ? "Done" : "Edit"}
        </button>
      </div>
    </>
  );
};

export default LogFooter;
