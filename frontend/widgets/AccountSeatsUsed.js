import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

export default function AccountSeatsUsed({ ...props }) {
  return (
    <Card {...props}>
      <Card.Body>
        <Row className="align-items-center">
          <Col>
            <h6 className="text-uppercase text-muted mb-2">Seats Used</h6>
            <span className="h2 mb-0">4 out of 6</span>
          </Col>
          <Col xs="auto">
            <Button size="sm" variant="outline-primary">
              Upgrade
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
