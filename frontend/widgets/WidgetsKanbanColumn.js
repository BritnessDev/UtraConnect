import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Badge, Button, Card, Col, Dropdown, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Avatar, Kanban } from '../components';
import { Flatpickr } from '../components/vendor';
import { formatLocaleDateString, getStatusColor } from '../helpers';
import { ModalKanbanTask, ModalKanbanTaskEmpty } from '../modals';

export default function WidgetsKanbanColumn({ ...props }) {
  const [data, setData] = useState({
    items: {
      'item-1': {
        id: 'item-1',
        content: `👆Click me to see what a Kanban modal looks like right here!`,
        date: '2020-06-09',
        users: [
          {
            imgSrc: '/img/avatars/profiles/avatar-2.jpg',
            title: 'Ab Hadley',
          },
        ],
      },
      'item-2': {
        id: 'item-2',
        imgSrc: '/img/kanban/kanban-2.jpg',
        content: `Finish the design for blog listings and articles, including mixed media`,
        comments: '23',
        date: '2020-09-09',
        users: [
          {
            imgSrc: '/img/avatars/profiles/avatar-2.jpg',
            title: 'Ab Hardley',
          },
          {
            imgSrc: '/img/avatars/profiles/avatar-3.jpg',
            title: 'Adolfo Hess',
          },
          {
            imgSrc: '/img/avatars/profiles/avatar-4.jpg',
            title: 'Daniela Dewitt',
          },
        ],
      },
      'item-3': {
        id: 'item-3',
        content: `Clear all the deprecation warnings for out of date NPM packages`,
        status: 'Reviewed',
      },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'Release 1.1.0',
        itemIds: ['item-1', 'item-2', 'item-3'],
      },
    },
    columnOrder: ['column-1'],
  });

  const [addCardOpen, setAddCardOpen] = useState(false);
  const [modalTaskVisible, setModalTaskVisible] = useState(false);
  const [modalTaskEmptyVisible, setModalTaskEmptyVisible] = useState(false);

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
    <>
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
                                <Card
                                  className="card-sm mb-0"
                                  onClick={() =>
                                    index % 2 === 0 ? setModalTaskVisible(true) : setModalTaskEmptyVisible(true)
                                  }
                                >
                                  {item.imgSrc && <Card.Img variant="top" src={item.imgSrc} alt={item.content} />}
                                  <Card.Body>
                                    {item.status && (
                                      <p className="mb-3">
                                        <Badge bg={`${getStatusColor(item.status)}-soft`}>{item.status}</Badge>
                                      </p>
                                    )}
                                    <p className="mb-0">{item.content}</p>
                                    {(item.comments || item.date || item.user) && <p />}
                                    <Row className="align-items-center">
                                      {(item.comments || item.date) && (
                                        <Col>
                                          <Card.Text className="small text-muted">
                                            {item.comments && (
                                              <span className="me-3">
                                                <FeatherIcon icon="message-circle" size="1em" /> {item.comments}
                                              </span>
                                            )}
                                            {item.date && (
                                              <span className="me-3">
                                                <FeatherIcon icon="clock" size="1em" />{' '}
                                                {formatLocaleDateString(item.date, {
                                                  month: 'short',
                                                  day: 'numeric',
                                                })}
                                              </span>
                                            )}
                                          </Card.Text>
                                        </Col>
                                      )}
                                      {item.users && (
                                        <Col xs="auto">
                                          <Avatar.Group>
                                            {item.users.map((user, key) => (
                                              <Avatar size="xs" key={key}>
                                                <OverlayTrigger overlay={<Tooltip>{user.title}</Tooltip>}>
                                                  <Avatar.Image
                                                    src={user.imgSrc}
                                                    alt={user.title}
                                                    className="rounded-circle"
                                                  />
                                                </OverlayTrigger>
                                              </Avatar>
                                            ))}
                                          </Avatar.Group>
                                        </Col>
                                      )}
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
                  <Card className="card-flush card-sm mb-0">
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
      <ModalKanbanTask visible={modalTaskVisible} onDismiss={() => setModalTaskVisible(false)} />
      <ModalKanbanTaskEmpty visible={modalTaskEmptyVisible} onDismiss={() => setModalTaskEmptyVisible(false)} />
    </>
  );
}
