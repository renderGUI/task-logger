import classes from "./LogFooter.module.css";

const LogFooter = () => {
  return (
    <>
      <hr className={classes.line}></hr>
      <div className={classes.container}>
        <button className={classes["new-task-btn"]}>Start a New Task</button>
        <button className={classes["edit-log-btn"]}>Edit</button>
      </div>
    </>
  );
};

export default LogFooter;
