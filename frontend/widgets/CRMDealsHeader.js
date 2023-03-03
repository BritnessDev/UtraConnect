import FeatherIcon from 'feather-icons-react';
import React from 'react';
import { Badge, Button, ButtonGroup, Col, Nav, Row } from 'react-bootstrap';
import { Header } from '../components';

export default function CRMDealsHeader({ activeTab, setActiveTab, ...props }) {
  return (
    <Header {...props}>
      <Header.Body>
        <Row className="align-items-center">
          <Col>
            <Header.Pretitle>Overview</Header.Pretitle>
            <Header.Title className="text-truncate">Deals</Header.Title>
          </Col>
          <Col xs="auto">
            <ButtonGroup className="nav d-inline-flex">
              <Button variant="white" active={activeTab === 0} onClick={() => setActiveTab(0)}>
                <FeatherIcon icon="list" size="1em" />
              </Button>
              <Button variant="white" active={activeTab === 1} onClick={() => setActiveTab(1)}>
                <FeatherIcon icon="sidebar" size="1em" />
              </Button>
            </ButtonGroup>
            <Button className="ms-2">Add deal</Button>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <Header.Tabs className="nav-overflow">
              <Nav.Item>
                <Nav.Link className="text-nowrap" role="button" active>
                  All deals{' '}
                  <Badge bg="secondary-soft" className="rounded-pill">
                    943
                  </Badge>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-nowrap" role="button">
                  Your deals{' '}
                  <Badge bg="secondary-soft" className="rounded-pill">
                    379
                  </Badge>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-nowrap" role="button">
                  Deleted{' '}
                  <Badge bg="secondary-soft" className="rounded-pill">
                    127
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
