import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { Card } from 'antd';

export const LayoutContentAnalyticsRevenue = () => {
    const data = [
        {
            name: 'Jun',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Feb',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Mar',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Apr',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Jun',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Jyl',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Aug',
            uv: 5000,
            pv: 4500,
            amt: 2100,
        },
        {
            name: 'Sep',
            uv: 6090,
            pv: 200,
            amt: 2100,
        },
        {
            name: 'Oct',
            uv: 2000,
            pv: 1000,
            amt: 2100,
        },
        {
            name: 'Nov',
            uv: 7000,
            pv: 5000,
            amt: 2100,
        },
        {
            name: 'Dec',
            uv: 2090,
            pv: 5000,
            amt: 2100,
        },
    ];

    return (
        <>
            <Card title="Revenue Overview" variant="borderless" className='w-[50%] h-[370px]'>
                <AreaChart
                    className='h-[270px] w-full'
                    responsive
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8883" />
                    <RechartsDevtools />
                </AreaChart>
            </Card>
        </>
    )
}