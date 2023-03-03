import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { deals } from "../data";
import { CRMDealsHeader, CRMDealsKanban, CRMDealsTable } from "../widgets";

export default function CRMContacts() {
    const [activeTab, setActiveTab] = useState(0);

    const pagesOptions = [
        { value: 5, label: "5 per page" },
        { value: 10, label: "10 per page" },
        { value: -1, label: "All" },
    ];

    const titleOptions = [
        { value: "*", label: "Any" },
        { value: "designer", label: "Designer" },
        { value: "developer", label: "Developer" },
        { value: "owner", label: "Owner" },
        { value: "founder", label: "Founder" },
    ];

    const leadScoreOptions = [
        { value: "-1", label: "Any" },
        { value: "1", label: "1+" },
        { value: "2", label: "2+" },
        { value: "3", label: "3+" },
        { value: "4", label: "4+" },
        { value: "5", label: "5+" },
        { value: "6", label: "6+" },
        { value: "7", label: "7+" },
        { value: "8", label: "8+" },
        { value: "9", label: "9+" },
        { value: "10", label: "10" },
    ];

    return (
        <div className="main-content">
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={12}>
                        <CRMDealsHeader
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                    </Col>
                </Row>
            </Container>
            {activeTab === 0 && (
                <Container fluid>
                    <Row className="justify-content-center">
                        <Col xs={12}>
                            <CRMDealsTable
                                deals={Object.keys(deals.items).map(
                                    (key) => deals.items[key]
                                )}
                                leadScoreOptions={leadScoreOptions}
                                pagesOptions={pagesOptions}
                                titleOptions={titleOptions}
                            />
                        </Col>
                    </Row>
                </Container>
            )}
            {activeTab === 1 && (
                <Container className="kanban-container" fluid>
                    <Row>
                        <CRMDealsKanban deals={deals} />
                    </Row>
                </Container>
            )}
        </div>
    );
}
