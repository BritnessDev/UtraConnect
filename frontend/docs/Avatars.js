import React from 'react';
import { Badge, Card, Table } from 'react-bootstrap';
import { Avatar, Header } from '../components';
import { Highlight } from '../components/vendor';

export default function Avatars({ ...props }) {
  return (
    <div id="avatars">
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>
            Avatars{' '}
            <Badge bg="primary-soft" className="ms-1 mt-n1">
              Dashkit only
            </Badge>
          </Header.Title>
          <Header.Subtitle>
            Create and group avatars of different sizes and shapes with a single component.
          </Header.Subtitle>
        </Header.Body>
      </Header>
      <h2 className="mb-2">Sizing</h2>
      <p className="text-muted mb-4">
        Using Bootstrap’s typical naming structure, you can create a standard avatar, or scale it up to different sizes
        based on what’s needed.
      </p>
      <Card>
        <Card.Body>
          <Avatar size="xxl" className="me-1">
            <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="Dianna Smiley" />
          </Avatar>
          <Avatar size="xl" className="me-1">
            <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="Dianna Smiley" />
          </Avatar>
          <Avatar size="lg" className="me-1">
            <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="Dianna Smiley" />
          </Avatar>
          <Avatar className="me-1">
            <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="Dianna Smiley" />
          </Avatar>
          <Avatar size="sm" className="me-1">
            <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="Dianna Smiley" />
          </Avatar>
          <Avatar size="xs" className="me-1">
            <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="Dianna Smiley" />
          </Avatar>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Avatar&nbsp;size=&quot;xxl&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Avatar.Image
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;className=&quot;rounded-circle&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;src=&quot;/img/avatars/profiles/avatar-1.jpg&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;alt=&quot;Dianna&nbsp;Smiley&quot;
            <br />
            &nbsp;&nbsp;/&gt;
            <br />
            &lt;/Avatar&gt;
            <br />
            <br />
            &lt;Avatar&nbsp;size=&quot;xl&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Avatar.Image
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;className=&quot;rounded-circle&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;src=&quot;/img/avatars/profiles/avatar-1.jpg&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;alt=&quot;Dianna&nbsp;Smiley&quot;
            <br />
            &nbsp;&nbsp;/&gt;
            <br />
            &lt;/Avatar&gt;
            <br />
            <br />
            &lt;Avatar&nbsp;size=&quot;lg&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Avatar.Image
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;className=&quot;rounded-circle&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;src=&quot;/img/avatars/profiles/avatar-1.jpg&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;alt=&quot;Dianna&nbsp;Smiley&quot;
            <br />
            &nbsp;&nbsp;/&gt;
            <br />
            &lt;/Avatar&gt;
            <br />
            <br />
            &lt;Avatar&gt;
            <br />
            &nbsp;&nbsp;&lt;Avatar.Image
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;className=&quot;rounded-circle&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;src=&quot;/img/avatars/profiles/avatar-1.jpg&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;alt=&quot;Dianna&nbsp;Smiley&quot;
            <br />
            &nbsp;&nbsp;/&gt;
            <br />
            &lt;/Avatar&gt;
            <br />
            <br />
            &lt;Avatar&nbsp;size=&quot;sm&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Avatar.Image
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;className=&quot;rounded-circle&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;src=&quot;/img/avatars/profiles/avatar-1.jpg&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;alt=&quot;Dianna&nbsp;Smiley&quot;
            <br />
            &nbsp;&nbsp;/&gt;
            <br />
            &lt;/Avatar&gt;
            <br />
            <br />
            &lt;Avatar&nbsp;size=&quot;xs&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Avatar.Image
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;className=&quot;rounded-circle&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;src=&quot;/img/avatars/profiles/avatar-1.jpg&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;alt=&quot;Dianna&nbsp;Smiley&quot;
            <br />
            &nbsp;&nbsp;/&gt;
            <br />
            &lt;/Avatar&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Status Indicator</h2>
      <p className="text-muted mb-4">Add an online or offline status indicator to show user's availability.</p>
      <Card>
        <Card.Body>
          <Avatar size="xxl" status="offline" className="me-1">
            <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="Dianna Smiley" />
          </Avatar>
          <Avatar size="xl" status="online" className="me-1">
            <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="Dianna Smiley" />
          </Avatar>
          <Avatar size="lg" status="offline" className="me-1">
            <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="Dianna Smiley" />
          </Avatar>
          <Avatar status="online" className="me-1">
            <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="Dianna Smiley" />
          </Avatar>
          <Avatar size="sm" status="offline" className="me-1">
            <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="Dianna Smiley" />
          </Avatar>
          <Avatar size="xs" status="online" className="me-1">
            <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="Dianna Smiley" />
          </Avatar>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Avatar&nbsp;status=&quot;offline&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Avatar.Image
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;className=&quot;rounded-circle&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;src=&quot;/img/avatars/profiles/avatar-1.jpg&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;alt=&quot;Dianna&nbsp;Smiley&quot;
            <br />
            &nbsp;&nbsp;/&gt;
            <br />
            &lt;/Avatar&gt;
            <br />
            <br />
            &lt;Avatar&nbsp;status=&quot;online&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Avatar.Image
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;className=&quot;rounded-circle&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;src=&quot;/img/avatars/profiles/avatar-1.jpg&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;alt=&quot;Dianna&nbsp;Smiley&quot;
            <br />
            &nbsp;&nbsp;/&gt;
            <br />
            &lt;/Avatar&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Shape</h2>
      <p className="text-muted mb-4">Change the shape of an avatar with the default Bootstrap image classes.</p>
      <Card>
        <Card.Body>
          <Avatar size="xl" className="me-1">
            <Avatar.Image className="rounded" src="/img/avatars/profiles/avatar-1.jpg" alt="Dianna Smiley" />
          </Avatar>
          <Avatar size="xl" className="me-1">
            <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="Dianna Smiley" />
          </Avatar>
          <Avatar size="lg" className="me-1">
            <Avatar.Image className="rounded" src="/img/avatars/profiles/avatar-1.jpg" alt="Dianna Smiley" />
          </Avatar>
          <Avatar size="lg" className="me-1">
            <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="Dianna Smiley" />
          </Avatar>
          <Avatar className="me-1">
            <Avatar.Image className="rounded" src="/img/avatars/profiles/avatar-1.jpg" alt="Dianna Smiley" />
          </Avatar>
          <Avatar className="me-1">
            <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="Dianna Smiley" />
          </Avatar>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Avatar&gt;
            <br />
            &nbsp;&nbsp;&lt;Avatar.Image
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;className=&quot;rounded&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;src=&quot;/img/avatars/profiles/avatar-1.jpg&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;alt=&quot;Dianna&nbsp;Smiley&quot;
            <br />
            &nbsp;&nbsp;/&gt;
            <br />
            &lt;/Avatar&gt;
            <br />
            <br />
            &lt;Avatar&gt;
            <br />
            &nbsp;&nbsp;&lt;Avatar.Image
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;className=&quot;rounded-circle&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;src=&quot;/img/avatars/profiles/avatar-1.jpg&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;alt=&quot;Dianna&nbsp;Smiley&quot;
            <br />
            &nbsp;&nbsp;/&gt;
            <br />
            &lt;/Avatar&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Shape</h2>
      <p className="text-muted mb-4">Change the shape of an avatar with the default Bootstrap image classes.</p>
      <Card>
        <Card.Body>
          <Avatar ratio="4by3" size="xxl" className="me-1">
            <Avatar.Image className="rounded" src="/img/avatars/projects/project-1.jpg" alt="Launchday" />
          </Avatar>
          <Avatar ratio="4by3" size="xl" className="me-1">
            <Avatar.Image className="rounded" src="/img/avatars/projects/project-1.jpg" alt="Launchday" />
          </Avatar>
          <Avatar ratio="4by3" size="lg" className="me-1">
            <Avatar.Image className="rounded" src="/img/avatars/projects/project-1.jpg" alt="Launchday" />
          </Avatar>
          <Avatar ratio="4by3" className="me-1">
            <Avatar.Image className="rounded" src="/img/avatars/projects/project-1.jpg" alt="Launchday" />
          </Avatar>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Avatar&nbsp;ratio=&quot;4by3&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Avatar.Image
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;className=&quot;rounded&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;src=&quot;/img/avatars/projects/project-1.jpg&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;alt=&quot;Launchday&quot;
            <br />
            &nbsp;&nbsp;/&gt;
            <br />
            &lt;/Avatar&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Initials</h2>
      <p className="text-muted mb-4">You won't always have an image for every user, so easily use initials instead.</p>
      <Card>
        <Card.Body>
          <Avatar size="xxl" className="me-1">
            <Avatar.Title className="rounded-circle">CF</Avatar.Title>
          </Avatar>
          <Avatar size="xl" className="me-1">
            <Avatar.Title className="rounded-circle">CF</Avatar.Title>
          </Avatar>
          <Avatar size="lg" className="me-1">
            <Avatar.Title className="rounded-circle">CF</Avatar.Title>
          </Avatar>
          <Avatar className="me-1">
            <Avatar.Title className="rounded-circle">CF</Avatar.Title>
          </Avatar>
          <Avatar size="sm" className="me-1">
            <Avatar.Title className="rounded-circle">CF</Avatar.Title>
          </Avatar>
          <Avatar size="xs" className="me-1">
            <Avatar.Title className="rounded-circle">CF</Avatar.Title>
          </Avatar>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Avatar&nbsp;size=&quot;xxl&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Avatar.Title&nbsp;className=&quot;rounded-circle&quot;&gt;CF&lt;/Avatar.Title&gt;
            <br />
            &lt;/Avatar&gt;
            <br />
            <br />
            &lt;Avatar&nbsp;size=&quot;xl&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Avatar.Title&nbsp;className=&quot;rounded-circle&quot;&gt;CF&lt;/Avatar.Title&gt;
            <br />
            &lt;/Avatar&gt;
            <br />
            <br />
            &lt;Avatar&nbsp;size=&quot;lg&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Avatar.Title&nbsp;className=&quot;rounded-circle&quot;&gt;CF&lt;/Avatar.Title&gt;
            <br />
            &lt;/Avatar&gt;
            <br />
            <br />
            &lt;Avatar&nbsp;&gt;
            <br />
            &nbsp;&nbsp;&lt;Avatar.Title&nbsp;className=&quot;rounded-circle&quot;&gt;CF&lt;/Avatar.Title&gt;
            <br />
            &lt;/Avatar&gt;
            <br />
            <br />
            &lt;Avatar&nbsp;size=&quot;sm&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Avatar.Title&nbsp;className=&quot;rounded-circle&quot;&gt;CF&lt;/Avatar.Title&gt;
            <br />
            &lt;/Avatar&gt;
            <br />
            <br />
            &lt;Avatar&nbsp;size=&quot;xs&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Avatar.Title&nbsp;className=&quot;rounded-circle&quot;&gt;CF&lt;/Avatar.Title&gt;
            <br />
            &lt;/Avatar&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Groups</h2>
      <p className="text-muted mb-4">
        Easily group avatars of any size, shape and content with a single component. Each avatar can also use an{' '}
        <code>&lt;a&gt;</code> to link to the corresponding profile.
      </p>
      <Card>
        <Card.Body>
          <Avatar.Group className="me-1">
            <Avatar size="lg">
              <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="Dianna Smiley" />
            </Avatar>
            <Avatar size="lg">
              <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="Dianna Smiley" />
            </Avatar>
            <Avatar size="lg">
              <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="Dianna Smiley" />
            </Avatar>
            <Avatar size="lg">
              <Avatar.Title className="rounded-circle">CF</Avatar.Title>
            </Avatar>
          </Avatar.Group>
          <Avatar.Group className="me-1">
            <Avatar>
              <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="Dianna Smiley" />
            </Avatar>
            <Avatar>
              <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="Dianna Smiley" />
            </Avatar>
            <Avatar>
              <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="Dianna Smiley" />
            </Avatar>
            <Avatar>
              <Avatar.Title className="rounded-circle">CF</Avatar.Title>
            </Avatar>
          </Avatar.Group>
          <Avatar.Group className="me-1">
            <Avatar size="xs">
              <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="Dianna Smiley" />
            </Avatar>
            <Avatar size="xs">
              <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="Dianna Smiley" />
            </Avatar>
            <Avatar size="xs">
              <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="Dianna Smiley" />
            </Avatar>
            <Avatar size="xs">
              <Avatar.Title className="rounded-circle">CF</Avatar.Title>
            </Avatar>
          </Avatar.Group>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Avatar.Group&gt;
            <br />
            &nbsp;&nbsp;&lt;Avatar&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Avatar.Image
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className=&quot;rounded-circle&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src=&quot;/img/avatars/profiles/avatar-1.jpg&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alt=&quot;Dianna&nbsp;Smiley&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&lt;/Avatar&gt;
            <br />
            &nbsp;&nbsp;&lt;Avatar&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Avatar.Image
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className=&quot;rounded-circle&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src=&quot;/img/avatars/profiles/avatar-1.jpg&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alt=&quot;Dianna&nbsp;Smiley&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&lt;/Avatar&gt;
            <br />
            &nbsp;&nbsp;&lt;Avatar&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Avatar.Image
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className=&quot;rounded-circle&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src=&quot;/img/avatars/profiles/avatar-1.jpg&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alt=&quot;Dianna&nbsp;Smiley&quot;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&lt;/Avatar&gt;
            <br />
            &nbsp;&nbsp;&lt;Avatar&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Avatar.Title&nbsp;className=&quot;rounded-circle&quot;&gt;CF&lt;/Avatar.Title&gt;
            <br />
            &nbsp;&nbsp;&lt;/Avatar&gt;
            <br />
            &lt;/Avatar.Group&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Below you can find the detailed props API for the <code>Avatar</code>, <code>Avatar.Image</code>,{' '}
        <code>Avatar.Title</code>, and <code>Avatar.Group</code> components.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Avatar&nbsp;{'}'}
            &nbsp;from&nbsp;'../components';&nbsp;//&nbsp;Avatar
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
          <tr>
            <td>ratio</td>
            <td>
              <code>
                <em>undefined</em> | "4by3"
              </code>
            </td>
          </tr>
          <tr>
            <td>size</td>
            <td>
              <code>
                <em>undefined</em> | "xs" | "sm" | "lg" | "xl" | "xxl"
              </code>
            </td>
          </tr>
          <tr>
            <td>status</td>
            <td>
              <code>
                <em>undefined</em> | "online" | "offline"
              </code>
            </td>
          </tr>
        </tbody>
      </Table>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Avatar&nbsp;{'}'}
            &nbsp;from&nbsp;'../components';&nbsp;//&nbsp;Avatar.Group
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
            import&nbsp;{'{'}&nbsp;Avatar&nbsp;{'}'}
            &nbsp;from&nbsp;'../components';&nbsp;//&nbsp;Avatar.Image
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
            import&nbsp;{'{'}&nbsp;Avatar&nbsp;{'}'}
            &nbsp;from&nbsp;'../components';&nbsp;//&nbsp;Avatar.Title
          </Highlight>
        </Card.Body>
      </Card>
      <Table size="sm" className="mb-0" responsive>
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
    </div>
  );
}
