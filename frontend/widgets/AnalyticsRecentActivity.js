import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Avatar } from '../components';

export default function AnalyticsRecentActivity({ ...props }) {
  const data = [
    {
      description: 'Uploaded the files "Launchday Logo" and "New Design".',
      imgSrc: '/img/avatars/profiles/avatar-1.jpg',
      status: 'online',
      time: '2m ago',
      title: 'Dianna Smiley',
    },
    {
      description: 'Shared the "Why Dashkit?" post with 124 subscribers.',
      imgSrc: '/img/avatars/profiles/avatar-2.jpg',
      status: 'online',
      time: '1h ago',
      title: 'Ab Hadley',
    },
    {
      description: "Exported sales data from Launchday's subscriber data.",
      imgSrc: '/img/avatars/profiles/avatar-3.jpg',
      status: 'offline',
      time: '3h ago',
      title: 'Adolfo Hess',
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
          <h5 className="mb-1">{item.title}</h5>
          <p className="small text-gray-700 mb-0">{item.description}</p>
          <small className="text-muted">{item.time}</small>
        </Col>
      </Row>
    </ListGroup.Item>
  ));

  return (
    <Card {...props}>
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
  );
}
