import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

export default function AccountBillingPlan({ ...props }) {
  return (
    <Card {...props}>
      <Card.Body>
        <Row className="align-items-center">
          <Col>
            <h6 className="text-uppercase text-muted mb-2">Current plan</h6>
            <span className="h2 mb-0">$29/mo</span>
          </Col>
          <Col xs="auto">
            <Button size="sm">Upgrade</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
