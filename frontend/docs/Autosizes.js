import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import TextareaAutosize from 'react-textarea-autosize';
import { Header } from '../components';
import { Highlight } from '../components/vendor';

export default function Autosizes({ ...props }) {
  return (
    <div id="autosize" {...props}>
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>Autosize</Header.Title>
          <Header.Subtitle>
            Drop-in replacement for the textarea component which automatically resizes textarea as content changes.
          </Header.Subtitle>
        </Header.Body>
      </Header>
      <Card>
        <Card.Body>
          <Form.Control as={TextareaAutosize} placeholder="Try typing something..." />
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Form.Control
            <br />
            &nbsp;&nbsp;as={'{'}TextareaAutosize{'}'}
            <br />
            &nbsp;&nbsp;placeholder=&quot;Try&nbsp;typing&nbsp;something...&quot;
            <br />
            /&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Please see the{' '}
        <a href="https://github.com/Andarist/react-textarea-autosize" target="_blank">
          official plugin documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;TextareaAutosize&nbsp;from&nbsp;'react-textarea-autosize';
          </Highlight>
        </Card.Body>
      </Card>
    </div>
  );
}
