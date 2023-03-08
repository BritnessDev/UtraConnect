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
import Address2DataPart from "./address2-data-part";
import { ModalContacts } from "../modals";
import { SignatureDataPart } from "./signature-data-part";
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
    const [addContactModal, setAddContactModal] = useState(false);
    const [pdf, setPdf] = useState('');
    
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

                                {
                                    pdfData.general?.addressDiff &&
                                    <Accordion.Item eventKey="1">
                                    <Accordion.Header>{getMessage('AddressDiff')}</Accordion.Header>
                                    <Accordion.Body>
                                        <Address2DataPart pdfData={pdfData} setPdfData={setPdfData} setAddContactModal={setAddContactModal}/>
                                    </Accordion.Body>
                                    </Accordion.Item>
                                }

                                <Accordion.Item eventKey="2">
                                <Accordion.Header>{getMessage('Data of our customer')}</Accordion.Header>
                                <Accordion.Body>
                                    <CustomerDataPart pdfData={pdfData} setPdfData={setPdfData} setAddContactModal={setAddContactModal}/>
                                </Accordion.Body>
                                </Accordion.Item>

                                {
                                    pdfData.general?.knowOtherInsurer &&
                                    <Accordion.Item eventKey="3">
                                    <Accordion.Header>{getMessage('Insurance Company Data')}</Accordion.Header>
                                    <Accordion.Body>
                                        <InsuranceDataPart pdfData={pdfData} setPdfData={setPdfData} setAddContactModal={setAddContactModal}/>
                                    </Accordion.Body>
                                    </Accordion.Item>
                                }

                                <Accordion.Item eventKey="4">
                                <Accordion.Header>{getMessage('Accident Opponent Data')}</Accordion.Header>
                                <Accordion.Body>
                                    <OpportunityDataPart pdfData={pdfData} setPdfData={setPdfData} setAddContactModal={setAddContactModal}/>
                                </Accordion.Body>
                                </Accordion.Item>
                                {
                                    pdfData?.general.needLawyer &&
                                    <Fade in={pdfData?.general.needLawyer}>
                                        <Accordion.Item eventKey="5">
                                        <Accordion.Header>{getMessage('Lawyer Data')}</Accordion.Header>
                                        <Accordion.Body>
                                            <LawyerDataPart pdfData={pdfData} setPdfData={setPdfData} setAddContactModal={setAddContactModal}/>
                                        </Accordion.Body>
                                        </Accordion.Item>
                                    </Fade>
                                }
                                {
                                    pdfData?.general.repairIntended && 
                                    <Fade in={pdfData?.general.repairIntended}>
                                        <Accordion.Item eventKey="6">
                                        <Accordion.Header>{getMessage('Repair Workshop Data')}</Accordion.Header>
                                        <Accordion.Body>
                                            <WorkshopDataPart pdfData={pdfData} setPdfData={setPdfData} setAddContactModal={setAddContactModal} />
                                        </Accordion.Body>
                                        </Accordion.Item>
                                    </Fade>
                                }
                                {
                                    pdfData.general?.vehicleOwner === "financed" &&
                                    <Fade in={pdfData.general?.vehicleOwner === "financed"}>
                                        <Accordion.Item eventKey="7">
                                            <Accordion.Header>{getMessage('Bank Data')}</Accordion.Header>
                                            <Accordion.Body>
                                                <BankDataPart pdfData={pdfData} setPdfData={setPdfData} setAddContactModal={setAddContactModal} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Fade>
                                }
                                {
                                    pdfData.general?.vehicleOwner === "leased" &&
                                    <Fade in={pdfData.general?.vehicleOwner === "leased"}>
                                        <Accordion.Item eventKey="7">
                                            <Accordion.Header>{getMessage('Leased Data')}</Accordion.Header>
                                            <Accordion.Body>
                                                <LessorDataPart pdfData={pdfData} setPdfData={setPdfData} setAddContactModal={setAddContactModal} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Fade>
                                }
                                <Accordion.Item eventKey="8">
                                <Accordion.Header>{getMessage('Summary')}</Accordion.Header>
                                <Accordion.Body>
                                    {/* <SignatureModal/> */}
                                    <SignatureDataPart pdf={pdf} setPdf={setPdf} />
                                </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Form>
                    </Col>
                </Row>
                <ModalContacts visible={addContactModal} onDismiss={() => setAddContactModal(false)}/>
            </Container>
        </div>
    );
};

export default AddPdf;
