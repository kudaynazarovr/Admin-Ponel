import { Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';
const formatter = value => <CountUp end={value} separator="." />;

export const LayoutContentQuantity = () => {
    return (
        <>
            <div>
                <Row gutter={16} className='flex items-center justify-between mt-2.5 mb-2.5'>
                    <b className='bg-white w-[24%] shadow-[0px_0px_20px_0px_rgba(34,60,80,0.2)] rounded-xl flex items-center justify-center text-center pb-[10px] pt-[10px]'> <Col span={12}>
                        <Statistic title="Total Revenue" value={4223189} formatter={formatter} />
                    </Col>
                    </b>
                    <b className='bg-white w-[24%] shadow-[0px_0px_20px_0px_rgba(34,60,80,0.2)] rounded-xl flex items-center justify-center text-center pb-[10px] pt-[10px]' > <Col span={12}>
                        <Statistic title="Active Users" value={2350} precision={2} formatter={formatter} />
                    </Col>
                    </b>
                    <b className='bg-white w-[24%] shadow-[0px_0px_20px_0px_rgba(34,60,80,0.2)] rounded-xl flex items-center justify-center text-center pb-[10px] pt-[10px]'> <Col span={12}>
                        <Statistic title="Total Orders" value={1234} precision={2} formatter={formatter} />
                    </Col>
                    </b>
                    <b className='bg-white w-[24%] shadow-[0px_0px_20px_0px_rgba(34,60,80,0.2)] rounded-xl flex items-center justify-center text-center pb-[10px] pt-[10px]'> <Col span={12}>
                        <Statistic title="Conversion Rate" value={3.42} precision={2} formatter={formatter} />
                    </Col>
                    </b>
                </Row>
            </div>
        </>
    )
}