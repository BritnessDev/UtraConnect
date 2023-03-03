import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React from 'react';
import { Card, Col, Dropdown, Row } from 'react-bootstrap';
import { Avatar } from '../components';

export default function WidgetsProjectCardRow({ ...props }) {
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
            <Avatar as={Link} href="/project-overview" ratio="4by3">
              <Avatar.Image src="/img/avatars/projects/project-1.jpg" className="rounded" alt="Homepage Redesign" />
            </Avatar>
          </Col>
          <Col className="ms-n2">
            <h4 className="mb-1 name">
              <Link href="/project-overview">Homepage Redesign</Link>
            </h4>
            <Card.Text className="small text-muted mb-0">
              <time dateTime="2018-06-21">Updated 2hr ago</time>
            </Card.Text>
          </Col>
          <Col xs="auto">{dropdown}</Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
