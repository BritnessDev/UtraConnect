import TextareaAutosize from 'react-textarea-autosize';
import { Row, Col, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';

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
            <h3 htmlFor="license-accident" className="mb-4 mt-3 text-info">License plate and vehicle make and vehicle model</h3>
                <Row>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="caseNumber">Case number</Form.Label>
                            <Form.Control id="caseNumber" placeholder="Enter case number" type="text" value={pdfData.general?.caseNumber} onChange={onChangeHandler} />
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="date">Date</Form.Label>
                            <Form.Control id="date" placeholder="Enter a date" type="date" value={pdfData.general?.date} onChange={onChangeHandler} />
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="dateInspection">Date of inspection</Form.Label>
                            <Form.Control id="dateInspection" placeholder="Enter a date of inspection" type="date" value={pdfData.general?.dateInspection} onChange={onChangeHandler} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="placeInspection">Place of inspection</Form.Label>
                            <Form.Control id="placeInspection" placeholder="Enter a place of inspection" type="text" value={pdfData.general?.placeInspection} onChange={onChangeHandler}/>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="vehicleMake">Vehicle make</Form.Label>
                            <Form.Control id="vehicleMake" placeholder="Enter vehicle make" type="text" value={pdfData.general?.vehicleMake} onChange={onChangeHandler} />
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="vehicleModelCustomer">Vehicle model customer</Form.Label>
                            <Form.Control id="vehicleModelCustomer" placeholder="Enter a vehicle model customer" type="text" value={pdfData.general?.vehicleModelCustomer} onChange={onChangeHandler} />
                        </div>
                    </Col>
                </Row>
                <h3 htmlFor="license-accident" className="mb-4 mt-3 text-info">License plate and vehicle make and vehicle model of the other party involved in the accident</h3>
                <Row>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="licenseAccident">License plate</Form.Label>
                            <Form.Control id="licenseAccident" placeholder="Enter license plate" type="text" value={pdfData.general?.licenseAccident} onChange={onChangeHandler} />
                        </div>
                    </Col>

                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="vehiclMakeAccident">Vehicle make</Form.Label>
                            <Form.Control id="vehiclMakeAccident" placeholder="Enter a vehicle model customer" type="text" value={pdfData.general?.vehiclMakeAccident} onChange={onChangeHandler} />
                        </div>
                    </Col>

                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="vehicleModelAccident">Vehicle model</Form.Label>
                            <Form.Control id="vehicleModelAccident" placeholder="Enter a vehicle model customer" type="text" value={pdfData.general?.vehicleModelAccident} onChange={onChangeHandler} />
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Check type="switch" id="addressDiff" label="Address different?" value={pdfData.general?.addressDiff} onChange={onChangeHandler} />
                        </div>
                    </Col>

                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Check type="switch" id="signerDiff" label="Signer different?" value={pdfData.general?.signerDiff} onChange={onChangeHandler} />
                        </div>
                    </Col>

                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Check type="switch" id="sendEmail" label="Send appraisals by email?" value={pdfData.general?.sendEmail} onChange={onChangeHandler} />
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="damageDay">Damage day</Form.Label>
                            <Form.Control id="damageDay" placeholder="Enter a damage day" type="date" value={pdfData.general?.damageDay} onChange={onChangeHandler} />
                        </div>
                    </Col>

                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="damageLocation">Damage location</Form.Label>
                            <Form.Control id="damageLocation" placeholder="Enter a damage location" type="text" value={pdfData.general?.damageLocation} onChange={onChangeHandler} />
                        </div>
                    </Col>

                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                        <Form.Label htmlFor="vehicle-model-customer">Is the vehicle owned, financed or leased?</Form.Label>
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