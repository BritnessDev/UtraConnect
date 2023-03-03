import className from 'classnames';
import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { Badge, Button, Card, Dropdown, OverlayTrigger, ProgressBar, Table, Tooltip } from 'react-bootstrap';
import { useSortBy, useTable } from 'react-table';
import { Avatar } from '../components';
import { activeProjects } from '../data';
import { formatLocaleDateString, getStatusColor } from '../helpers';

export default function ActiveAnalyticsProjects({ ...props }) {
  const data = useMemo(() => activeProjects, []);

  const columns = useMemo(
    () => [
      {
        Header: 'Project',
        accessor: 'title',
        Cell: ({ value }) => (
          <>
            <h4 className="fw-normal mb-1">{value}</h4>
            <small className="text-muted">Oki Doki Collective</small>
          </>
        ),
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => <Badge bg={`${getStatusColor(value)}-soft`}>{value}</Badge>,
      },
      {
        Header: 'Progress',
        accessor: 'progress',
        Cell: ({ value }) => (
          <div className="d-flex align-items-center">
            <div className="me-3">{value}%</div>
            <ProgressBar now={value} variant="secondary" className="progress-sm " style={{ minWidth: 40 }} />
          </div>
        ),
      },
      {
        Header: 'Due Date',
        accessor: 'date',
        Cell: ({ value }) => <time dateTime={value}>{formatLocaleDateString(value)}</time>,
      },
      {
        Header: 'Team',
        accessor: 'team',
        className: 'text-end',
        disableSortBy: true,
        Cell: ({ value }) => (
          <Avatar.Group>
            {value.map((item, index) => (
              <Avatar as={Link} key={index} href="/profile-posts" size="xs">
                <OverlayTrigger overlay={<Tooltip>{item.title}</Tooltip>}>
                  <Avatar.Image src={item.imgSrc} alt={item.title} className="rounded-circle" {...props} />
                </OverlayTrigger>
              </Avatar>
            ))}
          </Avatar.Group>
        ),
      },
      {
        id: 'actions',
        className: 'text-end',
        disableSortBy: true,
        Cell: () => (
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
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, useSortBy);

  return (
    <Card {...props}>
      <Card.Header>
        <h4 className="card-header-title">Active Projects</h4>
        <Button variant="white" size="sm">
          Export
        </Button>
      </Card.Header>
      <Table size="sm" className="card-table table-nowrap" hover responsive>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps({ role: null })}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(
                    column.getSortByToggleProps({
                      className: className(column.className, column.canSort && 'is-sortable'),
                      role: null,
                    })
                  )}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps({ role: null })}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps({ role: null })}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps({
                        className: cell.column.className,
                        role: null,
                      })}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Card>
  );
}
