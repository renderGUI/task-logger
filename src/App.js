import "./App.css";
import TaskLog from "./components/TaskLog";
import NewTask from "./components/NewTask";
import { useState, useEffect } from "react";
import { tasksContext } from "./contexts/tasksContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://tasks-rendergui.herokuapp.com/tasks"
      );
      const data = await response.json();
      setTasks(data);
    };

    fetchData();
  }, []);

  return (
    <tasksContext.Provider value={{ tasks, setTasks }}>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TaskLog />} />
            <Route path="new-task" element={<NewTask />} />
          </Routes>
        </BrowserRouter>
      </div>
    </tasksContext.Provider>
  );
};

export default App;
