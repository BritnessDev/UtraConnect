import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { getMessage } from '../helpers/lang';

export default function PasswordResetForm() {
  return (
    <>
      <h1 className="display-4 text-center mb-3">{getMessage('Password reset')}</h1>
      <p className="text-muted text-center mb-5">{getMessage('Enter your email to get a password reset link')}</p>
      <form>
        <div className="form-group">
          <Form.Label>{getMessage('Email Address')}</Form.Label>
          <Form.Control type="email" placeholder="name@address.com" />
        </div>
        <Button size="lg" className="w-100 mb-3">
          {getMessage('Reset Password')}
        </Button>
        <p className="text-center">
          <small className="text-muted text-center">
            {getMessage('Remember your password')}?{' '}
            <Link href="/sign-in">{getMessage('Sign in')}</Link>
            .
          </small>
        </p>
      </form>
    </>
  );
}
