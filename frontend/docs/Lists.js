import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { Badge, Button, Card, Col, Form, InputGroup, ListGroup, Pagination, Row, Table } from 'react-bootstrap';
import { useGlobalFilter, usePagination, useTable } from 'react-table';
import { Avatar, Header } from '../components';
import { Highlight } from '../components/vendor';
import { getStatusColor } from '../helpers';

export default function Lists({ ...props }) {
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

  const {
    gotoPage,
    page,
    pageOptions,
    prepareRow,
    setGlobalFilter,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 3 },
    },
    useGlobalFilter,
    usePagination
  );

  return (
    <div id="lists" {...props}>
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>List group</Header.Title>
          <Header.Subtitle>
            List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content
            within.
          </Header.Subtitle>
        </Header.Body>
      </Header>
      <Card>
        <Card.Body>
          <ListGroup className="mb-4">
            <ListGroup.Item active>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              Morbi leo risus{' '}
              <Badge bg="primary" pill>
                1
              </Badge>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item href="#!" active>
              Cras justo odio
            </ListGroup.Item>
            <ListGroup.Item href="#!">Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item href="#!">Morbi leo risus</ListGroup.Item>
            <ListGroup.Item href="#!">Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item href="#!" className="d-flex justify-content-between align-items-center">
              Morbi leo risus{' '}
              <Badge bg="primary" pill>
                1
              </Badge>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        List group large{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>
      </h2>
      <p className="text-muted mb-4">
        Increase the vertical padding of list group items with the <code>list-group-lg</code> modifier.
      </p>
      <Card>
        <Card.Body>
          <ListGroup className="list-group-lg">
            <ListGroup.Item active>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;ListGroup&nbsp;className=&quot;list-group-lg&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;ListGroup.Item&nbsp;active&gt;Cras&nbsp;justo&nbsp;odio&lt;/ListGroup.Item&gt;
            <br />
            &nbsp;&nbsp;&lt;ListGroup.Item&gt;Dapibus&nbsp;ac&nbsp;facilisis&nbsp;in&lt;/ListGroup.Item&gt;
            <br />
            &nbsp;&nbsp;&lt;ListGroup.Item&gt;Morbi&nbsp;leo&nbsp;risus&lt;/ListGroup.Item&gt;
            <br />
            &nbsp;&nbsp;&lt;ListGroup.Item&gt;Porta&nbsp;ac&nbsp;consectetur&nbsp;ac&lt;/ListGroup.Item&gt;
            <br />
            &nbsp;&nbsp;&lt;ListGroup.Item&gt;Vestibulum&nbsp;at&nbsp;eros&lt;/ListGroup.Item&gt;
            <br />
            &lt;/ListGroup&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        List group focus{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>
      </h2>
      <p className="text-muted mb-4">
        Changes the color of the <code>.text-focus</code> elements to <code>$primary</code> on <code>ListGroup.Item</code> focus event. Useful for clickable{' '}
        <code>ListGroup.Item</code> elements when navigating with a keyboard.
      </p>
      <Card>
        <Card.Body>
          <ListGroup className="list-group-flush list-group-focus">
            <ListGroup.Item href="/team-overview" action>
              <Row className="align-items-center">
                <Col xs="auto">
                  <Avatar>
                    <Avatar.Image alt="..." className="rounded" src="/img/avatars/teams/team-logo-1.jpg" />
                  </Avatar>
                </Col>
                <Col className="ms-n2">
                  <h4 className="text-body text-focus mb-1">Airbnb</h4>
                  <p className="small text-muted mb-0">
                    <FeatherIcon icon="clock" size="1em" /> <time dateTime="2018-05-24">Updated 2hr ago</time>
                  </p>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item href="/team-overview" action>
              <Row className="align-items-center">
                <Col xs="auto">
                  <Avatar>
                    <Avatar.Image alt="..." className="rounded" src="/img/avatars/teams/team-logo-2.jpg" />
                  </Avatar>
                </Col>
                <Col className="ms-n2">
                  <h4 className="text-body text-focus mb-1 name">Medium Corporation</h4>
                  <p className="small text-muted mb-0">
                    <FeatherIcon icon="clock" size="1em" /> <time dateTime="2018-05-24">Updated 2hr ago</time>
                  </p>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item href="/project-overview" action>
              <Row className="align-items-center">
                <Col xs="auto">
                  <Avatar ratio="4by3">
                    <Avatar.Image alt="..." className="rounded" src="/img/avatars/projects/project-1.jpg" />
                  </Avatar>
                </Col>
                <Col className="ms-n2">
                  <h4 className="text-body text-focus mb-1 name">Homepage Redesign</h4>
                  <p className="small text-muted mb-0">
                    <FeatherIcon icon="clock" size="1em" /> <time dateTime="2018-05-24">Updated 4hr ago</time>
                  </p>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;ListGroup&nbsp;className=&quot;list-group-focus&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;ListGroup.Item&nbsp;href=&quot;#!&quot;&nbsp;action&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;h4&nbsp;className=&quot;text-body&nbsp;text-focus&nbsp;mb-1&quot;&gt;Item&nbsp;title&lt;/h4&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&nbsp;className=&quot;mb-0&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem&nbsp;ipsum&nbsp;dolor&nbsp;sit,&nbsp;amet&nbsp;consectetur&nbsp;adipisicing&nbsp;elit.&nbsp;Corrupti,&nbsp;eius
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quae,&nbsp;sint&nbsp;fugit&nbsp;obcaecati&nbsp;reprehenderit&nbsp;reiciendis&nbsp;soluta&nbsp;ab&nbsp;adipisci
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;harum&nbsp;dolore&nbsp;beatae,&nbsp;nihil&nbsp;eaque&nbsp;architecto&nbsp;quas&nbsp;quasi&nbsp;aspernatur&nbsp;natus
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;atque.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;
            <br />
            &nbsp;&nbsp;&lt;/ListGroup.Item&gt;
            <br />
            &lt;/ListGroup&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Timeline/activity{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>{' '}
        <Badge bg="success-soft" className="mt-n1">
          New
        </Badge>
      </h2>
      <p className="text-muted mb-4">
        Turn a list group into a timeline/activity list by adding the <code>.list-group-activity</code> modifier and/or modified avatars.
      </p>
      <Card>
        <Card.Header>
          <h4 className="card-header-title">Notification Timeline</h4>
          <a className="small" href="#!">
            View all
          </a>
        </Card.Header>
        <Card.Body>
          <ListGroup className="list-group-flush list-group-activity my-n3">
            <ListGroup.Item>
              <Row>
                <Col xs="auto">
                  <Avatar size="sm">
                    <Avatar.Title className="rounded-circle bg-primary-soft fs-lg text-primary">
                      <FeatherIcon icon="mail" size="1em" />
                    </Avatar.Title>
                  </Avatar>
                </Col>
                <Col className="ms-n2">
                  <h5 className="mb-1">Launchday 1.4.0 update email sent</h5>
                  <p className="small text-gray-700 mb-0">Sent to all 1,851 subscribers over a 24 hour period</p>
                  <small className="text-muted">2m ago</small>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col xs="auto">
                  <Avatar size="sm">
                    <Avatar.Title className="rounded-circle bg-primary-soft fs-lg text-primary">
                      <FeatherIcon icon="mail" size="1em" />
                    </Avatar.Title>
                  </Avatar>
                </Col>
                <Col className="ms-n2">
                  <h5 className="mb-1">Launchday 1.4.0 update email sent</h5>
                  <p className="small text-gray-700 mb-0">Sent to all 1,851 subscribers over a 24 hour period</p>
                  <small className="text-muted">2m ago</small>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col xs="auto">
                  <Avatar size="sm">
                    <Avatar.Title className="rounded-circle bg-primary-soft fs-lg text-primary">
                      <FeatherIcon icon="mail" size="1em" />
                    </Avatar.Title>
                  </Avatar>
                </Col>
                <Col className="ms-n2">
                  <h5 className="mb-1">Launchday 1.4.0 update email sent</h5>
                  <p className="small text-gray-700 mb-0">Sent to all 1,851 subscribers over a 24 hour period</p>
                  <small className="text-muted">2m ago</small>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;ListGroup&nbsp;className=&quot;list-group-flush&nbsp;list-group-activity&nbsp;my-n3&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;ListGroup.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Row&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Col&nbsp;xs=&quot;auto&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Avatar&nbsp;size=&quot;sm&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Avatar.Title&nbsp;className=&quot;rounded-circle&nbsp;bg-primary-soft&nbsp;fs-lg&nbsp;text-primary&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;FeatherIcon&nbsp;icon=&quot;mail&quot;&nbsp;size=&quot;1em&quot;&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Avatar.Title&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Avatar&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Col&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Col&nbsp;className=&quot;ms-n2&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h5&nbsp;className=&quot;mb-1&quot;&gt;Launchday&nbsp;1.4.0&nbsp;update&nbsp;email&nbsp;sent&lt;/h5&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&nbsp;className=&quot;small&nbsp;text-gray-700&nbsp;mb-0&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sent&nbsp;to&nbsp;all&nbsp;1,851&nbsp;subscribers&nbsp;over&nbsp;a&nbsp;24&nbsp;hour&nbsp;period
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;small&nbsp;className=&quot;text-muted&quot;&gt;2m&nbsp;ago&lt;/small&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Col&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;
            <br />
            &nbsp;&nbsp;&lt;/ListGroup.Item&gt;
            <br />
            &lt;/ListGroup&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Header>
          <h4 className="card-header-title">Notification Timeline</h4>
          <a className="small" href="#!">
            View all
          </a>
        </Card.Header>
        <Card.Body>
          <ListGroup className="list-group-flush my-n3">
            <ListGroup.Item>
              <Row>
                <Col xs="auto">
                  <Avatar size="sm">
                    <Avatar.Title className="rounded-circle bg-primary-soft fs-lg text-primary">
                      <FeatherIcon icon="mail" size="1em" />
                    </Avatar.Title>
                  </Avatar>
                </Col>
                <Col className="ms-n2">
                  <div className="small">
                    <strong>Launchday Update email sent</strong> to 1,851 subscribers over a 24 hour period for maximum open and reply rates.
                  </div>
                  <small className="text-muted">2m ago</small>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col xs="auto">
                  <Avatar size="sm">
                    <Avatar.Title className="rounded-circle bg-primary-soft fs-lg text-primary">
                      <FeatherIcon icon="mail" size="1em" />
                    </Avatar.Title>
                  </Avatar>
                </Col>
                <Col className="ms-n2">
                  <div className="small">
                    <strong>Launchday Update email sent</strong> to 1,851 subscribers over a 24 hour period for maximum open and reply rates.
                  </div>
                  <small className="text-muted">2m ago</small>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col xs="auto">
                  <Avatar size="sm">
                    <Avatar.Title className="rounded-circle bg-primary-soft fs-lg text-primary">
                      <FeatherIcon icon="mail" size="1em" />
                    </Avatar.Title>
                  </Avatar>
                </Col>
                <Col className="ms-n2">
                  <div className="small">
                    <strong>Launchday Update email sent</strong> to 1,851 subscribers over a 24 hour period for maximum open and reply rates.
                  </div>
                  <small className="text-muted">2m ago</small>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;ListGroup&nbsp;className=&quot;list-group-flush&nbsp;my-n3&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;ListGroup.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Row&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Col&nbsp;xs=&quot;auto&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Avatar&nbsp;size=&quot;sm&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Avatar.Title&nbsp;className=&quot;rounded-circle&nbsp;bg-primary-soft&nbsp;fs-lg&nbsp;text-primary&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;FeatherIcon&nbsp;icon=&quot;mail&quot;&nbsp;size=&quot;1em&quot;&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Avatar.Title&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Avatar&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Col&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Col&nbsp;className=&quot;ms-n2&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&nbsp;className=&quot;small&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;strong&gt;Launchday&nbsp;Update&nbsp;email&nbsp;sent&lt;/strong&gt;&nbsp;to&nbsp;1,851
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subscribers&nbsp;over&nbsp;a&nbsp;24&nbsp;hour&nbsp;period&nbsp;for&nbsp;maximum&nbsp;open&nbsp;and&nbsp;reply
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rates.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;small&nbsp;className=&quot;text-muted&quot;&gt;2m&nbsp;ago&lt;/small&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Col&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;
            <br />
            &nbsp;&nbsp;&lt;/ListGroup.Item&gt;
            <br />
            &lt;/ListGroup&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Please see the{' '}
        <a href="https://react-bootstrap.github.io/components/list-group/" target="_blank">
          official React Bootstrap documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;ListGroup&nbsp;{'}'}
            &nbsp;from&nbsp;'react-bootstrap';
          </Highlight>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        React Table{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>
      </h2>
      <p className="text-muted mb-4">Create searchable, sortable, and filterable lists and tables with the simple but powerful react-table plugin.</p>
      <Card>
        <Card.Header>
          <h4 className="card-header-title">Add a member</h4>
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
        <Card.Footer>
          <Pagination>
            {pageOptions.map((option, index) => (
              <Pagination.Item
                key={index}
                active={option === pageIndex}
                onClick={(e) => {
                  e.preventDefault();
                  gotoPage(option);
                }}
              >
                {option + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </Card.Footer>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            export&nbsp;default&nbsp;function&nbsp;List()&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;const&nbsp;data&nbsp;=&nbsp;useMemo(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;()&nbsp;=&gt;&nbsp;[
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;itemA:&nbsp;'...',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;itemB:&nbsp;'...',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;itemC:&nbsp;'...',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;],&nbsp;[]
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
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;accessor:&nbsp;'itemA',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;accessor:&nbsp;'itemB',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;accessor:&nbsp;'itemC',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;],&nbsp;[]
            <br />
            &nbsp;&nbsp;);
            <br />
            <br />
            &nbsp;&nbsp;const&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;gotoPage,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;page,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;pageOptions,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;prepareRow,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;setGlobalFilter,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;state:&nbsp;{'{'}&nbsp;pageIndex&nbsp;{'}'},
            <br />
            &nbsp;&nbsp;{'}'}&nbsp;=&nbsp;useTable(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;columns,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;initialState:&nbsp;{'{'}
            &nbsp;pageSize:&nbsp;3&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;useGlobalFilter,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;usePagination
            <br />
            &nbsp;&nbsp;);
            <br />
            <br />
            &nbsp;&nbsp;return&nbsp;(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Form.Control
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type=&quot;search&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onChange={'{'}
            (e)&nbsp;=&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setGlobalFilter(e.target.value&nbsp;?&nbsp;e.target.value&nbsp;:&nbsp;undefined)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ListGroup&nbsp;layout=&quot;flush&quot;&nbsp;className=&quot;my-n3&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            page.map((row,&nbsp;i)&nbsp;=&gt;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;prepareRow(row);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const&nbsp;[itemA,&nbsp;itemB,&nbsp;itemC]&nbsp;=&nbsp;row.cells.map((cell)&nbsp;=&gt;&nbsp;cell.value);
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ListGroup.Item&nbsp;
            {'{'}...row.getRowProps(){'}'}&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&nbsp;className=&quot;row&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&nbsp;className=&quot;col&quot;&gt;
            {'{'}itemA{'}'}&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&nbsp;className=&quot;col&quot;&gt;
            {'{'}itemB{'}'}&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&nbsp;className=&quot;col&quot;&gt;
            {'{'}itemC{'}'}&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ListGroup.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}){'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ListGroup&gt;
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Pagination&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            pageOptions.map((option,&nbsp;index)&nbsp;=&gt;&nbsp;(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Pagination.Item
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key=
            {'{'}index{'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;active=
            {'{'}option&nbsp;===&nbsp;pageIndex{'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onClick=
            {'{'}()&nbsp;=&gt;&nbsp;gotoPage(option){'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {'{'}option&nbsp;+&nbsp;1{'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Pagination.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)){'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Pagination&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/&gt;
            <br />
            &nbsp;&nbsp;);
            <br />
            {'}'}
            <br />
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
