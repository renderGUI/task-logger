import classes from "./LoggedTasks.module.css";

const LoggedTasks = () => {
  return (
    <div className={classes.container}>
      <div className={classes["left-container"]}>
        <h1 className={classes.date}>
          Today,<br></br> <span>May 21</span>
        </h1>
      </div>

      <div className={classes["right-container"]}>
        <h2 className={classes.total}>Total: 06:38:52</h2>
        <button className={classes.filter} type="button">
          Filter
        </button>
      </div>
      <hr className={classes.line}></hr>
    </div>
  );
};

export default LoggedTasks;
