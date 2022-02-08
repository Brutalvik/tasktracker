import { useState } from 'react';
import './Header.css'

const Header = ({ title, gettext }) => {

  const [text, settext] = useState();

  const onTrigger = (event) => {
      event.preventDefault();
      gettext(event.target.value)
  }

  return (
    <div className="container">
      <div>
      <h1 className="title">{ title }</h1>
      </div>
      <div className="input-group">
        <input type="text" 
        className="input-box" 
        onChange={onTrigger}/>
      </div>
    </div>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header
