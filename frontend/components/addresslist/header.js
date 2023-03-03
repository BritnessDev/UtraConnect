import React, { useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Header } from "../../components";

export default function AddressHeader({ ...props }) {
    return (
        <Header {...props}>
            <Container fluid>
                <Header.Body>
                    <Row className="align-items-end">
                        <Col>
                            <Header.Pretitle as="h6">
                                {props.pretitle}
                            </Header.Pretitle>
                            <Header.Title as="h1">{props.title}</Header.Title>
                        </Col>
                    </Row>
                </Header.Body>
                <Header.Footer></Header.Footer>
            </Container>
        </Header>
    );
}
