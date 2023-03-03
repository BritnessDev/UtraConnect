import FeatherIcon from 'feather-icons-react';
import { Badge, Button, Card, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { Header } from '../components';
import { Highlight } from '../components/vendor';

export default function Buttons({ ...props }) {
  return (
    <div id="buttons" {...props}>
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>Buttons</Header.Title>
          <Header.Subtitle>
            Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple
            sizes, states, and more.
          </Header.Subtitle>
        </Header.Body>
      </Header>
      <Card>
        <Card.Body>
          <Button size="lg">Large button</Button> <Button>Base button</Button> <Button size="sm">Small button</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Button className="mb-2">Primary</Button>{' '}
          <Button variant="secondary" className="mb-2">
            Secondary
          </Button>{' '}
          <Button variant="success" className="mb-2">
            Success
          </Button>{' '}
          <Button variant="danger" className="mb-2">
            Danger
          </Button>{' '}
          <Button variant="warning" className="mb-2">
            Warning
          </Button>{' '}
          <Button variant="info" className="mb-2">
            Info
          </Button>{' '}
          <Button variant="light" className="mb-2">
            Light
          </Button>{' '}
          <Button variant="dark" className="mb-2">
            Dark
          </Button>{' '}
          <Button variant="link" className="mb-2">
            Link
          </Button>{' '}
          <Button variant="outline-primary" className="mb-2">
            Primary
          </Button>{' '}
          <Button variant="outline-secondary" className="mb-2">
            Secondary
          </Button>{' '}
          <Button variant="outline-success" className="mb-2">
            Success
          </Button>{' '}
          <Button variant="outline-danger" className="mb-2">
            Danger
          </Button>{' '}
          <Button variant="outline-warning" className="mb-2">
            Warning
          </Button>{' '}
          <Button variant="outline-info" className="mb-2">
            Info
          </Button>{' '}
          <Button variant="outline-light" className="mb-2">
            Light
          </Button>{' '}
          <Button variant="outline-dark" className="mb-2">
            Dark
          </Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <ToggleButtonGroup type="radio" name="toggleButton" defaultValue={1} className="btn-group-toggle">
            <ToggleButton variant="white" id="toggleButtonOne" value={1}>
              <FeatherIcon icon="check-circle" size="1em" /> Active
            </ToggleButton>
            <ToggleButton variant="white" id="toggleButtonTwo" value={2}>
              <FeatherIcon icon="check-circle" size="1em" v /> Radio
            </ToggleButton>
            <ToggleButton variant="white" id="toggleButtonThree" value={3}>
              <FeatherIcon icon="check-circle" size="1em" /> Radio
            </ToggleButton>
          </ToggleButtonGroup>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        White{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>
      </h2>
      <p className="text-muted mb-4">
        Creates a white variation of a button since Bootstrap's native "light" variant doesn't work well over light
        backgrounds.
      </p>
      <Card>
        <Card.Body>
          <Button variant="white">Button white</Button>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Button&nbsp;variant=&quot;white&quot;&gt;Button white&lt;/Button&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Rounded circle{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>
      </h2>
      <p className="text-muted mb-4">
        Useful for single character or emoji buttons, you can turn any button into a circle using the{' '}
        <code>.btn-rounded-circle</code> modifier.
      </p>
      <Card>
        <Card.Body>
          <Button variant="white" className="btn-rounded-circle" size="sm">
            +
          </Button>{' '}
          <Button variant="white" className="btn-rounded-circle">
            +
          </Button>{' '}
          <Button variant="white" className="btn-rounded-circle" size="lg">
            +
          </Button>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Button&nbsp;variant=&quot;white&quot;&nbsp;className=&quot;btn-rounded-circle&quot;&nbsp;size=&quot;sm&quot;&gt;
            <br />
            &nbsp;&nbsp;+
            <br />
            &lt;/Button&gt;
            <br />
            <br />
            &lt;Button&nbsp;variant=&quot;white&quot;&nbsp;className=&quot;btn-rounded-circle&quot;&gt;
            <br />
            &nbsp;&nbsp;+
            <br />
            &lt;/Button&gt;
            <br />
            <br />
            &lt;Button&nbsp;variant=&quot;white&quot;&nbsp;className=&quot;btn-rounded-circle&quot;&nbsp;size=&quot;lg&quot;&gt;
            <br />
            &nbsp;&nbsp;+
            <br />
            &lt;/Button&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Icon{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>
      </h2>
      <p className="text-muted mb-4">A combination of the standard button component and a feather icon.</p>
      <Card>
        <Card.Body>
          <Button variant="white">
            <FeatherIcon icon="bookmark" size="1em" />
          </Button>{' '}
          <Button>
            <FeatherIcon icon="bookmark" size="1em" />
          </Button>{' '}
          <Button variant="white" className="btn-rounded-circle">
            <FeatherIcon icon="star" size="1em" />
          </Button>{' '}
          <Button className="btn-rounded-circle">
            <FeatherIcon icon="star" size="1em" />
          </Button>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Button&nbsp;variant=&quot;white&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;FeatherIcon&nbsp;icon=&quot;bookmark&quot;&nbsp;size=&quot;1em&quot;&nbsp;/&gt;
            <br />
            &lt;/Button&gt;
            <br />
            <br />
            &lt;Button&gt;
            <br />
            &nbsp;&nbsp;&lt;FeatherIcon&nbsp;icon=&quot;bookmark&quot;&nbsp;size=&quot;1em&quot;&nbsp;/&gt;
            <br />
            &lt;/Button&gt;
            <br />
            <br />
            &lt;Button&nbsp;variant=&quot;white&quot;&nbsp;className=&quot;btn-rounded-circle&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;FeatherIcon&nbsp;icon=&quot;star&quot;&nbsp;size=&quot;1em&quot;&nbsp;/&gt;
            <br />
            &lt;/Button&gt;
            <br />
            <br />
            &lt;Button&nbsp;className=&quot;btn-rounded-circle&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;FeatherIcon&nbsp;icon=&quot;star&quot;&nbsp;size=&quot;1em&quot;&nbsp;/&gt;
            <br />
            &lt;/Button&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Please see the{' '}
        <a href="https://react-bootstrap.github.io/components/buttons/" target="_blank">
          official React Bootstrap documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Button,&nbsp;ToggleButton,&nbsp;ToggleButtonGroup&nbsp;{'}'}
            &nbsp;from&nbsp;'react-bootstrap';
          </Highlight>
        </Card.Body>
      </Card>
    </div>
  );
}
