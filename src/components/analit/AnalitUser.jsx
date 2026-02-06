import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { Card } from 'antd';

export const AnalitUser = () => {
    const data = [
        {
            name: 'May',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Jun',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Jul',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Aug',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Sep',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Oct',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
    ];
    return (
        <>
            <Card title="User Growth" variant="borderless" className='w-[50%] h-96'>
                <LineChart
                    style={{ width: '100%', height: "300px", aspectRatio: 1.618 }}
                    responsive
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis width="auto" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    <RechartsDevtools />
                </LineChart>
            </Card>
        </>
    )
}