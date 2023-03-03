import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Header } from '../components';
import { Highlight } from '../components/vendor';
import { ModalNotifications } from '../modals';

export default function Offcanvas({ ...props }) {
  const [modalNotificationsVisible, setModalNotificationsVisible] = useState(false);

  return (
    <div id="offcanvas" {...props}>
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>Offcanvas</Header.Title>
          <Header.Subtitle>
            Build hidden sidebars into your project for navigation, shopping carts, and more with a few classes and our JavaScript plugin.
          </Header.Subtitle>
        </Header.Body>
      </Header>
      <Card>
        <Card.Body>
          <Button onClick={() => setModalNotificationsVisible(true)}>Launch demo offcanvas</Button>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Please see the{' '}
        <a href="https://react-bootstrap.github.io/components/modal/#offcanvas" target="_blank">
          official React Bootstrap documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Offcanvas&nbsp;{'}'}
            &nbsp;from&nbsp;'react-bootstrap';
          </Highlight>
        </Card.Body>
      </Card>
      <ModalNotifications visible={modalNotificationsVisible} onDismiss={() => setModalNotificationsVisible(false)} />
    </div>
  );
}
