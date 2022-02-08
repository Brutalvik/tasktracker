import React from 'react';
import './Tasks.css'
import Button from '../global/button/Button'

const Task = ({ id, task, type}) => {
  return (
        <div className="task">
                <p>ID: {id}</p>
                <p>Task: {task}</p>
                <Button className={"btn-delete"} text="Delete" type={type}/>
        </div>
    );
};

export default Task;
