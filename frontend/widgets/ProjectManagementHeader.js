import React, { useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { Header } from "../components";
import { Chart } from "../components/vendor";

export default function ProjectManagementHeader({ ...props }) {
    const [index, setIndex] = useState(0);

    const labels = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
    ];

    const datasets = [
        {
            data: [
                18, 10, 5, 15, 10, 20, 15, 25, 20, 26, 25, 29, 18, 10, 5, 15,
                10, 20,
            ],
            yAxisID: "yAxisOne",
        },
        {
            data: [
                50, 75, 35, 25, 55, 87, 67, 53, 25, 80, 87, 45, 50, 75, 35, 25,
                55, 19,
            ],
            yAxisID: "yAxisTwo",
        },
        {
            data: [
                40, 57, 25, 50, 57, 32, 46, 28, 59, 34, 52, 48, 40, 57, 25, 50,
                57, 29,
            ],
            yAxisID: "yAxisThree",
        },
    ];

    const options = {
        scales: {
            yAxisOne: {
                display: "auto",
                ticks: {
                    callback: function (value) {
                        return "$" + value + "k";
                    },
                },
            },
            yAxisTwo: {
                display: "auto",
                ticks: {
                    callback: function (value) {
                        return value + "k";
                    },
                },
            },
            yAxisThree: {
                display: "auto",
                ticks: {
                    callback: function (value) {
                        return value + "%";
                    },
                },
            },
        },
    };

    return (
        <Header {...props}>
            <Container fluid>
                <Header.Body>
                    <Row className="align-items-end">
                        <Col>
                            <Header.Pretitle as="h6">Overview</Header.Pretitle>
                            <Header.Title as="h1">
                                Company Earnings
                            </Header.Title>
                        </Col>
                        <Col xs="auto">
                            <Header.Tabs>
                                <Nav.Item>
                                    <Nav.Link
                                        className="text-center"
                                        active={index === 0}
                                        onClick={() => setIndex(0)}
                                        role="button"
                                    >
                                        <Header.Pretitle className="text-secondary">
                                            Earnings
                                        </Header.Pretitle>
                                        <h3 className="mb-0">$19.2k</h3>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        className="text-center"
                                        active={index === 1}
                                        onClick={() => setIndex(1)}
                                        role="button"
                                    >
                                        <Header.Pretitle className="text-secondary">
                                            Sessions
                                        </Header.Pretitle>
                                        <h3 className="mb-0">92.1k</h3>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        className="text-center"
                                        active={index === 2}
                                        onClick={() => setIndex(2)}
                                        role="button"
                                    >
                                        <Header.Pretitle className="text-secondary">
                                            Bounce
                                        </Header.Pretitle>
                                        <h3 className="mb-0">50.2%</h3>
                                    </Nav.Link>
                                </Nav.Item>
                            </Header.Tabs>
                        </Col>
                    </Row>
                </Header.Body>
                <Header.Footer>
                    <Chart>
                        <Bar
                            data={{
                                labels: labels,
                                datasets: [{ ...datasets[index] }],
                            }}
                            options={options}
                        />
                    </Chart>
                </Header.Footer>
            </Container>
        </Header>
    );
}
