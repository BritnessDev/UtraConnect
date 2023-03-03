import React from 'react';
import { Badge, Card, ProgressBar } from 'react-bootstrap';
import { Header } from '../components';
import { Highlight } from '../components/vendor';

export default function Progresses({ ...props }) {
  return (
    <div id="progress" {...props}>
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>Progress</Header.Title>
        </Header.Body>
      </Header>
      <Card>
        <Card.Body>
          <ProgressBar now={32} />
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Small{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>
      </h2>
      <p className="text-muted mb-4">The progress bar component with its bar height decreased.</p>
      <Card>
        <Card.Body>
          <ProgressBar now={10} className="progress-sm" />
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;ProgressBar&nbsp;className=&quot;progress-sm&quot;&nbsp;/&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Please see the{' '}
        <a href="https://react-bootstrap.github.io/components/progress/" target="_blank">
          official React Bootstrap documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;ProgressBar&nbsp;{'}'}
            &nbsp;from&nbsp;'react-bootstrap';
          </Highlight>
        </Card.Body>
      </Card>
    </div>
  );
}
