import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React from 'react';
import { Card, Col, Dropdown, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Avatar } from '../components';

export default function WidgetsTeamCard({ ...props }) {
  const dropdown = (
    <Dropdown align="end" className="card-dropdown">
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
      <Card.Body className="text-center">
        {dropdown}
        <Avatar as={Link} href="/team-overview" size="lg" className="card-avatar mx-auto">
          <Avatar.Image className="rounded" src="/img/avatars/teams/team-logo-1.jpg" alt="Launchday" />
        </Avatar>
        <h2 className="mb-3">
          <Link href="/team-overview">Launchday</Link>
        </h2>
        <Card.Text className="text-muted">Launchday is a SaaS website builder with a focus on quality, easy to build product sites.</Card.Text>
      </Card.Body>
      <Card.Footer className="card-footer-boxed">
        <Row className="align-items-center">
          <Col>
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
              <Avatar size="xs">
                <Avatar.Title className="rounded-circle">+7</Avatar.Title>
              </Avatar>
            </Avatar.Group>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}
