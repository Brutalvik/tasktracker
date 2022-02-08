import React from 'react'
import Button from '../global/button/Button'
import './Footer.css'

const Footer = ({ type, onSubmit }) => {
  
  return (
    <>
        <>
            <div className="footer">
                <Button className={"btn-add"} 
                        text="Add" 
                        type={type}/>
            </div>
        </>
    </>
  )
}

export default Footer
