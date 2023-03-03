import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { Chart } from '../components/vendor';

export default function EcommerceConversionRate({ ...props }) {
  const data = {
    labels: new Array(12).fill('Label'),
    datasets: [
      {
        data: [0, 15, 10, 25, 30, 15, 40, 50, 80, 60, 55, 65],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
      point: {
        hoverRadius: 0,
      },
    },
    plugins: {
      tooltip: {
        external: () => false,
      },
    },
  };

  return (
    <Card {...props}>
      <Card.Body>
        <Row className="align-items-center">
          <Col>
            <h6 className="text-uppercase text-muted mb-2">Avg. Value</h6>
            <span className="h2 mb-0">$85.5</span>
          </Col>
          <Col xs="auto">
            <Chart layout="sparkline">
              <Line data={data} options={options} />
            </Chart>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
