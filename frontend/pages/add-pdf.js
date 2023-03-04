import AddressHeader from "../components/addresslist/header";
import {
    Col,
    Container,
    Row,
    Accordion,
    Form,
    Select,
} from "react-bootstrap";

const AddPdf = () => {
    return (
        <div className="main-content">
            <Container fluid>
                <AddressHeader pretitle="overview" title="Generate PDF" />
            </Container>
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <Form>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                <Accordion.Header>General Data</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                    <h3 htmlFor="license-accident" className="mb-4 mt-3 text-info">License plate and vehicle make and vehicle model</h3>
                                        <Col xs={12} md={6} xl={4}>
                                            <div className="form-group">
                                                <Form.Label htmlFor="caseNumber">Case number</Form.Label>
                                                <Form.Control id="caseNumber" placeholder="Enter case number" type="text" />
                                            </div>
                                        </Col>
                                        <Col xs={12} md={6} xl={4}>
                                            <div className="form-group">
                                                <Form.Label htmlFor="date">Date</Form.Label>
                                                <Form.Control id="date" placeholder="Enter a date" type="date" />
                                            </div>
                                        </Col>
                                        <Col xs={12} md={6} xl={4}>
                                            <div className="form-group">
                                                <Form.Label htmlFor="date-inspection">Date of inspection</Form.Label>
                                                <Form.Control id="date-inspection" placeholder="Enter a date of inspection" type="date" />
                                            </div>
                                        </Col>
                                        <Col xs={12} md={6} xl={4}>
                                            <div className="form-group">
                                                <Form.Label htmlFor="place-inspection">Place of inspection</Form.Label>
                                                <Form.Control id="place-inspection" placeholder="Enter a place of inspection" type="text" />
                                            </div>
                                        </Col>
                                        <Col xs={12} md={6} xl={4}>
                                            <div className="form-group">
                                                <Form.Label htmlFor="vehicle-make">Vehicle make</Form.Label>
                                                <Form.Control id="vehicle-make" placeholder="Enter vehicle make" type="text" />
                                            </div>
                                        </Col>
                                        <Col xs={12} md={6} xl={4}>
                                            <div className="form-group">
                                                <Form.Label htmlFor="vehicle-model-customer">Vehicle model customer</Form.Label>
                                                <Form.Control id="vehicle-model-customer" placeholder="Enter a vehicle model customer" type="text" />
                                            </div>
                                        </Col>
                                        <h3 htmlFor="license-accident" className="mb-4 mt-3 text-info">License plate and vehicle make and vehicle model of the other party involved in the accident</h3>
                                        <Col xs={12} md={6} xl={4}>
                                            <div className="form-group">
                                                <Form.Label htmlFor="license-accident">License plate</Form.Label>
                                                <Form.Control id="license-accident" placeholder="Enter license plate" type="text" />
                                            </div>
                                        </Col>

                                        <Col xs={12} md={6} xl={4}>
                                            <div className="form-group">
                                                <Form.Label htmlFor="vehicle-make-accident">Vehicle make</Form.Label>
                                                <Form.Control id="vehicle-make-accident" placeholder="Enter a vehicle model customer" type="text" />
                                            </div>
                                        </Col>

                                        <Col xs={12} md={6} xl={4}>
                                            <div className="form-group">
                                                <Form.Label htmlFor="vehicle-model-accident">Vehicle model</Form.Label>
                                                <Form.Control id="vehicle-model-accident" placeholder="Enter a vehicle model customer" type="text" />
                                            </div>
                                        </Col>
                                        <Row className="mt-3">
                                            <Col xs={12} md={6} xl={4}>
                                                <div className="form-group">
                                                    <Form.Check type="switch" id="address-diff" label="Address different?" />
                                                </div>
                                            </Col>

                                            <Col xs={12} md={6} xl={4}>
                                                <div className="form-group">
                                                    <Form.Check type="switch" id="signer-diff" label="Signer different?" />
                                                </div>
                                            </Col>

                                            <Col xs={12} md={6} xl={4}>
                                                <div className="form-group">
                                                    <Form.Check type="switch" id="send-email" label="Send appraisals by email?" />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="mt-3">
                                            <Col xs={12} md={6} xl={4}>
                                                <div className="form-group">
                                                    <Form.Label htmlFor="damage-day">Damage day</Form.Label>
                                                    <Form.Control id="damage-day" placeholder="Enter a damage day" type="date" />
                                                </div>
                                            </Col>

                                            <Col xs={12} md={6} xl={4}>
                                                <div className="form-group">
                                                    <Form.Label htmlFor="damage-location">Damage location</Form.Label>
                                                    <Form.Control id="damage-location" placeholder="Enter a damage location" type="text" />
                                                </div>
                                            </Col>

                                            <Col xs={12} md={6} xl={4}>
                                                <div className="form-group">
                                                <Form.Label htmlFor="vehicle-model-customer">Is the vehicle owned, financed or leased?</Form.Label>
                                                <Form.Control as="select">
                                                    <option value="unknown">unknown</option>
                                                    <option value="financed">financed</option>
                                                    <option value="leased">leased</option>
                                                    <option value="owned">owned</option>
                                                </Form.Control>
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row className="mt-3">
                                            <Col xs={12} md={6} xl={4}>
                                                <div className="form-group">
                                                    <Form.Check type="switch" id="know-other-address" label="Address of the other party known?" />
                                                </div>
                                            </Col>

                                            <Col xs={12} md={6} xl={4}>
                                                <div className="form-group">
                                                    <Form.Check type="switch" id="know-other-insurer" label="Insurer of the polluter known?" />
                                                </div>
                                            </Col>

                                            <Col xs={12} md={6} xl={4}>
                                                <div className="form-group">
                                                    <Form.Check type="switch" id="need-lawyer" label="Want a lawyer?" />
                                                </div>
                                            </Col>
                                        </Row>

                                    </Row>
                                </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum.
                                </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddPdf;
