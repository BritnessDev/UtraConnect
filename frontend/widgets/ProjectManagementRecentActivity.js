import FeatherIcon from 'feather-icons-react';
import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Avatar } from '../components';

export default function ProjectManagementRecentActivity({ ...props }) {
  const data = [
    {
      description: 'Sent to all 1,851 subscribers over a 24 hour period.',
      icon: 'mail',
      time: '2m ago',
      title: 'Launchday 1.4.0 update email sent',
    },
    {
      description: 'Looks like there might be a new theme soon.',
      icon: 'archive',
      time: '2h ago',
      title: 'New project "Goodkit" created',
    },
    {
      description: 'A successful to deploy to production was executed.',
      icon: 'code',
      time: '2m ago',
      title: 'Dashkit 1.5.0 was deployed',
    },
    {
      description: 'This branch was created off of the "master" branch.',
      icon: 'git-branch',
      time: '2m ago',
      title: '"Update Dependencies" branch was created',
    },
  ];

  const items = data.map((item, index) => (
    <ListGroup.Item key={index}>
      <Row>
        <Col xs="auto">
          <Avatar size="sm" status={item.status}>
            <Avatar.Title className="rounded-circle bg-primary-soft fs-lg text-primary">
              <FeatherIcon icon={item.icon} size="1em" />
            </Avatar.Title>
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
