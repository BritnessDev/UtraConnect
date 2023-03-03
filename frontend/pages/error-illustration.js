import Link from 'next/link';
import { Button, Col, Container, Row } from 'react-bootstrap';

export default function SignIn() {
  return (
    <div className="d-flex align-items-center min-vh-100 bg-auth border-top border-top-2 border-primary">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="offset-xl-2 offset-md-1 order-md-2 mb-5 mb-md-0">
            <div className="text-center">
              <img className="img-fluid" src="/img/illustrations/lost.svg" alt="..." />
            </div>
          </Col>
          <Col xs={12} md={5} xl={4} className="order-md-1 my-5">
            <div className="text-center">
              <h6 className="text-uppercase text-muted mb-4">404 error</h6>
              <h1 className="display-4 mb-3">There’s no page here 😭</h1>
              <p className="text-muted mb-4">Looks like you ended up here by accident?</p>
              <Button as={Link} href="/" size="lg">
                Return to your dashboard
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
