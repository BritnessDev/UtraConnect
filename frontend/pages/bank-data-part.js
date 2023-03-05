import TextareaAutosize from 'react-textarea-autosize';
import { Row, Col, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
export default function BankDataPart ({pdfData, setPdfData}) {
    const [countries, setCountries] = useState([]);

    const onChangeHandler = (e) => {
        if(e.target.type === "checkbox")
            setPdfData(prevData => ({...prevData, bank: {
                ...prevData.bank,
                [e.target.id]: e.target.checked
            }}));
        else
        setPdfData(prevData => ({...prevData, bank: {
            ...prevData.bank,
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
        <h3 className="mb-4 mt-3 text-info">GENERAL:</h3>
        <Row>
            <Col xs={12} md={6} xl={4}>
                <div className="form-group">
                    <Form.Label htmlFor="salutation">Salutation</Form.Label>
                    <Form.Control as="select" id="salutation" value={pdfData.bank?.salutation} onChange={onChangeHandler}>
                        <option value="Mrs">Mrs</option>
                        <option value="Mr">Mr</option>
                        <option value="Mx">Mx</option>
                        <option value="Company">Company</option>
                    </Form.Control>
                </div>
            </Col>
            <Col xs={12} md={6} xl={4}>
                <div className="form-group">
                    <Form.Label htmlFor="title">The person's academic or professional title</Form.Label>
                    <Form.Control id="title" placeholder="Enter a title" type="text" value={pdfData.bank?.title} onChange={onChangeHandler} />
                </div>
            </Col>
            <Col xs={12} md={6} xl={4}>
                <div className="form-group">
                    <Form.Label htmlFor="firstName">The person's given name</Form.Label>
                    <Form.Control id="firstName" placeholder="Enter a first name" type="text" value={pdfData.bank?.firstName} onChange={onChangeHandler} />
                </div>
            </Col>
        </Row>
        <Row>
            {
                pdfData.bank?.salutation !== "Company" &&
                <Col xs={12} md={6} xl={4}>
                    <div className="form-group">
                        <Form.Label htmlFor="surName">The person's family name</Form.Label>
                        <Form.Control id="surName" placeholder="Enter a surname" type="text" value={pdfData.bank?.surname} onChange={onChangeHandler} />
                    </div>
                </Col>
            }
            {
                pdfData.bank?.salutation === "Company" &&
                <Col xs={12} md={6} xl={4}>
                    <div className="form-group">
                        <Form.Label htmlFor="company">The name of the company</Form.Label>
                        <Form.Control id="company" placeholder="Enter a company name" type="text" value={pdfData.bank?.company} onChange={onChangeHandler} />
                    </div>
                </Col>
            }
        </Row>

        <h3 className="mb-4 mt-3 text-info">CONTACT:</h3>

        <Row>
            <Col xs={12} md={6} xl={4}>
                <div className="form-group">
                    <Form.Label htmlFor="email">The email address</Form.Label>
                    <Form.Control id="email" placeholder="Enter a email address" type="email" value={pdfData.bank?.email} onChange={onChangeHandler} />
                </div>
            </Col>
            <Col xs={12} md={6} xl={4}>
            <div className="form-group">
                    <Form.Label htmlFor="website">The website address</Form.Label>
                    <Form.Control id="website" placeholder="Enter a website address" type="text" value={pdfData.bank?.website} onChange={onChangeHandler} />
                </div>
            </Col>
            <Col>
                <div className="form-group">
                    <Form.Label htmlFor="telNumber">The telephone number</Form.Label>
                    <Form.Control id="telNumber" placeholder="Enter a telephone number" type="text" value={pdfData.bank?.telNumber} onChange={onChangeHandler} />
                </div>
            </Col>
            
        </Row>

        <Row>
            <Col xs={12} md={6} xl={4}>
                <div className="form-group">
                    <Form.Label htmlFor="mobileNumber">The mobile phone number</Form.Label>
                    <Form.Control id="mobileNumber" placeholder="Enter a mobile phone number" type="text" value={pdfData.bank?.mobileNumber} onChange={onChangeHandler} />
                </div>
            </Col>
        </Row>
        <h3 className="mb-4 mt-3 text-info">ADDRESS:</h3>
        <Row>
            <Col xs={12} md={6} xl={4}>
                <div className="form-group">
                    <Form.Label htmlFor="country">The Country of residence</Form.Label>
                    <Form.Control as="select" id="country" value={pdfData.bank?.country} onChange={onChangeHandler} defaultValue="Germany">
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
                    <Form.Label htmlFor="zip">The zip or postal code</Form.Label>
                    <Form.Control id="zip" placeholder="Enter a zip or postal code" type="text" value={pdfData.bank?.zip} onChange={onChangeHandler} />
                </div>
            </Col>
            <Col xs={12} md={6} xl={4}>
                <div className="form-group">
                    <Form.Label htmlFor="city">The City of residence</Form.Label>
                    <Form.Control id="city" placeholder="Enter a city of residence" type="text" value={pdfData.bank?.city} onChange={onChangeHandler} />
                </div>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={6} xl={4}>
                <div className="form-group">
                    <Form.Label htmlFor="street">The Street of residence</Form.Label>
                    <Form.Control id="street" placeholder="Enter a street of residence" type="text" value={pdfData.bank?.street} onChange={onChangeHandler} />
                </div>
            </Col>
        </Row>
        <h3 className="mb-4 mt-3 text-info">MISCELLANEOUS:</h3>
        <Row>
            <Col xs={12} md={6} xl={4}>
                <div className="form-group">
                    <Form.Label htmlFor="contractNumber">Contract number</Form.Label>
                    <Form.Control id="contractNumber" placeholder="Enter a contract number" type="text" value={pdfData.bank?.contractNumber} onChange={onChangeHandler} />
                </div>
            </Col>
            <Col xs={12} md={6} xl={4}>
                <div className="form-group">
                    <Form.Label htmlFor="comment">Comment</Form.Label>
                    <Form.Control
                        as={TextareaAutosize}
                        placeholder="Enter a comment..."
                        id="comment"
                        value={pdfData.bank?.comment} onChange={onChangeHandler}
                    />
                </div>
            </Col>
        </Row>
    </div>
    )
}