import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { Card } from "antd";

const data = [
    { name: "Jan", expenses: 1400, profit: 2200 },
    { name: "Feb", expenses: 1500, profit: 1200 },
    { name: "Mar", expenses: 700, profit: 9800 },
    { name: "Apr", expenses: 1100, profit: 3800 },
    { name: "May", expenses: 1300, profit: 4700 },
    { name: "Jun", expenses: 1500, profit: 3600 },
    { name: "Jul", expenses: 1700, profit: 4200 },
    { name: "Aug", expenses: 1900, profit: 5100 },
    { name: "Sep", expenses: 1600, profit: 4000 },
    { name: "Oct", expenses: 2000, profit: 5300 },
    { name: "Nov", expenses: 2200, profit: 6100 },
    { name: "Dec", expenses: 2500, profit: 7000 },
];

export const LayoutContentAnalyticsProfit = () => {
    return (
        <Card
            title="Profit vs Expenses"
            variant="borderless"
            className="w-[50%] h-[380px]"
        >
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="bottom" iconType="square" />

                    <Bar dataKey="expenses" fill="#6b7280" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="profit" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </Card>
    );
};
