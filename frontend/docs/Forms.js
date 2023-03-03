import FeatherIcon from 'feather-icons-react';
import React from 'react';
import { Badge, Button, Card, Col, FloatingLabel, Form, InputGroup, Row, Table } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import { Header } from '../components';
import { Dropzone, Flatpickr, Highlight, Map, Quill, Select } from '../components/vendor';

export default function Forms({ ...props }) {
  return (
    <div id="forms" {...props}>
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>Forms</Header.Title>
          <Header.Subtitle>
            Dashkit React supports all of Bootstrap's default form styling in addition to a handful of new input types and features.
          </Header.Subtitle>
        </Header.Body>
      </Header>
      <Card>
        <Card.Body>
          <form>
            <div className="form-group">
              <Form.Label htmlFor="exampleInputEmail1">Email address</Form.Label>
              <Form.Control id="exampleInputEmail1" placeholder="Enter email" type="email" />
            </div>
            <div className="form-group">
              <Form.Label htmlFor="exampleInputPassword1">Password</Form.Label>
              <Form.Control id="exampleInputPassword1" placeholder="Password" type="password" />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Floating labels</h2>
      <p className="text-muted mb-4">Enable floating labels with Bootstrap’s textual form fields.</p>
      <Card>
        <Card.Body>
          <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Switch</h2>
      <p className="text-muted mb-4">Replaces a standard checkbox input with a toggle switch.</p>
      <Card>
        <Card.Body>
          <Form.Check type="switch" id="custom-switch" label="Default switch checkbox input" />
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Validation</h2>
      <p className="text-muted mb-4">
        Indicate invalid and valid form fields with <code>isValid</code> and <code>isInvalid</code> properties.
      </p>
      <Card>
        <Card.Body>
          <form>
            <Row className="g-3">
              <Col xs={12} md={6} className="mb-3">
                <Form.Label htmlFor="validationServer01">First name</Form.Label>
                <Form.Control defaultValue="Mark" id="validationServer01" isValid={true} placeholder="First name" type="text" />
                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
              </Col>
              <Col xs={12} md={6} className="mb-3">
                <Form.Label htmlFor="validationServer02">Last name</Form.Label>
                <Form.Control defaultValue="Otto" id="validationServer02" isValid={true} placeholder="Last name" type="text" />
                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
              </Col>
            </Row>
            <Row className="g-3">
              <Col xs={12} md={6} className="mb-3">
                <Form.Label htmlFor="validationServer03">City</Form.Label>
                <Form.Control isInvalid={true} id="validationServer03" placeholder="City" type="text" />
                <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
              </Col>
              <Col xs={12} md={6} className="mb-3">
                <Form.Label htmlFor="validationServer04">State</Form.Label>
                <Form.Control isInvalid={true} id="validationServer04" placeholder="State" type="text" />
                <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
              </Col>
            </Row>
            <div className="form-group">
              <Form.Check
                feedback="You must agree before submitting."
                feedbackType="invalid"
                id="invalidCheck3"
                isInvalid={true}
                label="Agree to terms and conditions"
                required
              />
            </div>
            <Button type="submit">Submit form</Button>
          </form>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Rounded{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>
      </h2>
      <p className="text-muted mb-4">
        Round form control corners with the <code>.form-control-rounded</code> modifier.
      </p>
      <Card>
        <Card.Body>
          <Form.Control className="form-control-rounded" placeholder="Form control rounded" />
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Form.Control&nbsp;className=&quot;form-control-rounded&quot;&nbsp;placeholder=&quot;Form&nbsp;control&nbsp;rounded&quot;&nbsp;/&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Flush{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>
      </h2>
      <p className="text-muted mb-4">
        Remove vertical padding and borders from a form control with the <code>.form-control-flush</code> modifier.
      </p>
      <Card>
        <Card.Body>
          <Form.Control className="form-control-flush" placeholder="Form control flush" />
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Form.Control&nbsp;className=&quot;form-control-flush&quot;&nbsp;placeholder=&quot;Form&nbsp;control&nbsp;flush&quot;&nbsp;/&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Auto{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>
      </h2>
      <p className="text-muted mb-4">
        Remove vertical padding and set form control's height to auto with the <code>.form-control-auto</code> modifier.
      </p>
      <Card>
        <Card.Body>
          <Form.Control className="form-control-flush form-control-auto" placeholder="Form control auto" />
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Form.Control&nbsp;className=&quot;form-control-flush&nbsp;form-control-auto&quot;&nbsp;&quot;&nbsp;placeholder=&quot;Form&nbsp;control&nbsp;auto&quot;&nbsp;/&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Input group merge{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>
      </h2>
      <p className="text-muted mb-4">A slightly modified version of the default input groups that always keeps icons as a part of the form control.</p>
      <Card>
        <Card.Body>
          <InputGroup className="input-group-merge input-group-reverse mb-3">
            <Form.Control placeholder="Input group reverse" />
            <InputGroup.Text>
              <FeatherIcon icon="eye" size="1em" />
            </InputGroup.Text>
          </InputGroup>
          <InputGroup className="input-group-merge mb-3">
            <Form.Control placeholder="Input group appended" />
            <InputGroup.Text>
              <FeatherIcon icon="lock" size="1em" />
            </InputGroup.Text>
          </InputGroup>
          <InputGroup className="input-group-merge input-group-reverse mb-3">
            <Form.Control isValid={true} placeholder="Input group reverse" />
            <InputGroup.Text>
              <FeatherIcon icon="eye" size="1em" />
            </InputGroup.Text>
          </InputGroup>
          <InputGroup className="input-group-merge">
            <Form.Control isInvalid={true} placeholder="Input group appended" />
            <InputGroup.Text>
              <FeatherIcon icon="lock" size="1em" />
            </InputGroup.Text>
          </InputGroup>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;InputGroup&nbsp;className=&quot;input-group-merge&nbsp;input-group-reverse&nbsp;mb-3&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Form.Control&nbsp;placeholder=&quot;Input&nbsp;group&nbsp;reverse&quot;&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&lt;InputGroup.Text&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;FeatherIcon&nbsp;icon=&quot;eye&quot;&nbsp;size=&quot;1em&quot;&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&lt;/InputGroup.Text&gt;
            <br />
            &lt;/InputGroup&gt;
            <br />
            <br />
            &lt;InputGroup&nbsp;className=&quot;input-group-merge&nbsp;mb-3&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Form.Control&nbsp;placeholder=&quot;Input&nbsp;group&nbsp;appended&quot;&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&lt;InputGroup.Text&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;FeatherIcon&nbsp;icon=&quot;lock&quot;&nbsp;size=&quot;1em&quot;&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&lt;/InputGroup.Text&gt;
            <br />
            &lt;/InputGroup&gt;
            <br />
            <br />
            &lt;InputGroup&nbsp;className=&quot;input-group-merge&nbsp;input-group-reverse&nbsp;mb-3&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Form.Control&nbsp;isValid={'{'}true{'}'}
            &nbsp;placeholder=&quot;Input&nbsp;group&nbsp;reverse&quot;&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&lt;InputGroup.Text&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;FeatherIcon&nbsp;icon=&quot;eye&quot;&nbsp;size=&quot;1em&quot;&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&lt;/InputGroup.Text&gt;
            <br />
            &lt;/InputGroup&gt;
            <br />
            <br />
            &lt;InputGroup&nbsp;className=&quot;input-group-merge&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;Form.Control&nbsp;isInvalid={'{'}true{'}'}
            &nbsp;placeholder=&quot;Input&nbsp;group&nbsp;appended&quot;&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&lt;InputGroup.Text&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;FeatherIcon&nbsp;icon=&quot;lock&quot;&nbsp;size=&quot;1em&quot;&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&lt;/InputGroup.Text&gt;
            <br />
            &lt;/InputGroup&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Please see the{' '}
        <a href="https://react-bootstrap.github.io/components/forms/" target="_blank">
          official React Bootstrap documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;FloatingLabel,&nbsp;Form,&nbsp;InputGroup&nbsp;{'}'}
            &nbsp;from&nbsp;'react-bootstrap';
          </Highlight>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Date picker{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>{' '}
        <Badge bg="warning-soft" className="ms-1 mt-n1">
          Plugin
        </Badge>
      </h2>
      <p className="text-muted mb-4">A simple yet powerful datepicker powered by the react-flatpickr.</p>
      <Card>
        <Card.Body>
          <Form.Control as={Flatpickr} className="mb-3" placeholder="Flatpickr example" />
          <Form.Control as={Flatpickr} options={{ mode: 'range' }} placeholder="Flatpickr range example" />
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Form.Control&nbsp;as={'{'}Flatpickr{'}'}&nbsp;placeholder=&quot;Flatpickr&nbsp;example&quot;&nbsp;/&gt;
            <br />
            &lt;Form.Control&nbsp;as={'{'}Flatpickr{'}'}&nbsp;options={'{'}
            {'{'}&nbsp;mode:&nbsp;'range'&nbsp;{'}'}
            {'}'}&nbsp;placeholder=&quot;Flatpickr&nbsp;range&nbsp;example&quot;&nbsp;/&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Please see the{' '}
        <a href="https://github.com/haoxins/react-flatpickr" target="_blank">
          official plugin documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Flatpickr&nbsp;{'}'}
            &nbsp;from&nbsp;'../components/vendor';
          </Highlight>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Input masking{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>{' '}
        <Badge bg="warning-soft" className="ms-1 mt-n1">
          Plugin
        </Badge>
      </h2>
      <p className="text-muted mb-4">Mask your form controls depending on the context with the react-number-format plugin.</p>
      <Card>
        <Card.Body>
          <Form.Control as={NumberFormat} className="mb-3" placeholder="$0.00" prefix="$" thousandSeparator />
          <Form.Control as={NumberFormat} className="mb-3" format="(###)###-####" mask="_" placeholder="(___)___-____" />
          <Form.Control as={NumberFormat} format="##/##/####" mask="_" placeholder="__/__/____" />
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Form.Control
            <br />
            &nbsp;&nbsp;as={'{'}NumberFormat{'}'}
            <br />
            &nbsp;&nbsp;placeholder=&quot;$0.00&quot;
            <br />
            &nbsp;&nbsp;prefix=&quot;$&quot;
            <br />
            &nbsp;&nbsp;thousandSeparator
            <br />
            /&gt;
            <br />
            <br />
            &lt;Form.Control
            <br />
            &nbsp;&nbsp;as={'{'}NumberFormat{'}'}
            <br />
            &nbsp;&nbsp;format=&quot;(###)###-####&quot;
            <br />
            &nbsp;&nbsp;mask=&quot;_&quot;
            <br />
            &nbsp;&nbsp;placeholder=&quot;(___)___-____&quot;
            <br />
            /&gt;
            <br />
            <br />
            &lt;Form.Control
            <br />
            &nbsp;&nbsp;as={'{'}NumberFormat{'}'}
            <br />
            &nbsp;&nbsp;format=&quot;##/##/####&quot;
            <br />
            &nbsp;&nbsp;mask=&quot;_&quot;
            <br />
            &nbsp;&nbsp;placeholder=&quot;__/__/____&quot;
            <br />
            /&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Please see the{' '}
        <a href="https://github.com/s-yadav/react-number-format" target="_blank">
          official plugin documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;NumberFormat&nbsp;from&nbsp;'react-number-format';
          </Highlight>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Rich text editor{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>{' '}
        <Badge bg="warning-soft" className="ms-1 mt-n1">
          Plugin
        </Badge>
      </h2>
      <p className="text-muted mb-4">Powerful WYSIWYG text editor powered by ReactQuill.</p>
      <Card>
        <Card.Body>
          <Quill />
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Quill&nbsp;/&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Please see the{' '}
        <a href="https://github.com/zenoamaro/react-quill" target="_blank">
          official plugin documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Quill&nbsp;{'}'}
            &nbsp;from&nbsp;'../components/vendor';
          </Highlight>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Drag and drop{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>{' '}
        <Badge bg="warning-soft" className="ms-1 mt-n1">
          Plugin
        </Badge>
      </h2>
      <p className="text-muted mb-4">Drag and drop file uploads with image previews powered by react-dropzone.</p>
      <Card>
        <Card.Body>
          <Dropzone accept={{ 'image/*': ['.jpeg', '.png'] }} className="mb-3" onDrop={(acceptedFiles) => console.log(acceptedFiles)} />
          <Dropzone multiple onDrop={(acceptedFiles) => console.log(acceptedFiles)} />
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Dropzone
            <br />
            &nbsp;&nbsp;accept=&quot;image/*&quot;
            <br />
            &nbsp;&nbsp;onDrop={'{'}
            (acceptedFiles)&nbsp;=&gt;&nbsp;console.log(acceptedFiles){'}'}
            <br />
            /&gt;
            <br />
            <br />
            &lt;Dropzone
            <br />
            &nbsp;&nbsp;multiple
            <br />
            &nbsp;&nbsp;onDrop={'{'}
            (acceptedFiles)&nbsp;=&gt;&nbsp;console.log(acceptedFiles){'}'}
            <br />
            /&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Please see the{' '}
        <a href="https://github.com/react-dropzone/react-dropzone" target="_blank">
          official plugin documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Dropzone&nbsp;{'}'}
            &nbsp;from&nbsp;'../components/vendor';
          </Highlight>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">
        Select{' '}
        <Badge bg="primary-soft" className="ms-1 mt-n1">
          Dashkit only
        </Badge>{' '}
        <Badge bg="warning-soft" className="ms-1 mt-n1">
          Plugin
        </Badge>
      </h2>
      <p className="text-muted mb-4">A flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async and creatable support.</p>
      <Card>
        <Card.Body>
          <Select
            className="mb-3"
            options={[
              { value: 'a', label: 'My first option' },
              { value: 'b', label: 'Another option' },
              { value: 'c', label: 'Third option is here' },
            ]}
            placeholder={null}
          />
          <Select
            className="mb-3"
            options={[
              {
                imgSrc: '/img/avatars/profiles/avatar-1.jpg',
                label: 'Dianna Smiley',
                value: 'Dianna Smiley',
              },
              {
                imgSrc: '/img/avatars/profiles/avatar-2.jpg',
                value: 'Ab Hadley',
                label: 'Ab Hadley',
              },
              {
                imgSrc: '/img/avatars/profiles/avatar-3.jpg',
                value: 'Adolfo Hess',
                label: 'Adolfo Hess',
              },
              {
                imgSrc: '/img/avatars/profiles/avatar-4.jpg',
                value: 'Daniela Dewitt',
                label: 'Daniela Dewitt',
              },
            ]}
            placeholder={null}
          />
          <Select
            className="mb-4"
            isMulti
            options={[
              { value: 'a', label: 'CSS' },
              { value: 'b', label: 'HTML' },
              { value: 'c', label: 'JavaScript' },
              { value: 'd', label: 'Bootstrap' },
            ]}
            placeholder={null}
          />
          <Select
            className="mb-3"
            isMulti
            options={[
              { value: 'a', label: 'CSS' },
              { value: 'b', label: 'HTML' },
              { value: 'c', label: 'JavaScript' },
              { value: 'd', label: 'Bootstrap' },
            ]}
            placeholder={null}
            size="lg"
          />
          <Select
            className="mb-4"
            options={[
              { value: 'a', label: 'My first option' },
              { value: 'b', label: 'Another option' },
              { value: 'c', label: 'Third option is here' },
            ]}
            placeholder={null}
            size="sm"
          />
          <Select
            className="is-valid mb-3"
            isMulti
            options={[
              { value: 'a', label: 'CSS' },
              { value: 'b', label: 'HTML' },
              { value: 'c', label: 'JavaScript' },
              { value: 'd', label: 'Bootstrap' },
            ]}
            placeholder={null}
          />
          <Select
            className="is-invalid"
            options={[
              { value: 'a', label: 'My first option' },
              { value: 'b', label: 'Another option' },
              { value: 'c', label: 'Third option is here' },
            ]}
            placeholder={null}
          />
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;Select
            <br />
            &nbsp;&nbsp;options={'{'}[<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            &nbsp;value:&nbsp;'a',&nbsp;label:&nbsp;'My&nbsp;first&nbsp;option'&nbsp;
            {'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            &nbsp;value:&nbsp;'b',&nbsp;label:&nbsp;'Another&nbsp;option'&nbsp;
            {'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            &nbsp;value:&nbsp;'c',&nbsp;label:&nbsp;'Third&nbsp;option&nbsp;is&nbsp;here'&nbsp;
            {'}'},<br />
            &nbsp;&nbsp;]{'}'}
            <br />
            &nbsp;&nbsp;placeholder={'{'}null{'}'}
            <br />
            /&gt;
            <br />
            <br />
            &lt;Select
            <br />
            &nbsp;&nbsp;options={'{'}[<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imgSrc:&nbsp;'/img/avatars/profiles/avatar-1.jpg',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label:&nbsp;'Dianna&nbsp;Smiley',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;'Dianna&nbsp;Smiley',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imgSrc:&nbsp;'/img/avatars/profiles/avatar-2.jpg',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;'Ab&nbsp;Hadley',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label:&nbsp;'Ab&nbsp;Hadley',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imgSrc:&nbsp;'/img/avatars/profiles/avatar-3.jpg',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;'Adolfo&nbsp;Hess',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label:&nbsp;'Adolfo&nbsp;Hess',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imgSrc:&nbsp;'/img/avatars/profiles/avatar-4.jpg',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;'Daniela&nbsp;Dewitt',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label:&nbsp;'Daniela&nbsp;Dewitt',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;]{'}'}
            <br />
            &nbsp;&nbsp;placeholder={'{'}null{'}'}
            <br />
            /&gt;
            <br />
            <br />
            &lt;Select
            <br />
            &nbsp;&nbsp;isMulti
            <br />
            &nbsp;&nbsp;options={'{'}[<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            &nbsp;value:&nbsp;'a',&nbsp;label:&nbsp;'CSS'&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            &nbsp;value:&nbsp;'b',&nbsp;label:&nbsp;'HTML'&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            &nbsp;value:&nbsp;'c',&nbsp;label:&nbsp;'JavaScript'&nbsp;{'}'},
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            &nbsp;value:&nbsp;'d',&nbsp;label:&nbsp;'Bootstrap'&nbsp;{'}'},
            <br />
            &nbsp;&nbsp;]{'}'}
            <br />
            &nbsp;&nbsp;placeholder={'{'}null{'}'}
            <br />
            /&gt;
            <br />
            <br />
            &lt;Select
            <br />
            &nbsp;&nbsp;isMulti
            <br />
            &nbsp;&nbsp;options={'{'}[<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            &nbsp;value:&nbsp;'a',&nbsp;label:&nbsp;'CSS'&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            &nbsp;value:&nbsp;'b',&nbsp;label:&nbsp;'HTML'&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            &nbsp;value:&nbsp;'c',&nbsp;label:&nbsp;'JavaScript'&nbsp;{'}'},
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            &nbsp;value:&nbsp;'d',&nbsp;label:&nbsp;'Bootstrap'&nbsp;{'}'},
            <br />
            &nbsp;&nbsp;]{'}'}
            <br />
            &nbsp;&nbsp;placeholder={'{'}null{'}'}
            <br />
            &nbsp;&nbsp;size=&quot;lg&quot;
            <br />
            /&gt;
            <br />
            <br />
            &lt;Select
            <br />
            &nbsp;&nbsp;options={'{'}[<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            &nbsp;value:&nbsp;'a',&nbsp;label:&nbsp;'My&nbsp;first&nbsp;option'&nbsp;
            {'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            &nbsp;value:&nbsp;'b',&nbsp;label:&nbsp;'Another&nbsp;option'&nbsp;
            {'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            &nbsp;value:&nbsp;'c',&nbsp;label:&nbsp;'Third&nbsp;option&nbsp;is&nbsp;here'&nbsp;
            {'}'},<br />
            &nbsp;&nbsp;]{'}'}
            <br />
            &nbsp;&nbsp;placeholder={'{'}null{'}'}
            <br />
            &nbsp;&nbsp;size=&quot;sm&quot;
            <br />
            /&gt;
            <br />
            <br />
            &lt;Select
            <br />
            &nbsp;&nbsp;className=&quot;is-valid&quot;
            <br />
            &nbsp;&nbsp;isMulti
            <br />
            &nbsp;&nbsp;options={'{'}[<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            &nbsp;value:&nbsp;'a',&nbsp;label:&nbsp;'CSS'&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            &nbsp;value:&nbsp;'b',&nbsp;label:&nbsp;'HTML'&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            &nbsp;value:&nbsp;'c',&nbsp;label:&nbsp;'JavaScript'&nbsp;{'}'},
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            &nbsp;value:&nbsp;'d',&nbsp;label:&nbsp;'Bootstrap'&nbsp;{'}'},
            <br />
            &nbsp;&nbsp;]{'}'}
            <br />
            &nbsp;&nbsp;placeholder={'{'}null{'}'}
            <br />
            /&gt;
            <br />
            <br />
            &lt;Select
            <br />
            &nbsp;&nbsp;className=&quot;is-invalid&quot;
            <br />
            &nbsp;&nbsp;options={'{'}[<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            &nbsp;value:&nbsp;'a',&nbsp;label:&nbsp;'My&nbsp;first&nbsp;option'&nbsp;
            {'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            &nbsp;value:&nbsp;'b',&nbsp;label:&nbsp;'Another&nbsp;option'&nbsp;
            {'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            &nbsp;value:&nbsp;'c',&nbsp;label:&nbsp;'Third&nbsp;option&nbsp;is&nbsp;here'&nbsp;
            {'}'},<br />
            &nbsp;&nbsp;]{'}'}
            <br />
            &nbsp;&nbsp;placeholder={'{'}null{'}'}
            <br />
            /&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Please see the{' '}
        <a href="https://react-select.com/home" target="_blank">
          official plugin documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Select&nbsp;{'}'}
            &nbsp;from&nbsp;'../components/vendor';
          </Highlight>
        </Card.Body>
      </Card>
    </div>
  );
}
