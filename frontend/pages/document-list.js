import AddressHeader from "../components/addresslist/header";
import {
    Col,
    Container,
    Row,
} from "react-bootstrap";
import { DocumentListTable } from "../widgets";

const contacts = {
    items: {
        "item-1": {
            id: "1054",
            filenumber: "2302-045",
            license: "B-AB 1234",
            name: "John Doe",
            created: "28.06.2019",
            modified: "06.10.2021"
        },
        "item-2": {
            id: "1053",
            filenumber: "2302-045",
            license: "B-AB 1234",
            name: "John Doe",
            created: "28.06.2019",
            modified: "06.10.2021"
        },
        "item-3": {
            id: "1052",
            filenumber: "2302-045",
            license: "B-AB 1234",
            name: "John Doe",
            created: "28.06.2019",
            modified: "06.10.2021"
        },
    },
};

const DocumentList = () => {
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
                <AddressHeader pretitle="overview" title="Document List" />
            </Container>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={12}>
                        <DocumentListTable
                            deals={Object.keys(contacts.items).map(
                                (key) => contacts.items[key]
                            )}
                            leadScoreOptions={leadScoreOptions}
                            pagesOptions={pagesOptions}
                            titleOptions={titleOptions}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DocumentList;
