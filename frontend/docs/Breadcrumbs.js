import React from 'react';
import { Breadcrumb, Card } from 'react-bootstrap';
import { Header } from '../components';
import { Highlight } from '../components/vendor';

export default function Breadcrumbs({ ...props }) {
  return (
    <div id="breadcrumb" {...props}>
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>Breadcrumb</Header.Title>
          <Header.Subtitle>
            Indicate the current page’s location within a navigational hierarchy that automatically adds separators via
            CSS.
          </Header.Subtitle>
        </Header.Body>
      </Header>
      <Card>
        <Card.Body>
          <Breadcrumb>
            <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#!">Library</Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Please see the{' '}
        <a href="https://react-bootstrap.github.io/components/breadcrumb/" target="_blank">
          official React Bootstrap documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Breadcrumb&nbsp;{'}'}
            &nbsp;from&nbsp;'react-bootstrap';
          </Highlight>
        </Card.Body>
      </Card>
    </div>
  );
}
