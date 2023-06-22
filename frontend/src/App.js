import "./App.css";
import api from "./api/axiosConfig";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [tasks, setTasks] = useState();
  const [refresh, setRefresh] = useState(0);

  const getTasks = async () => {
    try {
      const response = await api.get();

      console.log(response.data);

      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, [refresh]);

  return (
    <div id="container">
      <Header />
      <AddTask refresh={refresh} setRefresh={setRefresh} />
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
