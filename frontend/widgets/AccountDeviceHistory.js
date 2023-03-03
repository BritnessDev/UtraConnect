import FeatherIcon from 'feather-icons-react';
import React from 'react';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { formatLocaleDateString } from '../helpers';

export default function AccountDeviceHistory() {
  const data = [
    {
      date: '2020-04-20T18:16:16',
      device: 'iPhone 11',
      location: 'Los Angeles, CA',
    },
    {
      browser: 'Safari 10.2',
      date: '2020-04-20T18:16:16',
      device: 'iMac OSX',
      location: 'Los Angeles, CA',
    },
    {
      date: '2020-04-20T18:16:16',
      device: 'iPhone 11',
      location: 'Los Angeles, CA',
    },
    {
      browser: 'Safari 10.2',
      date: '2020-04-20T18:16:16',
      device: 'iMac OSX',
      location: 'Los Angeles, CA',
    },
  ];

  const items = data.map((item, index) => (
    <ListGroup.Item key={index}>
      <Row className="align-items-center">
        <Col xs="auto">
          {item.device === 'iPhone 11' && <FeatherIcon icon="smartphone" size="26" />}
          {item.device === 'iMac OSX' && <FeatherIcon icon="monitor" size="26" />}
        </Col>
        <Col className="ms-n2">
          <h4 className="mb-1">
            {item.device}
            {item.browser && <span className="fw-normal"> · {item.browser}</span>}
          </h4>
          <small className="text-muted">
            {item.location} ·{' '}
            <time dateTime={item.date}>
              {formatLocaleDateString(item.date, {
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              })}
            </time>
          </small>
        </Col>
        <Col xs="auto">
          <Button variant="white" size="sm">
            Log out
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  ));

  return (
    <>
      <Row className="justify-content-between align-items-center mb-5">
        <Col xs={12} md={9} xl={7}>
          <h2 className="mb-2">Device History</h2>
          <p className="text-muted mb-xl-0">
            If you see a device here that you believe wasn’t you, please contact our account{' '}
            <a href="#!">fraud department</a> immediately.
          </p>
        </Col>
        <Col xs={12} xl="auto">
          <Button variant="white">Log out all devices</Button>
        </Col>
      </Row>
      <Card>
        <Card.Body>
          <ListGroup className="list-group-flush my-n3">{items}</ListGroup>
        </Card.Body>
      </Card>
    </>
  );
}
