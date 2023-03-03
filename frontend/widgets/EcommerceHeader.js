import React, { useState } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { Header } from '../components';
import { Chart } from '../components/vendor';

export default function EcommerceHeader({ ...props }) {
  const [index, setIndex] = useState(0);

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const datasets = [
    {
      data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40],
      yAxisID: 'yAxisOne',
    },
    {
      data: [50, 75, 35, 25, 55, 87, 67, 53, 25, 80, 87, 45],
      yAxisID: 'yAxisOne',
    },
    {
      data: [40, 57, 25, 50, 57, 32, 46, 28, 59, 34, 52, 48],
      yAxisID: 'yAxisTwo',
    },
  ];

  const options = {
    scales: {
      yAxisOne: {
        display: 'auto',
        grid: {
          color: '#283E59',
        },
        ticks: {
          callback: function (value) {
            return value + 'k';
          },
        },
      },
      yAxisTwo: {
        display: 'auto',
        grid: {
          color: '#283E59',
        },
        ticks: {
          callback: function (value) {
            return value + '%';
          },
        },
      },
    },
  };

  return (
    <Header className="bg-dark pb-5" {...props}>
      <Container fluid>
        <Header.Body>
          <Row className="align-items-end">
            <Col>
              <Header.Pretitle as="h6" className="text-secondary">
                Annual
              </Header.Pretitle>
              <Header.Title as="h1" className="text-white">
                Audience
              </Header.Title>
            </Col>
            <Col xs="auto">
              <Header.Tabs>
                <Nav.Item>
                  <Nav.Link className="text-center" active={index === 0} onClick={() => setIndex(0)} role="button">
                    <Header.Pretitle className="text-secondary">Customers</Header.Pretitle>
                    <h3 className="text-white mb-0">73.2k</h3>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="text-center" active={index === 1} onClick={() => setIndex(1)} role="button">
                    <Header.Pretitle className="text-secondary">Sessions</Header.Pretitle>
                    <h3 className="text-white mb-0">92.1k</h3>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="text-center" active={index === 2} onClick={() => setIndex(2)} role="button">
                    <Header.Pretitle className="text-secondary">Conversion</Header.Pretitle>
                    <h3 className="text-white mb-0">50.2%</h3>
                  </Nav.Link>
                </Nav.Item>
              </Header.Tabs>
            </Col>
          </Row>
        </Header.Body>
        <Header.Footer>
          <Chart>
            <Line data={{ labels: labels, datasets: [{ ...datasets[index] }] }} options={options} />
          </Chart>
        </Header.Footer>
      </Container>
    </Header>
  );
}
