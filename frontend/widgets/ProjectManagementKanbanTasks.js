import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Card, Col, Form, Row } from 'react-bootstrap';
import TextareaAutosize from 'react-textarea-autosize';
import { Kanban } from '../components';
import { Flatpickr } from '../components/vendor';
import { formatLocaleDateString } from '../helpers';
import { ModalKanbanTask } from '../modals';

export default function ProjectManagementKanbanTasks({ ...props }) {
  const [data, setData] = useState([
    {
      id: 'task-0',
      content: 'Create the release notes for the new pages so customers are warned.',
      date: '2019-06-09',
    },
    {
      id: 'task-1',
      content: 'This is a todo with an attachment, comments, and a due date.',
      date: '2019-06-09',
    },
    {
      id: 'task-2',
      content:
        'This is an extremely long todo to show wrapping. This is an extremely long todo to show wrapping.This is an extremely long todo to show wrapping.',
      date: '2019-06-09',
    },
  ]);

  const [modalTaskVisible, setModalTaskVisible] = useState(false);

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
      {(provided, snapshot) => (
        <Kanban.Item
          className="mb-3"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card className="card-sm mb-0" onClick={() => setModalTaskVisible(true)}>
            <Card.Body>
              <Row>
                <Col>
                  <p className="mb-0">{item.content}</p>
                </Col>
                <Col xs="auto">
                  <time className="small text-muted" dateTime={item.date}>
                    <FeatherIcon icon="clock" size="1em" className="me-2" />
                    {formatLocaleDateString(item.date, {
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Kanban.Item>
      )}
    </Draggable>
  ));

  return (
    <>
      <Card {...props}>
        <Card.Header>
          <h4 className="card-header-title">Kanban Tasks</h4>
          <Link className="small" href="/kanban">View Kanban</Link>
        </Card.Header>
        <Card.Body>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="tasks">
              {(provided) => (
                <Kanban.Category ref={provided.innerRef} {...provided.droppableProps}>
                  {items}
                  {provided.placeholder}
                </Kanban.Category>
              )}
            </Droppable>
          </DragDropContext>
          <Card className="card-sm mb-0">
            <Card.Body>
              <Kanban.AddForm>
                <Row className="align-items-center">
                  <Col>
                    <Form.Control
                      as={TextareaAutosize}
                      className="form-control-auto form-control-flush"
                      placeholder="Draft your card"
                    />
                  </Col>
                  <Col xs="auto">
                    <div className="d-flex align-items-center">
                      <span className="text-muted small me-2">
                        <FeatherIcon icon="clock" size="1em" />
                      </span>
                      <Form.Control
                        as={Flatpickr}
                        className="form-control-auto form-control-flush text-muted"
                        options={{ dateFormat: 'M j' }}
                        placeholder="No due date"
                        size="sm"
                        type="text"
                      />
                    </div>
                  </Col>
                </Row>
              </Kanban.AddForm>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
      <ModalKanbanTask visible={modalTaskVisible} onDismiss={() => setModalTaskVisible(false)} />
    </>
  );
}
