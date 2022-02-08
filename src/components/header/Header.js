import React from 'react'
import './Header.css'

const Header = ({ title }) => {
  return (
    <div className="container">
      <h1 className="title">{ title }</h1>
    </div>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header
