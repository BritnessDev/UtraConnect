import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Badge, Card, Col, ListGroup, OverlayTrigger, Row, Table, Tooltip } from 'react-bootstrap';
import { Avatar, Header, Kanban } from '../components';
import { Highlight } from '../components/vendor';
import { formatLocaleDateString } from '../helpers';
import { ModalKanbanTask, ModalKanbanTaskEmpty } from '../modals';

export default function Kanbans({ ...props }) {
  const [modalTaskVisible, setModalTaskVisible] = useState(false);
  const [modalTaskEmptyVisible, setModalTaskEmptyVisible] = useState(false);

  const [data, setData] = useState({
    items: {
      'item-1': {
        id: 'item-1',
        content: `Create the release notes for the new pages so customers are aware.`,
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
        content: `Create the release notes for the new pages so customers are aware.`,
        date: '2020-06-09',
        users: [
          {
            imgSrc: '/img/avatars/profiles/avatar-2.jpg',
            title: 'Ab Hadley',
          },
        ],
      },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        itemIds: ['item-1'],
      },
      'column-2': {
        id: 'column-2',
        itemIds: ['item-2'],
      },
    },
    columnOrder: ['column-1', 'column-2'],
  });

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
    <div id="kanban" {...props}>
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>
            Kanban{' '}
            <Badge bg="primary-soft" className="ms-1 mt-n1">
              Dashkit only
            </Badge>
          </Header.Title>
          <Header.Subtitle>Kanban board powered by react-beautiful-dnd.</Header.Subtitle>
        </Header.Body>
      </Header>
      <Card>
        <Card.Body>
          <div className="container-fluid kanban-container" style={{ minHeight: 0 }}>
            <Row>
              <DragDropContext onDragEnd={onDragEnd}>
                {data.columnOrder.map((columnId, index) => {
                  const column = data.columns[columnId];

                  return (
                    <Col xs={12} key={index}>
                      <Card>
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
                                          <Card className="card-sm mb-0" onClick={() => setModalTaskVisible(true)}>
                                            <Card.Body>
                                              <p>{item.content}</p>
                                              <Row className="align-items-center">
                                                <Col>
                                                  <Card.Text className="small text-muted">
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
                                                {item.users && (
                                                  <Col xs="auto">
                                                    <Avatar.Group>
                                                      {item.users.map((user, key) => (
                                                        <Avatar as={Link} href="/profile-posts" key={key} size="xs">
                                                          <OverlayTrigger overlay={<Tooltip>{user.title}</Tooltip>}>
                                                            <Avatar.Image src={user.imgSrc} alt={user.title} className="rounded-circle" {...props} />
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
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </DragDropContext>
            </Row>
          </div>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            export&nbsp;default&nbsp;function&nbsp;Kanban()&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;const&nbsp;[data,&nbsp;setData]&nbsp;=&nbsp;useState({'{'}...{'}'});
            <br />
            &nbsp;&nbsp;const&nbsp;onDragEnd(result)&nbsp;{'{'}...{'}'};<br />
            <br />
            &nbsp;&nbsp;return&nbsp;(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&nbsp;className=&quot;container-fluid&nbsp;kanban-container&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Row&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;DragDropContext&nbsp;onDragEnd={'{'}onDragEnd{'}'}&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            data.columnOrder.map((columnId,&nbsp;index)&nbsp;=&gt;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const&nbsp;column&nbsp;=&nbsp;data.columns[columnId];
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Col&nbsp;xs={'{'}12
            {'}'}&nbsp;key={'{'}index{'}'}&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Card&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Card.Body&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Droppable&nbsp;droppableId=
            {'{'}columnId{'}'}&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {'{'}(provided)&nbsp;=&gt;&nbsp;(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Kanban.Category
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ref=
            {'{'}provided.innerRef{'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {'{'}...provided.droppableProps{'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {'{'}column.itemIds.map((itemId,&nbsp;index)&nbsp;=&gt;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const&nbsp;item&nbsp;=&nbsp;data.items[itemId];
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Draggable
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;draggableId=
            {'{'}item.id{'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key=
            {'{'}item.id{'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index=
            {'{'}index{'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {'{'}(provided,&nbsp;snapshot)&nbsp;=&gt;&nbsp;(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Kanban.Item
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dragging=
            {'{'}snapshot.isDragging{'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dropped=
            {'{'}snapshot.isDropAnimating{'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ref=
            {'{'}provided.innerRef{'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {'{'}...provided.draggableProps{'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {'{'}...provided.dragHandleProps{'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Kanban.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)
            {'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Draggable&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {'}'}){'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {'{'}provided.placeholder{'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Kanban.Category&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)
            {'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Droppable&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Card.Body&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Card&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Col&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}){'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/DragDropContext&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Row&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;)
            <br />
            {'}'}
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Rows{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>
      </h2>
      <p className="text-muted mb-4">Vertical variation of the kanban board.</p>
      <Card>
        <Card.Body>
          <ListGroup className="list-group-flush list-group-lg">
            <DragDropContext onDragEnd={onDragEnd}>
              {data.columnOrder.map((columnId, index) => {
                const column = data.columns[columnId];

                return (
                  <ListGroup.Item key={index}>
                    <Droppable droppableId={columnId}>
                      {(provided) => (
                        <Kanban.Category ref={provided.innerRef} {...provided.droppableProps}>
                          {column.itemIds.map((itemId, index) => {
                            const item = data.items[itemId];

                            return (
                              <Draggable draggableId={item.id} key={item.id} index={index}>
                                {(provided, snapshot) => (
                                  <Kanban.Item className="mb-3" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                    <Card className="card-sm mb-0" onClick={() => setModalTaskEmptyVisible(true)}>
                                      <Card.Body>
                                        <Row className="align-items-center">
                                          <Col xs={12} sm>
                                            {item.content}
                                          </Col>
                                          {(item.comments || item.date) && (
                                            <Col sm="auto">
                                              <Card.Text className="small text-muted">
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
                                                  <Avatar as={Link} href="/profile-posts" key={key} size="xs">
                                                    <OverlayTrigger overlay={<Tooltip>{user.title}</Tooltip>}>
                                                      <Avatar.Image src={user.imgSrc} alt={user.title} className="rounded-circle" {...props} />
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
                  </ListGroup.Item>
                );
              })}
            </DragDropContext>
          </ListGroup>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            export&nbsp;default&nbsp;function&nbsp;Kanban()&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;const&nbsp;[data,&nbsp;setData]&nbsp;=&nbsp;useState({'{'}...{'}'});
            <br />
            &nbsp;&nbsp;const&nbsp;onDragEnd(result)&nbsp;{'{'}...{'}'};<br />
            <br />
            &nbsp;&nbsp;return&nbsp;(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;ListGroup&nbsp;className=&quot;list-group-flush&nbsp;list-group-lg&quot;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;DragDropContext&nbsp;onDragEnd={'{'}onDragEnd{'}'}&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            data.columnOrder.map((columnId,&nbsp;index)&nbsp;=&gt;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const&nbsp;column&nbsp;=&nbsp;data.columns[columnId];
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ListGroup.Item&nbsp;key={'{'}
            index{'}'}&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Droppable&nbsp;droppableId=
            {'{'}columnId{'}'}&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            (provided)&nbsp;=&gt;&nbsp;(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Kanban.Category
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ref=
            {'{'}provided.innerRef{'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {'{'}...provided.droppableProps{'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {'{'}column.itemIds.map((itemId,&nbsp;index)&nbsp;=&gt;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const&nbsp;item&nbsp;=&nbsp;data.items[itemId];
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Draggable
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;draggableId=
            {'{'}item.id{'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key=
            {'{'}item.id{'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index=
            {'{'}index{'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {'{'}(provided,&nbsp;snapshot)&nbsp;=&gt;&nbsp;(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Kanban.Item
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ref=
            {'{'}provided.innerRef{'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {'{'}...provided.draggableProps{'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {'{'}...provided.dragHandleProps{'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Kanban.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)
            {'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Draggable&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {'}'}){'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {'{'}provided.placeholder{'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Kanban.Category&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;){'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Droppable&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ListGroup.Item&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}){'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/DragDropContext&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/ListGroup&gt;
            <br />
            &nbsp;&nbsp;)
            <br />
            {'}'}
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Below you can find the extended props API for the <code>Kanban.AddForm</code>, <code>Kanban.Category</code>, and <code>Kanban.Item</code> components.
        Please see the{' '}
        <a href="https://github.com/atlassian/react-beautiful-dnd" target="_blank">
          official plugin documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Kanban&nbsp;{'}'}&nbsp;from&nbsp;'../components';&nbsp;//&nbsp;Kanban.AddForm
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
                <em>form</em> | tag
              </code>
            </td>
          </tr>
        </tbody>
      </Table>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Kanban&nbsp;{'}'}&nbsp;from&nbsp;'../components';&nbsp;//&nbsp;Kanban.Category
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
            import&nbsp;{'{'}&nbsp;Kanban&nbsp;{'}'}&nbsp;from&nbsp;'../components';&nbsp;//&nbsp;Kanban.Item
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
          <tr>
            <td>dragging</td>
            <td>
              <code>
                <em>false</em> | true
              </code>
            </td>
          </tr>
        </tbody>
      </Table>
      <ModalKanbanTask visible={modalTaskVisible} onDismiss={() => setModalTaskVisible(false)} />
      <ModalKanbanTaskEmpty visible={modalTaskEmptyVisible} onDismiss={() => setModalTaskEmptyVisible(false)} />
    </div>
  );
}
