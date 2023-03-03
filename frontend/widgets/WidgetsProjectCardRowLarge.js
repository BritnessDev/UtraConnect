import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React from 'react';
import { Card, Col, Dropdown, OverlayTrigger, ProgressBar, Row, Tooltip } from 'react-bootstrap';
import { Avatar } from '../components';
import { getProgressColor } from '../helpers';

export default function WidgetsProjectCardRowLarge({ ...props }) {
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
      <Card.Body>
        <Row className="align-items-center">
          <Col xs="auto">
            <Avatar as={Link} href="/project-overview" ratio="4by3" size="lg">
              <Avatar.Image src="/img/avatars/projects/project-1.jpg" className="rounded" alt="Homepage Redesign" />
            </Avatar>
          </Col>
          <Col className="ms-n2">
            <h4 className="mb-1 name">
              <Link href="/project-overview">Homepage Redesign</Link>
            </h4>
            <Card.Text className="small text-muted mb-1">
              <time dateTime="2018-06-21">Updated 2hr ago</time>
            </Card.Text>
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
          <Col xs="auto">{dropdown}</Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
