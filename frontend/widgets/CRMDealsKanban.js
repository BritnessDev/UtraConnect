import FeatherIcon from 'feather-icons-react';
import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Card, Col, Dropdown, Form, Row } from 'react-bootstrap';
import { Avatar, Kanban } from '../components';
import { formatLocaleString } from '../helpers';

export default function CRMDealsKanban({ deals }) {
  const [data, setData] = useState(deals);

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

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {data.columnOrder.map((columnId, index) => {
        const column = data.columns[columnId];

        return (
          <Col xs={12} key={index}>
            <Card>
              <Card.Header className="card-header-flush">
                <h4 className="card-header-title">{column.title}</h4>
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
                                    <Row className="row align-items-center">
                                      <Col xs="auto">
                                        <Form.Check type="checkbox" />
                                      </Col>
                                      <Col className="ms-n3">
                                        <h4 className="mb-1">{item.title}</h4>
                                        <small className="text-muted">${formatLocaleString(item.amount)}</small>
                                      </Col>
                                      <Col xs="auto">
                                        <Avatar size="xs">
                                          <Avatar.Image src={item.imgSrc} className="rounded-circle" alt={item.name} />
                                        </Avatar>
                                      </Col>
                                    </Row>
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
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </DragDropContext>
  );
}
