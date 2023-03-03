import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import { Button, Card, CloseButton, Col, Dropdown, Form, ListGroup, Modal, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Avatar, Comment } from '../components';

export default function ModalKanbanTask({ visible, onDismiss, ...props }) {
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
    <Modal className="modal-lighter" show={visible} onHide={onDismiss} {...props}>
      <Modal.Body>
        <Row>
          <Col>
            <h6 className="text-uppercase text-muted mb-3">
              <a href="#!" className="text-reset">
                How to Use Kanban
              </a>
            </h6>
            <h2 className="mb-2">Update Dashkit to include new components!</h2>
            <p className="text-muted mb-0">
              This is a description of this task. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna nisi, ultrices ut pharetra eget.
            </p>
          </Col>
          <Col xs="auto">
            <CloseButton onClick={onDismiss} />
          </Col>
        </Row>
        <hr className="my-4" />
        <div className="mb-4">
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
        <Card>
          <Card.Header>
            <h4 className="card-header-title">Files</h4>
            <Button variant="white" size="sm">
              Add files
            </Button>
          </Card.Header>
          <Card.Body>
            <ListGroup className="list-group-flush my-n3">
              <ListGroup.Item>
                <Row className="align-items-center">
                  <Col xs="auto">
                    <Avatar as={Link} href="/project-overview">
                      <Avatar.Image className="rounded" src="/img/files/file-1.jpg" alt="..." />
                    </Avatar>
                  </Col>
                  <Col className="ms-n2">
                    <h4 className="mb-1">
                      <Link href="/project-overview">Launchday logo</Link>
                    </h4>
                    <Card.Text className="small text-muted">1.5mb PNG Dave</Card.Text>
                  </Col>
                  <Col xs="auto">{dropdown}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row className="align-items-center">
                  <Col xs="auto">
                    <Avatar as={Link} href="/project-overview">
                      <Avatar.Image className="rounded" src="/img/files/file-1.jpg" alt="..." />
                    </Avatar>
                  </Col>
                  <Col className="ms-n2">
                    <h4 className="mb-1">
                      <Link href="/project-overview">Launchday logo</Link>
                    </h4>
                    <Card.Text className="small text-muted">1.5mb PNG Dave</Card.Text>
                  </Col>
                  <Col xs="auto">{dropdown}</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Row>
              <Col xs="auto">
                <Avatar size="sm">
                  <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="..." />
                </Avatar>
              </Col>
              <Col className="ms-n2">
                <form className="mt-1">
                  <Form.Control className="form-control-flush" placeholder="Leave a comment" />
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
          </Card.Header>
          <Card.Body>
            <Comment className="mb-3">
              <Row>
                <Col xs="auto">
                  <Avatar as={Link} href="/profile-posts" size="sm">
                    <Avatar.Image src="/img/avatars/profiles/avatar-2.jpg" className="rounded-circle" alt="Ab Hadley" />
                  </Avatar>
                </Col>
                <Col className="ms-n2">
                  <Comment.Body>
                    <Row>
                      <Col>
                        <Comment.Title>Ab Hadley</Comment.Title>
                      </Col>
                      <Col xs="auto">
                        <Comment.Time>11:12</Comment.Time>
                      </Col>
                    </Row>
                    <Comment.Text>
                      Looking good Dianna! I like the image grid on the left, but it feels like a lot to process and doesn't really <em>show</em> me what the
                      product does? I think using a short looping video or something similar demo'ing the product might be better?
                    </Comment.Text>
                  </Comment.Body>
                </Col>
              </Row>
            </Comment>
            <Comment className="mb-3">
              <Row>
                <Col xs="auto">
                  <Avatar as={Link} href="/profile-posts" size="sm">
                    <Avatar.Image src="/img/avatars/profiles/avatar-3.jpg" className="rounded-circle" alt="Adolfo Hess" />
                  </Avatar>
                </Col>
                <Col className="ms-n2">
                  <Comment.Body>
                    <Row>
                      <Col>
                        <Comment.Title>Adolfo Hess</Comment.Title>
                      </Col>
                      <Col xs="auto">
                        <Comment.Time>11:12</Comment.Time>
                      </Col>
                    </Row>
                    <Comment.Text>Any chance you're going to link the grid up to a public gallery of sites built with Launchday?</Comment.Text>
                  </Comment.Body>
                </Col>
              </Row>
            </Comment>
          </Card.Body>
        </Card>
        <Card className="mb-0">
          <Card.Header>
            <h4 className="card-header-title">Activity</h4>
          </Card.Header>
          <Card.Body>
            <ListGroup className="list-group-flush list-group-activity my-n3">
              <ListGroup.Item>
                <Row>
                  <Col xs="auto">
                    <Avatar size="sm">
                      <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="..." />
                    </Avatar>
                  </Col>
                  <Col className="ms-n2">
                    <h5 className="mb-1">Johnathan Goldstein</h5>

                    <p className="small text-gray-700 mb-0">Uploaded the files “Launchday Logo” and “Revisiting the Past”.</p>

                    <small className="text-muted">2m ago</small>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col xs="auto">
                    <Avatar size="sm">
                      <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="..." />
                    </Avatar>
                  </Col>
                  <Col className="ms-n2">
                    <h5 className="mb-1">Johnathan Goldstein</h5>

                    <p className="small text-gray-700 mb-0">Uploaded the files “Launchday Logo” and “Revisiting the Past”.</p>

                    <small className="text-muted">2m ago</small>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col xs="auto">
                    <Avatar size="sm">
                      <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="..." />
                    </Avatar>
                  </Col>
                  <Col className="ms-n2">
                    <h5 className="mb-1">Johnathan Goldstein</h5>

                    <p className="small text-gray-700 mb-0">Uploaded the files “Launchday Logo” and “Revisiting the Past”.</p>

                    <small className="text-muted">2m ago</small>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Modal.Body>
    </Modal>
  );
}
