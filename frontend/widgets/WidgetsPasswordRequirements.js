import React from 'react';
import { Card } from 'react-bootstrap';

export default function WidgetsPasswordRequirements({ ...props }) {
  return (
    <Card className="bg-light border" {...props}>
      <Card.Body>
        <p className="mb-2">Password requirements</p>
        <p className="small text-muted mb-2">
          To create a new password, you have to meet all of the following requirements:
        </p>
        <ul className="small text-muted ps-4 mb-0">
          <li>Minimum 8 character</li>
          <li>At least one special character</li>
          <li>At least one number</li>
          <li>Can’t be the same as a previous password</li>
        </ul>
      </Card.Body>
    </Card>
  );
}
