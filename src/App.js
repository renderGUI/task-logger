import "./App.css";
import TaskLog from "./components/TaskLog";
import NewTask from "./components/NewTask";
import { useState } from "react";

const tasks = [
  {
    loggedTask: "House chores",
    loggedTime: "00:29:12",
    id: 1,
  },
  {
    loggedTask: "Chemistry homework",
    loggedTime: "01:02:36",
    id: 2,
  },
  {
    loggedTask: "Art commissions",
    loggedTime: "02:08:55",
    id: 3,
  },
  {
    loggedTask: "Guitar practice",
    loggedTime: "01:16:04",
    id: 4,
  },
  {
    loggedTask: "Strength training",
    loggedTime: "00:58:40",
    id: 5,
  },
];

function App() {
  const [showNewTask, setShowNewTask] = useState(true);
  const [showTaskLog, setShowTaskLog] = useState(false);
  console.log("App.js re-rendered.");
  return (
    <div className="container">
      {showNewTask && (
        <NewTask
          setShowNewTask={setShowNewTask}
          setShowTaskLog={setShowTaskLog}
        />
      )}
      {showTaskLog && (
        <TaskLog
          tasks={tasks}
          setShowNewTask={setShowNewTask}
          setShowTaskLog={setShowTaskLog}
        />
      )}
    </div>
  );
}

export default App;
