import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Col, ListGroup, Nav, Offcanvas, Row } from 'react-bootstrap';
import { Avatar } from '../components';
import { notifications } from '../data';

export default function ModalNotification({ visible, onDismiss, ...props }) {
  const [activeTab, setActiveTab] = useState(0);

  const actionItems = notifications.action.map((item, index) => (
    <ListGroup.Item as={Link} href="#!" key={index} className="text-reset">
      <Row>
        <Col xs="auto">
          <Avatar size="sm">
            <Avatar.Title className="fs-lg bg-primary-soft rounded-circle text-primary">
              <FeatherIcon icon={item.icon} size="1em" />
            </Avatar.Title>
          </Avatar>
        </Col>
        <Col className="ms-n2">
          <h5 className="mb-1">{item.title}</h5>
          <p className="small text-gray-700 mb-0">{item.content}</p>
          <small className="text-muted">2m ago</small>
        </Col>
      </Row>
    </ListGroup.Item>
  ));

  const userItems = notifications.user.map((item, index) => (
    <ListGroup.Item as={Link} href="#!" key={index} className="text-reset">
      <Row>
        <Col xs="auto">
          <Avatar size="sm" status={item.status}>
            <Avatar.Image className="rounded-circle" src={item.imgSrc} alt={item.title} />
          </Avatar>
        </Col>
        <Col className="ms-n2">
          <h5 className="mb-1">{item.title}</h5>
          <p className="small text-gray-700 mb-0">{item.content}</p>
          <small className="text-muted">{item.date}</small>
        </Col>
      </Row>
    </ListGroup.Item>
  ));

  return (
    <Offcanvas show={visible} onHide={onDismiss} {...props}>
      <Offcanvas.Header>
        <Offcanvas.Title as="h4">Notifications</Offcanvas.Title>
        <Nav variant="tabs" className="modal-header-tabs nav-tabs-sm">
          <Nav.Item>
            <Nav.Link role="button" active={activeTab === 0} onClick={() => setActiveTab(0)}>
              Action
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link role="button" active={activeTab === 1} onClick={() => setActiveTab(1)}>
              User
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {activeTab === 0 && <ListGroup className="list-group-flush list-group-activity my-n3">{actionItems}</ListGroup>}
        {activeTab === 1 && <ListGroup className="list-group-flush list-group-activity my-n3">{userItems}</ListGroup>}
      </Offcanvas.Body>
    </Offcanvas>
  );
}
