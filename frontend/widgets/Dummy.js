import React from 'react';
import { Card } from 'react-bootstrap';

export default function Dummy({ ...props }) {
  return (
    <Card {...props}>
      <Card.Header>
        <h4 className="card-header-title"></h4>
      </Card.Header>
      <Card.Body></Card.Body>
    </Card>
  );
}
