import React from 'react';
import { Badge, Button, Card, Col, Nav, Row } from 'react-bootstrap';
import { Header } from '../components';
import { Highlight } from '../components/vendor';
import {
  AnalyticsScratchpadChecklist,
  AnalyticsTrafficChannels,
  EcommerceAvgValue,
  EcommerceConversionRate,
  EcommerceOrdersPlaced,
  EcommerceWeeklySales,
  ProjectManagementRecentActivity,
} from '../widgets';

export default function Cards({ ...props }) {
  return (
    <div id="cards" {...props}>
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>Cards</Header.Title>
          <Header.Subtitle>
            Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.
          </Header.Subtitle>
        </Header.Body>
      </Header>
      <Card>
        <Card.Body>
          <Card.Title as="h3">Card title</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non dolore est fuga nobis ipsum illum
            eligendi nemo iure repellat, soluta, optio minus ut reiciendis voluptates enim impedit veritatis officiis.
          </Card.Text>
          <Button>Go somewhere</Button>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Card header{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>
      </h2>
      <p className="text-muted mb-4">
        Easily create a card header of a fixed height and populate it with text, buttons, or a navigation.
      </p>
      <Card>
        <Card.Header>
          <h4 className="card-header-title">Card title</h4>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis fugiat dolorem, expedita rem. Quis
            natus officiis asperiores rem ipsum, dolore cumque voluptatum iste vel alias, recusandae culpa hic pariatur
            quos.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Card&gt;
            <br />
            &nbsp;&nbsp;&lt;Card.Header&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;h4&nbsp;className=&quot;card-header-title&quot;&gt;Card&nbsp;title&lt;/h4&gt;
            <br />
            &nbsp;&nbsp;&lt;/Card.Header&gt;
            <br />
            &lt;/Card&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Card header navigation{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>
      </h2>
      <p className="text-muted mb-4">
        Use the default Bootstrap grid and the <code>Card.Nav</code> component to easily add a perfectly aligned
        navigation inside a card header.
      </p>
      <Card>
        <Card.Header>
          <h4 className="card-header-title">Card title</h4>
          <Nav variant="tabs" className="nav-tabs-sm">
            <Nav.Item>
              <Nav.Link active>Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Link</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis fugiat dolorem, expedita rem. Quis
            natus officiis asperiores rem ipsum, dolore cumque voluptatum iste vel alias, recusandae culpa hic pariatur
            quos.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Card&gt;
            <br />
            &nbsp;&nbsp;&lt;Card.Header&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;h4&nbsp;className=&quot;card-header-title&quot;&gt;Card&nbsp;title&lt;/h4&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav&nbsp;variant=&quot;tabs&quot;&nbsp;className=&quot;nav-tabs-sm&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Link&nbsp;active&gt;Active&lt;/Nav.Link&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Link&gt;Link&lt;/Nav.Link&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nav.Link&gt;Link&lt;/Nav.Link&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Nav&gt;
            <br />
            &nbsp;&nbsp;&lt;/Card.Header&gt;
            <br />
            &lt;/Card&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Inactive{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>
      </h2>
      <p className="text-muted mb-4">
        Merge your card into a background with the <code>.card-inactive</code> modifier.
      </p>
      <Card className="card-inactive">
        <Card.Body>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis fugiat dolorem, expedita rem. Quis
            natus officiis asperiores rem ipsum, dolore cumque voluptatum iste vel alias, recusandae culpa hic pariatur
            quos.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Card&nbsp;className=&quot;card-inactive&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Card.Body&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Card.Text&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem&nbsp;ipsum&nbsp;dolor&nbsp;sit&nbsp;amet,&nbsp;consectetur&nbsp;adipisicing&nbsp;elit.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Perspiciatis&nbsp;fugiat&nbsp;dolorem,&nbsp;expedita&nbsp;rem.&nbsp;Quis&nbsp;natus&nbsp;officiis
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;asperiores&nbsp;rem&nbsp;ipsum,&nbsp;dolore&nbsp;cumque&nbsp;voluptatum&nbsp;iste&nbsp;vel&nbsp;alias,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;recusandae&nbsp;culpa&nbsp;hic&nbsp;pariatur&nbsp;quos.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Card.Text&gt;
            <br />
            &nbsp;&nbsp;&lt;/Card.Body&gt;
            <br />
            &lt;/Card&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Fill{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>{' '}
        <Badge bg="success-soft" className="mt-n1">
          New
        </Badge>
      </h2>
      <p className="text-muted mb-4">
        Make a card fill the whole available space to fit the height of a neighboring card with a{' '}
        <code>.card-fill</code> modifier.
      </p>
      <Row>
        <Col xs={12} lg={6}>
          <AnalyticsTrafficChannels className="card-fill" />
        </Col>
        <Col xs={12} lg={6}>
          <EcommerceWeeklySales />
          <EcommerceOrdersPlaced />
          <EcommerceConversionRate />
          <EcommerceAvgValue />
        </Col>
      </Row>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Card&nbsp;className=&quot;card-fill&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Card.Body&gt;...&lt;/Card.Body&gt;
            <br />
            &lt;/Card&gt;
            <br />
            <br />
            &lt;Card&nbsp;className=&quot;card-fill-sm&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Card.Body&gt;...&lt;/Card.Body&gt;
            <br />
            &lt;/Card&gt;
            <br />
            <br />
            &lt;Card&nbsp;className=&quot;card-fill-md&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Card.Body&gt;...&lt;/Card.Body&gt;
            <br />
            &lt;/Card&gt;
            <br />
            <br />
            &lt;Card&nbsp;className=&quot;card-fill-lg&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Card.Body&gt;...&lt;/Card.Body&gt;
            <br />
            &lt;/Card&gt;
            <br />
            <br />
            &lt;Card&nbsp;className=&quot;card-fill-xl&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Card.Body&gt;...&lt;/Card.Body&gt;
            <br />
            &lt;/Card&gt;
          </Highlight>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Adjust{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>
        <Badge bg="success-soft" className="ms-1 mt-n1">
          New
        </Badge>
      </h2>
      <p className="text-muted mb-4">
        Make a card vertically shrink (with a scrollbar) to match the height of its neighboring card with a{' '}
        <code>.card-adjust</code> modifier.
      </p>
      <Row>
        <Col xs={12} xl={4}>
          <div className="card-adjust-xl">
            <ProjectManagementRecentActivity />
          </div>
        </Col>
        <Col xs={12} xl={8}>
          <AnalyticsScratchpadChecklist />
        </Col>
      </Row>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="html" className="bg-dark mb-0">
            &lt;div&nbsp;className=&quot;card-adjust&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Card&gt;...&lt;/Card&gt;
            <br />
            &lt;/div&gt;
            <br />
            <br />
            &lt;div&nbsp;className=&quot;card-adjust-sm&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Card&gt;...&lt;/Card&gt;
            <br />
            &lt;/div&gt;
            <br />
            <br />
            &lt;div&nbsp;className=&quot;card-adjust-md&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Card&gt;...&lt;/Card&gt;
            <br />
            &lt;/div&gt;
            <br />
            <br />
            &lt;div&nbsp;className=&quot;card-adjust-lg&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Card&gt;...&lt;/Card&gt;
            <br />
            &lt;/div&gt;
            <br />
            <br />
            &lt;div&nbsp;className=&quot;card-adjust-xl&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Card&gt;...&lt;/Card&gt;
            <br />
            &lt;/div&gt;
          </Highlight>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Please see the{' '}
        <a href="https://react-bootstrap.github.io/components/cards/" target="_blank">
          official React Bootstrap documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Card,&nbsp;CardGroup&nbsp;{'}'}
            &nbsp;from&nbsp;'react-bootstrap';
          </Highlight>
        </Card.Body>
      </Card>
    </div>
  );
}
