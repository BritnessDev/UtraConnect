import FeatherIcon from 'feather-icons-react';
import React from 'react';
import { Badge, Button, ButtonGroup, Card, Dropdown } from 'react-bootstrap';
import { Header } from '../components';
import { Highlight } from '../components/vendor';

export default function Dropdowns({ ...props }) {
  return (
    <div id="dropdowns" {...props}>
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>Dropdowns</Header.Title>
          <Header.Subtitle>
            Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.
          </Header.Subtitle>
        </Header.Body>
      </Header>
      <Card>
        <Card.Body>
          <div className="d-inline-block mb-2 me-2">
            <Dropdown>
              <Dropdown.Toggle variant="secondary">Dropdown Button</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="d-inline-block mb-2 me-2">
            <Dropdown>
              <Dropdown.Toggle>Dropdown Button</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="d-inline-block mb-2 me-2">
            <Dropdown as={ButtonGroup}>
              <Button variant="danger">Action</Button>
              <Dropdown.Toggle split variant="danger" id="dropdown-split-basic" />
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Dropdown ellipsis{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>
      </h2>
      <p className="text-muted mb-4">Creates a compact dropdown toggler with a Feather icon.</p>
      <Card>
        <Card.Header>
          <h4 className="card-header-title">Latest orders</h4>
          <Dropdown align="end">
            <Dropdown.Toggle as="span" className="dropdown-ellipses" role="button">
              <FeatherIcon icon="more-vertical" size="17" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#!">Action</Dropdown.Item>
              <Dropdown.Item href="#!">Another action</Dropdown.Item>
              <Dropdown.Item href="#!">Something else here</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Header>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Dropdown&nbsp;align=&quot;end&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Dropdown.Toggle&nbsp;as=&quot;span&quot;&nbsp;className=&quot;dropdown-ellipses&quot;&nbsp;role=&quot;button&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;FeatherIcon&nbsp;icon=&quot;more-vertical&quot;&nbsp;size=&quot;17&quot;&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&lt;/Dropdown.Toggle&gt;
            <br />
            &nbsp;&nbsp;&lt;Dropdown.Menu&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Dropdown.Item&nbsp;href=&quot;#!&quot;&gt;Action&lt;/Dropdown.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Dropdown.Item&nbsp;href=&quot;#!&quot;&gt;Another&nbsp;action&lt;/Dropdown.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Dropdown.Item&nbsp;href=&quot;#!&quot;&gt;Something&nbsp;else&nbsp;here&lt;/Dropdown.Item&gt;
            <br />
            &nbsp;&nbsp;&lt;/Dropdown.Menu&gt;
            <br />
            &lt;/Dropdown&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Dropdown card{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>
      </h2>
      <p className="text-muted mb-4">
        Turns the default Bootstrap dropdown menu into a fully functional <code>Card</code> component. The height of the{' '}
        <code>&lt;Card.Body&gt;</code> container will be limited and a scrolling bar will appear once this height is
        exceeded.
      </p>
      <Card>
        <Card.Body>
          <Dropdown>
            <Dropdown.Toggle>Card dropdown</Dropdown.Toggle>
            <Dropdown.Menu>
              <Card.Body>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat recusandae rem autem impedit ad odio,
                enim tempore possimus non minus quod dignissimos ipsum eveniet odit, ratione molestiae, velit a dolorem!
              </Card.Body>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Dropdown&gt;
            <br />
            &nbsp;&nbsp;&lt;Dropdown.Toggle&gt;Card&nbsp;dropdown&lt;/Dropdown.Toggle&gt;
            <br />
            &nbsp;&nbsp;&lt;Dropdown.Menu&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Card.Body&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem&nbsp;ipsum&nbsp;dolor&nbsp;sit&nbsp;amet,&nbsp;consectetur&nbsp;adipisicing&nbsp;elit.&nbsp;Quaerat&nbsp;recusandae&nbsp;rem&nbsp;autem&nbsp;impedit&nbsp;ad&nbsp;odio,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;enim&nbsp;tempore&nbsp;possimus&nbsp;non&nbsp;minus&nbsp;quod&nbsp;dignissimos&nbsp;ipsum&nbsp;eveniet&nbsp;odit,&nbsp;ratione&nbsp;molestiae,&nbsp;velit&nbsp;a&nbsp;dolorem!
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Card.Body&gt;
            <br />
            &nbsp;&nbsp;&lt;/Dropdown.Menu&gt;
            <br />
            &lt;/Dropdown&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Please see the{' '}
        <a href="https://react-bootstrap.github.io/components/dropdowns/" target="_blank">
          official React Bootstrap documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Dropdown&nbsp;{'}'}&nbsp;from&nbsp;'react-bootstrap';
            <br />
          </Highlight>
        </Card.Body>
      </Card>
    </div>
  );
}
