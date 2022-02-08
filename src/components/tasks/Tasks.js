import React from 'react';
import Task from './Task'
import { useSelector } from 'react-redux';

export const Tasks = () => {

    const tasks = useSelector((state) => state.tasks)

  return (
    <>
        <div>
            {
                tasks.map((task) =>
                <div className="task-block">
                    <Task key={task.id} id={task.id} task={task.title} completed={task.completed} tasks={tasks}/>
                </div>)
            }
        </div>
    </>
  );
};
