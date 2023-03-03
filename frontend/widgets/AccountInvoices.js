import Link from 'next/link';
import React from 'react';
import { Badge, Card, Table } from 'react-bootstrap';
import { formatLocaleDateString, formatLocaleString, getStatusColor } from '../helpers';

export default function AccountInvoices({ ...props }) {
  const data = [
    {
      date: '2020-04-24',
      price: 29,
      invoice: 10395,
      url: '/invoice',
      status: 'Outstanding',
    },
    {
      date: '2020-03-24',
      price: 29,
      invoice: 10244,
      url: '/invoice',
      status: 'Paid',
    },
    {
      date: '2020-02-24',
      price: 29,
      invoice: 10119,
      url: '/invoice',
      status: 'Paid',
    },
    {
      date: '2020-01-24',
      price: 29,
      invoice: 10062,
      url: '/invoice',
      status: 'Paid',
    },
  ];

  const items = data.map((item, index) => (
    <tr key={index}>
      <td>
        <Link href={item.url}>Invoice #{item.invoice}</Link>
      </td>
      <td>
        <time dateTime={item.date}>
          {formatLocaleDateString(item.date, {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </time>
      </td>
      <td>
        $
        {formatLocaleString(item.price, {
          useGrouping: false,
          minimumFractionDigits: 2,
        })}
      </td>
      <td>
        <Badge bg={getStatusColor(item.status)}>{item.status}</Badge>
      </td>
    </tr>
  ));

  return (
    <Card {...props}>
      <Card.Header>
        <h4 className="card-header-title">Invoices</h4>
      </Card.Header>
      <Table size="sm" className="card-table table-nowrap" responsive>
        <thead>
          <tr>
            <th>Invoice ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="fs-base">{items}</tbody>
      </Table>
    </Card>
  );
}
