import AddressHeader from "../components/addresslist/header";
import {
    Col,
    Container,
    Row,
    Accordion,
    Form,
    Select,
} from "react-bootstrap";

import { getMessage } from "../helpers/lang";

const AddPdf = () => {
    return (
        <div className="main-content">
            <Container fluid>
                <AddressHeader pretitle={getMessage('overview')} title={getMessage('generate_pdf')} />
            </Container>
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <Form>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                <Accordion.Header>{getMessage('general_data')}</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                    <h3 htmlFor="license-accident" className="mb-4 mt-3 text-info">{getMessage('licence_plate_and_vehicle_model')}</h3>
                                        <Col xs={12} md={6} xl={4}>
                                            <div className="form-group">
                                                <Form.Label htmlFor="caseNumber">{getMessage('case_number')}</Form.Label>
                                                <Form.Control id="caseNumber" placeholder={getMessage('enter_case_number')} type="text" />
                                            </div>
                                        </Col>
                                        <Col xs={12} md={6} xl={4}>
                                            <div className="form-group">
                                                <Form.Label htmlFor="date">{getMessage('date')}</Form.Label>
                                                <Form.Control id="date" placeholder={getMessage('enter_a_date')} type="date" />
                                            </div>
                                        </Col>
                                        <Col xs={12} md={6} xl={4}>
                                            <div className="form-group">
                                                <Form.Label htmlFor="date-inspection">{getMessage('date_of_inspection')}</Form.Label>
                                                <Form.Control id="date-inspection" placeholder={getMessage('enter_a_date_of_inspection')} type="date" />
                                            </div>
                                        </Col>
                                        <Col xs={12} md={6} xl={4}>
                                            <div className="form-group">
                                                <Form.Label htmlFor="place-inspection">{getMessage('place_of_inspection')}</Form.Label>
                                                <Form.Control id="place-inspection" placeholder={getMessage('enter_place_inspection')} type="text" />
                                            </div>
                                        </Col>
                                        <Col xs={12} md={6} xl={4}>
                                            <div className="form-group">
                                                <Form.Label htmlFor="vehicle-make">{getMessage('vehicle_make')}</Form.Label>
                                                <Form.Control id="vehicle-make" placeholder={getMessage('enter_vehicle_make')} type="text" />
                                            </div>
                                        </Col>
                                        <Col xs={12} md={6} xl={4}>
                                            <div className="form-group">
                                                <Form.Label htmlFor="vehicle-model-customer">{getMessage('vehicle_model_customer')}</Form.Label>
                                                <Form.Control id="vehicle-model-customer" placeholder={getMessage('enter_vehicle_model_customer')} type="text" />
                                            </div>
                                        </Col>
                                        <h3 htmlFor="license-accident" className="mb-4 mt-3 text-info">{getMessage('license_plate_vehicle_model_other_party_involved_accident')}</h3>
                                        <Col xs={12} md={6} xl={4}>
                                            <div className="form-group">
                                                <Form.Label htmlFor="license-accident">{getMessage('license_plate')}</Form.Label>
                                                <Form.Control id="license-accident" placeholder={getMessage('enter_license_plate')} type="text" />
                                            </div>
                                        </Col>

                                        <Col xs={12} md={6} xl={4}>
                                            <div className="form-group">
                                                <Form.Label htmlFor="vehicle-make-accident">{getMessage('vehicle_make')}</Form.Label>
                                                <Form.Control id="vehicle-make-accident" placeholder={getMessage('enter_vehicle_model_customer')} type="text" />
                                            </div>
                                        </Col>

                                        <Col xs={12} md={6} xl={4}>
                                            <div className="form-group">
                                                <Form.Label htmlFor="vehicle-model-accident">{getMessage('vehicle_model')}</Form.Label>
                                                <Form.Control id="vehicle-model-accident" placeholder={getMessage('enter_vehicle_model_customer')} type="text" />
                                            </div>
                                        </Col>
                                        <Row className="mt-3">
                                            <Col xs={12} md={6} xl={4}>
                                                <div className="form-group">
                                                    <Form.Check type="switch" id="address-diff" label={getMessage('address_different')} />
                                                </div>
                                            </Col>

                                            <Col xs={12} md={6} xl={4}>
                                                <div className="form-group">
                                                    <Form.Check type="switch" id="signer-diff" label={getMessage('signer_different')} />
                                                </div>
                                            </Col>

                                            <Col xs={12} md={6} xl={4}>
                                                <div className="form-group">
                                                    <Form.Check type="switch" id="send-email" label={getMessage('send_appraisals_by_email')} />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="mt-3">
                                            <Col xs={12} md={6} xl={4}>
                                                <div className="form-group">
                                                    <Form.Label htmlFor="damage-day">{getMessage('damage_day')}</Form.Label>
                                                    <Form.Control id="damage-day" placeholder={getMessage('enter_damage_day')} type="date" />
                                                </div>
                                            </Col>

                                            <Col xs={12} md={6} xl={4}>
                                                <div className="form-group">
                                                    <Form.Label htmlFor="damage-location">{getMessage('damage_location')}</Form.Label>
                                                    <Form.Control id="damage-location" placeholder={getMessage('enter_damage_location')} type="text" />
                                                </div>
                                            </Col>

                                            <Col xs={12} md={6} xl={4}>
                                                <div className="form-group">
                                                <Form.Label htmlFor="vehicle-model-customer">{getMessage('is_the_vehicle_owned_financed_or_leased')}</Form.Label>
                                                <Form.Control as="select">
                                                    <option value="unknown">{getMessage('unknown')}</option>
                                                    <option value="financed">{getMessage('financed')}</option>
                                                    <option value="leased">{getMessage('leased')}</option>
                                                    <option value="owned">{getMessage('owned')}</option>
                                                </Form.Control>
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row className="mt-3">
                                            <Col xs={12} md={6} xl={4}>
                                                <div className="form-group">
                                                    <Form.Check type="switch" id="know-other-address" label={getMessage('addressof_other_party_known')} />
                                                </div>
                                            </Col>

                                            <Col xs={12} md={6} xl={4}>
                                                <div className="form-group">
                                                    <Form.Check type="switch" id="know-other-insurer" label={getMessage('insurer_polluter_known')} />
                                                </div>
                                            </Col>

                                            <Col xs={12} md={6} xl={4}>
                                                <div className="form-group">
                                                    <Form.Check type="switch" id="need-lawyer" label={getMessage('want_lawyer')} />
                                                </div>
                                            </Col>
                                        </Row>

                                    </Row>
                                </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                <Accordion.Header>{getMessage('accordion_item#2')}</Accordion.Header>
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
