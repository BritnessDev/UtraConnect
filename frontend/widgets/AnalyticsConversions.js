import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Chart } from '../components/vendor';

export default function AnalyticsConversions({ ...props }) {
  const [hidden, setHidden] = useState(true);

  const labels = [
    'Oct 1',
    'Oct 2',
    'Oct 3',
    'Oct 4',
    'Oct 5',
    'Oct 6',
    'Oct 7',
    'Oct 8',
    'Oct 9',
    'Oct 10',
    'Oct 11',
    'Oct 12',
  ];

  const datasets = [
    {
      label: '2020',
      data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
    },
    {
      label: '2019',
      data: [15, 10, 20, 12, 7, 0, 8, 16, 18, 16, 10, 22],
      backgroundColor: '#d2ddec',
      hidden: hidden,
    },
  ];

  const options = {
    scales: {
      y: {
        ticks: {
          callback: function (val) {
            return val + '%';
          },
        },
      },
    },
  };

  return (
    <Card {...props}>
      <Card.Header>
        <h4 className="card-header-title">Conversions</h4>
        <span className="text-muted me-3">Last year comparision:</span>
        <Form.Check type="switch" id="cardToggle" onChange={(e) => setHidden(e.target.checked ? false : true)} />
      </Card.Header>
      <Card.Body>
        <Chart>
          <Bar data={{ labels: labels, datasets: datasets }} options={options} />
        </Chart>
      </Card.Body>
    </Card>
  );
}
