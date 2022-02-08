import { useState } from 'react';
import './Tasks.css'
import Button from '../global/button/Button'
import { useDispatch } from 'react-redux';
import { toggleCompletedTask, 
        deleteTask, 
        editTask } from '../../redux/TaskSlice'

const Task = ({ id, task, completed}) => {

  const [isEditing, setIsEditing] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [update, setUpdate] = useState();

  const dispatch = useDispatch(0);

  const handleChange = () => {
    dispatch(
      toggleCompletedTask({ id: id, completed: !completed})
    )
    setDisabled(true);
  }

  const handleDelete = () => {
    dispatch(deleteTask({ id: id}))
  }

  const handleEdit = () => {
    setIsEditing(true);
  }

  const handleCancel = () => {
    setIsEditing(false);
  }

  const handleUpdate = () => {
    setIsEditing(false);
    dispatch(editTask({ id: id, title: update}))
  }


  return (
    <>
        <div className="task-header">
          <h2>Mark</h2>
          {/* inline styling example */}
          <h2 style={{"margin-left": "10px"}}>ID</h2>
          <h2>Task</h2>
          <h2>Action</h2>
        </div>
        <br/>
        {
          isEditing ?
          <div className="task">
                <input type="checkbox" />
                <p>{id}</p>
                <input type="textbox" onChange={(e) => setUpdate(e.target.value)}/>
                <Button onClick={handleCancel} className={"btn-delete"} text="Cancel"/>
                <Button onClick={handleUpdate} className={"btn-edit"} text="Update"/>
          </div>
          :
          <div className="task">
                <input type="checkbox" onChange={handleChange} />
                <p>{id}</p>
                <p>{task}</p>
                <Button onClick={handleDelete} className={"btn-delete"} text="Delete"/>
                <Button onClick={handleEdit} className={"btn-edit"} text="Edit"/>
        </div>
        }
      </>
    );
};

export default Task;
