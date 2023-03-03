import Link from 'next/link';
import React from 'react';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Avatar } from '../components';
import { getStatusColor } from '../helpers';

export default function SocialFeedFollow({ ...props }) {
  const data = [
    {
      imgSrc: '/img/avatars/profiles/avatar-1.jpg',
      status: 'Online',
      title: 'Dianna Smiley',
    },
    {
      imgSrc: '/img/avatars/profiles/avatar-2.jpg',
      status: 'Online',
      title: 'Ab Hadley',
    },
    {
      imgSrc: '/img/avatars/profiles/avatar-3.jpg',
      status: 'Online',
      title: 'Adolfo Hess',
    },
    {
      imgSrc: '/img/avatars/profiles/avatar-4.jpg',
      status: 'Busy',
      title: 'Daniela Dewitt',
    },
  ];

  const items = data.map((item, index) => (
    <ListGroup.Item key={index}>
      <Row className="align-items-center">
        <Col xs="auto">
          <Avatar as={Link} href="/profile-posts">
            <Avatar.Image className="rounded-circle" src={item.imgSrc} alt="..." />
          </Avatar>
        </Col>
        <Col className="ms-n2">
          <h4 className="mb-1">
            <Link href="/profile-posts">{item.title}</Link>
          </h4>
          <Card.Text className="small">
            <span className={`text-${getStatusColor(item.status)}`}>●</span> {item.status}
          </Card.Text>
        </Col>
        <Col xs="auto">
          <Button variant="white" size="sm">
            Follow
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  ));

  return (
    <Card {...props}>
      <Card.Header>
        <h4 className="card-header-title">Who to follow</h4>
        <Link className="small" href="/profile-posts">
          View all
        </Link>
      </Card.Header>
      <Card.Body>
        <ListGroup className="list-group-flush my-n3">{items}</ListGroup>
      </Card.Body>
    </Card>
  );
}
