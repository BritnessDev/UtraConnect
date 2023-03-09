import React, { useRef, useState } from 'react';
import { Row, Col, Button, Card, CloseButton, Form, InputGroup, ListGroup, Modal } from 'react-bootstrap';
import { getMessage } from '../helpers/lang';
import SignatureCanvas from 'react-signature-canvas'

function SignatureModal({visible, onDismiss, setPdf, ...props}) {
  const canvasRef = useRef(null);
  const [sign, setSign] = useState(null);

  function handleClear() {
    canvasRef.current.clear();
    setSign(null);
  }

  function handleSave() {
    setSign(canvasRef.current.toDataURL('image/png'));
  }
  
  return (
    <Modal show={visible} onHide={onDismiss} centered {...props}>
      <Card className="modal-card">
        <Card.Header>
          <h4 className="card-header-title">{getMessage("Sign")}</h4>
          <CloseButton onClick={onDismiss} />
        </Card.Header>
        <Card.Body>
          <Row className='align-items-end'>
          <Col className='d-flex flex-column justify-content-center'>
          <div className={`d-flex flex-column justify-content-center canvas-container`}>
            <SignatureCanvas 
              penColor='black' 
              canvasProps={{className: `sigCanvas border border-primary canvas-content`,}}
              ref={canvasRef}
            />
          </div>
            <div className='mt-3 d-flex justify-content-center'>
              <Button variant="danger" onClick={handleClear}>{getMessage('Clear')}</Button>
              <Button variant="info" onClick={handleSave} className="ms-3">{getMessage('Save')}</Button>
            </div>
          </Col>
        </Row>
        </Card.Body>
      </Card>
    </Modal>
    
  );
}

export default SignatureModal;