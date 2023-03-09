import { Row, Col, Container, Button } from "react-bootstrap"
import { getMessage } from "../helpers/lang"
import { useState } from "react"
import SignatureModal from "../modals/SignatureModal"

export const SignatureDataPart = ({pdf, setPdf}) => {
    const onClickHandler = (e) => {
        setSelectPdf(e.target?.id);
    }
    const PdfTemplate = ({id, name}) => (
        <>
            <img src="/img/bookcase/1.png" role="button" alt="no image" style={{width: '120px'}} id={id} onClick={onClickHandler}></img>
            <p className="mt-3">{name}</p>
        </>
    )
    const CheckIcon = ({id}) => (
        <img src="/img/icons/check.png" alt="not check.png" style={{left: "30px", top: "60px"}} className={`${selectPdf === id ? "position-absolute d-flex" : "position-absolute d-none"}`}></img>
    )
    const [selectPdf, setSelectPdf] = useState("0");
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="main-content">
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <Row>
                        <h3 className="mb-4 mt-3 text-info">{getMessage('Summary Data')}</h3>
                        </Row>
                        <Row>
                            <Col xl={2} lg={4} xs={6} className="p-2 position-relative">
                                <PdfTemplate id="0" name={"Anwalt Datenerfassung"}/>
                                <CheckIcon id="0" />
                            </Col>
                            <Col xl={2} lg={4} xs={6} className="p-2 position-relative">
                                <PdfTemplate id="1" name={"Vollmacht Anwalt GGG"}/>
                                <CheckIcon id="1" />
                            </Col>
                            <Col xl={2} lg={4} xs={6} className="p-2 position-relative">
                                <PdfTemplate id="2" name={"Auftrag Autoveritas"}/>
                                <CheckIcon id="2" />
                            </Col>
                            <Col xl={2} lg={4} xs={6} className="p-2 position-relative">
                                <PdfTemplate id="3" name={"Vollmacht Anwalt Mielchen"}/>
                                <CheckIcon id="3" />
                            </Col>
                            <Col xl={2} lg={4} xs={6} className="p-2 position-relative">
                                <PdfTemplate id="4" name={"Vollmacht Anwalt Trögl"}/>
                                <CheckIcon id="4" />
                            </Col>
                        </Row>
                        <Row className="mt-4 gap-2 justify-content-end">
                            <Col xs={"auto"}>
                                <Button variant="danger">{getMessage("Preview")}</Button>
                            </Col>
                            <Col xs={"auto"}>
                                <Button onClick={() => setShowModal(true)}>{getMessage("Generate")}</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <SignatureModal visible={showModal} onDismiss={() => setShowModal(false)} setPdf={setPdf}/>
            </Container>
        </div>
    )
}