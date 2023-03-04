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
            <Header.Title>Contact Management</Header.Title>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <Header.Tabs className="nav-overflow">
              <Nav.Item>
                <Nav.Link as={Link} href="/contact-add" active={router.pathname === '/contact-add'}>
                  Contact
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} href="/contact-person" active={router.pathname === '/contact-person'}>
                  Contact Person
                </Nav.Link>
              </Nav.Item>
            </Header.Tabs>
          </Col>
        </Row>
      </Header.Body>
    </Header>
  );
}
