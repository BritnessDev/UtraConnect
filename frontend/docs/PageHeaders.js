import React, { useState } from 'react';
import { Badge, Button, Card, Col, Nav, Row, Table } from 'react-bootstrap';
import { Header } from '../components';
import { Highlight } from '../components/vendor';
import { EcommerceHeader, ProfileHeader, ProjectHeader } from '../widgets';

export default function PageHeaders({ ...props }) {
  const [index, setIndex] = useState(0);

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const datasets = [
    {
      data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40],
      yAxisID: 'yAxisOne',
    },
    {
      data: [50, 75, 35, 25, 55, 87, 67, 53, 25, 80, 87, 45],
      yAxisID: 'yAxisOne',
    },
    {
      data: [40, 57, 25, 50, 57, 32, 46, 28, 59, 34, 52, 48],
      yAxisID: 'yAxisTwo',
    },
  ];

  const options = {
    scales: {
      y: {
        yAxisOne: {
          id: 'yAxisOne',
          type: 'linear',
          display: 'auto',
          gridLines: {
            color: '#283E59',
            zeroLineColor: '#283E59',
          },
          ticks: {
            callback: function (value) {
              return value + 'k';
            },
          },
        },
        yAxisTwo: {
          id: 'yAxisTwo',
          type: 'linear',
          display: 'auto',
          gridLines: {
            color: '#283E59',
            zeroLineColor: '#283E59',
          },
          ticks: {
            callback: function (value) {
              return value + '%';
            },
          },
        },
      },
    },
  };

  return (
    <div id="pageHeaders" {...props}>
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>
            Page headers{' '}
            <Badge bg="primary-soft" className="ms-1 mt-n1">
              Dashkit only
            </Badge>
          </Header.Title>
          <Header.Subtitle>The page header component that can be easily extended with other Bootstrap and Dashkit components.</Header.Subtitle>
        </Header.Body>
      </Header>
      <h2 className="mb-2">Basic</h2>
      <p className="text-muted mb-4">The basic page header with a preheading and a heading.</p>
      <Card>
        <Card.Body>
          <Header>
            <Header.Body>
              <Header.Pretitle>Members</Header.Pretitle>
              <Header.Title>Dianna Smiley</Header.Title>
            </Header.Body>
          </Header>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Header&gt;
            <br />
            &nbsp;&nbsp;&lt;Header.Body&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Header.Pretitle&gt;Members&lt;/Header.Pretitle&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Header.Title&gt;Dianna&nbsp;Smiley&lt;/Header.Title&gt;
            <br />
            &nbsp;&nbsp;&lt;/Header.Body&gt;
            <br />
            &lt;/Header&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Button</h2>
      <p className="text-muted mb-4">The basic page header extended with a button.</p>
      <Card>
        <Card.Body>
          <Header>
            <Header.Body>
              <Row className="align-items-center">
                <Col>
                  <Header.Pretitle>Members</Header.Pretitle>
                  <Header.Title>Dianna Smiley</Header.Title>
                </Col>
                <Col xs="auto">
                  <Button>Subscribe</Button>
                </Col>
              </Row>
            </Header.Body>
          </Header>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Header&gt;
            <br />
            &nbsp;&nbsp;&lt;Header.Body&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Row&nbsp;className=&quot;align-items-center&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Col&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Header.Pretitle&gt;Members&lt;/Header.Pretitle&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Header.Title&gt;Dianna&nbsp;Smiley&lt;/Header.Title&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Col&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Col&nbsp;xs=&quot;auto&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Button&gt;Subscribe&lt;/Button&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Col&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;
            <br />
            &nbsp;&nbsp;&lt;/Header.Body&gt;
            <br />
            &lt;/Header&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Nav</h2>
      <p className="text-muted mb-4">The basic page header extended with a tabbed navigation.</p>
      <Card>
        <Card.Body>
          <Header>
            <Header.Body>
              <Row className="align-items-end">
                <Col>
                  <Header.Pretitle>Members</Header.Pretitle>
                  <Header.Title>Dianna Smiley</Header.Title>
                </Col>
                <Col xs="auto">
                  <Header.Tabs>
                    <Nav.Item>
                      <Nav.Link href="#!" active>
                        Daily
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#!">Weekly</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#!">Monthly</Nav.Link>
                    </Nav.Item>
                  </Header.Tabs>
                </Col>
              </Row>
            </Header.Body>
          </Header>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Header&gt;
            <br />
            &nbsp;&nbsp;&lt;Header.Body&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Row&nbsp;className=&quot;align-items-end&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Col&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Header.Pretitle&gt;Members&lt;/Header.Pretitle&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Header.Title&gt;Dianna&nbsp;Smiley&lt;/Header.Title&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Col&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Col&nbsp;xs=&quot;auto&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Header.Tabs&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Link&nbsp;href=&quot;#!&quot;&nbsp;active&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Daily
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Link&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Link&nbsp;href=&quot;#!&quot;&gt;Weekly&lt;/Nav.Link&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Link&nbsp;href=&quot;#!&quot;&gt;Monthly&lt;/Nav.Link&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Header.Tabs&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Col&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;
            <br />
            &nbsp;&nbsp;&lt;/Header.Body&gt;
            <br />
            &lt;/Header&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Button + nav</h2>
      <p className="text-muted mb-4">The basic page header extended with a button and a tabbed navigation.</p>
      <Card>
        <Card.Body>
          <Header>
            <Header.Body>
              <Row className="align-items-end">
                <Col>
                  <Header.Pretitle>Members</Header.Pretitle>
                  <Header.Title>Dianna Smiley</Header.Title>
                </Col>
                <Col xs="auto">
                  <Button>Subscribe</Button>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Header.Tabs>
                    <Nav.Item>
                      <Nav.Link href="#!" active>
                        Daily
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#!">Weekly</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#!">Monthly</Nav.Link>
                    </Nav.Item>
                  </Header.Tabs>
                </Col>
              </Row>
            </Header.Body>
          </Header>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Header&gt;
            <br />
            &nbsp;&nbsp;&lt;Header.Body&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Row&nbsp;className=&quot;align-items-end&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Col&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Header.Pretitle&gt;Members&lt;/Header.Pretitle&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Header.Title&gt;Dianna&nbsp;Smiley&lt;/Header.Title&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Col&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Col&nbsp;xs=&quot;auto&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Button&gt;Subscribe&lt;/Button&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Col&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Row&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Col&nbsp;xs={'{'}12{'}'}&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Header.Tabs&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Link&nbsp;href=&quot;#!&quot;&nbsp;active&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Daily
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Link&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Link&nbsp;href=&quot;#!&quot;&gt;Weekly&lt;/Nav.Link&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Link&nbsp;href=&quot;#!&quot;&gt;Monthly&lt;/Nav.Link&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Header.Tabs&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Col&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;
            <br />
            &nbsp;&nbsp;&lt;/Header.Body&gt;
            <br />
            &lt;/Header&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Avatar + nav</h2>
      <p className="text-muted mb-4">The basic page header extended with an avatar group and a tabbed navigation.</p>
      <Card>
        <Card.Body>
          <ProjectHeader />
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Header&gt;
            <br />
            &nbsp;&nbsp;&lt;Container&nbsp;fluid&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Header.Body&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Row&nbsp;className=&quot;align-items-center&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Col&nbsp;xs=&quot;auto&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Avatar&nbsp;ratio=&quot;4by3&quot;&nbsp;size=&quot;lg&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Avatar.Image&nbsp;src=&quot;/img/avatars/projects/project-1.jpg&quot;&nbsp;className=&quot;rounded&quot;&nbsp;alt=&quot;...&quot;&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Avatar&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Col&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Col&nbsp;className=&quot;ms-n3&nbsp;ms-md-n2&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Header.Pretitle&gt;Projects&lt;/Header.Pretitle&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Header.Title&gt;Homepage&nbsp;Redesign&lt;/Header.Title&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Col&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Col&nbsp;xs={'{'}12{'}'}
            &nbsp;md=&quot;auto&quot;&nbsp;className=&quot;mt-3&nbsp;mt-md-0&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Avatar.Group&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Avatar&nbsp;as={'{'}Link{'}'}&nbsp;href=&quot;/profile-posts&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OverlayTrigger&nbsp;overlay={'{'}
            &lt;Tooltip&gt;Dianna&nbsp;Smiley&lt;/Tooltip&gt;{'}'}&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Avatar.Image&nbsp;src=&quot;/img/avatars/profiles/avatar-1.jpg&quot;&nbsp;alt=&quot;Dianna&nbsp;Smiley&quot;&nbsp;className=&quot;rounded-circle&quot;&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/OverlayTrigger&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Avatar&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Avatar.Group&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Button&nbsp;className=&quot;btn-rounded-circle&nbsp;lift&nbsp;ms-1&quot;&nbsp;variant=&quot;white&quot;&nbsp;size=&quot;lg&quot;&nbsp;onClick=
            {'{'}()&nbsp;=&gt;&nbsp;setModalVisible(true)2{'}'}&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Button&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Col&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Row&nbsp;className=&quot;align-items-center&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Col&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Header.Tabs&nbsp;className=&quot;nav-overflow&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Link&nbsp;as={'{'}Link{'}'}
            &nbsp;href=&quot;/project-overview&quot;&nbsp;active={'{'}router.pathname&nbsp;===&nbsp;'/project-overview'2{'}'}&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Overview
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Link&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Link&nbsp;as={'{'}Link{'}'}
            &nbsp;href=&quot;/project-files&quot;&nbsp;active={'{'}router.pathname&nbsp;===&nbsp;'/project-files'2{'}'}&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Files
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Link&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Link&nbsp;as={'{'}Link{'}'}
            &nbsp;href=&quot;/project-reports&quot;&nbsp;active={'{'}router.pathname&nbsp;===&nbsp;'/project-reports'2{'}'}&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reports
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Link&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Header.Tabs&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Col&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Header.Body&gt;
            <br />
            &nbsp;&nbsp;&lt;/Container&gt;
            <br />
            &lt;/Header&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Cover image</h2>
      <p className="text-muted mb-4">A complex page header variation with an image, avatar and other optional components.</p>
      <Card>
        <Card.Body>
          <ProfileHeader />
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Header&gt;
            <br />
            &nbsp;&nbsp;&lt;Header.ImageTop&nbsp;src=&quot;/img/covers/profile-cover-1.jpg&quot;&nbsp;alt=&quot;Dianna&nbsp;Smiley&quot;&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&lt;Container&nbsp;fluid&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Header.Body&nbsp;className=&quot;mt-n5&nbsp;mt-md-n6&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Row&nbsp;className=&quot;align-items-end&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Col&nbsp;xs=&quot;auto&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Header.AvatarTop&nbsp;size=&quot;xxl&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Avatar.Image
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alt=&quot;Dianna&nbsp;Smiley&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className=&quot;rounded-circle&nbsp;border&nbsp;border-4&nbsp;border-card&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src=&quot;/img/avatars/profiles/avatar-1.jpg&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Header.AvatarTop&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Col&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Col&nbsp;className=&quot;mb-3&nbsp;ms-n3&nbsp;ms-md-n2&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Header.Pretitle&gt;Members&lt;/Header.Pretitle&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Header.Title&gt;Dianna&nbsp;Smiley&lt;/Header.Title&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Col&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Col&nbsp;xs={'{'}12{'}'}
            &nbsp;md=&quot;auto&quot;&nbsp;className=&quot;mt-2&nbsp;mt-md-0&nbsp;mb-md-3&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Button&nbsp;className=&quot;d-block&nbsp;d-md-inline-block&quot;&gt;Subscribe&lt;/Button&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Col&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Row&nbsp;className=&quot;align-items-center&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Col&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Header.Tabs&nbsp;variant=&quot;tabs&quot;&nbsp;className=&quot;nav-overflow&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Link&nbsp;href=&quot;/profile-posts&quot;&gt;Posts&lt;/Nav.Link&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Link&nbsp;href=&quot;/profile-groups&quot;&nbsp;active&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Groups
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Link&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Link&nbsp;href=&quot;/profile-projects&quot;&gt;Projects&lt;/Nav.Link&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Link&nbsp;href=&quot;/profile-files&quot;&gt;Files&lt;/Nav.Link&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Link&nbsp;href=&quot;/profile-subscribers&quot;&gt;Subscribers&lt;/Nav.Link&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Header.Tabs&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Col&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Header.Body&gt;
            <br />
            &nbsp;&nbsp;&lt;/Container&gt;
            <br />
            &lt;/Header&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Chart</h2>
      <p className="text-muted mb-4">A complex page header variation with a tabbed navigation and a chart.</p>
      <Card>
        <Card.Body>
          <EcommerceHeader />
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Header&nbsp;className=&quot;bg-dark&nbsp;pb-5&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Container&nbsp;fluid&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Header.Body&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Row&nbsp;className=&quot;align-items-end&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Col&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Header.Pretitle&nbsp;as=&quot;h6&quot;&nbsp;className=&quot;text-secondary&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Annual
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Header.Pretitle&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Header.Title&nbsp;as=&quot;h1&quot;&nbsp;className=&quot;text-white&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Audience
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Header.Title&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Col&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Col&nbsp;xs=&quot;auto&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Header.Tabs&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Link&nbsp;className=&quot;text-center&quot;&nbsp;role=&quot;button&quot;&nbsp;active&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Header.Pretitle&nbsp;className=&quot;text-secondary&quot;&gt;Customers&lt;/Header.Pretitle&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h3&nbsp;className=&quot;text-white&nbsp;mb-0&quot;&gt;73.2k&lt;/h3&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Link&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Link&nbsp;className=&quot;text-center&quot;&nbsp;role=&quot;button&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Header.Pretitle&nbsp;className=&quot;text-secondary&quot;&gt;Sessions&lt;/Header.Pretitle&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h3&nbsp;className=&quot;text-white&nbsp;mb-0&quot;&gt;92.1k&lt;/h3&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Link&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Link&nbsp;className=&quot;text-center&quot;&nbsp;role=&quot;button&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Header.Pretitle&nbsp;className=&quot;text-secondary&quot;&gt;Conversion&lt;/Header.Pretitle&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h3&nbsp;className=&quot;text-white&nbsp;mb-0&quot;&gt;50.2%&lt;/h3&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Link&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Header.Tabs&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Col&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Header.Body&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Header.Footer&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Chart&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Line&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Chart&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Header.Footer&gt;
            <br />
            &nbsp;&nbsp;&lt;/Container&gt;
            <br />
            &lt;/Header&gt;
            <br />
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Below you can find the detailed props API for the <code>Header</code>, <code>Header.AvatarTop</code>, <code>Header.Body</code>,{' '}
        <code>Header.Footer</code>, <code>Header.ImageTop</code>, <code>Header.Pretitle</code>, <code>Header.Subtitle</code>, <code>Header.Tabs</code>, and{' '}
        <code>Header.Title</code> components.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Header&nbsp;{'}'}
            &nbsp;from&nbsp;'../components';&nbsp;//&nbsp;Header
          </Highlight>
        </Card.Body>
      </Card>
      <Table size="sm" responsive>
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>as</td>
            <td>
              <code>
                <em>div</em> | tag
              </code>
            </td>
          </tr>
        </tbody>
      </Table>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Header&nbsp;{'}'}
            &nbsp;from&nbsp;'../components';&nbsp;//&nbsp;Header.AvatarTop
          </Highlight>
        </Card.Body>
      </Card>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Header&nbsp;{'}'}
            &nbsp;from&nbsp;'../components';&nbsp;//&nbsp;Header.Body
          </Highlight>
        </Card.Body>
      </Card>
      <Table size="sm" responsive>
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>as</td>
            <td>
              <code>
                <em>div</em> | tag
              </code>
            </td>
          </tr>
        </tbody>
      </Table>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Header&nbsp;{'}'}
            &nbsp;from&nbsp;'../components';&nbsp;//&nbsp;Header.Footer
          </Highlight>
        </Card.Body>
      </Card>
      <Table size="sm" responsive>
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>as</td>
            <td>
              <code>
                <em>div</em> | tag
              </code>
            </td>
          </tr>
        </tbody>
      </Table>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Header&nbsp;{'}'}
            &nbsp;from&nbsp;'../components';&nbsp;//&nbsp;ImageTop
          </Highlight>
        </Card.Body>
      </Card>
      <Table size="sm" responsive>
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>as</td>
            <td>
              <code>
                <em>img</em> | tag
              </code>
            </td>
          </tr>
        </tbody>
      </Table>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Header&nbsp;{'}'}
            &nbsp;from&nbsp;'../components';&nbsp;//&nbsp;Header.Pretitle
          </Highlight>
        </Card.Body>
      </Card>
      <Table size="sm" responsive>
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>as</td>
            <td>
              <code>
                <em>h6</em> | tag
              </code>
            </td>
          </tr>
        </tbody>
      </Table>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Header&nbsp;{'}'}
            &nbsp;from&nbsp;'../components';&nbsp;//&nbsp;Header.Subtitle
          </Highlight>
        </Card.Body>
      </Card>
      <Table size="sm" responsive>
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>as</td>
            <td>
              <code>
                <em>p</em> | tag
              </code>
            </td>
          </tr>
        </tbody>
      </Table>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Header&nbsp;{'}'}
            &nbsp;from&nbsp;'../components';&nbsp;//&nbsp;Header.Tabs
          </Highlight>
        </Card.Body>
      </Card>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Header&nbsp;{'}'}
            &nbsp;from&nbsp;'../components';&nbsp;//&nbsp;Header.Title
          </Highlight>
        </Card.Body>
      </Card>
      <Table size="sm" className="mb-0">
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>as</td>
            <td>
              <code>
                <em>h1</em> | tag
              </code>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
