import React, { useState } from 'react';
import { Card, Nav } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { Chart } from '../components/vendor';

export default function ProjectEarned({ ...props }) {
  const [index, setIndex] = useState(0);

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const datasets = [
    {
      data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40],
      yAxisID: 'yAxisOne',
    },
    {
      data: [7, 35, 12, 27, 34, 17, 19, 30, 28, 32, 24, 39],
      yAxisID: 'yAxisTwo',
    },
  ];

  const options = {
    scales: {
      yAxisOne: {
        id: 'yAxisOne',
        type: 'linear',
        display: 'auto',
        ticks: {
          callback: function (value) {
            return '$' + value + 'k';
          },
        },
      },
      yAxisTwo: {
        id: 'yAxisTwo',
        type: 'linear',
        display: 'auto',
        ticks: {
          callback: function (value) {
            return value + 'hrs';
          },
        },
      },
    },
  };

  return (
    <Card {...props}>
      <Card.Header>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link active={index === 0} onClick={(e) => setIndex(0)} role="button">
              Earned
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link active={index === 1} onClick={(e) => setIndex(1)} role="button">
              Hours Worked
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
