import { Card } from 'antd';

export const AnalitPerfoming = () => {
    return (
        <>
            <Card title="Top Performing Pages" variant="borderless" className='w-[50%] h-96 flex flex-col'>
                <p className='w-[50%] font-bold text-[15px] mb-2'>#1
                    /products/wireless-headphones

                    8 934 views
                    •
                    3:24 avg
                    •
                    34% bounce</p>
                <p className='w-[50%] font-bold text-[15px] mb-2'>#2
                    /products/smart-watch

                    7 821 views
                    •
                    4:12 avg
                    •
                    28% bounce</p>
                <p className='w-[50%] font-bold text-[15px] mb-2'>#3
                    /products/laptop-stand

                    6 543 views
                    •
                    2:56 avg
                    •
                    42% bounce</p>
                <p className='w-[50%] font-bold text-[15px] mb-2'>#4
                    /blog/tech-trends-2024

                    5 234 views
                    •
                    5:45 avg
                    •
                    22% bounce</p>
                <p className='w-[50%] font-bold text-[15px] mb-2'>#5
                    /products/usb-c-hub

                    4 567 views
                    •
                    3:08 avg
                    •
                    38% bounce</p>
            </Card>
        </>
    )
}