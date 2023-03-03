import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React from 'react';
import { Badge, Button, Card, Col, Dropdown, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import TextareaAutosize from 'react-textarea-autosize';
import { Avatar, Comment } from '../components';

export default function ProfilePostOne({ ...props }) {
  return (
    <Card {...props}>
      <Card.Body>
        <div className="mb-3">
          <Row className="align-items-center">
            <Col xs="auto">
              <Avatar>
                <Avatar.Image src="/img/avatars/profiles/avatar-1.jpg" className="rounded-circle" alt="..." />
              </Avatar>
            </Col>
            <Col className="ms-n2">
              <h4 className="mb-1">Dianna Smiley</h4>
              <Card.Text className="small text-muted">
                <FeatherIcon icon="clock" size="1em" /> <time dateTime="2018-05-24">4hr ago</time>
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
        </div>
        <p className="mb-3">
          I've been working on shipping the latest version of Launchday. The story I'm trying to focus on is something like "You're launching soon and need to
          be 100% focused on your product. Don't lose precious days designing, coding, and testing a product site. Instead, build one in minutes."
        </p>
        <hr />
        <div className="mb-3">
          <Row>
            <Col>
              <Button variant="white" size="sm">
                😬 1
              </Button>
              <Button variant="white" size="sm" className="ms-1">
                👍 2
              </Button>
              <Button variant="white" size="sm" className="ms-1">
                Add Reaction
              </Button>
            </Col>
            <Col xs="auto" className="me-n3">
              <Avatar.Group className="d-none d-sm-flex">
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
            <Col xs="auto">
              <Button variant="white" size="sm">
                Share
              </Button>
            </Col>
          </Row>
        </div>
        <hr />
        <Row>
          <Col xs="auto">
            <Avatar size="sm">
              <Avatar.Image src="/img/avatars/profiles/avatar-1.jpg" className="rounded-circle" alt="..." />
            </Avatar>
          </Col>
          <Col className="ms-n2 align-self-center">
            <form>
              <Form.Label className="visually-hidden">Leave a comment...</Form.Label>
              <Form.Control as={TextareaAutosize} className="form-control-auto form-control-flush" placeholder="Leave a comment" />{' '}
            </form>
          </Col>
          <Col xs="auto" className="align-self-end">
            <div className="text-muted mb-2">
              <OverlayTrigger overlay={<Tooltip>Add photo</Tooltip>}>
                <span>
                  <FeatherIcon icon="camera" size="1em" className="me-3" />
                </span>
              </OverlayTrigger>
              <OverlayTrigger overlay={<Tooltip>Attach file</Tooltip>}>
                <span>
                  <FeatherIcon icon="paperclip" size="1em" className="me-3" />
                </span>
              </OverlayTrigger>
              <OverlayTrigger overlay={<Tooltip>Record audio</Tooltip>}>
                <span>
                  <FeatherIcon icon="mic" size="1em" />
                </span>
              </OverlayTrigger>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
