import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React from 'react';
import { Badge, Button, Card, Col, Dropdown, ListGroup, Row } from 'react-bootstrap';
import { Avatar } from '../components';

export default function WidgetsProfileCardLarge({ ...props }) {
  const dropdown = (
    <Dropdown align="end" className="card-dropdown">
      <Dropdown.Toggle as="span" className="dropdown-ellipses" role="button">
        <FeatherIcon icon="more-vertical" size="17" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#!">Action</Dropdown.Item>
        <Dropdown.Item href="#!">Another action</Dropdown.Item>
        <Dropdown.Item href="#!">Something else here</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  return (
    <Card {...props}>
      {dropdown}
      <Card.Img variant="top" src="/img/covers/profile-cover-2.jpg" alt="..." />
      <Card.Body>
        <Avatar as={Link} href="/profile-posts" size="xl" className="card-avatar card-avatar-top">
          <Avatar.Image className="rounded-circle border border-4 border-card" src="/img/avatars/profiles/avatar-2.jpg" alt="..." />
        </Avatar>
        <Card.Title as="h2" className="text-center">
          <Link href="/profile-posts">Ab Hadley</Link>
        </Card.Title>
        <p className="small text-center text-muted mb-3">Working on the latest API integration.</p>
        <p className="text-center mb-4">
          <Badge bg="secondary-soft">UX Team</Badge>
          <Badge bg="secondary-soft" className="ms-1">
            Research Team
          </Badge>
        </p>
        <Row className="g-0 border-top border-bottom">
          <Col xs={6} className="py-4 text-center">
            <h6 className="text-uppercase text-muted">Followers</h6>
            <h2 className="mb-0">10.2k</h2>
          </Col>
          <Col xs={6} className="py-4 text-center border-start">
            <h6 className="text-uppercase text-muted">Following</h6>
            <h2 className="mb-0">2.7k</h2>
          </Col>
        </Row>
        <ListGroup className="list-group-flush mb-4">
          <ListGroup.Item>
            <Row className="align-items-center">
              <Col>
                <small>Joined</small>
              </Col>
              <Col xs="auto">
                <time className="small text-muted" dateTime="1988-10-24">
                  10/24/88
                </time>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row className="align-items-center">
              <Col>
                <small>Location</small>
              </Col>
              <Col xs="auto">
                <small className="text-muted">Los Angeles, CA</small>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row className="align-items-center">
              <Col>
                <small>Product</small>
              </Col>
              <Col xs="auto">
                <a className="small text-muted">Landkit</a>
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
        <Row className="align-items-center justify-content-between">
          <Col xs="auto">
            <small>
              <span className="text-success">●</span> Online
            </small>
          </Col>
          <Col xs="auto">
            <Button size="sm">Subscribe</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
