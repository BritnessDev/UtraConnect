import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Header } from '../components';

export default function AnalyticsHeader({ ...props }) {
  return (
    <Header {...props}>
      <Container fluid>
        <Header.Body>
          <Row className="row align-items-end">
            <Col>
              <Header.Pretitle as="h6">Overview</Header.Pretitle>
              <Header.Title as="h1">Dashboard</Header.Title>
            </Col>
            <Col xs="auto">
              <Button className="lift">Create Report</Button>
            </Col>
          </Row>
        </Header.Body>
      </Container>
    </Header>
  );
}
