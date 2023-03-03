import React, { useState } from 'react';
import { Card, Nav } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ChartLegend } from '../components/vendor';

export default function AnalyticsTrafficChannels({ ...props }) {
  const [index, setIndex] = useState(0);

  const labels = ['Direct', 'Organic', 'Referral'];

  const datasets = [
    {
      data: [60, 25, 15],
      backgroundColor: ['#2C7BE5', '#A6C5F7', '#D2DDEC'],
    },
    {
      data: [15, 45, 20],
      backgroundColor: ['#2C7BE5', '#A6C5F7', '#D2DDEC'],
    },
  ];

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          afterLabel: function () {
            return '%';
          },
        },
      },
    },
  };

  return (
    <Card {...props}>
      <Card.Header>
        <h4 className="card-header-title">Traffic Channels</h4>
        <Nav variant="tabs" className="nav-tabs-sm">
          <Nav.Item>
            <Nav.Link active={index === 0} onClick={(e) => setIndex(0)} role="button">
              All
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link active={index === 1} onClick={(e) => setIndex(1)} role="button">
              Direct
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Chart layout="appended">
          <Doughnut data={{ labels: labels, datasets: [{ ...datasets[index] }] }} options={options} />
        </Chart>
        <ChartLegend data={{ labels: labels, datasets: datasets }} />
      </Card.Body>
    </Card>
  );
}
