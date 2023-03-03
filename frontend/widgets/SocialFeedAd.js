import React from 'react';
import { Badge, Button, Card, Col, Row } from 'react-bootstrap';

export default function SocialFeedAd({ ...props }) {
  return (
    <Card {...props}>
      <Card.Img variant="top" src="/img/kanban/kanban-2.jpg" alt="..." />
      <Card.Body>
        <Row className="align-items-center">
          <Col>
            <h4 className="mb-1">Get Landkit theme!</h4>
            <Badge className="me-1" bg="success-soft">
              Ad
            </Badge>
            <small className="text-muted">$49.99</small>
          </Col>
          <Col xs="auto">
            <Button
              variant="white"
              size="sm"
              href="https://themes.getbootstrap.com/preview/?theme_id=23273"
              target="_blank"
            >
              Buy now
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
