import { Card } from 'antd';

export const LayoutContentTableProduct = () => {
    return (
        <>
            <Card title="Top Products" variant="borderless" style={{ width: "50%", height: "370px" }}>
                <div className='flex flex-col gap-y-2.5'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <b>Wireless Headphones</b>
                            <p>1234 sales</p>
                        </div>
                        <b className='text-xl'>$160.410.00</b>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <b>Smart Watch</b>
                            <p>987 sales</p>
                        </div>
                        <b className='text-xl'>$296,003.00</b>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <b>Laptop Stand</b>
                            <p>856 sales</p>
                        </div>
                        <b className='text-xl'>$42,784.00</b>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <b>Alice Williams</b>
                            <p>USB-C Cable</p>
                        </div>
                        <b className='text-xl'>$19.99</b>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <b>USB-C Hub</b>
                            <p>743 sales</p>
                        </div>
                        <b className='text-xl'>$51,901.00</b>
                    </div>
                </div>
            </Card>
        </>
    )
}