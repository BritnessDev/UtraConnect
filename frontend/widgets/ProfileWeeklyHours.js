import React from 'react';
import { Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Chart } from '../components/vendor';

export default function WeeklyHours({ ...props }) {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [21, 12, 28, 15, 5, 12, 17, 2],
      },
    ],
  };

  const options = {
    scales: {
      y: {
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
        <h4 className="card-header-title">Weekly Hours</h4>
      </Card.Header>
      <Card.Body>
        <Chart size="sm">
          <Bar data={data} options={options} />
        </Chart>
      </Card.Body>
    </Card>
  );
}
