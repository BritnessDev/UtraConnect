import React from 'react';
import { Alert, Card } from 'react-bootstrap';
import { Header } from '../components';
import { Highlight } from '../components/vendor';

export default function Alerts({ ...props }) {
  return (
    <div id="alerts" {...props}>
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>Alerts</Header.Title>
          <Header.Subtitle>
            Provide contextual feedback messages for typical user actions with the handful of available and flexible
            alert messages.
          </Header.Subtitle>
        </Header.Body>
      </Header>
      <Card>
        <Card.Body>
          <Alert>A simple primary alert—check it out!</Alert>
          <Alert variant="secondary">A simple secondary alert—check it out!</Alert>
          <Alert variant="success">
            <Alert.Heading>Well done!</Alert.Heading>
            <p>
              Aww yeah, you successfully read this important alert message. This example text is going to run a bit
              longer so that you can see how spacing within an alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
          </Alert>
          <Alert variant="danger" dismissible>
            <strong>Danger Will Robinson!</strong> This is a dismissible alert!
          </Alert>
          <Alert variant="warning" dismissible>
            <strong>Holy guacamole!</strong> Notice how the text/UI have high contrast?
          </Alert>
          <Alert variant="info">A simple info alert—check it out!</Alert>
          <Alert variant="light">A simple light alert—check it out!</Alert>
          <Alert variant="dark">A simple dark alert—check it out!</Alert>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Please see the{' '}
        <a target="_blank" href="https://react-bootstrap.github.io/components/alerts/">
          official React Bootstrap documentation
        </a>{' '}
        for a full list of options.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Alert&nbsp;{'}'}
            &nbsp;from&nbsp;'react-bootstrap';
          </Highlight>
        </Card.Body>
      </Card>
    </div>
  );
}
