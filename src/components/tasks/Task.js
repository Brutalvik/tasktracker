import React from 'react';
import './Tasks.css'
import Button from '../global/button/Button'

const Task = ({ id, task, type}) => {
  return (
    <>
        <div className="task-header">
          <h2>ID</h2>
          <h2>Task</h2>
          <h2>Action</h2>
        </div>
        <br/>
        <div className="task">
                <p>{id}</p>
                <p>{task}</p>
                <Button className={"btn-delete"} text="Delete" type={type}/>
                <Button className={"btn-edit"} text="Edit" type={type}/>
        </div>
    </>
    );
};

export default Task;
