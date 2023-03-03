import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React from 'react';
import { Card, Col, Dropdown, ListGroup, Row } from 'react-bootstrap';
import { Avatar } from '../components';

export default function WidgetsTeamList({ ...props }) {
  const data = [
    {
      imgSrc: '/img/avatars/teams/team-logo-1.jpg',
      title: 'Launchday',
    },
    {
      imgSrc: '/img/avatars/teams/team-logo-2.jpg',
      title: 'Medium Corporation',
    },
    {
      imgSrc: '/img/avatars/teams/team-logo-3.jpg',
      title: 'Lyft',
    },
  ];

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

  const items = data.map((item, index) => (
    <ListGroup.Item key={index}>
      <Row className="align-items-center">
        <Col xs="auto">
          <Avatar as={Link} href="/team-overview">
            <Avatar.Image className="rounded" src={item.imgSrc} alt="..." />
          </Avatar>
        </Col>
        <Col className="ms-n2">
          <h4 className="mb-1">
            <Link href="/team-overview">{item.title}</Link>
          </h4>
          <small className="text-muted">
            <FeatherIcon icon="clock" size="1em" /> Updated 2hr ago
          </small>
        </Col>
        <Col xs="auto">{dropdown}</Col>
      </Row>
    </ListGroup.Item>
  ));

  return (
    <Card {...props}>
      <Card.Body>
        <ListGroup className="list-group-flush my-n3">{items}</ListGroup>
      </Card.Body>
    </Card>
  );
}
