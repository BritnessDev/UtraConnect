import FeatherIcon from 'feather-icons-react';
import { Button, InputGroup, Form, Col, Container, Row } from 'react-bootstrap';
import { Select } from '../components/vendor';
import TextareaAutosize from 'react-textarea-autosize';
import {ContactManagementHeader } from '../widgets';
import TelephoneInput from '../components/TelephoneInput';
import { useState } from 'react'
import { getMessage } from '../helpers/lang';

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
                      <h2>{getMessage('General')}</h2>
                    </div>
                  </Col>

                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>{getMessage('Salutation')}</Form.Label>
                      <Select
                          className="mb-4"
                          options={[
                            { value: 'mrs', label: 'Mrs' },
                            { value: 'mr', label: 'Mr' },
                            { value: 'mx', label: 'Mx' },
                            { value: 'company', label: 'Company' },
                          ]}
                          placeholder={getMessage('Choose the salutation.')}
                          onChange={(e) => {setSalutation(e.value)}}
                        />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>{getMessage('Title')}</Form.Label>
                      <Form.Control type="text" placeholder={getMessage('Title')} />
                    </div>
                  </Col>

                  <Col xs={12}>
                    <Row>
                      <Col xs={`${salutation !== "company" ? '6' : '12'}`} >
                        <div className="form-group">
                          <Form.Label>{getMessage('Firstname')}</Form.Label>
                          <Form.Control type="text" placeholder={getMessage('Firstname')}/>
                        </div>
                      </Col>
                      <Col xs={6} className={`${salutation !== "company" ? 'd-block' : 'd-none'}`}>
                        <div className="form-group">
                          <Form.Label>{getMessage('Surname')}</Form.Label>
                          <Form.Control type="text" placeholder={getMessage('Surname')}/>
                        </div>
                      </Col>
                    </Row>
                  </Col>

                  <Col xs={12} className={`${salutation === "company" ? 'd-block' : 'd-none'}`}>
                    <div className="form-group">
                      <Form.Label>{getMessage('Company')}</Form.Label>
                      <Form.Control as={TextareaAutosize} placeholder={getMessage('Please write the company')} minRows={3} />
                    </div>
                  </Col>

                </Col>

                {/* Contact */}
                <Col xs={12} md={6} xl={4}>
                  <Col xs={12}>
                    <div className="form-group">
                      <h2>{getMessage('contact')}</h2>
                    </div>
                  </Col>

                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>{getMessage('Email')}</Form.Label>
                      <Form.Control type="email" placeholder={getMessage('Email')} />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>{getMessage('Website')}</Form.Label>
                      <InputGroup className="input-group-merge mb-3">
                        <Form.Control placeholder={getMessage('Website')} />
                        <InputGroup.Text className='bg-primary'>
                            <FeatherIcon icon="external-link" size="1em" className='text-white' />
                        </InputGroup.Text>
                      </InputGroup>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>{getMessage('Telephone')}</Form.Label>
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
                      <Form.Label>{getMessage('Telephone')}</Form.Label>
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
                      <h2>{getMessage('Address')}</h2>
                    </div>
                  </Col>
                  
                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>{getMessage('Country')}</Form.Label>
                      <Form.Control type="text" placeholder={getMessage('Country')} />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>{getMessage('Zip')}</Form.Label>
                      <Form.Control type="text" placeholder={getMessage('Zip')}/>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>{getMessage('Post Code / City')}</Form.Label>
                      
                      <InputGroup className="input-group-merge mb-3">
                        <Form.Control type="text" placeholder={getMessage('Postcode')} />
                        <Form.Control type="text" placeholder={getMessage('City')} />
                      </InputGroup>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>{getMessage('Street, No')}</Form.Label>
                      <Form.Control type="text" placeholder={getMessage('Street, No')} />
                    </div>
                  </Col>
                </Col>

                <Col xs={12} md={6} xl={4}>
                  <Col xs={12}>
                    <div className="form-group">
                      <h2>{getMessage('Miscellaneous')}</h2>
                    </div>
                  </Col>

                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>{getMessage('Comment')}</Form.Label>
                      <Form.Control as={TextareaAutosize} placeholder={getMessage('Please write the comment')} minRows={3}/>
                    </div>
                  </Col>
                </Col>
              </Row>
              
              <Row className="justify-content-between">
                <Col xs={12} md={6} className="col-12 col-md-6">
                  <Button variant="danger">{getMessage('Delete')}</Button>
                </Col>
                <Col xs="auto">
                  <Button>{getMessage('Save')}</Button>
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
