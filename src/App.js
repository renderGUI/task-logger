import "./App.css";
import TaskLog from "./components/TaskLog";
import NewTask from "./components/NewTask";
import { useState, useEffect } from "react";

const App = () => {
  const [showNewTask, setShowNewTask] = useState(false);
  const [showTaskLog, setShowTaskLog] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

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
};

export default App;
