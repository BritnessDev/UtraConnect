import FeatherIcon from 'feather-icons-react';
import NumberFormat from 'react-number-format';
import { Button, Alert, InputGroup, Form, Col, Container, Row } from 'react-bootstrap';
import { Flatpickr, Select } from '../components/vendor';
import TextareaAutosize from 'react-textarea-autosize';
import { AccountApiUsage, AccountCurrentPlan, ContactManagementHeader, AccountInvoices, AccountPaymentMethods } from '../widgets';
import TelephoneInput from '../components/TelephoneInput';
import { useState } from 'react'

export default function ContactAdd() {
  const [salutation, setSalutation] = useState('');

  return (
    <div className="main-content">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} lg={12} xl={12}>
            <ContactManagementHeader />
            <form>
              <Row>
                {/* General */}
                <Col xs={12} md={6} xl={4}>
                  <Col xs={12}>
                    <div className="form-group">
                      <h2>General</h2>
                    </div>
                  </Col>

                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>Salutation</Form.Label>
                      <Select
                          className="mb-4"
                          options={[
                            { value: 'mrs', label: 'Mrs' },
                            { value: 'mr', label: 'Mr' },
                            { value: 'mx', label: 'Mx' },
                            { value: 'company', label: 'Company' },
                          ]}
                          placeholder={'Choose the salutation.'}
                          onChange={(e) => {setSalutation(e.value)}}
                        />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>Title</Form.Label>
                      <Form.Control type="text" placeholder='Title' />
                    </div>
                  </Col>

                  <Col xs={12}>
                    <Row>
                      <Col xs={`${salutation !== "company" ? '6' : '12'}`} >
                        <div className="form-group">
                          <Form.Label>Forename</Form.Label>
                          <Form.Control type="text" placeholder='Forename'/>
                        </div>
                      </Col>
                      <Col xs={6} className={`${salutation !== "company" ? 'd-block' : 'd-none'}`}>
                        <div className="form-group">
                          <Form.Label>Surname</Form.Label>
                          <Form.Control type="text" placeholder='Surname'/>
                        </div>
                      </Col>
                    </Row>
                  </Col>

                  <Col xs={12} className={`${salutation === "company" ? 'd-block' : 'd-none'}`}>
                    <div className="form-group">
                      <Form.Label>Company</Form.Label>
                      <Form.Control as={TextareaAutosize} placeholder="Please write the company." minRows={3} />
                    </div>
                  </Col>

                </Col>

                {/* Contact */}
                <Col xs={12} md={6} xl={4}>
                  <Col xs={12}>
                    <div className="form-group">
                      <h2>Contact</h2>
                    </div>
                  </Col>

                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder='Email' />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>Website</Form.Label>
                      <InputGroup className="input-group-merge mb-3">
                        <Form.Control placeholder="Website" />
                        <InputGroup.Text className='bg-primary'>
                            <FeatherIcon icon="external-link" size="1em" className='text-white' />
                        </InputGroup.Text>
                      </InputGroup>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>Telephone</Form.Label>
                      <InputGroup className="input-group-merge mb-3">
                        <TelephoneInput />
                        <InputGroup.Text className='bg-primary'>
                            <FeatherIcon icon="phone" size="1em" className='text-white' />
                        </InputGroup.Text>
                      </InputGroup>
                    </div>
                  </Col>

                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>Telephone</Form.Label>
                      <InputGroup className="input-group-merge mb-3">
                        <TelephoneInput />
                        <InputGroup.Text className='bg-primary'>
                            <FeatherIcon icon="phone" size="1em" className='text-white' />
                        </InputGroup.Text>
                      </InputGroup>
                    </div>
                  </Col>
                </Col>

                {/* Address */}
                <Col xs={12} md={6} xl={4}>
                  <Col xs={12}>
                    <div className="form-group">
                      <h2>Address</h2>
                    </div>
                  </Col>
                  
                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>Country</Form.Label>
                      <Form.Control type="text" placeholder='Country' />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control type="text" placeholder='Zip'/>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>Post Code / City</Form.Label>
                      
                      <InputGroup className="input-group-merge mb-3">
                        <Form.Control type="text" placeholder='Postcode'/>
                        <Form.Control type="text" placeholder='City'/>
                      </InputGroup>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>Street, No</Form.Label>
                      <Form.Control type="text" placeholder='Street, No' />
                    </div>
                  </Col>
                </Col>

                <Col xs={12} md={6} xl={4}>
                  <Col xs={12}>
                    <div className="form-group">
                      <h2>Miscellaneous</h2>
                    </div>
                  </Col>

                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>Comment</Form.Label>
                      <Form.Control as={TextareaAutosize} placeholder="Please write the comment." minRows={3}/>
                    </div>
                  </Col>
                </Col>
              </Row>
              
              <Row className="justify-content-between">
                <Col xs={12} md={6} className="col-12 col-md-6">
                  <Button variant="danger">Delete</Button>
                </Col>
                <Col xs="auto">
                  <Button>Save</Button>
                </Col>
              </Row>
            </form>
            <br />
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
