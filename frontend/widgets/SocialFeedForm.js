import FeatherIcon from 'feather-icons-react';
import React, { useState } from 'react';
import { Card, Col, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import TextareaAutosize from 'react-textarea-autosize';

export default function SocialFeedForm({ ...props }) {
  const [value, setValue] = useState('');
  const [counter, setCounter] = useState(0);

  function handleInputChange(e) {
    const value = e.target.value;

    if (value.length <= 500) {
      setValue(e.target.value);
      setCounter(e.target.value.length);
    }
  }

  return (
    <Card {...props}>
      <Card.Body>
        <form>
          <div className="form-group">
            <Form.Control
              as={TextareaAutosize}
              className="form-control-auto form-control-flush"
              minRows={3}
              onChange={(e) => handleInputChange(e)}
              placeholder="Start a post..."
              value={value}
            />
          </div>
          <Row className="align-items-center">
            <Col>
              <small className="text-muted">{counter}/500</small>
            </Col>
            <Col xs="auto">
              <div className="text-muted">
                <OverlayTrigger overlay={<Tooltip>Add photo</Tooltip>}>
                  <span>
                    <FeatherIcon icon="camera" size="1em" className="me-3" />
                  </span>
                </OverlayTrigger>
                <OverlayTrigger overlay={<Tooltip>Attach file</Tooltip>}>
                  <span>
                    <FeatherIcon icon="paperclip" size="1em" className="me-3" />
                  </span>
                </OverlayTrigger>
                <OverlayTrigger overlay={<Tooltip>Record audio</Tooltip>}>
                  <span>
                    <FeatherIcon icon="mic" size="1em" />
                  </span>
                </OverlayTrigger>
              </div>
            </Col>
          </Row>
        </form>
      </Card.Body>
    </Card>
  );
}
