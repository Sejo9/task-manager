import Button from "@mui/material/Button";
import "./AddTask.css";
import React, { useState } from "react";
import api from "../../api/axiosConfig";

const AddTask = ({ refresh, setRefresh }) => {
  const [task, setTask] = useState({
    "name": "",
    "description": "",
    "date": "",
    "time": ""
});

  const addTask = async () => {

    if(!task.name){
      alert("Task Name is Required!");
    }else{
      try {
        const response = await api.post("",task);
  
        console.log(response.data);

        setRefresh(refresh+1);
  
        setTask({
          "name": "",
          "description": "",
          "date": "",
          "time": ""
      })
      } catch (error) {
        console.log(error);
      }
    }

    
  };

  return (
    <form id="add-task-container">
      <input id="title" placeholder="Title" value={task.name} onChange={(e) => {
          setTask({
            ...task,
            name: e.target.value
          });
      }}/>
      <input id="date" placeholder="Date" value={task.date} type="date" onChange={(e) => {
          setTask({
            ...task,
            date: e.target.value
          });
      }}/>
      <input id="time" placeholder="Time" value={task.time} type="time" onChange={(e) => {
          setTask({
            ...task,
            time: e.target.value
          });
      }}/>
      <textarea id="desc" placeholder="Description" value={task.description} onChange={(e) => {
          setTask({
            ...task,
            description: e.target.value
          });
      }}/>
      <Button id="add-btn" variant="contained" onClick={() => addTask()}>
        Add Task
      </Button>
    </form>
  );
};

export default AddTask;
