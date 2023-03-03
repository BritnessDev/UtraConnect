import FeatherIcon from 'feather-icons-react';
import React from 'react';
import { Badge, Button, Card, Col, Dropdown, ListGroup, Row } from 'react-bootstrap';

export default function AccountPaymentMethods({ ...props }) {
  const data = [
    {
      date: '3/2024',
      imgSrc: '/img/payment-methods/visa.svg',
      isDefault: true,
      title: 'Visa ending in 1234',
    },
    {
      date: '3/2024',
      imgSrc: '/img/payment-methods/mastercard.svg',
      isDefault: false,
      title: 'Mastercard ending in 1234',
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
          <img className="img-fluid" src={item.imgSrc} alt="..." style={{ maxWidth: 38 }} />
        </Col>
        <Col className="ms-n2">
          <h4 className="mb-1">{item.title}</h4>
          <small className="text-muted">Expires {item.date}</small>
        </Col>
        <Col xs="auto" className="me-n3">
          <Badge bg="light">{item.isDefault && 'Default'}</Badge>
        </Col>
        <Col xs="auto">{dropdown}</Col>
      </Row>
    </ListGroup.Item>
  ));

  return (
    <Card {...props}>
      <Card.Header>
        <h4 className="card-header-title">Payment methods</h4>
        <Button size="sm">Add method</Button>
      </Card.Header>
      <Card.Body>
        <ListGroup className="list-group-flush my-n3">{items}</ListGroup>
      </Card.Body>
    </Card>
  );
}
