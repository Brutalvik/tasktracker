import { useState } from 'react';
import './Tasks.css'
import Button from '../global/button/Button'
import { useDispatch } from 'react-redux';
import { toggleCompletedTask, 
        deleteTask, 
        editTask } from '../../redux/TaskSlice'
import Modall from '../modall/Modall'

const Task = ({ id, task, completed}) => {

  const [isEditing, setIsEditing] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [update, setUpdate] = useState();
  const [show, setShow] = useState(false);
  const [header, setHeader] = useState("");
  const [body, setBody] = useState("");
  const [buttonText, setButtonText] = useState("");

  const dispatch = useDispatch(0);

  const handleChange = () => {
    dispatch(
      toggleCompletedTask({ id: id, completed: !completed})
    )
    setDisabled(true);
    setHeader("Completed")
    setBody("This task is now marked as completed.")
    setButtonText("Close")
  }

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    setButtonText("Delete")
    setHeader("Confirmation")
    setBody("Are you sure ?")
  };


  const removeTask = () => {
    dispatch(deleteTask({ id: id}))
    setShow(false)
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

  const handleError = () => {
    alert("Error : Cannot update completed task!")
  }


  return (
        <>
          <Modall header={header}
                  body={body} 
                  show={show} 
                  handleClose={handleClose}
                  buttonText={buttonText}
                  trigger={removeTask}/>
        <div className="task-header">
          <h2>Mark</h2>
          {/* inline styling example */}
          <h2 style={{"margin-left": "10px"}}>ID</h2>
          <h2>Task</h2>
          <h2>Action</h2>
        </div>
        <br/>
        {
          isEditing && !disabled?
          <div className="task">
                <input type="checkbox" disabled={true} />
                <p>{id}</p>
                <input type="textbox" onChange={(e) => setUpdate(e.target.value)}/>
                <Button onClick={handleCancel} className={"btn-delete"} text="Cancel"/>
                <Button onClick={handleUpdate} className={"btn-edit"} text="Update"/>
          </div>
          :
          <div className="task">
                <input type="checkbox" onChange={handleChange} disabled={disabled}/>
                <p>{id}</p>
                <p>{task}</p>
                <Button onClick={handleShow} className={"btn-delete"} text="Delete"/>
                <Button onClick={disabled ? handleError : handleEdit} className={"btn-edit"} text="Edit"/>
          </div>
        }
        </>
    );
};

export default Task;
