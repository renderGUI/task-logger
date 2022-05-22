import classes from "./LogFooter.module.css";

const LogFooter = (props) => {
  const newTaskHandler = () => {
    props.setShowTaskLog(false);
    props.setShowNewTask(true);
  };
  return (
    <>
      <hr className={classes.line}></hr>
      <div className={classes.container}>
        <button className={classes["new-task-btn"]} onClick={newTaskHandler}>
          Start a New Task
        </button>
        <button className={classes["edit-log-btn"]}>Edit</button>
      </div>
    </>
  );
};

export default LogFooter;
