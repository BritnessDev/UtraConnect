import FeatherIcon from 'feather-icons-react';
import React from 'react';
import { Card, Col, Dropdown, ListGroup, Row } from 'react-bootstrap';
import { Avatar } from '../components';

export default function ProjectManagementLatestUploads({ ...props }) {
  const data = [
    {
      extension: 'SVG',
      imgSrc: '/img/files/file-1.jpg',
      size: '2.5kb',
      title: 'Launchday Logo',
    },
    {
      extension: 'PNG',
      imgSrc: '/img/files/file-2.jpg',
      size: '1.5mb',
      title: 'Example Grid',
    },
    {
      extension: 'directory',
      icon: 'folder',
      size: '6.9mb',
      title: 'Screenshot Collection',
    },
    {
      extension: 'JPG',
      imgSrc: '/img/files/file-3.jpg',
      size: '750kb',
      title: 'Launchday Cover',
    },
  ];

  const items = data.map((item, index) => (
    <ListGroup.Item key={index}>
      <Row className="align-items-center">
        <Col xs="auto">
          <Avatar>
            {item.imgSrc && <Avatar.Image className="rounded" src={item.imgSrc} alt="..." />}
            {item.icon && (
              <Avatar.Title className="rounded bg-white text-secondary">
                <FeatherIcon icon={item.icon} size="1em" />
              </Avatar.Title>
            )}
          </Avatar>
        </Col>
        <Col className="ms-n2">
          <h4 className="mb-1">
            <a href="#!">{item.title}</a>
          </h4>
          <Card.Text className="small text-muted">
            {item.size} {item.extension}
          </Card.Text>
        </Col>
        <Col xs="auto">
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
        </Col>
      </Row>
    </ListGroup.Item>
  ));

  return (
    <Card {...props}>
      <Card.Header>
        <h4 className="card-header-title">Latest Files</h4>
        <a className="small" href="#!">
          View all
        </a>
      </Card.Header>
      <Card.Body>
        <ListGroup className="list-group-flush my-n3">{items}</ListGroup>
      </Card.Body>
    </Card>
  );
}
