import "./App.css";
import TaskLog from "./components/TaskLog";
import NewTask from "./components/NewTask";
import { useState, useEffect } from "react";
import { tasksContext } from "./contexts/tasksContext";

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
    <tasksContext.Provider value={{ tasks, setTasks }}>
      <div className="container">
        {showNewTask && (
          <NewTask
            setShowNewTask={setShowNewTask}
            setShowTaskLog={setShowTaskLog}
          />
        )}
        {showTaskLog && (
          <TaskLog
            setShowNewTask={setShowNewTask}
            setShowTaskLog={setShowTaskLog}
          />
        )}
      </div>
    </tasksContext.Provider>
  );
};

export default App;
