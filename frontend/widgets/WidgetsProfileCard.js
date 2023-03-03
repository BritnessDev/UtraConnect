import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React from 'react';
import { Badge, Button, Card, Col, Dropdown, Row } from 'react-bootstrap';
import { Avatar } from '../components';

export default function WidgetsProfileCard({ ...props }) {
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
      <Card.Body className="text-center">
        <Avatar as={Link} href="/profile-posts" size="xl" className="card-avatar card-avatar-top">
          <Avatar.Image className="rounded-circle border border-4 border-card" src="/img/avatars/profiles/avatar-2.jpg" alt="..." />
        </Avatar>
        <Card.Title as="h2">
          <Link href="/profile-posts">Ab Hadley</Link>
        </Card.Title>
        <p className="small text-muted mb-3">Woprking on the latest API integration.</p>
        <Card.Text>
          <Badge bg="secondary-soft">UX Team</Badge>
          <Badge bg="secondary-soft" className="ms-1">
            Research Team
          </Badge>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="card-footer-boxed">
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
      </Card.Footer>
    </Card>
  );
}
