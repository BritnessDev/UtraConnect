import FeatherIcon from 'feather-icons-react';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

export default function AnalyticsAverageTime({ ...props }) {
  return (
    <Card {...props}>
      <Card.Body>
        <Row className="align-items-center">
          <Col>
            <h6 className="text-uppercase text-muted mb-2">Avg. Time</h6>
            <span className="h2 mb-0">2:37</span>
          </Col>
          <Col xs="auto">
            <FeatherIcon icon="clock" size="20" className="text-muted" />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
