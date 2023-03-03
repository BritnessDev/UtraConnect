import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React from 'react';
import { Button, Form } from 'react-bootstrap';

export default function PasswordResetForm() {
  return (
    <>
      <h1 className="display-4 text-center mb-3">Password reset</h1>
      <p className="text-muted text-center mb-5">Enter your email to get a password reset link.</p>
      <form>
        <div className="form-group">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="name@address.com" />
        </div>
        <Button size="lg" className="w-100 mb-3">
          Reset Password
        </Button>
        <p className="text-center">
          <small className="text-muted text-center">
            Remember your password?{' '}
            <Link href="/sign-in">Log in</Link>
            .
          </small>
        </p>
      </form>
    </>
  );
}
