import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Avatar } from '../components';

export default function EcommerceRecentActivity({ ...props }) {
  const data = [
    {
      description: 'shared your post with Ab Hadley, Adolfo Hess, and 3 others.',
      imgSrc: '/img/avatars/profiles/avatar-1.jpg',
      time: '2m ago',
      title: 'Dianna Smiley',
    },
    {
      description: 'reacted to your post with a 😍',
      imgSrc: '/img/avatars/profiles/avatar-2.jpg',
      time: '2m ago',
      title: 'Ab Hadley',
    },
    {
      description:
        'commented “I don’t think this really makes sense to do without approval from Johnathan since he’s the one...”',
      imgSrc: '/img/avatars/profiles/avatar-3.jpg',
      time: '2m ago',
      title: 'Adolfo Hess',
    },
    {
      description: 'subscribed to you.',
      imgSrc: '/img/avatars/profiles/avatar-4.jpg',
      time: '2m ago',
      title: 'Daniela Dewitt',
    },
    {
      description: 'shared your post with Ryu Duke, Glen Rouse, and 3 others.',
      imgSrc: '/img/avatars/profiles/avatar-5.jpg',
      time: '2m ago',
      title: 'Miyah Myles',
    },
    {
      description: 'reacted to your post with a 😍',
      imgSrc: '/img/avatars/profiles/avatar-6.jpg',
      time: '2m ago',
      title: 'Ryu Duke',
    },
  ];

  const items = data.map((item, index) => (
    <ListGroup.Item key={index}>
      <Row>
        <Col xs="auto">
          <Avatar size="sm" status={item.status}>
            <Avatar.Image src={item.imgSrc} alt={item.title} className="rounded-circle" />
          </Avatar>
        </Col>
        <Col className="ms-n2">
          <div className="small">
            <strong>{item.title}</strong> {item.description}
          </div>
          <small className="text-muted">{item.time}</small>
        </Col>
      </Row>
    </ListGroup.Item>
  ));

  return (
    <div {...props}>
      <Card>
        <Card.Header>
          <h4 className="card-header-title">Recent Activity</h4>
          <a className="small" href="#!">
            View all
          </a>
        </Card.Header>
        <Card.Body>
          <ListGroup className="list-group-flush list-group-activity my-n3">{items}</ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}
