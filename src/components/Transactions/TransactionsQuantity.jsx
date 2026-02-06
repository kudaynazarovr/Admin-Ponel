import { Col, Statistic } from 'antd';
import CountUp from 'react-countup';

export const TransactionsQuantity = () => {
    const formatter = value => <CountUp end={value} separator="." />;
    return (
        <>
            <div className='w-full flex gap-x-3 mt-3 mb-3'>
                <b className='w-[25%] pt-[20px] pb-[20px] bg-white flex items-center justify-center text-center rounded-2xl shadow-[0px_0px_52px_0px_rgba(34,60,80,0.2)]'>
                    <Col span={12}>
                        <Statistic title="Total Income" value={1312893} formatter={formatter} />
                    </Col>
                </b>
                <b className='w-[25%] pt-[20px] pb-[20px] bg-white flex items-center justify-center text-center rounded-2xl shadow-[0px_0px_52px_0px_rgba(34,60,80,0.2)]'>
                    <Col span={12}>
                        <Statistic title="Total Expense" value={1112893} precision={2} formatter={formatter} />
                    </Col>
                </b>
                <b className='w-[25%] pt-[20px] pb-[20px] bg-white flex items-center justify-center text-center rounded-2xl shadow-[0px_0px_52px_0px_rgba(34,60,80,0.2)]'>
                    <Col span={12}>
                        <Statistic title="Net Balance" value={1223456} precision={2} formatter={formatter} />
                    </Col>
                </b>
                <b className='w-[25%] pt-[20px] pb-[20px] bg-white flex items-center justify-center text-center rounded-2xl shadow-[0px_0px_52px_0px_rgba(34,60,80,0.2)]'>
                    <Col span={12}>
                        <Statistic title="Total Transactions" value={1231231} precision={2} formatter={formatter} />
                    </Col>
                </b>
            </div>
        </>
    )
}