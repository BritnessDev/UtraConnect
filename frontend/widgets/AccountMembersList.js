import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React from 'react';
import { Button, Card, Col, Dropdown, ListGroup, Row } from 'react-bootstrap';
import { Avatar } from '../components';
import { Select } from '../components/vendor';

export default function AccountMembersList({ ...props }) {
  const data = [
    {
      email: 'dianna.smiley@company.com',
      imgSrc: '/img/avatars/profiles/avatar-1.jpg',
      title: 'Dianna Smiley',
    },
    {
      email: 'ab.hadley@company.com',
      imgSrc: '/img/avatars/profiles/avatar-2.jpg',
      title: 'Ab Hadley',
    },
    {
      email: 'adolfo.hess@company.com',
      imgSrc: '/img/avatars/profiles/avatar-3.jpg',
      title: 'Adolfo Hess',
    },
    {
      email: 'daniela.dewitt@company.com',
      imgSrc: '/img/avatars/profiles/avatar-4.jpg',
      title: 'Daniela Dewitt',
    },
  ];

  const roleOptions = [
    {
      value: 'admin',
      label: 'Admin',
    },
    {
      value: 'staff',
      label: 'Staff',
    },
    {
      value: 'custom',
      label: 'Custom',
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
          <Avatar>
            <Avatar.Image src={item.imgSrc} alt={item.title} className="rounded-circle" />
          </Avatar>
        </Col>
        <Col xs={5} className="ms-n2">
          <h4 className="mb-1">
            <Link href="/profile-posts">{item.title}</Link>
          </h4>
          <p className="small text-muted mb-0">
            <a className="d-block text-reset text-truncate" href={`mailto:${item.email}`}>
              {item.email}
            </a>
          </p>
        </Col>
        <Col xs="auto" className="ms-auto me-n3">
          <Select options={roleOptions} size="sm" />
        </Col>
        <Col xs="auto">{dropdown}</Col>
      </Row>
    </ListGroup.Item>
  ));

  return (
    <Card {...props}>
      <Card.Header>
        <h4 className="card-header-title">Members</h4>
        <Button size="sm">Invite member</Button>
      </Card.Header>
      <Card.Body>
        <ListGroup className="list-group-flush my-n3">{items}</ListGroup>
      </Card.Body>
    </Card>
  );
}
