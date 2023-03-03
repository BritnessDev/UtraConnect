import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Header } from '../components';

export default function Typography({ ...props }) {
  return (
    <div id="typography" {...props}>
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>Typography</Header.Title>
          <Header.Subtitle>
            Dashkit makes use of the Cerebri Sans webfont for both headings and body content.
          </Header.Subtitle>
        </Header.Body>
      </Header>
      <Card>
        <Card.Body>
          <Row>
            <Col xs={6}>
              <h1>h1. Bootstrap heading</h1>
              <h2>h2. Bootstrap heading</h2>
              <h3>h3. Bootstrap heading</h3>
              <h4>h4. Bootstrap heading</h4>
              <h5>h5. Bootstrap heading</h5>
              <h6>h6. Bootstrap heading</h6>
            </Col>
            <Col xs={6}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
              <p>
                <a href="#!">Link example</a>
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
