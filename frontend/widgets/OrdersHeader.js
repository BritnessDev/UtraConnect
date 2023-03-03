import React from 'react';
import { Badge, Button, Col, Nav, Row } from 'react-bootstrap';
import { Header } from '../components';

export default function CRMContactsHeader({ ...props }) {
  return (
    <Header {...props}>
      <Header.Body>
        <Row className="align-items-center">
          <Col>
            <Header.Pretitle>Overview</Header.Pretitle>
            <Header.Title className="text-truncate">Orders</Header.Title>
          </Col>
          <Col xs="auto">
            <Button>New order</Button>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <Header.Tabs className="nav-overflow">
              <Nav.Item>
                <Nav.Link role="button" active>
                  All{' '}
                  <Badge bg="secondary-soft" className="rounded-pill">
                    823
                  </Badge>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link role="button">
                  Pending{' '}
                  <Badge bg="secondary-soft" className="rounded-pill">
                    24
                  </Badge>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link role="button">
                  Processing{' '}
                  <Badge bg="secondary-soft" className="rounded-pill">
                    3
                  </Badge>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link role="button">
                  Refunded{' '}
                  <Badge bg="secondary-soft" className="rounded-pill">
                    71
                  </Badge>
                </Nav.Link>
              </Nav.Item>
            </Header.Tabs>
          </Col>
        </Row>
      </Header.Body>
    </Header>
  );
}
