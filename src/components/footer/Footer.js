import React from 'react'
import Button from '../global/button/Button'
import './Footer.css'

const Footer = () => {

    const add = () => {
        console.log('Click')
    }

  return (
    <div className="container">
        <div className="footer">
            <div>
                <Button className={"btn-add"} text="Add" onClick={add}/>
            </div>
            <div>
                <Button className={"btn-delete"} text="Delete" onClick={add}/>
            </div>
        </div>
    </div>
  )
}

export default Footer
