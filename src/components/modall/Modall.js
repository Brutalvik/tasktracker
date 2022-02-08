import Modal from 'react-bootstrap/Modal'
import Button from '../global/button/Button'
import '../footer/Footer.css'
import './Modall.css'
import '../global/button/Button.css'

const Modall = ({header, body, show, handleClose, type, buttonText, trigger}) => {

  return (
    <>
       <Modal
        backdrop="static"
        keyboard={false}
        show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
         {body}
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button className="btn-delete" type={type} text={buttonText} onClick={trigger}/>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Modall
