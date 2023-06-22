import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Task.css";
import api from "../../api/axiosConfig";

const Task = ({ task, refresh, setRefresh }) => {
  const completeTask = async () => {
    let id = task.id;

    const response = await api.put(`/${id}`);

    console.log(response.data);

    setRefresh(refresh + 1);
  };

  const deleteTask = async () => {
    try {
      const response = await api.delete(`/${task.id}`);

      setRefresh(refresh + 1);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="TaskContainer">
      <div className="TaskDetails">
        {task.name ? <h3>{task.name}</h3> : null}
        {task.description ? <p>{task.description}</p> : null}
        {task.date ? <p>{task.date}</p> : null}
        {task.time ? <p>{task.time}</p> : null}
        {task.status ? <p>{task.status}</p> : null}
      </div>
      <div className="TaskControls">
        {task.status == "UNCOMPLETE" ? (
          <button>
            <FontAwesomeIcon
              icon={faSquareCheck}
              size="2xl"
              style={{ color: "#75f94c" }}
              onClick={() => completeTask()}
            />
          </button>
        ) : null}
        <button>
          <FontAwesomeIcon
            icon={faTrash}
            size="2xl"
            style={{ color: "#eb3223" }}
            onClick={() => deleteTask()}
          />
        </button>
      </div>
    </div>
  );
};

export default Task;
