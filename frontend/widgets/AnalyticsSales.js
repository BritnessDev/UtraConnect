import React, { useState } from 'react';
import { Card, Nav } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { Chart } from '../components/vendor';

export default function AnalyticsSales() {
  const [index, setIndex] = useState(0);

  const labels = [
    'Oct 1',
    'Oct 3',
    'Oct 6',
    'Oct 9',
    'Oct 12',
    'Oct 5',
    'Oct 18',
    'Oct 21',
    'Oct 24',
    'Oct 27',
    'Oct 30',
  ];

  const datasets = [
    {
      data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25],
    },
    {
      data: [7, 40, 12, 27, 34, 17, 19, 30, 28, 32, 24],
    },
    {
      data: [2, 12, 35, 25, 36, 25, 34, 16, 4, 14, 15],
    },
  ];

  const options = {
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return '$' + value + 'k';
          },
        },
      },
    },
  };

  return (
    <Card>
      <Card.Header>
        <h4 className="card-header-title">Sales</h4>
        <Nav variant="tabs" className="nav-tabs-sm">
          <Nav.Item>
            <Nav.Link active={index === 0} onClick={() => setIndex(0)} role="button">
              All
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link active={index === 1} onClick={() => setIndex(1)} role="button">
              Direct
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link active={index === 2} onClick={() => setIndex(2)} role="button">
              Organic
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Chart>
          <Line data={{ labels: labels, datasets: [{ ...datasets[index] }] }} options={options} />
        </Chart>
      </Card.Body>
    </Card>
  );
}
