import AddressHeader from "../components/addresslist/header";
import {
    Col,
    Container,
    Row,
} from "react-bootstrap";
import { AddressListTable } from "../widgets";
import { getMessage } from "../helpers/lang";

const deals = {
    items: {
        "item-1": {
            name: "Katharyn Mann Ltd.1",
            contact: "insurance",
            zip: "35260",
            city: "Stadtallendorf",
            phone: "0670 96519511",
            email: "ezra78@gmail.com",
            person: 12,
            created: "28.06.2019",
            modified: "06.10.2021 12:02",
        },
        "item-2": {
            name: "Katharyn Mann Ltd.2",
            contact: "insurance",
            zip: "35260",
            city: "Stadtallendorf",
            phone: "0670 96519511",
            email: "ezra78@gmail.com",
            person: 12,
            created: "28.06.2019",
            modified: "06.10.2021 12:02",
        },
        "item-3": {
            name: "Katharyn Mann Ltd.3",
            contact: "insurance",
            zip: "35260",
            city: "Stadtallendorf",
            phone: "0670 96519511",
            email: "ezra78@gmail.com",
            person: 12,
            created: "28.06.2019",
            modified: "06.10.2021 12:02",
        },
    },
};

const AddressList = () => {
    const pagesOptions = [
        { value: 5, label: getMessage('five_per_page') },
        { value: 10, label: getMessage('ten_per_page') },
        { value: -1, label: getMessage('all') },
    ];

    const titleOptions = [
        { value: "*", label: getMessage('any') },
        { value: "designer", label: getMessage('designer') },
        { value: "developer", label: getMessage('developer') },
        { value: "owner", label: getMessage('owner') },
        { value: "founder", label: getMessage('founder') },
    ];

    const leadScoreOptions = [
        { value: "-1", label: getMessage('any') },
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
                <AddressHeader pretitle={getMessage('overview')} title={getMessage('Title')} />
            </Container>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={12}>
                        <AddressListTable
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
        </div>
    );
};

export default AddressList;
