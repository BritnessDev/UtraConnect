import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React from 'react';
import { Card, Col, Dropdown, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Avatar } from '../components';

export default function WidgetsTeamCardRowLarge({ ...props }) {
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
            <Avatar as={Link} href="/team-overview" size="lg">
              <Avatar.Image className="rounded" src="/img/avatars/teams/team-logo-1.jpg" alt="..." />
            </Avatar>
          </Col>
          <Col className="ms-n2">
            <h4 className="mb-1">
              <Link href="/team-overview">Launchday</Link>
            </h4>
            <p className="small text-muted mb-1">Launchday is a SaaS website builder with a focus on quality, easy to build product sites.</p>
            <small className="text-muted">
              <FeatherIcon icon="clock" size="1em" /> Updated 2hr ago
            </small>
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
