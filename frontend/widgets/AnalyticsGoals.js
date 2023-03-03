import className from 'classnames';
import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { Button, Card, Dropdown, OverlayTrigger, Table, Tooltip } from 'react-bootstrap';
import { useSortBy, useTable } from 'react-table';
import { Avatar } from '../components';
import { goals } from '../data';
import { formatLocaleDateString, getStatusColor } from '../helpers';

export default function AnalyticsGoals({ ...props }) {
  const data = useMemo(() => goals, []);

  const columns = useMemo(
    () => [
      {
        Header: 'Goal',
        accessor: 'title',
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => (
          <>
            <span className={`text-${getStatusColor(value)}`}>●</span> {value}
          </>
        ),
      },
      {
        Header: 'Progress',
        accessor: 'progress',
        Cell: ({ value }) => value + '%',
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
              <Avatar as={Link} href="/profile-posts" key={index} size="xs">
                <OverlayTrigger overlay={<Tooltip>{item.title}</Tooltip>}>
                  <Avatar.Image src={item.imgSrc} alt={item.title} className="rounded-circle" />
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
          <Dropdown>
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
        <h4 className="card-header-title">Goals</h4>
        <Button size="sm" variant="white">
          Export
        </Button>
      </Card.Header>
      <Table size="sm" className="table-nowrap card-table" responsive {...getTableProps({ role: null })}>
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
