import FeatherIcon from 'feather-icons-react';
import React, { useState } from 'react';
import { Card, CloseButton, Form } from 'react-bootstrap';

export default function WidgetsKanbanAddListClose({ ...props }) {
  const [addListOpen, setAddListOpen] = useState(true);

  return (
    <>
      <Card {...props}>
        <Card.Body>
          {addListOpen ? (
            <form>
              <div className="d-flex align-items-center">
                <Form.Control
                  className="h4 form-control-auto form-control-flush"
                  placeholder="Name your list"
                  type="text"
                />
                <CloseButton className="ms-3" onClick={() => setAddListOpen(false)} size="sm" type="reset" />
              </div>
            </form>
          ) : (
            <div className="text-center">
              <a href="#!" onClick={() => setAddListOpen(true)}>
                Add list
              </a>
            </div>
          )}
        </Card.Body>
      </Card>
    </>
  );
}
