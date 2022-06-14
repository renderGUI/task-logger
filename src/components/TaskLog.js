import classes from "./TaskLog.module.css";
import LoggedTasks from "./LoggedTasks";
import LogFooter from "./LogFooter";
import CurrentDate from "./CurrentDate";
import { useState } from "react";
import FilterButton from "./FilterButton";

const TaskLog = (props) => {
  const [editIsEnabled, setEditIsEnabled] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes["header-container"]}>
        <div className={classes["left-container"]}>
          <CurrentDate />
        </div>

        <div className={classes["right-container"]}>
          <h2 className={classes.total}>
            Total: <span>06:38:52</span>
          </h2>
          <FilterButton />
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
