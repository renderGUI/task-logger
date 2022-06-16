import classes from "./TaskLog.module.css";
import LoggedTasks from "./LoggedTasks";
import LogFooter from "./LogFooter";
import { useState } from "react";
import TotalTime from "./TotalTime";

const TaskLog = () => {
  const [editIsEnabled, setEditIsEnabled] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <div className={classes.leftContainer}>
          <h1 className={classes.mainHeading}>
            Task<br></br> <span>Logger</span>
          </h1>
        </div>

        <div className={classes.rightContainer}>
          <TotalTime />
        </div>
      </div>
      <hr className={classes.line}></hr>
      <LoggedTasks editIsEnabled={editIsEnabled} />
      <LogFooter
        editIsEnabled={editIsEnabled}
        setEditIsEnabled={setEditIsEnabled}
      />
    </div>
  );
};

export default TaskLog;
