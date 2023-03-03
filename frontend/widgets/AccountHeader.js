import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { Header } from '../components';

export default function AccountHeader({ ...props }) {
  const router = useRouter();

  return (
    <Header className="mt-md-5" {...props}>
      <Header.Body>
        <Row className="align-items-center">
          <Col>
            <Header.Pretitle>Overview</Header.Pretitle>
            <Header.Title>Account</Header.Title>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <Header.Tabs className="nav-overflow">
              <Nav.Item>
                <Nav.Link as={Link} href="/account-general" active={router.pathname === '/account-general'}>
                  General
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} href="/account-billing" active={router.pathname === '/account-billing'}>
                  Billing
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} href="/account-members" active={router.pathname === '/account-members'}>
                  Members
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} href="/account-security" active={router.pathname === '/account-security'}>
                  Security
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} href="/account-notifications" active={router.pathname === '/account-notifications'}>
                  Notifications
                </Nav.Link>
              </Nav.Item>
            </Header.Tabs>
          </Col>
        </Row>
      </Header.Body>
    </Header>
  );
}
