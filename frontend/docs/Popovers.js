import React from 'react';
import { Button, Card, OverlayTrigger, Popover } from 'react-bootstrap';
import { Header } from '../components';
import { Highlight } from '../components/vendor';

export default function Popovers({ ...props }) {
  return (
    <div id="popovers" {...props}>
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>Popovers</Header.Title>
        </Header.Body>
      </Header>
      <Card>
        <Card.Body>
          {['top', 'right', 'bottom', 'left'].map((placement) => (
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Body>Popover on {placement}</Popover.Body>
                </Popover>
              }
            >
              <Button variant="secondary" className="me-2 mb-2">
                Popover on {placement}
              </Button>
            </OverlayTrigger>
          ))}
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Please see the{' '}
        <a href="https://react-bootstrap.github.io/components/overlays/#popovers" target="_blank">
          official React Bootstrap documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Popover&nbsp;{'}'}
            &nbsp;from&nbsp;'react-bootstrap';
          </Highlight>
        </Card.Body>
      </Card>
    </div>
  );
}
