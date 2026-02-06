import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { Card } from 'antd';

export const AnalitSources = () => {
    const data = [
        {
            name: '18-24',
            uv: 31.47,
            pv: 2400,
            fill: '#8884d8',
        },
        {
            name: '25-29',
            uv: 1,
            pv: 4567,
            fill: '#83a6ed',
        },
        {
            name: '30-34',
            uv: 30,
            pv: 1398,
            fill: '#8dd1e1',
        },
        {
            name: '35-39',
            uv: 8.22,
            pv: 1000,
            fill: '#82ca9d',
        },
        {
            name: '40-49',
            uv: 25,
            pv: 3108,
            fill: '#a4de6c',
        },
        {
            name: '50+',
            uv: 20,
            pv: 5000,
            fill: '#d0ed57',
        },
        {
            name: 'unknown',
            uv: 10,
            pv: 50800,
            fill: '#ffc658',
        },
    ];

    const style = {
        top: '50%',
        right: 10,
        transform: 'translate(0, -50%)',
        lineHeight: '24px',
    };

    return (
        <>
            <Card title="Traffic Source" variant="borderless" className='w-[50%] h-96'>
                <RadialBarChart
                    style={{ width: '100%', height: "300px", aspectRatio: 1.618 }}
                    responsive
                    cx="30%"
                    barSize={15}
                    data={data}
                >
                    <RadialBar label={{ position: 'insideStart', fill: '#fff' }} background dataKey="uv" />
                    <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
                    <Tooltip />
                    <RechartsDevtools />
                </RadialBarChart>
            </Card>
        </>
    )
}