import React, { useState } from 'react';
import { Badge, Button, Card, Table } from 'react-bootstrap';
import { Header } from '../components';
import { Highlight } from '../components/vendor';
import { ModalMembers, ModalSearch } from '../modals';

export default function Modals({ ...props }) {
  const [modalMembersVisible, setModalMembersVisible] = useState(false);
  const [modalSearchVisible, setModalSearchVisible] = useState(false);

  return (
    <div id="modals" {...props}>
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>Modals</Header.Title>
          <Header.Subtitle>
            Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or
            completely custom content.
          </Header.Subtitle>
        </Header.Body>
      </Header>
      <Card>
        <Card.Body>
          <Button onClick={() => setModalMembersVisible(true)}>Launch demo modal</Button>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Please see the{' '}
        <a href="https://react-bootstrap.github.io/components/modal/#modals" target="_blank">
          official React Bootstrap documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Modal&nbsp;{'}'}
            &nbsp;from&nbsp;'react-bootstrap';
          </Highlight>
        </Card.Body>
      </Card>
      <ModalMembers visible={modalMembersVisible} onDismiss={() => setModalMembersVisible(false)} />
      <ModalSearch visible={modalSearchVisible} onDismiss={() => setModalSearchVisible(false)} />
    </div>
  );
}
