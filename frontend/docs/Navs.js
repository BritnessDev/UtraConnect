import React from 'react';
import { Badge, Card, Nav, Table } from 'react-bootstrap';
import { Header } from '../components';
import { Highlight } from '../components/vendor';

export default function Navs({ ...props }) {
  return (
    <div id="navs" {...props}>
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>Navs and tabs</Header.Title>
          <Header.Subtitle>Documentation and examples for how to use Bootstrap’s included navigation components.</Header.Subtitle>
        </Header.Body>
      </Header>
      <Card>
        <Card.Body>
          <Nav variant="tabs" className="mb-4">
            <Nav.Item>
              <Nav.Link href="#!" active>
                Active
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#!">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#!">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#!" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav variant="pills">
            <Nav.Item>
              <Nav.Link href="#!" active>
                Active
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#!">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#!">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#!" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Small Nav Tabs{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>
      </h2>
      <p className="text-muted mb-4">
        Creates a small variation of the nav component – this is especially useful for putting in <code>Card.Header</code> to act as tabs.
      </p>
      <Card>
        <Card.Body>
          <Nav variant="tabs" className="nav-tabs-sm">
            <Nav.Item>
              <Nav.Link href="#!" active>
                Active
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#!">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#!">Link</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Nav&nbsp;variant=&quot;tabs&quot;&nbsp;className=&quot;nav-tabs-sm&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Link&nbsp;href=&quot;#!&quot;&nbsp;active&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Active
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Link&gt;
            <br />
            &nbsp;&nbsp;&lt;/Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&lt;Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Link&nbsp;href=&quot;#!&quot;&gt;Link&lt;/Nav.Link&gt;
            <br />
            &nbsp;&nbsp;&lt;/Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&lt;Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Link&nbsp;href=&quot;#!&quot;&gt;Link&lt;/Nav.Link&gt;
            <br />
            &nbsp;&nbsp;&lt;/Nav.Item&gt;
            <br />
            &lt;/Nav&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Horz. Overscroll{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>
      </h2>
      <p className="text-muted mb-4">
        Creates a horizontally scrollable variation of the nav component. Items do not get stacked if they don't fit the viewport. Instead, they stay on the
        same line and become scrollable in the x axes.
      </p>
      <Card>
        <Card.Body>
          <Nav variant="tabs" className="nav-tabs-sm nav-overflow">
            <Nav.Item>
              <Nav.Link href="#!" active>
                Active
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#!">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#!">Link</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Nav&nbsp;variant=&quot;tabs&quot;&nbsp;className=&quot;nav-tabs-sm&nbsp;nav-overflow&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Link&nbsp;href=&quot;#!&quot;&nbsp;active&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Active
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Link&gt;
            <br />
            &nbsp;&nbsp;&lt;/Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&lt;Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Link&nbsp;href=&quot;#!&quot;&gt;Link&lt;/Nav.Link&gt;
            <br />
            &nbsp;&nbsp;&lt;/Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&lt;Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Link&nbsp;href=&quot;#!&quot;&gt;Link&lt;/Nav.Link&gt;
            <br />
            &nbsp;&nbsp;&lt;/Nav.Item&gt;
            <br />
            &lt;/Nav&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Please see the{' '}
        <a href="https://react-bootstrap.github.io/components/navs/" target="_blank">
          official React Bootstrap documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Nav&nbsp;{'}'}
            &nbsp;from&nbsp;'react-bootstrap';
          </Highlight>
        </Card.Body>
      </Card>
    </div>
  );
}
