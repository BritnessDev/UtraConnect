import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import { Avatar, Header } from '../components';

export default function TeamHeader({ ...props }) {
  const router = useRouter();

  return (
    <Header {...props}>
      <Header.ImageTop src="/img/covers/team-cover.jpg" alt="..." />
      <Container fluid>
        <Header.Body className="mt-n5 mt-md-n6">
          <Row className="align-items-end">
            <Col xs="auto">
              <Header.AvatarTop size="xxl">
                <Avatar.Image alt="Launchday" src="/img/avatars/teams/team-logo-1.jpg" className="rounded border border-4 border-body" />
              </Header.AvatarTop>
            </Col>
            <Col className="mb-3 ms-n3 ms-md-n2">
              <Header.Pretitle>Groups</Header.Pretitle>
              <Header.Title>Launchday</Header.Title>
            </Col>
            <Col xs={12} md="auto" className="mt-2 mt-md-0 mb-md-3">
              <Button className="d-block d-md-inline-block w-100 lift">Join</Button>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col>
              <Header.Tabs className="nav-overflow">
                <Nav.Item>
                  <Nav.Link as={Link} href="/team-overview" active={router.pathname === '/team-overview'}>
                    Overview
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} href="/team-projects" active={router.pathname === '/team-projects'}>
                    Projects
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} href="/team-members" active={router.pathname === '/team-members'}>
                    Members
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#!">Settings</Nav.Link>
                </Nav.Item>
              </Header.Tabs>
            </Col>
          </Row>
        </Header.Body>
      </Container>
    </Header>
  );
}
