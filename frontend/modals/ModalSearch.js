import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { Col, Form, InputGroup, ListGroup, Offcanvas, Row } from 'react-bootstrap';
import { useGlobalFilter, usePagination, useTable } from 'react-table';
import { Avatar } from '../components';
import { search } from '../data';
import { getStatusColor } from '../helpers';

export default function ModalSearch({ visible, onDismiss, ...props }) {
  const data = useMemo(() => search, []);

  const columns = useMemo(
    () => [
      {
        accessor: 'date',
      },
      {
        accessor: 'imgSrc',
      },
      {
        accessor: 'status',
      },
      {
        accessor: 'title',
      },
      {
        accessor: 'type',
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
    <Offcanvas show={visible} onHide={onDismiss} {...props}>
      <Offcanvas.Body>
        <form className="mb-3">
          <InputGroup className="input-group-merge input-group-rounded input-group-reverse">
            <Form.Control type="search" placeholder="Search" onChange={(e) => setGlobalFilter(e.target.value ? e.target.value : undefined)} />
            <InputGroup.Text>
              <FeatherIcon icon="search" size="1em" />
            </InputGroup.Text>
          </InputGroup>
        </form>
        <ListGroup className="list-group-flush list-groupfocus">
          {page.map((row, i) => {
            prepareRow(row);

            const [date, imgSrc, status, title, type] = row.cells.map((cell) => cell.value);

            return (
              <ListGroup.Item as={Link} href={type === 'user' ? '/profile-posts' : `/${type}-overview`} {...row.getRowProps()} onClick={onDismiss}>
                <Row className="align-items-center">
                  <Col xs="auto">
                    <Avatar ratio={type === 'project' ? '4by3' : '1by1'}>
                      <Avatar.Image className={type === 'user' ? 'rounded-circle' : 'rounded'} src={imgSrc} alt={title} />
                    </Avatar>
                  </Col>
                  <Col className="ms-n2">
                    <h4 className="text-body text-focus mb-1">{title}</h4>
                    {type === 'user' && (
                      <p className="text-muted small mb-0">
                        <span className={`text-${getStatusColor(status)}`}>●</span> {status}
                      </p>
                    )}
                    {(type === 'team' || type === 'project') && (
                      <p className="text-muted small mb-0">
                        <FeatherIcon icon="clock" size="1em" /> <time dateTime="2018-05-24">Updated {date}</time>
                      </p>
                    )}
                  </Col>
                </Row>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
