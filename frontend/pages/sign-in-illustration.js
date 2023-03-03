import { Col, Container, Row } from 'react-bootstrap';
import { SignInForm } from '../widgets';

export default function SignIn() {
  return (
    <div className="d-flex align-items-center min-vh-100 bg-auth border-top border-top-2 border-primary">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="offset-xl-2 offset-md-1 order-md-2 mb-5 mb-md-0">
            <div className="text-center">
              <img className="img-fluid" src="/img/illustrations/happiness.svg" alt="..." />
            </div>
          </Col>
          <Col xs={12} md={5} xl={4} className="order-md-1 my-5">
            <SignInForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
