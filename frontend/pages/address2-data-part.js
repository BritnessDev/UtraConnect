import FeatherIcon from 'feather-icons-react';
import { Button, InputGroup, Form, Col, Container, Row } from 'react-bootstrap';
import { Select } from '../components/vendor';
import TextareaAutosize from 'react-textarea-autosize';
import TelephoneInput from '../components/TelephoneInput';
import { useState, useEffect } from 'react'
import { getMessage } from '../helpers/lang';
import { LoadButton } from '../components/LoadButton';

export default function Address2DataPart ({pdfData, setPdfData, setAddContactModal}) {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const response = pdfData.address2;
        // debugger
    }, [pdfData.address2])
    const onChangeHandler = (e) => {
        if(e.target.type === "checkbox")
            setPdfData(prevData => ({...prevData, customer: {
                ...prevData.address2,
                [e.target.id]: e.target.checked
            }}));
        else
        setPdfData(prevData => ({...prevData, customer: {
            ...prevData.address2,
            [e.target.id]: e.target.value
        }}));
    }

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data.map(country => country.name.common)))
            .catch(error => console.error(error));
    }, []);
    return (
        <div className="main-content">
            <Container fluid>
                <Row className="justify-content-center">
                <Col xs={12} lg={12} xl={12}>
                    <form>
                    <Row className='justify-content-end'>
                        <LoadButton setAddContactModal={setAddContactModal}/>
                    </Row>
                    <Row>
                        <Col xs={12} md={6} xl={4}>
                        <Col xs={12}>
                            <div className="form-group">
                            <h2>{getMessage('General')}</h2>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="form-group">
                            <div className="form-group">
                                <Form.Label htmlFor="salutation">{getMessage('Salutation')}</Form.Label>
                                <Form.Control as="select" id="salutation" value={pdfData.address2?.salutation} onChange={onChangeHandler}>
                                    <option value="Mrs">{getMessage('Mrs.')}</option>
                                    <option value="Mr">{getMessage('Mr.')}</option>
                                    <option value="Mx">{getMessage('Mx.')}</option>
                                    <option value="Company">{getMessage('Company.')}</option>
                                </Form.Control>
                            </div>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="form-group">
                            <Form.Label>{getMessage('Title')}</Form.Label>
                            <Form.Control type="text" placeholder={getMessage('Title')} id="title"
                                value={pdfData.address2?.title} onChange={onChangeHandler}/>
                            </div>
                        </Col>
                        {
                            pdfData.address2?.salutation !== "Company" &&
                            <Col xs={12}>
                            <Row>
                                <Col xs={`${pdfData.address2?.salutation !== "Company" ? '6' : '12'}`} >
                                <div className="form-group">
                                    <Form.Label>{getMessage('Firstname')}</Form.Label>
                                    <Form.Control type="text" placeholder={getMessage('Firstname')}
                                    id="firstName" value={pdfData.address2?.firstName} onChange={onChangeHandler}/>
                                </div>
                                </Col>
                                <Col xs={6} className={`${pdfData.address2?.salutation !== "Company" ? 'd-block' : 'd-none'}`}>
                                <div className="form-group">
                                    <Form.Label>{getMessage('Surname')}</Form.Label>
                                    <Form.Control type="text" placeholder={getMessage('Surname')}
                                    id="Surname" value={pdfData.address2?.Surname} onChange={onChangeHandler} />
                                </div>
                                </Col>
                            </Row>
                            </Col>
                        }

                        <Col xs={12} className={`${pdfData.address2?.salutation === "Company" ? 'd-block' : 'd-none'}`}>
                            <div className="form-group">
                                <Form.Label htmlFor="company">{getMessage('The name of the company')}</Form.Label>
                                <Form.Control id="company" placeholder={getMessage('Enter a company name')} type="text" value={pdfData.address2?.company} onChange={onChangeHandler} />
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
                            <Form.Control type="email" placeholder={getMessage('Email')}
                            id="email" value={pdfData.address2?.email} onChange={onChangeHandler} />
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="form-group">
                            <Form.Label>{getMessage('Website')}</Form.Label>
                            <InputGroup className="input-group-merge mb-3">
                                <Form.Control placeholder={getMessage('Website')} />
                                <InputGroup.Text className='bg-primary' id="website" value={pdfData.address2?.website} onChange={onChangeHandler} >
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
                                <InputGroup.Text className='bg-primary' id="telephone" value={pdfData.address2?.telephone} onChange={onChangeHandler} >
                                    <FeatherIcon icon="phone" size="1em" className='text-white' />
                                </InputGroup.Text>
                            </InputGroup>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="form-group">
                            <Form.Label>{getMessage('The mobile phone number')}</Form.Label>
                            <InputGroup className="input-group-merge mb-3">
                                <TelephoneInput />
                                <InputGroup.Text className='bg-primary' id="mobileNumber" value={pdfData.address2?.mobileNumber} onChange={onChangeHandler} >
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
                            <Form.Control type="text" placeholder={getMessage('Country')} id="country"  value={pdfData.address2?.country} onChange={onChangeHandler} />
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="form-group">
                            <Form.Label>{getMessage('Postal')}</Form.Label>
                            <Form.Control type="text" placeholder={getMessage('Postal')} id="postal" value={pdfData.address2?.postal} onChange={onChangeHandler}/>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="form-group">
                            <Form.Label>{getMessage('City')}</Form.Label>
                            <Form.Control type="text" placeholder={getMessage('City')} id="city" value={pdfData.address2?.city} onChange={onChangeHandler}/>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="form-group">
                            <Form.Label>{getMessage('Street')}</Form.Label>
                            <Form.Control type="text" placeholder={getMessage('Street')} id="street" value={pdfData.address2?.street} onChange={onChangeHandler} />
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
                            <Form.Control as={TextareaAutosize} placeholder={getMessage('Please write the comment')} minRows={3} id="comment" value={pdfData.address2?.comment} onChange={onChangeHandler} />
                            </div>
                        </Col>

                        <Col xs={12}>
                            <div className="form-group">
                                <Form.Label htmlFor="vehicle-model-customer">{getMessage('VAT ID')}</Form.Label>
                                <Form.Control as="select" id="vatId" value={pdfData.address2?.vatId} onChange={onChangeHandler}>
                                    <option value="unknown">{getMessage('unknown')}</option>
                                </Form.Control>
                            </div>
                        </Col>
                        </Col>
                    </Row>
                    </form>
                </Col>
                </Row>
            </Container>
        </div>
    )
}