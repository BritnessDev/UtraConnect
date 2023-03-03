import FeatherIcon from 'feather-icons-react';
import React from 'react';
import { Button, Card, Col, ListGroup, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';

export default function AccountTwoFactorSecurity() {
  return (
    <>
      <Row className="justify-content-between align-items-center mb-5">
        <Col xs={12} md={9} xl={7}>
          <h2 className="mb-2">Two factor security</h2>
          <p className="text-muted mb-md-0">
            Two-factor authentication adds an additional layer of security to your account by requiring more than just a
            password to log in.
          </p>
        </Col>
        <Col xs={12} md="auto">
          <Button>Enable</Button>
        </Col>
      </Row>
      <Card>
        <Card.Body>
          <ListGroup className="list-group-flush my-n3">
            <ListGroup.Item>
              <Row className="row align-items-center">
                <Col>
                  <h4 className="mb-1">Authenticator app</h4>
                  <small className="text-muted">Google auth or 1Password</small>
                </Col>
                <Col xs="auto">
                  <Button variant="white" size="sm">
                    Setup
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row className="align-items-center">
                <Col>
                  <h4 className="mb-1">
                    SMS Recovery{' '}
                    <OverlayTrigger overlay={<Tooltip>We use the the phone number you provide in General</Tooltip>}>
                      <span className="text-muted ms-1">
                        <FeatherIcon icon="info" size="1em" />
                      </span>
                    </OverlayTrigger>
                  </h4>
                  <small className="text-muted">Standard messaging rates apply</small>
                </Col>
                <Col xs="auto">
                  <Button variant="danger" size="sm">
                    Disable
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row className="align-items-center">
                <Col>
                  <h4 className="mb-1">
                    Recovery codes{' '}
                    <OverlayTrigger overlay={<Tooltip>We use the the phone number you provide in General</Tooltip>}>
                      <span className="text-muted ms-1">
                        <FeatherIcon icon="info" size="1em" />
                      </span>
                    </OverlayTrigger>
                  </h4>
                  <small className="text-muted">Standard messaging rates apply</small>
                </Col>
                <Col xs="auto">
                  <Button variant="white" size="sm">
                    Reveal
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
}
