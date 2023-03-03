import Link from 'next/link';
import React from 'react';
import { Button, Card, Col, ProgressBar, Row, Table } from 'react-bootstrap';
import { Avatar } from '../components';
import { getStatusColor } from '../helpers';

export default function FeedTopEarners({ ...props }) {
  const data = [
    {
      hours: 271,
      imgSrc: '/img/avatars/profiles/avatar-1.jpg',
      progress: 55,
      rate: 55.25,
      status: 'On Schedule',
      title: 'Dianna Smiley',
    },
    {
      hours: 44,
      imgSrc: '/img/avatars/profiles/avatar-2.jpg',
      progress: 25,
      rate: 122.52,
      status: 'Delayed',
      title: 'Ab Hadley',
    },
    {
      hours: 271,
      imgSrc: '/img/avatars/profiles/avatar-3.jpg',
      progress: 55,
      rate: 55.25,
      status: 'On Schedule',
      title: 'Adolfo Hess',
    },
    {
      hours: 44,
      imgSrc: '/img/avatars/profiles/avatar-4.jpg',
      progress: 25,
      rate: 122.52,
      status: 'Delayed',
      title: 'Daniela Dewitt',
    },
    {
      hours: 271,
      imgSrc: '/img/avatars/profiles/avatar-5.jpg',
      progress: 55,
      rate: 55.25,
      status: 'On Schedule',
      title: 'Miyah Myles',
    },
  ];

  const items = data.map((item, index) => (
    <tr key={index}>
      <td>
        <Avatar as={Link} href="/profile-posts" size="xs" className="me-2">
          <Avatar.Image src={item.imgSrc} className="rounded-circle" alt={item.title} />
        </Avatar>
        <span>{item.title}</span>
      </td>
      <td>
        <span className={`text-${getStatusColor(item.status)}`}>●</span> {item.status}
      </td>
      <td>{item.hours}</td>
      <td>
        <Row className="align-items-center g-0">
          <Col xs="auto">
            <span className="me-2">{item.progress}%</span>
          </Col>
          <Col>
            <ProgressBar now={item.progress} variant="secondary" className="progress-sm" />
          </Col>
        </Row>
      </td>
      <td>{item.rate}%</td>
    </tr>
  ));

  return (
    <Card {...props}>
      <Card.Header>
        <h4 className="card-header-title">Top Earners</h4>
      </Card.Header>
      <Table size="sm" className="card-table table-nowrap" hover responsive>
        <thead>
          <tr>
            <th className="text-muted">Member</th>
            <th className="text-muted">Schedule</th>
            <th className="text-muted">Hours Billed</th>
            <th className="text-muted">Completion</th>
            <th className="text-muted">Effective Rate</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </Table>
    </Card>
  );
}
