import React from 'react';
import './TaskList.css';
import Task from "../Task/Task"

const TaskList = ({tasks, refresh, setRefresh}) => {

  return (
    <div id='tasklist-container'>

        {tasks.map((task) => <Task key={task.id+task.name} task={task} refresh={refresh} setRefresh={setRefresh}/>)}
        
    </div>
  )
}

export default TaskList;