import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

export default function AccountDefaultRole({ ...props }) {
  return (
    <Card {...props}>
      <Card.Body>
        <Row className="align-items-center">
          <Col>
            <h6 className="text-uppercase text-muted mb-2">Default Role</h6>
            <span className="h2 mb-0">Staff</span>
          </Col>
          <Col xs="auto">
            <Button variant="white" size="sm">
              Change
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
