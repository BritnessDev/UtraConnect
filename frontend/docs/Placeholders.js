import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';
import { Header } from '../components';
import { Highlight } from '../components/vendor';

export default function Placeholders({ ...props }) {
  return (
    <div id="placeholders" {...props}>
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>Placeholders</Header.Title>
          <Header.Subtitle>Use loading placeholders for your components or pages to indicate something may still be loading.</Header.Subtitle>
        </Header.Body>
      </Header>
      <Card>
        <Card.Body>
          <Placeholder xs={6} />
          <Placeholder className="w-75" /> <Placeholder style={{ width: '25%' }} />
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Please see the{' '}
        <a href="https://react-bootstrap.github.io/components/placeholder/" target="_blank">
          official React Bootstrap documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Placeholder&nbsp;{'}'}
            &nbsp;from&nbsp;'react-bootstrap';
          </Highlight>
        </Card.Body>
      </Card>
    </div>
  );
}
