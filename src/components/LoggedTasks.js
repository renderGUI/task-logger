import classes from "./LoggedTasks.module.css";

const LoggedTasks = (props) => {
  return (
    <>
      {props.tasks.length > 0 &&
        props.tasks.map((task) => {
          return (
            <div className={classes.container} key={task.id}>
              <p className={classes.task}>{task.loggedTask}</p>
              <p className={classes.time}>{task.loggedTime}</p>
            </div>
          );
        })}
      {props.tasks.length === 0 && (
        <div className={classes["empty-list-container"]}>
          <p>No tasks found!</p>
        </div>
      )}
    </>
  );
};

export default LoggedTasks;

// If there are any tasks in the database, render the footer component as well.  If the tasks are empty, render some text
// instead.
