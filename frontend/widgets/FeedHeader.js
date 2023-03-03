import React from 'react';
import { Header } from '../components';

export default function FeedHeader({ ...props }) {
  return (
    <Header className="mt-md-5" {...props}>
      <Header.Body>
        <Header.Pretitle>Our Platform</Header.Pretitle>
        <Header.Title>Platform Feed</Header.Title>
      </Header.Body>
    </Header>
  );
}
