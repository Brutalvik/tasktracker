import React from 'react'
import { useSelector } from 'react-redux'

const Completed = () => {

    const completedTasks = useSelector((state) => 
        state.tasks.filter((task) => task.completed === true)
    );

  return (
    <>
      <h4>Completed Tasks : {completedTasks.length}</h4>
    </>
  )
}

export default Completed
