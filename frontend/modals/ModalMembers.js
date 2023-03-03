import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { Button, Card, CloseButton, Col, Form, InputGroup, ListGroup, Modal, Row } from 'react-bootstrap';
import { useGlobalFilter, usePagination, useTable } from 'react-table';
import { Avatar } from '../components';
import { getStatusColor } from '../helpers';

export default function ModalMembers({ visible, onDismiss, ...props }) {
  const data = useMemo(
    () => [
      {
        imgSrc: '/img/avatars/profiles/avatar-5.jpg',
        status: 'Online',
        title: 'Miyah Myles',
      },
      {
        imgSrc: '/img/avatars/profiles/avatar-6.jpg',
        status: 'Online',
        title: 'Ryu Duke',
      },
      {
        imgSrc: '/img/avatars/profiles/avatar-7.jpg',
        status: 'Busy',
        title: 'Glen Rouse',
      },
      {
        imgSrc: '/img/avatars/profiles/avatar-8.jpg',
        status: 'Offline',
        title: 'Grace Gross',
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        accessor: 'imgSrc',
      },
      {
        accessor: 'status',
      },
      {
        accessor: 'title',
      },
    ],
    []
  );

  const { page, prepareRow, setGlobalFilter } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );

  return (
    <Modal show={visible} onHide={onDismiss} centered {...props}>
      <Card className="modal-card">
        <Card.Header>
          <h4 className="card-header-title">Add a member</h4>
          <CloseButton onClick={onDismiss} />
        </Card.Header>
        <Card.Header>
          <form>
            <InputGroup className="input-group-merge input-group-flush input-group-reverse">
              <Form.Control type="search" placeholder="Search" onChange={(e) => setGlobalFilter(e.target.value ? e.target.value : undefined)} />
              <InputGroup.Text>
                <FeatherIcon icon="search" size="1em" />
              </InputGroup.Text>
            </InputGroup>
          </form>
        </Card.Header>
        <Card.Body>
          <ListGroup className="list-group-flush my-n3">
            {page.map((row, i) => {
              prepareRow(row);

              const [imgSrc, status, title] = row.cells.map((cell) => cell.value);

              return (
                <ListGroup.Item {...row.getRowProps()}>
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <Avatar as={Link} href="/profile-posts">
                        <Avatar.Image className="rounded-circle" src={imgSrc} alt={title} />
                      </Avatar>
                    </Col>
                    <Col className="ms-n2">
                      <h4 className="mb-1 name">
                        <Link href="/profile-posts">{title}</Link>
                      </h4>
                      <p className="small mb-0">
                        <span className={`text-${getStatusColor(status)}`}>●</span> {status}
                      </p>
                    </Col>
                    <Col xs="auto">
                      <Button variant="white" size="sm">
                        Add
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Card.Body>
      </Card>
    </Modal>
  );
}
