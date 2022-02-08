import './Header.css'

const Header = ({ title, gettext }) => {

  const onTrigger = (event) => {
      event.preventDefault();
      gettext(event.target.value)
      console.log(gettext)
  }

  return (
    <>
      <div>
      <h1 className="title">{ title }</h1>
      </div>
      <div className="input-group">
        <input type="text" 
        className="input-box" 
        onChange={onTrigger}/>
      </div>
    </>
  )
}

Header.defaultProps = {
    title: 'To Do Tracker'
}

export default Header
