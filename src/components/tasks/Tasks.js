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
                <div key={task.id} className="task-block">
                    <Task id={task.id} task={task.title} completed={task.completed} tasks={tasks}/>
                </div>)
            }
        </div>
    </>
  );
};
