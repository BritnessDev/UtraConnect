import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React from 'react';
import { Card, Col, Dropdown, ListGroup, OverlayTrigger, ProgressBar, Row, Tooltip } from 'react-bootstrap';
import { Avatar } from '../components';
import { getProgressColor } from '../helpers';

export default function WidgetsProjectCardLarge({ ...props }) {
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

  return (
    <Card {...props}>
      <Link href="/project-overview">
        <Card.Img variant="top" className="card-img-top" src="/img/avatars/projects/project-1.jpg" alt="..." />
      </Link>
      <Card.Body>
        <Row className="align-items-center mb-4">
          <Col>
            <h4 className="mb-2">
              <Link href="/project-overview">Homepage Redesign</Link>
            </h4>
            <p className="small text-muted mb-0">Updated 4hr ago</p>
          </Col>
          <Col xs="auto">{dropdown}</Col>
        </Row>
        <Row className="g-0 border-top border-bottom">
          <Col xs={6} className="py-4 text-center">
            <h6 className="text-uppercase text-muted">Budget</h6>
            <h2 className="mb-0">$2.5k</h2>
          </Col>
          <Col xs={6} className="py-4 text-center border-start">
            <h6 className="text-uppercase text-muted">Value</h6>
            <h2 className="mb-0">12.5k</h2>
          </Col>
        </Row>
        <ListGroup className="list-group-flush mb-4">
          <ListGroup.Item>
            <Row className="align-items-center">
              <Col>
                <small>Due</small>
              </Col>
              <Col xs="auto">
                <time className="small text-muted" dateTime="1988-10-24">
                  10/24/88
                </time>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row className="align-items-center">
              <Col>
                <small>Location</small>
              </Col>
              <Col xs="auto">
                <small className="text-muted">Los Angeles, CA</small>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row className="align-items-center">
              <Col>
                <small>Product</small>
              </Col>
              <Col xs="auto">
                <a className="small text-muted">Landkit</a>
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
        <Row className="align-items-center">
          <Col>
            <Row className="align-items-center g-0">
              <Col xs="auto">
                <div className="small me-2">29%</div>
              </Col>
              <Col>
                <ProgressBar variant={`${getProgressColor('29')}`} now={29} className="progress-sm" />
              </Col>
            </Row>
          </Col>
          <Col xs="auto">
            <Avatar.Group className="d-none d-md-inline-flex">
              <Avatar as={Link} href="/profile-posts" size="xs">
                <OverlayTrigger overlay={<Tooltip>Ab Hadley</Tooltip>}>
                  <Avatar.Image src="/img/avatars/profiles/avatar-2.jpg" alt="Ab Hadley" className="rounded-circle" />
                </OverlayTrigger>
              </Avatar>
              <Avatar as={Link} href="/profile-posts" size="xs">
                <OverlayTrigger overlay={<Tooltip>Adolfo Hess</Tooltip>}>
                  <Avatar.Image src="/img/avatars/profiles/avatar-3.jpg" alt="Adolfo Hess" className="rounded-circle" />
                </OverlayTrigger>
              </Avatar>
              <Avatar as={Link} href="/profile-posts" size="xs">
                <OverlayTrigger overlay={<Tooltip>Daniela Dewitt</Tooltip>}>
                  <Avatar.Image src="/img/avatars/profiles/avatar-4.jpg" alt="Daniela Dewitt" className="rounded-circle" />
                </OverlayTrigger>
              </Avatar>
              <Avatar as={Link} href="/profile-posts" size="xs">
                <OverlayTrigger overlay={<Tooltip>Miyah Myles</Tooltip>}>
                  <Avatar.Image src="/img/avatars/profiles/avatar-5.jpg" alt="Miyah Myles" className="rounded-circle" />
                </OverlayTrigger>
              </Avatar>
            </Avatar.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
