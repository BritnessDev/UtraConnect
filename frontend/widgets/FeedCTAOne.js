import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

export default function FeedCTAOne({ ...props }) {
  return (
    <Card {...props}>
      <Card.Body className="text-center">
        <Row className="justify-content-center">
          <Col xs={12} md={10} xl={8}>
            <img
              className="img-fluid mt-n5 mb-4"
              src="/img/illustrations/happiness.svg"
              alt="..."
              style={{ maxWidth: 272 }}
            />
            <h2>We released 2008 new versions of our theme to make the world a better place.</h2>
            <p className="text-muted">
              This is a true story and totally not made up. This is going to be better in the long run but for now this
              is the way it is.
            </p>
            <Button className="lift">Try it for free</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
