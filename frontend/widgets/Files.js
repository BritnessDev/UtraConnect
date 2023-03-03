import FeatherIcon from 'feather-icons-react';
import React, { useMemo } from 'react';
import { Button, Card, Col, Dropdown, Form, InputGroup, ListGroup, Row } from 'react-bootstrap';
import { useGlobalFilter, usePagination, useTable } from 'react-table';
import { Avatar } from '../components';
import { Select } from '../components/vendor';
import { formatLocaleDateString } from '../helpers';

export default function Files({ files }) {
  const data = useMemo(() => files, []);

  const columns = useMemo(
    () => [
      {
        accessor: 'author',
      },
      {
        accessor: 'date',
      },
      {
        accessor: 'fileSize',
      },
      {
        accessor: 'fileType',
      },
      {
        accessor: 'icon',
      },
      {
        accessor: 'imgSrc',
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
    <Card>
      <Card.Header>
        <h4 className="card-header-title">Files</h4>
        <form className="me-3">
          <Select
            options={[
              { value: 'asc', label: 'Asc' },
              { value: 'desc', label: 'Desc' },
            ]}
            layout="flush"
            placeholder="Sort order"
            size="sm"
          />
        </form>
        <Button size="sm">Upload</Button>
      </Card.Header>
      <Card.Header>
        <InputGroup className="input-group-merge input-group-flush input-group-reverse">
          <Form.Control
            type="search"
            placeholder="Search"
            onChange={(e) => setGlobalFilter(e.target.value ? e.target.value : undefined)}
          />
          <InputGroup.Text>
            <FeatherIcon icon="search" size="1em" />
          </InputGroup.Text>
        </InputGroup>
      </Card.Header>
      <Card.Body>
        <ListGroup className="list-group-lg list-group-flush my-n4">
          {page.map((row, i) => {
            prepareRow(row);

            const [author, date, fileSize, fileType, icon, imgSrc, title] = row.cells.map((cell) => cell.value);

            return (
              <ListGroup.Item {...row.getRowProps({ role: null })}>
                <Row className="align-items-center">
                  <Col xs="auto">
                    <Avatar as="a" size="lg" href="#!">
                      {imgSrc && <Avatar.Image className="rounded" src={imgSrc} alt={title} />}
                      {icon && (
                        <Avatar.Title className="rounded bg-white text-secondary">
                          <FeatherIcon icon={icon} size="1em" />
                        </Avatar.Title>
                      )}
                    </Avatar>
                  </Col>
                  <Col className="ms-n2">
                    <h4 className="mb-1">
                      <a href="#!">{title}</a>
                    </h4>
                    <Card.Text className="small text-muted mb-1">
                      {fileSize} {fileType}
                    </Card.Text>
                    <Card.Text className="small text-muted">
                      Uploaded by {author} on{' '}
                      <time dateTime={date}>
                        {formatLocaleDateString(date, {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </time>
                    </Card.Text>
                  </Col>
                  <Col xs="auto">
                    <Button variant="white" size="sm" className="d-none d-md-inline-block">
                      Download
                    </Button>
                  </Col>
                  <Col xs="auto">
                    <Dropdown align="end">
                      <Dropdown.Toggle as="span" className="dropdown-ellipses" role="button">
                        <FeatherIcon icon="more-vertical" size="17" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#!">Action</Dropdown.Item>
                        <Dropdown.Item href="#!">Another action</Dropdown.Item>
                        <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
