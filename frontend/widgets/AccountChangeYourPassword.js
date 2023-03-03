import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

export default function AccountChangeYourPassword() {
  return (
    <>
      <Row className="justify-content-between align-items-center mb-5">
        <Col xs={12} md={9} xl={7}>
          <h2 className="mb-2">Change your password</h2>
          <p className="text-muted mb-xl-0">
            We will email you a confirmation when changing your password, so please expect that email after submitting.
          </p>
        </Col>
        <Col xs={12} xl="auto">
          <Button variant="white">Forgot your password?</Button>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} className="order-md-2">
          <Card className="bg-light border ml-md-4">
            <Card.Body>
              <p className="mb-2">Password requirements</p>
              <p className="small text-muted mb-2">
                To create a new password, you have to meet all of the following requirements:
              </p>
              <ul className="small text-muted ps-4 mb-0">
                <li>Minimum 8 character</li>
                <li>At least one special character</li>
                <li>At least one number</li>
                <li>Can’t be the same as a previous password</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} className="col-12 col-md-6">
          <form>
            <div className="form-group">
              <Form.Label>Current password</Form.Label>
              <Form.Control type="password" />
            </div>
            <div className="form-group">
              <Form.Label>New password</Form.Label>
              <Form.Control type="password" />
            </div>
            <div className="form-group">
              <Form.Label>Confirm new password</Form.Label>
              <Form.Control type="password" />
            </div>
            <Button className="lift w-100">Update password</Button>
          </form>
        </Col>
      </Row>
    </>
  );
}
