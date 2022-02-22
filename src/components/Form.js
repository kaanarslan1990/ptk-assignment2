import React, { useState } from "react";
import "./style.css";
const initialTaskValues = { taskname: "" };

function Form({addTask, tasks}) {
  const [task, setTask] = useState(initialTaskValues);

  const onChangeInput = (e) => {
      setTask({...task, [e.target.name]: e.target.value });
  }

  const onSubmit = (e) => {
      e.preventDefault();
      if (task.taskname ==="") {
        return false;
    }
    
    addTask([...tasks, task]);
    
   
    
}

  return (
    <form onSubmit={onSubmit} >
      <div >
        <input
          name="taskname"
          placeholder="What needs to be done?"          
          value={task.taskname}
          onChange={onChangeInput}
          
        />
      </div>
      <ul className="list">
        {tasks.map((task, i) => (
          <li key={i} >
            <input value={task} type="checkbox" /> 
            <span >{task.taskname}</span>            
          </li>
        ))}
      </ul>
      <div className="control">
          <span>{tasks.length} items left </span>          
          <span>All </span>
          <span>Active </span>
          <span>Completed </span>
          <button>Clear Completed</button>
      </div>

    </form>
    
  );
}

export default Form;
