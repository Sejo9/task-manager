import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import React from 'react'
import styled from "@emotion/styled";
import './Task.css'

const Task = ({task}) => {
  return (
    <div className="TaskContainer">
        <div className="TaskDetails">
            <p><strong>Title: </strong>{task.title}</p>
            <p><strong>Description: </strong>{task.description}</p>
            <p><strong>Date: </strong>{task.date}</p>
            <p><strong>Time: </strong>{task.time}</p>
            <p><strong>Status: </strong>{task.status}</p>
        </div>
        <div className="TaskControls">
            <button><FontAwesomeIcon icon={faSquareCheck} size="2xl" style={{color: "#75f94c"}} /></button>
            <button><FontAwesomeIcon icon={faTrash} size="2xl" style={{color: "#eb3223"}} /></button>
            
        </div>
    </div>
  )
}

export default Task