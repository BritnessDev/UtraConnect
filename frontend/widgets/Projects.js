import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import { Button, ButtonGroup, Card, Col, Container, Dropdown, Form, InputGroup, Nav, OverlayTrigger, ProgressBar, Row, Tooltip } from 'react-bootstrap';
import { useGlobalFilter, usePagination, useTable } from 'react-table';
import { Avatar } from '../components';
import { getProgressColor } from '../helpers';

export default function Projects({ projects }) {
  const [activeTab, setActiveTab] = useState(0);
  const data = useMemo(() => projects, []);

  const columns = useMemo(
    () => [
      {
        accessor: 'imgSrc',
      },
      {
        accessor: 'progress',
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

  const dropdown = (
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
  );

  return (
    <Container fluid>
      <Row className="mb-4">
        <Col>
          <form>
            <InputGroup className="input-group-merge input-group-reverse" size="lg">
              <Form.Control type="search" placeholder="Search" onChange={(e) => setGlobalFilter(e.target.value ? e.target.value : undefined)} />
              <InputGroup.Text>
                <FeatherIcon icon="search" size="1em" />
              </InputGroup.Text>
            </InputGroup>
          </form>
        </Col>
        <Col xs="auto">
          <ButtonGroup className="nav d-inline-flex">
            <Button variant="white" size="lg" active={activeTab === 0} onClick={() => setActiveTab(0)}>
              <FeatherIcon icon="grid" size="1em" />
            </Button>
            <Button variant="white" size="lg" active={activeTab === 1} onClick={() => setActiveTab(1)}>
              <FeatherIcon icon="list" size="1em" />
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      {activeTab === 0 && (
        <Row>
          {page.map((row, i) => {
            prepareRow(row);

            const [imgSrc, progress, title] = row.cells.map((cell) => cell.value);

            return (
              <Col xs={12} md={6} xl={4} {...row.getRowProps({ role: null })}>
                <Card>
                  <Link href="/project-overview">
                    <Card.Img variant="top" src={imgSrc} alt={title} />
                  </Link>
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col>
                        <h4 className="mb-2 name">
                          <Link href="/project-overview">{title}</Link>
                        </h4>
                        <Card.Text className="small text-muted">Updated 4hr ago</Card.Text>
                      </Col>
                      <Col xs="auto">{dropdown}</Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer className="card-footer-boxed">
                    <Row className="align-items-center">
                      <Col>
                        <Row className="align-items-center g-0">
                          <Col xs="auto">
                            <div className="small me-2">{progress}%</div>
                          </Col>
                          <Col>
                            <ProgressBar now={progress} variant={getProgressColor(progress)} className="progress-sm" />
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="auto">
                        <Avatar.Group>
                          <Avatar as={Link} href="/profile-posts" size="xs">
                            <OverlayTrigger overlay={<Tooltip>Ab Hadley</Tooltip>}>
                              <Avatar.Image src="/img/avatars/profiles/avatar-2.jpg" alt="Ab Hadley" className="rounded-circle" />
                            </OverlayTrigger>
                          </Avatar>
                          <Avatar as={Link} href="/profile-posts" size="xs">
                            <OverlayTrigger overlay={<Tooltip>Adolfo Hess</Tooltip>}>
                              <Avatar.Image src="/img/avatars/profiles/avatar-3.jpg" alt="Adolfo Hess" className="rounded-circle" />
                            </OverlayTrigger>
                          </Avatar>
                          <Avatar as={Link} href="/profile-posts" size="xs">
                            <OverlayTrigger overlay={<Tooltip>Daniela Dewitt</Tooltip>}>
                              <Avatar.Image src="/img/avatars/profiles/avatar-4.jpg" alt="Daniela Dewitt" className="rounded-circle" />
                            </OverlayTrigger>
                          </Avatar>
                          <Avatar as={Link} href="/profile-posts" size="xs">
                            <OverlayTrigger overlay={<Tooltip>Miyah Myles</Tooltip>}>
                              <Avatar.Image src="/img/avatars/profiles/avatar-5.jpg" alt="Miyah Myles" className="rounded-circle" />
                            </OverlayTrigger>
                          </Avatar>
                        </Avatar.Group>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
      {activeTab === 1 && (
        <Row>
          {page.map((row, i) => {
            prepareRow(row);

            const [imgSrc, progress, title] = row.cells.map((cell) => cell.value);

            return (
              <Col xs={12} {...row.getRowProps({ role: null })}>
                <Card>
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col xs="auto">
                        <Avatar as={Link} href="/project-overview" ratio="4by3" size="lg">
                          <Avatar.Image src={imgSrc} className="rounded" alt={title} />
                        </Avatar>
                      </Col>
                      <Col className="ms-n2">
                        <h4 className="mb-1 name">
                          <Link href="/project-overview">{title}</Link>
                        </h4>
                        <Card.Text className="small text-muted mb-1">
                          <time dateTime="2018-06-21">Updated 2hr ago</time>
                        </Card.Text>
                        <Row className="align-items-center g-0">
                          <Col xs="auto">
                            <div className="small me-2">{progress}%</div>
                          </Col>
                          <Col>
                            <ProgressBar now={progress} variant={getProgressColor(progress)} className="progress-sm" />
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="auto">
                        <Avatar.Group className="d-none d-md-inline-flex">
                          <Avatar as={Link} href="/profile-posts" size="xs">
                            <OverlayTrigger overlay={<Tooltip>Ab Hadley</Tooltip>}>
                              <Avatar.Image src="/img/avatars/profiles/avatar-2.jpg" alt="Ab Hadley" className="rounded-circle" />
                            </OverlayTrigger>
                          </Avatar>
                          <Avatar as={Link} href="/profile-posts" size="xs">
                            <OverlayTrigger overlay={<Tooltip>Adolfo Hess</Tooltip>}>
                              <Avatar.Image src="/img/avatars/profiles/avatar-3.jpg" alt="Adolfo Hess" className="rounded-circle" />
                            </OverlayTrigger>
                          </Avatar>
                          <Avatar as={Link} href="/profile-posts" size="xs">
                            <OverlayTrigger overlay={<Tooltip>Daniela Dewitt</Tooltip>}>
                              <Avatar.Image src="/img/avatars/profiles/avatar-4.jpg" alt="Daniela Dewitt" className="rounded-circle" />
                            </OverlayTrigger>
                          </Avatar>
                          <Avatar as={Link} href="/profile-posts" size="xs">
                            <OverlayTrigger overlay={<Tooltip>Miyah Myles</Tooltip>}>
                              <Avatar.Image src="/img/avatars/profiles/avatar-5.jpg" alt="Miyah Myles" className="rounded-circle" />
                            </OverlayTrigger>
                          </Avatar>
                        </Avatar.Group>
                      </Col>
                      <Col xs="auto">{dropdown}</Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
    </Container>
  );
}
