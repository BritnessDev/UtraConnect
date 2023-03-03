import className from 'classnames';
import FeatherIcon from 'feather-icons-react';
import React, { useMemo } from 'react';
import { Badge, Button, Card, Dropdown, Table } from 'react-bootstrap';
import { useSortBy, useTable } from 'react-table';
import { Avatar } from '../components';
import { products } from '../data';
import { formatLocaleString, getStatusColor } from '../helpers';

export default function BestSellingProducts({ ...props }) {
  const data = useMemo(() => products, []);

  const columns = useMemo(
    () => [
      {
        Header: 'Product',
        accessor: 'title',
        Cell: (props) => (
          <div className="d-flex align-items-center">
            <Avatar>
              <Avatar.Image src={props.cell.row.original.imgSrc} className="rounded me-3" alt={props.value} />
            </Avatar>
            <div className="ms-3">
              <h4 className="fw-normal mb-1">{props.value}</h4>
              <small className="text-muted">{props.cell.row.original.description}</small>
            </div>
          </div>
        ),
      },
      {
        Header: 'Stock',
        accessor: 'status',
        Cell: ({ value }) => <Badge bg={`${getStatusColor(value)}-soft`}>{value}</Badge>,
      },
      {
        Header: 'Price',
        accessor: 'price',
        Cell: ({ value }) => <>${value}</>,
      },
      {
        Header: 'Monthly sales',
        accessor: 'monthlySales',
        Cell: ({ value }) => <>${formatLocaleString(value)}</>,
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
        <h4 className="card-header-title">Best Selling Products</h4>
        <Button size="sm" variant="white">
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
