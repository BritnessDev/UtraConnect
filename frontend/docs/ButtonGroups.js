import React from 'react';
import { Button, ButtonGroup, ButtonToolbar, Card, Dropdown, DropdownButton } from 'react-bootstrap';
import { Header } from '../components';
import { Highlight } from '../components/vendor';

export default function ButtonGroups({ ...props }) {
  return (
    <div id="buttonGroup" {...props}>
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>Button group</Header.Title>
          <Header.Subtitle>
            Group a series of buttons together on a single line with the button group, and super-power them with
            JavaScript.
          </Header.Subtitle>
        </Header.Body>
      </Header>
      <Card>
        <Card.Body>
          <ButtonToolbar>
            <ButtonGroup className="me-2 mb-3">
              <Button variant="secondary">1</Button>
              <Button variant="secondary">2</Button>
              <Button variant="secondary">3</Button>
              <Button variant="secondary">4</Button>
            </ButtonGroup>
            <ButtonGroup className="me-2 mb-3">
              <Button variant="secondary">5</Button>
              <Button variant="secondary">6</Button>
              <Button variant="secondary">7</Button>
            </ButtonGroup>
            <ButtonGroup className="me-2 mb-3">
              <Button variant="secondary">8</Button>
            </ButtonGroup>
            <ButtonGroup className="mb-3">
              <Button variant="secondary">1</Button>
              <Button variant="secondary">2</Button>
              <DropdownButton as={ButtonGroup} variant="secondary" title="Dropdown">
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
              </DropdownButton>
            </ButtonGroup>
          </ButtonToolbar>
          <ButtonGroup size="lg" className="me-2 mb-3">
            <Button variant="warning">1</Button>
            <Button variant="warning">2</Button>
            <Button variant="warning">3</Button>
            <Button variant="warning">4</Button>
          </ButtonGroup>
          <ButtonGroup className="me-2 mb-3">
            <Button variant="success">1</Button>
            <Button variant="success">2</Button>
            <Button variant="success">3</Button>
            <Button variant="success">4</Button>
          </ButtonGroup>
          <ButtonGroup size="sm" className="me-2 mb-3">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Please see the{' '}
        <a href="https://react-bootstrap.github.io/components/button-group/" target="_blank">
          official React Bootstrap documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;ButtonGroup,&nbsp;ButtonToolbar&nbsp;{'}'}
            &nbsp;from&nbsp;'react-bootstrap';
          </Highlight>
        </Card.Body>
      </Card>
    </div>
  );
}
