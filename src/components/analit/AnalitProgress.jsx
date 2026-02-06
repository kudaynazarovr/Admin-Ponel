import { Flex, Progress } from 'antd';
import { Card } from 'antd';
const classNames = {
    root: 'demo-progress-root',
    rail: 'demo-progress-rail',
    track: 'demo-progress-track',
};
const stylesFn = info => {
    const percent = info?.props?.percent ?? 0;
    const hue = 200 - (200 * percent) / 100;
    return {
        track: {
            backgroundImage: `
        linear-gradient(
          to right,
          hsla(${hue}, 85%, 65%, 1),
          hsla(${hue + 30}, 90%, 55%, 0.95)
        )`,
            borderRadius: 8,
            transition: 'all 0.3s ease',
        },
        rail: {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            borderRadius: 8,
        },
    };
};

export const AnalitProgress = () => {
    return (
        <>
            <Card title="Conversion Funnel" variant="borderless" className='w-[50%] h-96'>
                <Flex vertical gap="large" className='w-full'>
                    <Progress classNames={classNames} styles={stylesFn} percent={10} />
                    <Progress classNames={classNames} styles={stylesFn} percent={20} />
                    <Progress classNames={classNames} styles={stylesFn} percent={40} />
                    <Progress classNames={classNames} styles={stylesFn} percent={60} />
                    <Progress classNames={classNames} styles={stylesFn} percent={80} />
                    <Progress classNames={classNames} styles={stylesFn} percent={99} />
                </Flex>
            </Card>
        </>
    )
}