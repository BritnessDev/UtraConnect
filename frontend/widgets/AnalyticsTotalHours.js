import FeatherIcon from 'feather-icons-react';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

export default function AnalyticsTotalHours({ ...props }) {
  return (
    <Card {...props}>
      <Card.Body>
        <Row className="align-items-center">
          <Col>
            <h6 className="text-uppercase text-muted mb-2">Total hours</h6>
            <span className="h2 mb-0">763.5</span>
          </Col>
          <Col xs="auto">
            <FeatherIcon icon="briefcase" size="20" className="text-muted" />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
