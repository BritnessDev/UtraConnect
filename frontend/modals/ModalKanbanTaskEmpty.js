import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import { Button, Card, CloseButton, Col, Form, Modal, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import TextareaAutosize from 'react-textarea-autosize';
import { Avatar, Comment } from '../components';
import { Dropzone } from '../components/vendor';

export default function ModalKanbanTaskEmpty({ visible, onDismiss, ...props }) {
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
            <Form.Control as={TextareaAutosize} className="form-control-auto form-control-flush" placeholder="Add a description" />
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
                Add Reaction
              </Button>
            </Col>
            <Col xs="auto">
              <Button variant="white" size="sm">
                Share
              </Button>
            </Col>
          </Row>
        </div>
        <Card>
          <Card.Body>
            <Dropzone multiple onDrop={(acceptedFiles) => console.log(acceptedFiles)} />
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
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
      </Modal.Body>
    </Modal>
  );
}
