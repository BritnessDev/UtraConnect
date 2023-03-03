import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React from 'react';
import { Badge, Card, Collapse, Container, Dropdown, Nav, NavDropdown, Navbar, OverlayTrigger, Table, Tooltip } from 'react-bootstrap';
import { Header } from '../components';
import { Highlight } from '../components/vendor';

export default function Navbars({ ...props }) {
  return (
    <div id="navbar" {...props}>
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>Navbar</Header.Title>
          <Header.Subtitle>
            Powerful and responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for the collapse
            plugin.
          </Header.Subtitle>
        </Header.Body>
      </Header>
      <Card>
        <Card.Body>
          <Navbar expand="xl" className="mb-2" style={{ border: 0 }}>
            <Container fluid>
              <Navbar.Brand href="#!">Navbar</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse>
                <Nav className="ms-auto">
                  <Nav.Item active>
                    <Nav.Link href="#!">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#!">Link</Nav.Link>
                  </Nav.Item>
                  <NavDropdown title="Dropdown">
                    <NavDropdown.Item href="#a">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#b">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#c">Something else here</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Item>
                    <Nav.Link href="#!" disabled>
                      Disabled
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Navbar expand="xl" bg="dark" variant="dark" className="mb-2" style={{ border: 0 }}>
            <Container fluid>
              <Navbar.Brand href="#!">Navbar</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse>
                <Nav className="ms-auto">
                  <Nav.Item active>
                    <Nav.Link href="#!">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#!">Link</Nav.Link>
                  </Nav.Item>
                  <NavDropdown title="Dropdown">
                    <NavDropdown.Item href="#a">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#b">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#c">Something else here</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Item>
                    <Nav.Link href="#!" disabled>
                      Disabled
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Navbar expand="xl" bg="dark" variant="dark" className="navbar-vibrant" style={{ border: 0 }}>
            <Container fluid>
              <Navbar.Brand href="#!">Navbar</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse>
                <Nav className="ms-auto">
                  <Nav.Item active>
                    <Nav.Link href="#!">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#!">Link</Nav.Link>
                  </Nav.Item>
                  <NavDropdown title="Dropdown">
                    <NavDropdown.Item href="#a">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#b">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#c">Something else here</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Item>
                    <Nav.Link href="#!" disabled>
                      Disabled
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Vertical{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>
      </h2>
      <p className="text-muted mb-4">
        Creates a vertical variation of the Navbar component. The markup for everything else remains the same as the default Navbar!
      </p>
      <Card>
        <Card.Body>
          <Navbar expand="md" className="navbar-vertical" style={{ position: 'relative', border: 0 }}>
            <Navbar.Brand as={Link} href="#!">
              <img className="navbar-brand-img" src="/img/logo.svg" alt="..." />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav>
                <Nav.Item>
                  <Nav.Link as={Link} href="/getting-started">
                    <FeatherIcon icon="clipboard" size="17" /> Getting Started
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} href="/components#alerts">
                    <FeatherIcon icon="book-open" size="17" /> Components{' '}
                    <Badge bg="primary" className="ms-auto">
                      23
                    </Badge>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} href="/changelog">
                    <FeatherIcon icon="git-branch" size="17" /> Changelog
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Navbar&nbsp;expand=&quot;md&quot;&nbsp;className=&quot;navbar-vertical&quot;&gt;
            <br />
            &nbsp;&nbsp;...
            <br />
            &lt;/Navbar&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Please see the{' '}
        <a href="https://react-bootstrap.github.io/components/navbar/" target="_blank">
          official React Bootstrap documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Navbar&nbsp;{'}'}
            &nbsp;from&nbsp;'react-bootstrap';
          </Highlight>
        </Card.Body>
      </Card>
    </div>
  );
}
