import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Badge, Button, Card, Col, Form, Row } from 'react-bootstrap';
import TextareaAutosize from 'react-textarea-autosize';
import { Checklist } from '../components';

export default function ProjectManagementScratchpadChecklist({ ...props }) {
  const [data, setData] = useState([
    {
      id: 'task-1',
      content: 'Delete the old mess in functions files.',
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

  const items = data.map((item, index) => (
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
  ));

  return (
    <Card {...props}>
      <Card.Header>
        <h4 className="card-header-title">Scratchpad Checklist</h4>
        <Badge bg="secondary-soft">23 Complete Items</Badge>
      </Card.Header>
      <Card.Body>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="tasks">
            {(provided) => (
              <Checklist ref={provided.innerRef} {...provided.droppableProps}>
                {items}
                {provided.placeholder}
              </Checklist>
            )}
          </Droppable>
        </DragDropContext>
      </Card.Body>
      <Card.Footer>
        <Row className="align-items-center">
          <Col>
            <Form.Control
              as={TextareaAutosize}
              className="form-control-auto form-control-flush"
              placeholder="Create a task"
            />
          </Col>
          <Col xs="auto">
            <Button size="sm">Add</Button>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}
