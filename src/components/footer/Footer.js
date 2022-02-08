import React from 'react'
import Button from '../global/button/Button'
import './Footer.css'

const Footer = ({ type, onSubmit }) => {
  
  return (
    <>
        <div className="footer">
            <div>
                <Button className={"btn-add"} 
                        text="Add" 
                        type={type}/>
            </div>
        </div>
    </>
  )
}

export default Footer
