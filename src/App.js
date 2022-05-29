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
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/tasks");
      const data = await response.json();
      setTasks(data);
    };

    fetchData();
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
