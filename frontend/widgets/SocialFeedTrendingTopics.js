import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { Chart } from '../components/vendor';

export default function SocialFeedTrendingTopics({ ...props }) {
  const data = [
    {
      counter: '2.45k',
      title: 'Landkit Update',
    },
    {
      counter: '1.1k',
      title: 'Stripe API',
    },
    {
      counter: '9.2k',
      title: 'Oki Doki',
    },
    {
      counter: '6.87k',
      title: 'Bootstrap',
    },
  ];

  const chartData = {
    labels: new Array(12).fill('Label'),
    datasets: [
      {
        data: [0, 15, 10, 25, 30, 15, 40, 50, 80, 60, 55, 65],
      },
    ],
  };

  const chartOptions = {
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
        borderColor: '#D2DDEC',
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

  const items = data.map((item, index) => (
    <ListGroup.Item key={index}>
      <Row className="align-items-center">
        <Col>
          <h4 className="mb-1">
            <a href="#!">{item.title}</a>
          </h4>
          <small className="text-muted">{item.counter} posts</small>
        </Col>
        <Col xs="auto">
          <Chart layout="sparkline">
            <Line data={chartData} options={chartOptions} />
          </Chart>
        </Col>
      </Row>
    </ListGroup.Item>
  ));

  return (
    <Card {...props}>
      <Card.Header>
        <h4 className="card-header-title">Trending Topics</h4>
        <a className="small" href="#!">
          View all
        </a>
      </Card.Header>
      <Card.Body>
        <ListGroup className="list-group-flush my-n3">{items}</ListGroup>
      </Card.Body>
    </Card>
  );
}
