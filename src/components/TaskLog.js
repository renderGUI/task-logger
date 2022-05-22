import classes from "./TaskLog.module.css";
import LoggedTasks from "./LoggedTasks";

const TaskLog = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes["header-container"]}>
        <div className={classes["left-container"]}>
          <h1 className={classes.date}>
            Today,<br></br> <span>May 21</span>
          </h1>
        </div>

        <div className={classes["right-container"]}>
          <h2 className={classes.total}>
            Total: <span>06:38:52</span>
          </h2>
          <button className={classes["filter-btn"]} type="button">
            Filter
          </button>
        </div>
      </div>
      <hr className={classes.line}></hr>
      <div>
          <LoggedTasks tasks={props.tasks} />
      </div>
    </div>
  );
};

export default TaskLog;
