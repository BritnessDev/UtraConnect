import AddressHeader from "../components/addresslist/header";

import CustomerDataPart from "./customer-data-part";
import GeneralDataPart from "./general-data-part";
import InsuranceDataPart from "./insurance-data-part"
import OpportunityDataPart from "./opponent-data-part";
import LawyerDataPart from "./lawyer-data-part";
import WorkshopDataPart from "./workshop-data-part";
import BankDataPart from "./bank-data-part";
import LessorDataPart from "./lessor-data-part";
import SignatureModal from "../modals/SignatureModal";

import {
    Col,
    Container,
    Row,
    Accordion,
    Form,
    Fade,
} from "react-bootstrap";
import { useEffect, useState } from "react";

import { getMessage } from "../helpers/lang";

const AddPdf = () => {
    const [pdfData, setPdfData] = useState({
        general: {},
        customer: {},
        insurance: {},
        opponent: {},
        lawyer: {},
        workshop: {},
        bank: {},
        lessor: {}
    });
    
    useEffect(() => {
        const response = pdfData;
    }, [pdfData])
    const onChangeHandler = (e) => {
        if(e.target.type === "checkbox")
            setPdfData(prevData => ({...prevData, [e.target.id]: e.target.checked}));
        else
            setPdfData(prevData => ({...prevData, [e.target.id]: e.target.value}));
    }

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
                                    <GeneralDataPart pdfData={pdfData} setPdfData={setPdfData}/>
                                </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                <Accordion.Header>Data of our customer</Accordion.Header>
                                <Accordion.Body>
                                    <CustomerDataPart pdfData={pdfData} setPdfData={setPdfData}/>
                                </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                <Accordion.Header>Insurance Company Data</Accordion.Header>
                                <Accordion.Body>
                                    <InsuranceDataPart pdfData={pdfData} setPdfData={setPdfData}/>
                                </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                <Accordion.Header>Accident Opponent Data</Accordion.Header>
                                <Accordion.Body>
                                    <OpportunityDataPart pdfData={pdfData} setPdfData={setPdfData}/>
                                </Accordion.Body>
                                </Accordion.Item>
                                {
                                    pdfData?.general.needLawyer &&
                                    <Fade in={pdfData?.general.needLawyer}>
                                        <Accordion.Item eventKey="5">
                                        <Accordion.Header>Lawyer Data</Accordion.Header>
                                        <Accordion.Body>
                                            <LawyerDataPart pdfData={pdfData} setPdfData={setPdfData}/>
                                        </Accordion.Body>
                                        </Accordion.Item>
                                    </Fade>
                                }
                                {
                                    pdfData?.general.repairIntended && 
                                    <Fade in={pdfData?.general.repairIntended}>
                                        <Accordion.Item eventKey="6">
                                        <Accordion.Header>Repair Workshop Data</Accordion.Header>
                                        <Accordion.Body>
                                            <WorkshopDataPart pdfData={pdfData} setPdfData={setPdfData} />
                                        </Accordion.Body>
                                        </Accordion.Item>
                                    </Fade>
                                }
                                {
                                    pdfData.general?.vehicleOwner === "financed" &&
                                    <Fade in={pdfData.general?.vehicleOwner === "financed"}>
                                        <Accordion.Item eventKey="7">
                                            <Accordion.Header>Bank Data</Accordion.Header>
                                            <Accordion.Body>
                                                <BankDataPart pdfData={pdfData} setPdfData={setPdfData} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Fade>
                                }
                                {
                                    pdfData.general?.vehicleOwner === "leased" &&
                                    <Fade in={pdfData.general?.vehicleOwner === "leased"}>
                                        <Accordion.Item eventKey="7">
                                            <Accordion.Header>Leased Data</Accordion.Header>
                                            <Accordion.Body>
                                                <LessorDataPart pdfData={pdfData} setPdfData={setPdfData} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Fade>
                                }
                                <Accordion.Item eventKey="8">
                                <Accordion.Header>Summary</Accordion.Header>
                                <Accordion.Body>
                                    Summary Data
                                    <SignatureModal/>
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
