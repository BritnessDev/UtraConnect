import React from 'react';
import { Badge, Card, Table } from 'react-bootstrap';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { Header } from '../components';
import { Chart, ChartLegend, Highlight } from '../components/vendor';
import { AnalyticsConversions, AnalyticsSales } from '../widgets';

export default function Charts({ ...props }) {
  return (
    <div id="charts" {...props}>
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>
            Charts{' '}
            <Badge bg="primary-soft" className="ms-1 mt-n1">
              Dashkit only
            </Badge>{' '}
            <Badge bg="warning-soft" className="ms-1 mt-n1">
              Plugin
            </Badge>
          </Header.Title>
          <Header.Subtitle>
            Create beautiful charts with a simple, but powerful and flexible JavaScript Chart.js plugin.
          </Header.Subtitle>
        </Header.Body>
      </Header>
      <h2 className="mb-2">Line</h2>
      <p className="text-muted mb-4">
        A line chart is a way of plotting data points on a line. Often, it is used to show trend data, or the comparison
        of two data sets.
      </p>
      <Card>
        <Card.Body>
          <Chart>
            <Line
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                  {
                    data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40],
                  },
                ],
              }}
              options={{
                scales: {
                  y: {
                    type: 'linear',
                    ticks: {
                      callback: function (value) {
                        return '$' + value + 'k';
                      },
                    },
                  },
                },
              }}
            />
          </Chart>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            const&nbsp;labels&nbsp;=&nbsp;[
            <br />
            &nbsp;&nbsp;'Jan',
            <br />
            &nbsp;&nbsp;'Feb',
            <br />
            &nbsp;&nbsp;'Mar',
            <br />
            &nbsp;&nbsp;'Apr',
            <br />
            &nbsp;&nbsp;'May',
            <br />
            &nbsp;&nbsp;'Jun',
            <br />
            &nbsp;&nbsp;'Jul',
            <br />
            &nbsp;&nbsp;'Aug',
            <br />
            &nbsp;&nbsp;'Sep',
            <br />
            &nbsp;&nbsp;'Oct',
            <br />
            &nbsp;&nbsp;'Nov',
            <br />
            &nbsp;&nbsp;'Dec',
            <br />
            ];
            <br />
            <br />
            const&nbsp;dataset&nbsp;=&nbsp;[{'{'}
            <br />
            &nbsp;&nbsp;data:&nbsp;[0,&nbsp;10,&nbsp;5,&nbsp;15,&nbsp;10,&nbsp;20,&nbsp;15,&nbsp;25,&nbsp;20,&nbsp;30,&nbsp;25,&nbsp;40],
            <br />
            {'}'}];
            <br />
            <br />
            const&nbsp;options&nbsp;=&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;scales:&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;y:&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type:&nbsp;'linear',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ticks:&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callback:&nbsp;function&nbsp;(value)&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;'$'&nbsp;+&nbsp;value&nbsp;+&nbsp;'k';
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;{'}'},<br />
            {'}'};<br />
            <br />
            &lt;Chart&gt;
            <br />
            &nbsp;&nbsp;&lt;Line
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;data={'{'}
            {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;labels:&nbsp;labels,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;datasets:&nbsp;datasets,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'}'}
            {'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;options={'{'}options{'}'}
            <br />
            &nbsp;&nbsp;/&gt;
            <br />
            &lt;/Chart&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Bar</h2>
      <p className="text-muted mb-4">
        A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show
        trend data, and the comparison of multiple data sets side by side.
      </p>
      <Card>
        <Card.Body>
          <Chart>
            <Bar
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                  {
                    data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
                  },
                ],
              }}
              options={{
                scales: {
                  y: {
                    ticks: {
                      callback: function (value) {
                        return '$' + value + 'k';
                      },
                    },
                  },
                },
              }}
            />
          </Chart>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            const&nbsp;labels&nbsp;=&nbsp;[
            <br />
            &nbsp;&nbsp;'Jan',
            <br />
            &nbsp;&nbsp;'Feb',
            <br />
            &nbsp;&nbsp;'Mar',
            <br />
            &nbsp;&nbsp;'Apr',
            <br />
            &nbsp;&nbsp;'May',
            <br />
            &nbsp;&nbsp;'Jun',
            <br />
            &nbsp;&nbsp;'Jul',
            <br />
            &nbsp;&nbsp;'Aug',
            <br />
            &nbsp;&nbsp;'Sep',
            <br />
            &nbsp;&nbsp;'Oct',
            <br />
            &nbsp;&nbsp;'Nov',
            <br />
            &nbsp;&nbsp;'Dec',
            <br />
            ];
            <br />
            <br />
            const&nbsp;datasets&nbsp;=&nbsp;[
            <br />
            &nbsp;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;data:&nbsp;[25,&nbsp;20,&nbsp;30,&nbsp;22,&nbsp;17,&nbsp;10,&nbsp;18,&nbsp;26,&nbsp;28,&nbsp;26,&nbsp;20,&nbsp;32],
            <br />
            &nbsp;&nbsp;{'}'},<br />
            ];
            <br />
            <br />
            const&nbsp;options&nbsp;=&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;scales:&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;y:&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ticks:&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callback:&nbsp;function&nbsp;(value)&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;'$'&nbsp;+&nbsp;value&nbsp;+&nbsp;'k';
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;{'}'},<br />
            {'}'};<br />
            <br />
            &lt;Chart&gt;
            <br />
            &nbsp;&nbsp;&lt;Bar
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;data={'{'}
            {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;labels:&nbsp;labels,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;datasets:&nbsp;datasets,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'}'}
            {'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;options={'{'}options{'}'}
            <br />
            &nbsp;&nbsp;/&gt;
            <br />
            &lt;/Chart&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Doughnut</h2>
      <p className="text-muted mb-4">Excellent at showing the relational proportions between data.</p>
      <Card>
        <Card.Body>
          <Chart layout="appended">
            <Doughnut
              data={{
                labels: ['Direct', 'Organic', 'Referral'],
                datasets: [
                  {
                    data: [60, 25, 15],
                    backgroundColor: ['#2C7BE5', '#A6C5F7', '#D2DDEC'],
                  },
                ],
              }}
              options={{
                tooltips: {
                  callbacks: {
                    afterLabel: function () {
                      return '%';
                    },
                  },
                },
              }}
            />
          </Chart>
          <ChartLegend
            data={{
              labels: ['Direct', 'Organic', 'Referral'],
              datasets: [
                {
                  data: [60, 25, 15],
                  backgroundColor: ['#2C7BE5', '#A6C5F7', '#D2DDEC'],
                },
              ],
            }}
          />
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            const&nbsp;labels&nbsp;=&nbsp;['Direct',&nbsp;'Organic',&nbsp;'Referral'];
            <br />
            <br />
            const&nbsp;datasets&nbsp;=&nbsp;[
            <br />
            &nbsp;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;data:&nbsp;[60,&nbsp;25,&nbsp;15],
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;backgroundColor:&nbsp;['#2C7BE5',&nbsp;'#A6C5F7',&nbsp;'#D2DDEC'],
            <br />
            &nbsp;&nbsp;{'}'},<br />
            ];
            <br />
            <br />
            const&nbsp;options&nbsp;=&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;tooltips:&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;callbacks:&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;afterLabel:&nbsp;function&nbsp;()&nbsp;
            {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;'%';
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;{'}'},<br />
            {'}'};<br />
            <br />
            &lt;Chart&gt;
            <br />
            &nbsp;&nbsp;&lt;Doughnut
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data={'{'}
            {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;labels:&nbsp;labels,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;datasets:&nbsp;datasets,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}
            {'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;options={'{'}options{'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;/&gt;
            <br />
            &lt;/Chart&gt;
            <br />
            <br />
            &lt;ChartLegend
            <br />
            &nbsp;&nbsp;data={'{'}
            {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;labels:&nbsp;labels,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;datasets:&nbsp;datasets,
            <br />
            &nbsp;&nbsp;{'}'}
            {'}'}
            <br />
            /&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Sparkline</h2>
      <p className="text-muted mb-4">A simple little line chart with disabled interactions.</p>
      <Card>
        <Card.Body>
          <Chart layout="sparkline">
            <Line
              data={{
                labels: new Array(12).fill('Label'),
                datasets: [
                  {
                    data: [0, 15, 10, 25, 30, 15, 40, 50, 80, 60, 55, 65],
                  },
                ],
              }}
              options={{
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
              }}
            />
          </Chart>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            const&nbsp;data&nbsp;=&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;labels:&nbsp;new&nbsp;Array(12).fill('Label'),
            <br />
            &nbsp;&nbsp;datasets:&nbsp;[
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data:&nbsp;[0,&nbsp;15,&nbsp;10,&nbsp;25,&nbsp;30,&nbsp;15,&nbsp;40,&nbsp;50,&nbsp;80,&nbsp;60,&nbsp;55,&nbsp;65],
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;],
            <br />
            {'}'};<br />
            <br />
            const&nbsp;options&nbsp;=&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;scales:&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;y:&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display:&nbsp;false,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;x:&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display:&nbsp;false,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;elements:&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;line:&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;borderWidth:&nbsp;2,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;borderColor:&nbsp;'#D2DDEC',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;point:&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hoverRadius:&nbsp;0,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;plugins:&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;tooltip:&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;external:&nbsp;()&nbsp;=&gt;&nbsp;false,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;{'}'},<br />
            {'}'};<br />
            <br />
            &lt;Chart&nbsp;sparkline&gt;
            <br />
            &nbsp;&nbsp;&lt;Line&nbsp;data={'{'}data{'}'}&nbsp;options={'{'}options{'}'}&nbsp;/&gt;
            <br />
            &lt;/Chart&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Toggle chart data</h2>
      <p className="text-muted mb-4">
        Easily toggle hidden datasets with <code>useState</code> hook.
      </p>
      <AnalyticsConversions />
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="html" className="bg-dark mb-0">
            export&nbsp;default&nbsp;function&nbsp;AnalyticsConversions({'{'}&nbsp;...props&nbsp;{'}'})&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;const&nbsp;[hidden,&nbsp;setHidden]&nbsp;=&nbsp;useState(true);
            <br />
            <br />
            &nbsp;&nbsp;const&nbsp;labels&nbsp;=&nbsp;[
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;'Oct&nbsp;1',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;'Oct&nbsp;2',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;'Oct&nbsp;3',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;'Oct&nbsp;4',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;'Oct&nbsp;5',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;'Oct&nbsp;6',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;'Oct&nbsp;7',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;'Oct&nbsp;8',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;'Oct&nbsp;9',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;'Oct&nbsp;10',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;'Oct&nbsp;11',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;'Oct&nbsp;12',
            <br />
            &nbsp;&nbsp;];
            <br />
            <br />
            &nbsp;&nbsp;const&nbsp;datasets&nbsp;=&nbsp;[
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label:&nbsp;'2020',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data:&nbsp;[25,&nbsp;20,&nbsp;30,&nbsp;22,&nbsp;17,&nbsp;10,&nbsp;18,&nbsp;26,&nbsp;28,&nbsp;26,&nbsp;20,&nbsp;32],
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label:&nbsp;'2019',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data:&nbsp;[15,&nbsp;10,&nbsp;20,&nbsp;12,&nbsp;7,&nbsp;0,&nbsp;8,&nbsp;16,&nbsp;18,&nbsp;16,&nbsp;10,&nbsp;22],
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backgroundColor:&nbsp;'#d2ddec',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hidden:&nbsp;hidden,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;];
            <br />
            <br />
            &nbsp;&nbsp;const&nbsp;options&nbsp;=&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;scales:&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y:&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ticks:&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callback:&nbsp;function&nbsp;(val)&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;val&nbsp;+&nbsp;'%';
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;{'}'};<br />
            <br />
            &nbsp;&nbsp;return&nbsp;(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Card&nbsp;{'{'}...props{'}'}&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Card.Header&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h4&nbsp;className=&quot;card-header-title&quot;&gt;Conversions&lt;/h4&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span&nbsp;className=&quot;text-muted&nbsp;me-3&quot;&gt;Last&nbsp;year&nbsp;comparision:&lt;/span&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Form.Check&nbsp;type=&quot;switch&quot;&nbsp;id=&quot;cardToggle&quot;&nbsp;onChange=
            {'{'}(e)&nbsp;=&gt;&nbsp;setHidden(e.target.checked&nbsp;?&nbsp;false&nbsp;:&nbsp;true){'}'}&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Card.Header&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Card.Body&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Chart&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Bar&nbsp;data={'{'}
            {'{'}&nbsp;labels:&nbsp;labels,&nbsp;datasets:&nbsp;datasets&nbsp;{'}'}
            {'}'}&nbsp;options={'{'}options{'}'}&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Chart&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Card.Body&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Card&gt;
            <br />
            &nbsp;&nbsp;);
            <br />
            {'}'}
            <br />
          </Highlight>
        </Card.Body>
      </Card>
      <AnalyticsSales />
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="html" className="bg-dark mb-0">
            export&nbsp;default&nbsp;function&nbsp;AnalyticsConversions({'{'}&nbsp;...props&nbsp;{'}'})&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;const&nbsp;[hidden,&nbsp;setHidden]&nbsp;=&nbsp;useState(true);
            <br />
            <br />
            &nbsp;&nbsp;const&nbsp;labels&nbsp;=&nbsp;[
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;'Oct&nbsp;1',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;'Oct&nbsp;2',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;'Oct&nbsp;3',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;'Oct&nbsp;4',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;'Oct&nbsp;5',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;'Oct&nbsp;6',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;'Oct&nbsp;7',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;'Oct&nbsp;8',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;'Oct&nbsp;9',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;'Oct&nbsp;10',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;'Oct&nbsp;11',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;'Oct&nbsp;12',
            <br />
            &nbsp;&nbsp;];
            <br />
            <br />
            &nbsp;&nbsp;const&nbsp;datasets&nbsp;=&nbsp;[
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label:&nbsp;'2020',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data:&nbsp;[25,&nbsp;20,&nbsp;30,&nbsp;22,&nbsp;17,&nbsp;10,&nbsp;18,&nbsp;26,&nbsp;28,&nbsp;26,&nbsp;20,&nbsp;32],
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label:&nbsp;'2019',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data:&nbsp;[15,&nbsp;10,&nbsp;20,&nbsp;12,&nbsp;7,&nbsp;0,&nbsp;8,&nbsp;16,&nbsp;18,&nbsp;16,&nbsp;10,&nbsp;22],
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backgroundColor:&nbsp;'#d2ddec',
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hidden:&nbsp;hidden,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;];
            <br />
            <br />
            &nbsp;&nbsp;const&nbsp;options&nbsp;=&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;scales:&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y:&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ticks:&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callback:&nbsp;function&nbsp;(val)&nbsp;{'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;val&nbsp;+&nbsp;'%';
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;{'}'};<br />
            <br />
            &nbsp;&nbsp;return&nbsp;(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Card&nbsp;{'{'}...props{'}'}&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Card.Header&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h4&nbsp;className=&quot;card-header-title&quot;&gt;Conversions&lt;/h4&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span&nbsp;className=&quot;text-muted&nbsp;me-3&quot;&gt;Last&nbsp;year&nbsp;comparision:&lt;/span&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Form.Check&nbsp;type=&quot;switch&quot;&nbsp;id=&quot;cardToggle&quot;&nbsp;onChange=
            {'{'}(e)&nbsp;=&gt;&nbsp;setHidden(e.target.checked&nbsp;?&nbsp;false&nbsp;:&nbsp;true){'}'}&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Card.Header&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Card.Body&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Chart&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Bar&nbsp;data={'{'}
            {'{'}&nbsp;labels:&nbsp;labels,&nbsp;datasets:&nbsp;datasets&nbsp;{'}'}
            {'}'}&nbsp;options={'{'}options{'}'}&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Chart&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Card.Body&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Card&gt;
            <br />
            &nbsp;&nbsp;);
            <br />
            {'}'}
            <br />
          </Highlight>
        </Card.Body>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Below you can find the extended props API for the <code>Chart</code>, <code>ChartLegend</code>, and{' '}
        <code>ChartLegendItem</code> components. Please see the{' '}
        <a href="https://github.com/reactchartjs/react-chartjs-2" target="_blank">
          official plugin documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Chart&nbsp;{'}'}
            &nbsp;from&nbsp;'../components/vendor';
          </Highlight>
        </Card.Body>
      </Card>
      <Table size="sm" responsive>
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>layout</td>
            <td>
              <code>
                <em>undefined</em> | "appended" | "sparkline"
              </code>
            </td>
          </tr>
          <tr>
            <td>size</td>
            <td>
              <code>
                <em>undefined</em> | "sm"
              </code>
            </td>
          </tr>
        </tbody>
      </Table>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}
            &nbsp;ChartLegend&nbsp;
            {'}'}
            &nbsp;from&nbsp;'../components/vendor';
          </Highlight>
        </Card.Body>
      </Card>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;{'{'}&nbsp;Bar, Doughnut, Line&nbsp;{'}'}
            &nbsp;from&nbsp;'react-chartjs-2';
          </Highlight>
        </Card.Body>
      </Card>
    </div>
  );
}
