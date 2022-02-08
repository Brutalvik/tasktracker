import React from 'react';
import Task from './Task'
import { useSelector } from 'react-redux';

export const Tasks = () => {

    const tasks = useSelector((state) => state.tasks)

  return (
    <div className="container">
        <ul>
            {
                tasks.map((task) => 
                <Task id={task.id} task={task.title} completed={task.completed}/>)
            }
        </ul>
    </div>
  );
};
