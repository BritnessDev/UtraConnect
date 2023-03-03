import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import { Header } from '../components';
import { Highlight, Map } from '../components/vendor';

export default function Maps({ ...props }) {
  return (
    <div id="map">
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>
            Map{' '}
            <Badge bg="primary-soft" className="ms-1 mt-n1">
              Dashkit only
            </Badge>
          </Header.Title>
          <Header.Subtitle>
            To enable the Mapbox map on your website, you'll need a Mapbox access token. Mapbox uses access tokens to
            associate API requests with your account. You can create a new access token on your{' '}
            <a href="https://account.mapbox.com/access-tokens" target="_blank">
              Access Tokens page
            </a>{' '}
            or programmatically using the{' '}
            <a href="https://docs.mapbox.com/api/accounts/#tokens" target="_blank">
              Mapbox Tokens API
            </a>
            . Once a new access token is created, please replace the original access token at{' '}
            <code>components/vendor/map.js</code> with the new one.
          </Header.Subtitle>
        </Header.Body>
      </Header>
      <Card>
        <Card.Body>
          <Map
            className="rounded"
            options={{
              dragPan: false,
              dragRotate: false,
              keyboard: false,
              latitude: 34.052979,
              longitude: -118.244615,
              scrollZoom: false,
              touchRotate: false,
              touchZoom: false,
              zoom: 12,
            }}
          />
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Please see the{' '}
        <a href="https://github.com/visgl/react-map-gl" target="_blank">
          official plugin documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Map&nbsp;{'}'}
            &nbsp;from&nbsp;'../components/vendor';
          </Highlight>
        </Card.Body>
      </Card>
    </div>
  );
}
