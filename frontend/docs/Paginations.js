import React from 'react';
import { Card, Pagination } from 'react-bootstrap';
import { Header } from '../components';
import { Highlight } from '../components/vendor';

export default function Paginations({ ...props }) {
  return (
    <div id="pagination" {...props}>
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>Pagination</Header.Title>
          <Header.Subtitle>Indicates a series of related content exists across multiple pages.</Header.Subtitle>
        </Header.Body>
      </Header>
      <Card>
        <Card.Body>
          <Pagination size="lg">
            <Pagination.Item>Previous</Pagination.Item>
            <Pagination.Item>1</Pagination.Item>
            <Pagination.Item>2</Pagination.Item>
            <Pagination.Item>3</Pagination.Item>
            <Pagination.Item>Next</Pagination.Item>
          </Pagination>
          <Pagination>
            <Pagination.Item>Previous</Pagination.Item>
            <Pagination.Item>1</Pagination.Item>
            <Pagination.Item>2</Pagination.Item>
            <Pagination.Item>3</Pagination.Item>
            <Pagination.Item>Next</Pagination.Item>
          </Pagination>
          <Pagination size="sm" className="mb-0">
            <Pagination.Item>Previous</Pagination.Item>
            <Pagination.Item>1</Pagination.Item>
            <Pagination.Item>2</Pagination.Item>
            <Pagination.Item>3</Pagination.Item>
            <Pagination.Item>Next</Pagination.Item>
          </Pagination>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Please see the{' '}
        <a href="https://react-bootstrap.github.io/components/pagination/" target="_blank">
          official React Bootstrap documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Pagination&nbsp;{'}'}
            &nbsp;from&nbsp;'react-bootstrap';
          </Highlight>
        </Card.Body>
      </Card>
    </div>
  );
}
