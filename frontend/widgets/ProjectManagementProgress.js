import FeatherIcon from 'feather-icons-react';
import React from 'react';
import { Card, Col, ProgressBar, Row } from 'react-bootstrap';

export default function ProjectManagementProgress({ ...props }) {
  return (
    <Card {...props}>
      <Card.Body>
        <Row className="align-items-center">
          <Col>
            <h6 className="text-uppercase text-muted mb-2">Progress</h6>
            <Row className="align-items-center g-0">
              <Col xs="auto">
                <span className="h2 me-2 mb-0">84.5%</span>
              </Col>
              <Col>
                <ProgressBar className="progress-sm" now={85} />
              </Col>
            </Row>
          </Col>
          <Col xs="auto">
            <FeatherIcon icon="clipboard" size="20" className="text-muted" />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
