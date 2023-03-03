import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Collapse, Container, Dropdown, Form, InputGroup, Nav, Navbar } from 'react-bootstrap';
import { Avatar, Icon } from '../components';
import { nav as data } from '../data';
import { ModalNotifications, ModalSearch } from '../modals';

export default function Sidenav({ ...props }) {
  const router = useRouter();

  const [activeItemId, setActiveItemId] = useState(() => {
    return Object.keys(data).filter((itemId) => {
      return data[itemId].url === router.pathname;
    })[0];
  });

  const [modalSearchVisible, setModalSearchVisible] = useState(false);
  const [modalNotificationsVisible, setModalNotificationsVisible] = useState(false);

  function isExpanded(itemId) {
    if (activeItemId === itemId) {
      return true;
    }

    return isParent(itemId);
  }

  function isParent(itemId) {
    const item = data[itemId];

    if (!item.children) {
      return false;
    }

    if (item.children.includes(activeItemId)) {
      return true;
    }

    let result = false;

    item.children.forEach((childId) => {
      if (isParent(childId)) {
        result = true;
      }
    });

    return result;
  }

  function getItems(ids) {
    return ids.map(function (id, index) {
      const item = data[id];

      return (
        <div key={id}>
          {index > 0 && <hr className="navbar-divider" />}
          {item.title && <h6 className="navbar-heading">{item.title}</h6>}
          {item.children && <Nav>{getSubitems(item.children, id, ids)}</Nav>}
        </div>
      );
    });
  }

  function getSubitems(ids, parentId, arr) {
    return ids.map(function (id) {
      const item = data[arr.splice(arr.indexOf(id), 1)];

      return (
        <Nav.Item key={id}>
          {item.children ? (
            <>
              <Nav.Link onClick={() => handleClick(id, parentId)} role="button">
                {item.icon && <FeatherIcon icon={item.icon} size="17" />}
                {item.title}
                <FeatherIcon icon="chevron-down" size="1em" className={`ms-auto nav-chevron ${isExpanded(id) && 'active'}`} {...props} />
              </Nav.Link>
              <Collapse in={isExpanded(id)}>
                <div>
                  <div className="nav nav-sm flex-column">{getSubitems(item.children, id, arr)}</div>
                </div>
              </Collapse>
            </>
          ) : (
            <Nav.Link as={Link} href={item.url} active={router.pathname === item.url} onClick={() => handleClick(id, parentId)}>
              {item.icon && <FeatherIcon icon={item.icon} size="17" />}
              {item.title}
            </Nav.Link>
          )}
        </Nav.Item>
      );
    });
  }

  function handleClick(itemId, parentId, setVisible) {
    setActiveItemId(isExpanded(itemId) ? parentId : itemId);

    if (setVisible) {
      setVisible(false);
    }
  }

  const toggler = <Navbar.Toggle />;

  const brand = (
    <Navbar.Brand as={Link} href="/">
      <img className="navbar-brand-img" src="/img/logo.svg" alt="..." />
    </Navbar.Brand>
  );
  89093092637;
  const user = (
    <Dropdown align="end" className="d-md-none">
      <Dropdown.Toggle as={Avatar} size="sm" status="online" role="button">
        <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="..." />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item as={Link} href="/profile-posts">
          Profile
        </Dropdown.Item>
        <Dropdown.Item as={Link} href="/account-general">
          Settings
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item as={Link} href="/sign-in">
          Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  const form = (
    <form className="mt-4 mb-3 d-md-none">
      <InputGroup className="input-group-merge input-group-reverse input-group-rounded">
        <Form.Control type="search" placeholder="Search" aria-label="Search" />
        <InputGroup.Text>
          <FeatherIcon icon="search" size="15" />
        </InputGroup.Text>
      </InputGroup>
    </form>
  );

  const footer = (
    <div className="navbar-user d-none d-md-flex">
      <a className="navbar-user-link" role="button" onClick={() => setModalNotificationsVisible(true)}>
        <Icon>
          <FeatherIcon icon="bell" size="17" />
        </Icon>
      </a>
      <Dropdown drop="up">
        <Dropdown.Toggle as={Avatar} size="sm" status="online" role="button">
          <Avatar.Image className="rounded-circle" src="/img/avatars/profiles/avatar-1.jpg" alt="..." />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} href="/profile-posts">
            Profile
          </Dropdown.Item>
          <Dropdown.Item as={Link} href="/account-general">
            Settings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item as={Link} href="/sign-in">
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <a className="navbar-user-link" role="button" onClick={() => setModalSearchVisible(true)}>
        <Icon>
          <FeatherIcon icon="search" size="17" />
        </Icon>
      </a>
    </div>
  );

  const collapse = (
    <Navbar.Collapse {...props}>
      {form}
      {getItems(Object.keys(data))}
      <div className="mt-auto mb-md-4" />
      {footer}
    </Navbar.Collapse>
  );

  return (
    <>
      <Navbar expand="md" className="navbar-vertical fixed-start" collapseOnSelect={true} {...props}>
        <Container fluid>
          {toggler}
          {brand}
          {user}
          {collapse}
        </Container>
      </Navbar>
      <ModalSearch visible={modalSearchVisible} onDismiss={() => setModalSearchVisible(false)} />
      <ModalNotifications visible={modalNotificationsVisible} onDismiss={() => setModalNotificationsVisible(false)} />
    </>
  );
}
