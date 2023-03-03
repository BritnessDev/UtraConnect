import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Badge, Card, Form, Table } from 'react-bootstrap';
import { Checklist, Header } from '../components';
import { Highlight } from '../components/vendor';

export default function Checklists({ ...props }) {
  const [data, setData] = useState([
    {
      id: 'task-1',
      content: 'Delete the old mess in functions files.',
    },
    {
      id: 'task-2',
      content: 'Refactor the core social sharing modules.',
    },
    {
      id: 'task-3',
      content: 'Create the release notes for the new pages so customers get psyched.',
    },
    {
      id: 'task-4',
      content: 'Send Dianna those meeting notes.',
    },
    {
      id: 'task-5',
      content: 'Share the documentation for the new unified API.',
    },
    {
      id: 'task-6',
      content: 'Clean up the Figma file with all of the avatars, buttons, and other components.',
    },
  ]);

  function onDragEnd(result) {
    const newData = [...data];
    const { destination, source } = result;

    if (!destination || destination.index === source.index) {
      return;
    }

    newData.splice(source.index, 1);
    newData.splice(destination.index, 0, data[source.index]);

    setData(newData);
  }

  return (
    <div id="checklist" {...props}>
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>
            Checklist{' '}
            <Badge bg="primary-soft" className="ms-1 mt-n1">
              Dashkit only
            </Badge>{' '}
            <Badge bg="success-soft" className="ms-1 mt-n1">
              New
            </Badge>
          </Header.Title>
          <Header.Subtitle>Sortable checklist component powered by react-beautiful-dnd.</Header.Subtitle>
        </Header.Body>
      </Header>
      <Card>
        <Card.Body>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="tasks">
              {(provided) => (
                <Checklist ref={provided.innerRef} {...provided.droppableProps}>
                  {data.map((item, index) => (
                    <Draggable draggableId={item.id} key={item.id} index={index}>
                      {(provided) => (
                        <Checklist.Item ref={provided.innerRef} {...provided.draggableProps}>
                          <Form.Check type="checkbox" id={item.id}>
                            <Form.Check.Input type="checkbox" className="me-3" />
                            <Form.Check.Label {...provided.dragHandleProps}>{item.content}</Form.Check.Label>
                          </Form.Check>
                        </Checklist.Item>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Checklist>
              )}
            </Droppable>
          </DragDropContext>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            export&nbsp;default&nbsp;function&nbsp;Tasks()&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;const&nbsp;[data,&nbsp;setData]&nbsp;=&nbsp;useState([
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id:&nbsp;'task-1',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content:&nbsp;'Delete&nbsp;the&nbsp;old&nbsp;mess&nbsp;in&nbsp;functions&nbsp;files.',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;]);
            <br />
            <br />
            &nbsp;&nbsp;function&nbsp;onDragEnd(result)&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;const&nbsp;newData&nbsp;=&nbsp;[...data];
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;const&nbsp;{'{'}&nbsp;destination,&nbsp;source&nbsp;{'}'}&nbsp;=&nbsp;result;
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(!destination&nbsp;||&nbsp;destination.index&nbsp;===&nbsp;source.index)&nbsp;
            {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'}'}
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;newData.splice(source.index,&nbsp;1);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;newData.splice(destination.index,&nbsp;0,&nbsp;data[source.index]);
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;setData(newData);
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            <br />
            &nbsp;&nbsp;return&nbsp;(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;DragDropContext&nbsp;onDragEnd={'{'}onDragEnd{'}'}&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Droppable&nbsp;droppableId=&quot;tasks&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}(provided)&nbsp;=&gt;&nbsp;(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Checklist&nbsp;ref={'{'}provided.innerRef
            {'}'}&nbsp;{'{'}...provided.droppableProps{'}'}&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            data.map((item,&nbsp;index)&nbsp;=&gt;&nbsp;(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Draggable&nbsp;draggableId=
            {'{'}item.id{'}'}&nbsp;key={'{'}item.id{'}'}&nbsp;index={'{'}index{'}'}&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            (provided)&nbsp;=&gt;&nbsp;(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Checklist.Item&nbsp;ref=
            {'{'}provided.innerRef{'}'}&nbsp;{'{'}...provided.draggableProps{'}'}&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Form.Check&nbsp;type=&quot;checkbox&quot;&nbsp;id=
            {'{'}item.id{'}'}&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Form.Check.Input&nbsp;type=&quot;checkbox&quot;&nbsp;className=&quot;me-3&quot;&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Form.Check.Label&nbsp;
            {'{'}...provided.dragHandleProps{'}'}&gt;{'{'}item.content{'}'}&lt;/Form.Check.Label&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Form.Check&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Checklist.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;){'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Draggable&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)){'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}provided.placeholder{'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Checklist&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;){'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Droppable&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/DragDropContext&gt;
            <br />
            &nbsp;&nbsp;);
            <br />
            {'}'}
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Below you can find the detailed props API for the <code>CheckList</code>, and <code>Checklist.Item</code>{' '}
        components.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Checklist&nbsp;{'}'}
            &nbsp;from&nbsp;'../components';&nbsp;//&nbsp;Checklist
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
            import&nbsp;{'{'}&nbsp;Checklist&nbsp;{'}'}&nbsp;from&nbsp;'../components';&nbsp;//&nbsp;Checklist.Item
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
