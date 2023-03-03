import React from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import { Header } from '../components';
import { Highlight } from '../components/vendor';

export default function Spinners({ ...props }) {
  return (
    <div id="spinners" {...props}>
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>Spinners</Header.Title>
          <Header.Subtitle>Indicate the loading state of a component or page with Bootstrap spinners.</Header.Subtitle>
        </Header.Body>
      </Header>
      <Card>
        <Card.Body>
          <Spinner animation="border" /> <Spinner animation="grow" /> <Spinner animation="border" size="sm" />{' '}
          <Spinner size="sm" animation="grow" />
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Spinner animation="border" variant="primary" /> <Spinner animation="grow" variant="primary" />{' '}
          <Spinner animation="border" variant="secondary" /> <Spinner animation="grow" variant="secondary" />{' '}
          <Spinner animation="border" variant="success" /> <Spinner animation="grow" variant="success" />{' '}
          <Spinner animation="border" variant="danger" /> <Spinner animation="grow" variant="danger" />
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Button disabled>
            <Spinner animation="border" size="sm" />
          </Button>{' '}
          <Button disabled>
            <Spinner animation="border" size="sm" /> Loading…
          </Button>{' '}
          <Button disabled>
            <Spinner animation="grow" size="sm" />
          </Button>{' '}
          <Button disabled>
            <Spinner animation="grow" size="sm" /> Loading…
          </Button>{' '}
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Card</h2>
      <p className="text-muted mb-4">Use spinners within cards to indicate its content is currently loading.</p>
      <Card>
        <Card.Body className="text-center">
          <Spinner animation="border" />
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Card&gt;
            <br />
            &nbsp;&nbsp;&lt;Card.Body&nbsp;className=&quot;text-center&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Spinner&nbsp;animation=&quot;border&quot;&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&lt;/Card.Body&gt;
            <br />
            &lt;/Card&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Please see the{' '}
        <a href="https://react-bootstrap.github.io/components/spinners/" target="_blank">
          official React Bootstrap documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Spinner&nbsp;{'}'}
            &nbsp;from&nbsp;'react-bootstrap';
          </Highlight>
        </Card.Body>
      </Card>
    </div>
  );
}
