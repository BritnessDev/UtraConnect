import TextareaAutosize from 'react-textarea-autosize';
import { Row, Col, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getMessage } from '../helpers/lang';
export default function InsuranceDataPart ({pdfData, setPdfData}) {
    const [countries, setCountries] = useState([]);

    const onChangeHandler = (e) => {
        if(e.target.type === "checkbox")
            setPdfData(prevData => ({...prevData, insurance: {
                ...prevData.insurance,
                [e.target.id]: e.target.checked
            }}));
        else
        setPdfData(prevData => ({...prevData, insurance: {
            ...prevData.insurance,
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
        <div>
        <h3 className="mb-4 mt-3 text-info">{getMessage('General')}:</h3>
        <Row>
            <Col xs={12} md={6} xl={4}>
                <div className="form-group">
                    <Form.Label htmlFor="salutation">{getMessage('Salutation')}</Form.Label>
                    <Form.Control as="select" id="salutation" value={pdfData.insurance?.salutation} onChange={onChangeHandler}>
                        <option value="Mrs">Mrs</option>
                        <option value="Mr">Mr</option>
                        <option value="Mx">Mx</option>
                        <option value="Company">{getMessage('Company')}</option>
                    </Form.Control>
                </div>
            </Col>
            <Col xs={12} md={6} xl={4}>
                <div className="form-group">
                    <Form.Label htmlFor="title">{getMessage('The person academic or professional title')}</Form.Label>
                    <Form.Control id="title" placeholder={getMessage('Enter a title')} type="text" value={pdfData.insurance?.title} onChange={onChangeHandler} />
                </div>
            </Col>
            <Col xs={12} md={6} xl={4}>
                <div className="form-group">
                    <Form.Label htmlFor="firstName">{getMessage('The person given name')}</Form.Label>
                    <Form.Control id="firstName" placeholder={getMessage('Enter a first name')} type="text" value={pdfData.insurance?.firstName} onChange={onChangeHandler} />
                </div>
            </Col>
        </Row>
        <Row>
            {
                pdfData.insurance?.salutation !== "Company" &&
                <Col xs={12} md={6} xl={4}>
                    <div className="form-group">
                        <Form.Label htmlFor="surName">{getMessage('The person family name')}</Form.Label>
                        <Form.Control id="surName" placeholder={getMessage('Enter a surname')} type="text" value={pdfData.insurance?.surname} onChange={onChangeHandler} />
                    </div>
                </Col>
            }
            {
                pdfData.insurance?.salutation === "Company" &&
                <Col xs={12} md={6} xl={4}>
                    <div className="form-group">
                        <Form.Label htmlFor="company">{getMessage('The name of the company')}</Form.Label>
                        <Form.Control id="company" placeholder={getMessage('Enter a company name')} type="text" value={pdfData.insurance?.company} onChange={onChangeHandler} />
                    </div>
                </Col>
            }
        </Row>

        <h3 className="mb-4 mt-3 text-info">{getMessage('contact')}:</h3>

        <Row>
            <Col xs={12} md={6} xl={4}>
                <div className="form-group">
                    <Form.Label htmlFor="email">{getMessage('The email address')}</Form.Label>
                    <Form.Control id="email" placeholder={getMessage('Enter a email address')} type="email" value={pdfData.insurance?.email} onChange={onChangeHandler} />
                </div>
            </Col>
            <Col xs={12} md={6} xl={4}>
            <div className="form-group">
                    <Form.Label htmlFor="website">{getMessage('The website address')}</Form.Label>
                    <Form.Control id="website" placeholder={getMessage('Enter a website address')} type="text" value={pdfData.insurance?.website} onChange={onChangeHandler} />
                </div>
            </Col>
            <Col>
                <div className="form-group">
                    <Form.Label htmlFor="telNumber">{getMessage('The telephone number')}</Form.Label>
                    <Form.Control id="telNumber" placeholder={getMessage('Enter a telephone number')} type="text" value={pdfData.insurance?.telNumber} onChange={onChangeHandler} />
                </div>
            </Col>
            
        </Row>

        <Row>
            <Col xs={12} md={6} xl={4}>
                <div className="form-group">
                    <Form.Label htmlFor="mobileNumber">{getMessage('The mobile phone number')}</Form.Label>
                    <Form.Control id="mobileNumber" placeholder={getMessage('Enter a mobile phone number')} type="text" value={pdfData.insurance?.mobileNumber} onChange={onChangeHandler} />
                </div>
            </Col>
        </Row>
        <h3 className="mb-4 mt-3 text-info">{getMessage('Address')}:</h3>
        <Row>
            <Col xs={12} md={6} xl={4}>
                <div className="form-group">
                    <Form.Label htmlFor="country">{getMessage('The Country of residence')}</Form.Label>
                    <Form.Control as="select" id="country" value={pdfData.insurance?.country} onChange={onChangeHandler} defaultValue="Germany">
                        <option value=""></option>
                        {
                            countries?.map((country, key) =>(
                                    <option value={country} key={key}>{country}</option>
                                )
                            )
                        }
                    </Form.Control>
                </div>
            </Col>
            <Col xs={12} md={6} xl={4}>
                <div className="form-group">
                    <Form.Label htmlFor="zip">{getMessage('The zip or postal code')}</Form.Label>
                    <Form.Control id="zip" placeholder={getMessage('Enter a zip or postal code')} type="text" value={pdfData.insurance?.zip} onChange={onChangeHandler} />
                </div>
            </Col>
            <Col xs={12} md={6} xl={4}>
                <div className="form-group">
                    <Form.Label htmlFor="city">{getMessage('The City of residence')}</Form.Label>
                    <Form.Control id="city" placeholder={getMessage('Enter a city of residence')} type="text" value={pdfData.insurance?.city} onChange={onChangeHandler} />
                </div>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={6} xl={4}>
                <div className="form-group">
                    <Form.Label htmlFor="street">{getMessage('The Street of residence')}</Form.Label>
                    <Form.Control id="street" placeholder={getMessage('Enter a street of residence')} type="text" value={pdfData.insurance?.street} onChange={onChangeHandler} />
                </div>
            </Col>
        </Row>
        <h3 className="mb-4 mt-3 text-info">{getMessage('MISCELLANEOUS')}:</h3>
        <Row>
            <Col xs={12} md={6} xl={4}>
                <div className="form-group">
                    <Form.Label htmlFor="policyNumber">{getMessage('Insurance policy number')}</Form.Label>
                    <Form.Control id="policyNumber" placeholder={getMessage('Enter a policy number')} type="text" value={pdfData.insurance?.policyNumber} onChange={onChangeHandler} />
                </div>
            </Col>
            <Col xs={12} md={6} xl={4}>
                <div className="form-group">
                    <Form.Label htmlFor="claimNumber">{getMessage('Schadennummer')}</Form.Label>
                    <Form.Control id="claimNumber" placeholder={getMessage('Please write the Schadennummer.')} type="text" value={pdfData.insurance?.claimNumber} onChange={onChangeHandler} />
                </div>
            </Col>
            <Col xs={12} md={6} xl={4}>
                <div className="form-group">
                    <Form.Label htmlFor="comment">{getMessage('Comment')}</Form.Label>
                    <Form.Control
                        as={TextareaAutosize}
                        placeholder="Enter a comment..."
                        id="comment"
                        value={pdfData.insurance?.comment} onChange={onChangeHandler}
                    />
                </div>
            </Col>
        </Row>
    </div>
    )
}