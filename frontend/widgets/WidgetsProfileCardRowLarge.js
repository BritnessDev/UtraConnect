import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React from 'react';
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap';
import { Avatar } from '../components';
import { getStatusColor } from '../helpers';

export default function WidgetsProfileCardRowLarge({ ...props }) {
  const dropdown = (
    <Dropdown align="end">
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
      <Card.Body>
        <Row className="align-items-center">
          <Col xs="auto">
            <Avatar as={Link} href="/profile-posts" size="lg">
              <Avatar.Image src="/img/avatars/profiles/avatar-1.jpg" className="rounded-circle" alt="Dianna Smiley" />
            </Avatar>
          </Col>
          <Col className="ms-n2">
            <h4 className="mb-1">
              <Link href="/profile-posts">Dianna Smiley</Link>
            </h4>
            <Card.Text className="small text-muted mb-1">You either die Spongebob or you live long enough to...</Card.Text>
            <Card.Text className="small">
              <span className={`text-${getStatusColor('Online')}`}>●</span> Online
            </Card.Text>
          </Col>
          <Col xs="auto">
            <Button size="sm" className="d-none d-md-inline-block">
              Subscribe
            </Button>
          </Col>
          <Col xs="auto">{dropdown}</Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
