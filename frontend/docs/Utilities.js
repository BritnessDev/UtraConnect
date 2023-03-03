import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import Highlight from 'react-highlight';
import { Header } from '../components';

export default function Utilities({ ...props }) {
  return (
    <div id="utilities" {...props}>
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>Utilities</Header.Title>
          <Header.Subtitle>
            Please visit the{' '}
            <a href="https://getbootstrap.com/docs/5.1/utilities/" target="_blank">
              official Bootstrap documentation
            </a>{' '}
            for a full list of utilities. Additionally, the following utilities have been added:
          </Header.Subtitle>
        </Header.Body>
      </Header>
      <h2 className="mb-2">
        Backgrounds{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit Only
        </Badge>
      </h2>
      <ul className="text-muted mb-4">
        <li>
          <code>.bg-fixed-bottom</code> to fix the background image at the bottom of the <code>.main</code> container at
          the <a href="/feed">feed</a> page.
        </li>
        <li>
          <code>.bg-cover</code> to set the <code>background-image</code> size of an element to <code>cover</code>.
        </li>
        <li>
          <code>.bg-vibrant</code> to apply a background image with a vibrant gradient for the sidebar.
        </li>
        <li>
          <code>.bg-lighter</code> to set the backgroud color to the value of the <code>$lighter</code> SCSS variable.
        </li>
      </ul>
      <Card>
        <Card.Body className="bg-dark rounded-lg">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;div&nbsp;className=&quot;bg-fixed-bottom&quot;&nbsp;style=&quot;background-image:&nbsp;url(...);&quot;&gt;
            <br />
            &nbsp;&nbsp;...
            <br />
            &lt;/div&gt;
            <br />
            <br />
            &lt;div&nbsp;className=&quot;bg-cover&quot;&nbsp;style=&quot;background-image:&nbsp;url(...);&quot;&gt;
            <br />
            &nbsp;&nbsp;...
            <br />
            &lt;/div&gt;
            <br />
            <br />
            &lt;Navbar
            <br />
            &nbsp;&nbsp;color=&quot;dark&quot;
            <br />
            &nbsp;&nbsp;expand=&quot;md&quot;
            <br />
            &nbsp;&nbsp;orientation=&quot;vertical&quot;
            <br />
            &nbsp;&nbsp;className=&quot;bg-vibrant&quot;
            <br />
            &gt;
            <br />
            &nbsp;&nbsp;...
            <br />
            &lt;/Navbar&gt;
            <br />
            <br />
            &lt;div&nbsp;className=&quot;bg-lighter&quot;&gt;...&lt;/div&gt;
          </Highlight>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Sizing{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit Only
        </Badge>
      </h2>
      <ul className="text-muted mb-4">
        <li>
          <code>.vw-100</code> to change the width of an element to <code>100vw</code>.
        </li>
        <li>
          <code>.vh-100</code> to change the height of an element to <code>100vh</code>.
        </li>
      </ul>
      <Card>
        <Card.Body className="bg-dark rounded-lg">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;div&nbsp;className=&quot;vw-100&nbsp;vh-100&quot;&gt;...&lt;/div&gt;
          </Highlight>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Borders{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit Only
        </Badge>
      </h2>
      <ul className="text-muted mb-4">
        <li>
          <code>
            .border-2(3, 4, 5), .border-top-2(3, 4, 5), .border-end-2(3, 4, 5), .border-bottom-2(3, 4, 5),
            .border-start-2(3, 4, 5)
          </code>{' '}
          to increase the width of a border.
        </li>
      </ul>
      <Card>
        <Card.Body className="bg-dark rounded-lg">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;div&nbsp;className=&quot;border&nbsp;border-2&nbsp;border-white&quot;&gt;...&lt;/div&gt;
          </Highlight>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Lift{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit Only
        </Badge>
      </h2>
      <ul className="text-muted mb-4">
        <li>
          <code>.lift(-lg)</code> to visually lift an element on hover and focus.
        </li>
      </ul>
      <Card>
        <Card.Body className="bg-dark rounded-lg">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Button&nbsp;color=&quot;white&quot;&nbsp;className=&quot;lift&quot;&gt;
            <br />
            &nbsp;&nbsp;Hover&nbsp;to&nbsp;lift
            <br />
            &lt;/Button&gt;
            <br />
            <br />
            &lt;Button&nbsp;color=&quot;white&quot;&nbsp;className=&quot;lift&nbsp;lift-lg&quot;&gt;
            <br />
            &nbsp;&nbsp;Hover&nbsp;to&nbsp;lift
            <br />
            &lt;/Button&gt;
          </Highlight>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Type{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit Only
        </Badge>
      </h2>
      <ul className="text-muted mb-4">
        <li>
          <code>.text-decoration-underline</code> to set the text decoration property to underline.
        </li>
      </ul>
      <Card>
        <Card.Body className="bg-dark rounded-lg">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;a&nbsp;className=&quot;text-decoration-underline&quot;&nbsp;href=&quot;#!&quot;&gt;...&lt;/a&gt;
          </Highlight>
        </Card.Body>
      </Card>
    </div>
  );
}
