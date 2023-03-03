import FeatherIcon from 'feather-icons-react';
import React from 'react';
import { Badge, Card, Col, Row } from 'react-bootstrap';

export default function AnalyticsValue({ ...props }) {
  return (
    <Card {...props}>
      <Card.Body>
        <Row className="align-items-center">
          <Col>
            <h6 className="text-uppercase text-muted mb-2">Value</h6>
            <span className="h2 mb-0">$24,500</span>
            <Badge bg="success-soft" className="mt-n1 ms-2">
              +3.5%
            </Badge>
          </Col>
          <Col xs="auto">
            <FeatherIcon icon="dollar-sign" size="20" className="text-muted" />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
