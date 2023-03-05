import TextareaAutosize from 'react-textarea-autosize';
import { Row, Col, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import {getMessage} from '../helpers/lang'

export default function GeneralDataPart ({pdfData, setPdfData}) {
    const onChangeHandler = (e) => {
        if(e.target.type === "checkbox")
            setPdfData(prevData => ({...prevData, general: {
                ...prevData.general,
                [e.target.id]: e.target.checked
            }}));
        else
        setPdfData(prevData => ({...prevData, general: {
            ...prevData.general,
            [e.target.id]: e.target.value
        }}));
    }
    return (
        <Row>
            <h3 htmlFor="license-accident" className="mb-4 mt-3 text-info">{getMessage('licence_plate_and_vehicle_model')}</h3>
                <Row>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="caseNumber">{getMessage('case_number')}</Form.Label>
                            <Form.Control id="caseNumber" placeholder={getMessage('enter_case_number')} type="text" value={pdfData.general?.caseNumber} onChange={onChangeHandler} />
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="date">{getMessage('date')}</Form.Label>
                            <Form.Control id="date" placeholder={getMessage('enter_a_date')} type="date" value={pdfData.general?.date} onChange={onChangeHandler} />
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="dateInspection">{getMessage('date_of_inspection')}</Form.Label>
                            <Form.Control id="dateInspection" placeholder={getMessage('enter_a_date_of_inspection')} type="date" value={pdfData.general?.dateInspection} onChange={onChangeHandler} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="placeInspection">{getMessage('place_of_inspection')}</Form.Label>
                            <Form.Control id="placeInspection" placeholder={getMessage('enter_place_inspection')} type="text" value={pdfData.general?.placeInspection} onChange={onChangeHandler}/>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="vehicleMake">{getMessage('vehicle_make')}</Form.Label>
                            <Form.Control id="vehicleMake" placeholder={getMessage('enter_vehicle_make')} type="text" value={pdfData.general?.vehicleMake} onChange={onChangeHandler} />
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="vehicleModelCustomer">{getMessage('vehicle_model_customer')}</Form.Label>
                            <Form.Control id="vehicleModelCustomer" placeholder={getMessage('enter_vehicle_model_customer')} type="text" value={pdfData.general?.vehicleModelCustomer} onChange={onChangeHandler} />
                        </div>
                    </Col>
                </Row>
                <h3 htmlFor="license-accident" className="mb-4 mt-3 text-info">{getMessage('license_plate_vehicle_model_other_party_involved_accident')}</h3>
                <Row>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="licenseAccident">{getMessage('license_plate')}</Form.Label>
                            <Form.Control id="licenseAccident" placeholder={getMessage('enter_license_plate')} type="text" value={pdfData.general?.licenseAccident} onChange={onChangeHandler} />
                        </div>
                    </Col>

                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="vehiclMakeAccident">{getMessage('vehicle_make')}</Form.Label>
                            <Form.Control id="vehiclMakeAccident" placeholder={getMessage('enter_vehicle_model_customer')} type="text" value={pdfData.general?.vehiclMakeAccident} onChange={onChangeHandler} />
                        </div>
                    </Col>

                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="vehicleModelAccident">Vehicle model</Form.Label>
                            <Form.Control id="vehicleModelAccident" placeholder={getMessage('enter_vehicle_model_customer')} type="text" value={pdfData.general?.vehicleModelAccident} onChange={onChangeHandler} />
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Check type="switch" id="addressDiff" label={getMessage('address_different')} value={pdfData.general?.addressDiff} onChange={onChangeHandler} />
                        </div>
                    </Col>

                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Check type="switch" id="signerDiff" label={getMessage('signer_different')} value={pdfData.general?.signerDiff} onChange={onChangeHandler} />
                        </div>
                    </Col>

                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Check type="switch" id="sendEmail" label={getMessage('send_appraisals_by_email')} value={pdfData.general?.sendEmail} onChange={onChangeHandler} />
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="damageDay">{getMessage('damage_day')}</Form.Label>
                            <Form.Control id="damageDay" placeholder={getMessage('enter_damage_day')} type="date" value={pdfData.general?.damageDay} onChange={onChangeHandler} />
                        </div>
                    </Col>

                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="damageLocation">{getMessage('damage_location')}</Form.Label>
                            <Form.Control id="damageLocation" placeholder={getMessage('enter_damage_location')} type="text" value={pdfData.general?.damageLocation} onChange={onChangeHandler} />
                        </div>
                    </Col>

                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                        <Form.Label htmlFor="vehicle-model-customer">{getMessage('is_the_vehicle_owned_financed_or_leased')}</Form.Label>
                        <Form.Control as="select" id="vehicleOwner" value={pdfData.general?.vehicleOwner} onChange={onChangeHandler}>
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
                            <Form.Check type="switch" id="knowOtherAddress" label="Address of the other party known?" value={pdfData.general?.knowOtherAddress} onChange={onChangeHandler} />
                        </div>
                    </Col>

                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Check type="switch" id="knowOtherInsurer" label="Insurer of the polluter known?" value={pdfData.general?.knowOtherInsurer} onChange={onChangeHandler} />
                        </div>
                    </Col>

                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Check type="switch" id="needLawyer" label="Want a lawyer?" value={pdfData.general?.needLawyer} onChange={onChangeHandler} />
                        </div>
                    </Col>
                </Row>

                <Row className='mt-3'>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Check type="switch" id="repairIntended" label="Repair intended?" value={pdfData.general?.repairIntended} onChange={onChangeHandler} />
                        </div>
                    </Col>
                </Row>

            </Row>
    )
}