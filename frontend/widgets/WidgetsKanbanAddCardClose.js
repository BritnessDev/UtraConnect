import FeatherIcon from 'feather-icons-react';
import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Button, Card, Col, Dropdown, Form, Row } from 'react-bootstrap';
import { Kanban } from '../components';
import { Flatpickr } from '../components/vendor';

export default function WidgetsKanbanAddCardClose({ ...props }) {
  const [data, setData] = useState({
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'Release 1.1.0',
        itemIds: [],
      },
    },
    columnOrder: ['column-1'],
  });

  const [addCardOpen, setAddCardOpen] = useState('column-1');

  function onDragEnd(result) {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newItemIds = Array.from(start.itemIds);

      newItemIds.splice(source.index, 1);
      newItemIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        itemIds: newItemIds,
      };

      const newData = {
        ...data,
        columns: { ...data.columns, [newColumn.id]: newColumn },
      };

      setData(newData);

      return;
    }

    const startItemIds = Array.from(start.itemIds);
    startItemIds.splice(source.index, 1);

    const newStart = {
      ...start,
      itemIds: startItemIds,
    };

    const finishItemIds = Array.from(finish.itemIds);
    finishItemIds.splice(destination.index, 0, draggableId);

    const newFinish = {
      ...finish,
      itemIds: finishItemIds,
    };

    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setData(newData);
  }

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
    <DragDropContext onDragEnd={onDragEnd}>
      {data.columnOrder.map((columnId, index) => {
        const column = data.columns[columnId];

        return (
          <Card key={index} {...props}>
            <Card.Header className="card-header-flush">
              <h4 className="card-header-title">{column.title}</h4>
              {dropdown}
            </Card.Header>
            <Card.Body>
              <Droppable droppableId={columnId}>
                {(provided) => (
                  <Kanban.Category ref={provided.innerRef} {...provided.droppableProps}>
                    {column.itemIds.map((itemId, index) => {
                      const item = data.items[itemId];

                      return (
                        <Draggable draggableId={item.id} key={item.id} index={index}>
                          {(provided, snapshot) => (
                            <Kanban.Item
                              className="mb-3"
                              dragging={snapshot.isDragging}
                              dropped={snapshot.isDropAnimating}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <Card className="card-sm mb-0">
                                <Card.Body>
                                  <p className="mb-0">{item.content}</p>
                                </Card.Body>
                              </Card>
                            </Kanban.Item>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </Kanban.Category>
                )}
              </Droppable>
              {addCardOpen === columnId ? (
                <Card className="card-sm mb-0">
                  <Card.Body>
                    <form>
                      <div className="form-group">
                        <Form.Control
                          as="textarea"
                          className="form-control-auto form-control-flush"
                          placeholder="Draft your card"
                        />
                      </div>
                      <Row className="align-items-center">
                        <Col className="d-flex align-items-center">
                          <span className="text-muted small me-2">
                            <FeatherIcon icon="clock" size="1em" />
                          </span>
                          <Form.Control
                            as={Flatpickr}
                            className="form-control-auto form-control-flush"
                            placeholder="No due date"
                            size="sm"
                          />
                        </Col>
                        <Col xs="auto">
                          <Button variant="white" size="sm" onClick={() => setAddCardOpen(false)}>
                            Cancel
                          </Button>
                          <Button size="sm" className="ms-1">
                            Add
                          </Button>
                        </Col>
                      </Row>
                    </form>
                  </Card.Body>
                </Card>
              ) : (
                <Card className="card-sm card-flush mb-0">
                  <Card.Body>
                    <div className="text-center">
                      <a href="#!" onClick={() => setAddCardOpen(columnId)}>
                        Add Card
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              )}
            </Card.Body>
          </Card>
        );
      })}
    </DragDropContext>
  );
}
