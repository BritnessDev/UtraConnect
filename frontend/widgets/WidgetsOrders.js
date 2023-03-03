import className from 'classnames';
import FeatherIcon from 'feather-icons-react';
import React, { useMemo } from 'react';
import { Badge, Card, Col, Dropdown, FormControl, InputGroup, Row, Table } from 'react-bootstrap';
import { useGlobalFilter, usePagination, useRowSelect, useSortBy, useTable } from 'react-table';
import { IndeterminateCheckbox } from '../components/vendor';
import { orders } from '../data';
import { formatLocaleDateString, getStatusColor } from '../helpers';

export default function WidgetsOrders({ ...props }) {
  const data = useMemo(() => orders.slice(0, 4), []);

  const columns = useMemo(
    () => [
      {
        id: 'selection',
        Header: ({ getToggleAllRowsSelectedProps }) => (
          <div>
            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
          </div>
        ),
        Cell: ({ row }) => (
          <div>
            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
          </div>
        ),
      },
      {
        Header: 'Order',
        accessor: 'id',
        Cell: ({ value }) => `#${value}`,
      },
      {
        Header: 'Product',
        accessor: 'product',
      },
      {
        Header: 'Date',
        accessor: 'date',
        Cell: ({ value }) => (
          <time dateTime={value}>
            {formatLocaleDateString(value, {
              month: '2-digit',
              day: 'numeric',
              year: '2-digit',
            })}
          </time>
        ),
      },
      {
        Header: 'Total',
        accessor: 'total',
        Cell: ({ value }) => `$${value}`,
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => <Badge bg={`${getStatusColor(value)}-soft`}>{value}</Badge>,
      },
      {
        Header: 'Payment method',
        accessor: 'method',
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

  const { getTableBodyProps, headerGroups, page, prepareRow, setGlobalFilter } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect
  );

  return (
    <Card {...props}>
      <Card.Header>
        <InputGroup className="input-group-merge input-group-flush input-group-reverse">
          <FormControl
            type="search"
            placeholder="Search"
            onChange={(e) => setGlobalFilter(e.target.value ? e.target.value : undefined)}
          />
          <InputGroup.Text>
            <FeatherIcon icon="search" size="1em" />
          </InputGroup.Text>
        </InputGroup>
      </Card.Header>
      <Table size="sm" className="card-table table-nowrap" responsive>
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
          {page.map((row, i) => {
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
