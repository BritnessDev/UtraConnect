import React, { useState } from 'react';
import { Button, Card, CloseButton, Col, Form, Modal, Row } from 'react-bootstrap';

export default function ModalContacts({ visible, onDismiss, ...props }) {
  return (
    <Modal show={visible} onHide={onDismiss} centered {...props}>
      <Card className="modal-card">
        <Card.Header>
          <h4 className="card-header-title">Add Contact</h4>
          <CloseButton onClick={onDismiss} />
        </Card.Header>
        <Card.Body>
        <form>
            <Row>
                <Col>
                    <div className="form-group">
                    <Form.Label htmlFor="exampleInputEmail1">NAME</Form.Label>
                    <Form.Control id="exampleInputEmail1" placeholder="Enter name" type="text" />
                    </div>
                </Col>
                <Col>
                    <div className="form-group">
                    <Form.Label htmlFor="exampleInputPassword1">TYPE OF CONTACT</Form.Label>
                    <Form.Control placeholder="Enter type of contact" type="text" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="form-group">
                    <Form.Label htmlFor="exampleInputEmail1">ZIP CODE</Form.Label>
                    <Form.Control id="exampleInputEmail1" placeholder="Enter zip code" type="text" />
                    </div>
                </Col>
                <Col>
                    <div className="form-group">
                    <Form.Label htmlFor="exampleInputPassword1">CITY</Form.Label>
                    <Form.Control placeholder="Enter a city name" type="text" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="form-group">
                    <Form.Label htmlFor="exampleInputEmail1">PHONE</Form.Label>
                    <Form.Control placeholder="Enter a phone" type="text" />
                    </div>
                </Col>
                <Col>
                    <div className="form-group">
                    <Form.Label htmlFor="exampleInputPassword1">EMAIL</Form.Label>
                    <Form.Control placeholder="Enter a email" type="email" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="form-group">
                    <Form.Label htmlFor="exampleInputEmail1">PERSON</Form.Label>
                    <Form.Control id="exampleInputEmail1" placeholder="Enter a person" type="number" />
                    </div>
                </Col>
            </Row>
            <Button type="submit">Add</Button>
          </form>
        </Card.Body>
      </Card>
    </Modal>
  );
}
