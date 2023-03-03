import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';

export default function ProfileInfo({ ...props }) {
  return (
    <Card {...props}>
      <Card.Body>
        <ListGroup className="list-group-flush my-n3">
          <ListGroup.Item>
            <Row className="align-items-center">
              <Col>
                <h5 className="mb-0">Birthday</h5>
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
                <h5 className="mb-0">Joined</h5>
              </Col>
              <Col xs="auto">
                <time className="small text-muted" dateTime="2018-10-28">
                  10/24/18
                </time>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row className="align-items-center">
              <Col>
                <h5 className="mb-0">Location</h5>
              </Col>
              <Col xs="auto">
                <small className="text-muted">Los Angeles, CA</small>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row className="align-items-center">
              <Col>
                <h5 className="mb-0">Website</h5>
              </Col>
              <Col xs="auto">
                <a className="small" href="#!">
                  themes.getbootstrap.com
                </a>
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
