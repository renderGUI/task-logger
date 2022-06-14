import classes from "./TaskLog.module.css";
import LoggedTasks from "./LoggedTasks";
import LogFooter from "./LogFooter";
import { useState } from "react";
import TotalTime from "./TotalTime";

const TaskLog = (props) => {
  const [editIsEnabled, setEditIsEnabled] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes["header-container"]}>
        <div className={classes["left-container"]}>
          <h1 className={classes["main-heading"]}>
            Task<br></br>{" "}
            <span>
              Logger
            </span>
          </h1>
        </div>

        <div className={classes["right-container"]}>
          <TotalTime />
        </div>
      </div>
      <hr className={classes.line}></hr>
      <LoggedTasks editIsEnabled={editIsEnabled} />
      <LogFooter
        setShowNewTask={props.setShowNewTask}
        setShowTaskLog={props.setShowTaskLog}
        editIsEnabled={editIsEnabled}
        setEditIsEnabled={setEditIsEnabled}
      />
    </div>
  );
};

export default TaskLog;
