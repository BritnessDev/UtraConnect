import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

export default function FeedCTAOne({ ...props }) {
  return (
    <Card {...props}>
      <Card.Body>
        <Row className="align-items-center">
          <Col xs={12} lg={4} className="order-lg-2">
            <div className="text-center">
              <img
                className="img-fluid mt-n5 mt-lg-0 mb-4 mr-md-n5"
                src="/img/illustrations/happiness.svg"
                alt="..."
                style={{ maxWidth: 272 }}
              />
            </div>
          </Col>
          <Col xs={12} lg={8} className="px-4 py-3 order-lg-1">
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
