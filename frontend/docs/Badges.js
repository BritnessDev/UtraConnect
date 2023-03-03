import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import { Header } from '../components';
import { Highlight } from '../components/vendor';

export default function Badges({ ...props }) {
  return (
    <div id="badges" {...props}>
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>Badges</Header.Title>
          <Header.Subtitle>A small count and labeling component.</Header.Subtitle>
        </Header.Body>
      </Header>
      <Card>
        <Card.Body>
          <Badge bg="primary">Primary</Badge> <Badge bg="secondary">Secondary</Badge>{' '}
          <Badge bg="success">Success</Badge> <Badge bg="danger">Danger</Badge> <Badge bg="warning">Warning</Badge>{' '}
          <Badge bg="info">Info</Badge> <Badge bg="light">Light</Badge> <Badge bg="dark">Dark</Badge>{' '}
          <Badge bg="primary" className="rounded-pill">
            Primary
          </Badge>{' '}
          <Badge bg="secondary" className="rounded-pill">
            Secondary
          </Badge>{' '}
          <Badge bg="success" className="rounded-pill">
            Success
          </Badge>{' '}
          <Badge bg="danger" className="rounded-pill">
            Danger
          </Badge>{' '}
          <Badge bg="warning" className="rounded-pill">
            Warning
          </Badge>{' '}
          <Badge bg="info" className="rounded-pill">
            Info
          </Badge>{' '}
          <Badge bg="light" className="rounded-pill">
            Light
          </Badge>{' '}
          <Badge bg="dark" className="rounded-pill">
            Dark
          </Badge>{' '}
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Soft{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>
      </h2>
      <p className="text-muted mb-4">
        Creates a soft variant of a corresponding contextual badge variation. These can be used exactly like Bootstrap's
        core badges, including modifying classes like <code>.rounded-pill</code>, as an <code>&lt;a&gt;</code> itself,
        or inside of <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> elements.
      </p>
      <Card>
        <Card.Body>
          <Badge bg="primary-soft">Primary</Badge> <Badge bg="secondary-soft">Secondary</Badge>{' '}
          <Badge bg="success-soft">Success</Badge> <Badge bg="info-soft">Info</Badge>{' '}
          <Badge bg="warning-soft">Warning</Badge> <Badge bg="danger-soft">Danger</Badge>{' '}
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Badge&nbsp;bg=&quot;primary-soft&quot;&gt;Primary&lt;/Badge&gt;
            <br />
            &lt;Badge&nbsp;bg=&quot;secondary-soft&quot;&gt;Secondary&lt;/Badge&gt;
            <br />
            &lt;Badge&nbsp;bg=&quot;success-soft&quot;&gt;Success&lt;/Badge&gt;
            <br />
            &lt;Badge&nbsp;bg=&quot;info-soft&quot;&gt;Info&lt;/Badge&gt;
            <br />
            &lt;Badge&nbsp;bg=&quot;warning-soft&quot;&gt;Warning&lt;/Badge&gt;
            <br />
            &lt;Badge&nbsp;bg=&quot;danger-soft&quot;&gt;Danger&lt;/Badge&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Please see the{' '}
        <a href="https://react-bootstrap.github.io/components/badge/" target="_blank">
          official React Bootstrap documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Badge&nbsp;{'}'}
            &nbsp;from&nbsp;'react-bootstrap';
          </Highlight>
        </Card.Body>
      </Card>
    </div>
  );
}
