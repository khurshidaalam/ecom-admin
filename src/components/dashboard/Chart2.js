import React, { PureComponent } from 'react';
import { AreaChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 3000,
    pv: 1200,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 2000,
    pv: 1598,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 3090,
    pv: 1500,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2580,
    pv: 3508,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 2890,
    pv: 2500,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 1390,
    pv: 1800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3090,
    pv: 4500,
    amt: 2100,
  },
];

export default class Chart2 extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%" className="bg-white">
        <AreaChart
          className=""
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          
          
          <Tooltip />
          
          <Area type="monotone" dataKey="pv" stroke="#2d3436" fill="#636e72" activeDot={{ r: 8 }} />
          
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
