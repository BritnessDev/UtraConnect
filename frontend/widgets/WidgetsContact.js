import React from 'react';
import { Button, Card } from 'react-bootstrap';

export default function WidgetsContact({ ...props }) {
  return (
    <Card className="bg-transparent" {...props}>
      <Card.Body className="text-center">
        <h3>Need some help deciding?</h3>
        <p className="text-muted">
          We can help you decide what’s the best for your company based on a lot of factors and other cool stuff.
        </p>
        <Button variant="outline-secondary">Contact us</Button>
      </Card.Body>
    </Card>
  );
}
