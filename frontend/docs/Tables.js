import React, { useMemo } from 'react';
import { Badge, Card, Table } from 'react-bootstrap';
import { useSortBy, useTable } from 'react-table';
import { Header } from '../components';
import { Highlight } from '../components/vendor';

export default function Tables({ ...props }) {
  const data = useMemo(
    () => [
      {
        id: 1,
        first: 'Mark',
        last: 'Otto',
        handle: '@mdo',
      },
      {
        id: 2,
        first: 'Jacob',
        last: 'Thornton',
        handle: '@fat',
      },
      {
        id: 3,
        first: 'Larry',
        last: 'the Bird',
        handle: '@twitter',
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: '#',
        accessor: 'id',
      },
      {
        Header: 'First',
        accessor: 'first',
      },
      {
        Header: 'Last',
        accessor: 'last',
      },
      {
        Header: 'Handle',
        accessor: 'handle',
      },
    ],
    []
  );

  const { getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, useSortBy);

  return (
    <div id="tables" {...props}>
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>Tables</Header.Title>
        </Header.Body>
      </Header>
      <Card>
        <Card.Body>
          <Table size="sm" responsive>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
          <Table size="sm" striped responsive>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
          <Table size="sm" className="mb-0" hover responsive>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        No wrap{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>
      </h2>
      <p className="text-muted mb-4">Prevents table cell content from wrapping to another line.</p>
      <Card>
        <Card.Body>
          <Table size="sm" className="table-nowrap mb-0" responsive>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">Decription</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &nbsp;&nbsp;&lt;Table&nbsp;size=&quot;sm&quot;&nbsp;className=&quot;table-nowrap&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;...
            <br />
            &nbsp;&nbsp;&lt;/Table&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Please see the{' '}
        <a href="https://react-bootstrap.github.io/components/table/" target="_blank">
          official React Bootstrap documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Table&nbsp;{'}'}
            &nbsp;from&nbsp;'react-bootstrap';
          </Highlight>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Sorting{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>{' '}
        <Badge bg="warning-soft" className="ms-1 mt-n1">
          Plugin
        </Badge>
      </h2>
      <p className="text-muted mb-4">
        Create searchable, sortable, and filterable lists and tables with the simple but powerful react-table plugin.
      </p>
      <Card>
        <Card.Body>
          <Table size="sm" wrap="nowrap" className="mb-0" responsive>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps({ role: null })}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(
                        column.getSortByToggleProps({
                          className: column.canSort && 'is-sortable',
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
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            export&nbsp;default&nbsp;function&nbsp;Tables()&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;const&nbsp;data&nbsp;=&nbsp;useMemo(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;()&nbsp;=&gt;&nbsp;[
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id:&nbsp;1,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;first:&nbsp;'Mark',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;last:&nbsp;'Otto',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;handle:&nbsp;'@mdo',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id:&nbsp;2,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;first:&nbsp;'Jacob',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;last:&nbsp;'Thornton',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;handle:&nbsp;'@fat',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id:&nbsp;3,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;first:&nbsp;'Larry',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;last:&nbsp;'the&nbsp;Bird',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;handle:&nbsp;'@twitter',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;],
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;[]
            <br />
            &nbsp;&nbsp;);
            <br />
            <br />
            &nbsp;&nbsp;const&nbsp;columns&nbsp;=&nbsp;useMemo(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;()&nbsp;=&gt;&nbsp;[
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Header:&nbsp;'#',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;accessor:&nbsp;'id',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Header:&nbsp;'First',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;accessor:&nbsp;'first',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Header:&nbsp;'Last',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;accessor:&nbsp;'last',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Header:&nbsp;'Handle',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;accessor:&nbsp;'handle',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;],
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;[]
            <br />
            &nbsp;&nbsp;);
            <br />
            <br />
            &nbsp;&nbsp;const&nbsp;{'{'}&nbsp;getTableBodyProps,&nbsp;headerGroups,&nbsp;rows,&nbsp;prepareRow&nbsp;
            {'}'}&nbsp;=&nbsp;useTable(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}&nbsp;columns,&nbsp;data&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;useSortBy
            <br />
            &nbsp;&nbsp;);
            <br />
            <br />
            &nbsp;&nbsp;return&nbsp;(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Table&nbsp;size=&quot;sm&quot;&nbsp;className=&quot;table-nowrap&quot;&nbsp;responsive&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;thead&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}headerGroups.map((headerGroup)&nbsp;=&gt;&nbsp;(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&nbsp;{'{'}
            ...headerGroup.getHeaderGroupProps(){'}'}&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            headerGroup.headers.map((column)&nbsp;=&gt;&nbsp;(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            ...column.getHeaderProps(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;column.getSortByToggleProps(
            {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className:&nbsp;column.canSort&nbsp;&amp;&amp;&nbsp;'is-sortable',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {'}'})<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;){'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            column.render('Header'){'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/th&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)){'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)){'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/thead&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tbody&nbsp;{'{'}...getTableBodyProps(){'}'}&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}rows.map((row)&nbsp;=&gt;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;prepareRow(row);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&nbsp;{'{'}
            ...row.getRowProps(){'}'}&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            row.cells.map((cell)&nbsp;=&gt;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {'{'}...cell.getCellProps({'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className:&nbsp;cell.column.className,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {'}'}){'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {'{'}cell.render('Cell'){'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/td&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}){'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}){'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tbody&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Table&gt;
            <br />
            &nbsp;&nbsp;)
            <br />
            {'}'}
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Please see the{' '}
        <a href="https://react-table.tanstack.com/" target="_blank">
          official plugin documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}
            &nbsp;useGlobalFilter,&nbsp;usePagination,&nbsp;useTable&nbsp;{'}'}
            &nbsp;from&nbsp;'react-table';
          </Highlight>
        </Card.Body>
      </Card>
    </div>
  );
}
