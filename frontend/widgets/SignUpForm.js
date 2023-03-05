import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { getMessage } from '../helpers/lang';

export default function SignUpForm() {
  return (
    <>
      <h1 className="display-4 text-center mb-3">{getMessage('Sign up')}</h1>
      <p className="text-muted text-center mb-5">{getMessage('Free access to our dashboard')}</p>
      <form>
        <div className="form-group">
          <Form.Label>{getMessage('Email Address')}</Form.Label>
          <Form.Control type="email" placeholder="name@address.com" />
        </div>
        <div className="form-group">
          <Row>
            <Col>
              <Form.Label>{getMessage('Password')}</Form.Label>
            </Col>
            <Col xs="auto">
              <Form.Text as={Link} className="small text-muted" href="/password-reset">
              {getMessage('Forgot password')}
              </Form.Text>
            </Col>
          </Row>
          <InputGroup className="input-group-merge">
            <Form.Control type="password" placeholder="Enter your password" />
            <InputGroup.Text>
              <FeatherIcon icon="eye" size="1em" />
            </InputGroup.Text>
          </InputGroup>
        </div>
        <Button size="lg" className="w-100 mb-3">
        {getMessage('Sign up')}
        </Button>
        <p className="text-center">
          <small className="text-muted text-center">
            {getMessage('Already have an account')}? <Link href="/sign-in">{getMessage('Sign in')}</Link>.
          </small>
        </p>
      </form>
    </>
  );
}
