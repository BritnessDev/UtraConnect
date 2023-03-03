import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button, Col, Container, Nav, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Avatar, Header } from '../components';
import { ModalMembers } from '../modals';

export default function ProjectHeader({ ...props }) {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  return (
    <>
      <Header {...props}>
        <Container fluid>
          <Header.Body>
            <Row className="align-items-center">
              <Col xs="auto">
                <Avatar ratio="4by3" size="lg">
                  <Avatar.Image src="/img/avatars/projects/project-1.jpg" className="rounded" alt="..." />
                </Avatar>
              </Col>
              <Col className="ms-n3 ms-md-n2">
                <Header.Pretitle>Projects</Header.Pretitle>
                <Header.Title>Homepage Redesign</Header.Title>
              </Col>
              <Col xs={12} md="auto" className="mt-3 mt-md-0">
                <Avatar.Group>
                  <Avatar as={Link} href="/profile-posts">
                    <OverlayTrigger overlay={<Tooltip>Dianna Smiley</Tooltip>}>
                      <Avatar.Image src="/img/avatars/profiles/avatar-1.jpg" alt="Dianna Smiley" className="rounded-circle" />
                    </OverlayTrigger>
                  </Avatar>
                  <Avatar as={Link} href="/profile-posts">
                    <OverlayTrigger overlay={<Tooltip>Ab Hadley</Tooltip>}>
                      <Avatar.Image src="/img/avatars/profiles/avatar-2.jpg" alt="Ab Hadley" className="rounded-circle" />
                    </OverlayTrigger>
                  </Avatar>
                  <Avatar as={Link} href="/profile-posts">
                    <OverlayTrigger overlay={<Tooltip>Adolfo Hess</Tooltip>}>
                      <Avatar.Image src="/img/avatars/profiles/avatar-3.jpg" alt="Adolfo Hess" className="rounded-circle" />
                    </OverlayTrigger>
                  </Avatar>
                  <Avatar as={Link} href="/profile-posts">
                    <OverlayTrigger overlay={<Tooltip>Daniela Dewitt</Tooltip>}>
                      <Avatar.Image src="/img/avatars/profiles/avatar-4.jpg" alt="Daniela Dewitt" className="rounded-circle" />
                    </OverlayTrigger>
                  </Avatar>
                </Avatar.Group>
                <Button className="btn-rounded-circle lift ms-1" variant="white" size="lg" onClick={() => setModalVisible(true)}>
                  +
                </Button>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col>
                <Header.Tabs className="nav-overflow">
                  <Nav.Item>
                    <Nav.Link as={Link} href="/project-overview" active={router.pathname === '/project-overview'}>
                      Overview
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} href="/project-files" active={router.pathname === '/project-files'}>
                      Files
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} href="/project-reports" active={router.pathname === '/project-reports'}>
                      Reports
                    </Nav.Link>
                  </Nav.Item>
                </Header.Tabs>
              </Col>
            </Row>
          </Header.Body>
        </Container>
      </Header>
      <ModalMembers visible={modalVisible} onDismiss={() => setModalVisible(false)} />
    </>
  );
}
