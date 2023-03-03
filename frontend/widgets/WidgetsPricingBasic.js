import FeatherIcon from 'feather-icons-react';
import React from 'react';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';

export default function WidgetsPricingBasic({ ...props }) {
  return (
    <Card {...props}>
      <Card.Body>
        <h6 className="text-uppercase text-center text-muted my-4">Basic plan</h6>
        <Row className="g-0 align-items-center justify-content-center">
          <Col xs="auto">
            <div className="h2 mb-0">$</div>
          </Col>
          <Col xs="auto">
            <div className="display-2 mb-0">19</div>
          </Col>
        </Row>
        <div className="h6 text-uppercase text-center text-muted mb-5">/ month</div>
        <div className="mb-3">
          <ListGroup className="list-group-flush">
            <ListGroup.Item className="d-flex align-items-center justify-content-between px-0">
              <small>Unlimited activity</small> <FeatherIcon icon="check-circle" size="1em" className="text-success" />
            </ListGroup.Item>
            <ListGroup.Item className="d-flex align-items-center justify-content-between px-0">
              <small>Direct messaging</small> <FeatherIcon icon="check-circle" size="1em" className="text-success" />
            </ListGroup.Item>
            <ListGroup.Item className="d-flex align-items-center justify-content-between px-0">
              <small>Members</small> <small>10 members</small>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex align-items-center justify-content-between px-0">
              <small>Admins</small> <small>No access</small>
            </ListGroup.Item>
          </ListGroup>
        </div>
        <Button variant="light" className="w-100">
          Start with Basic
        </Button>
      </Card.Body>
    </Card>
  );
}
