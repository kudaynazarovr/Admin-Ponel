import { Card } from 'antd';

export const LayoutContentTableRecent = () => {
    return (
        <>
            <Card title="Recent Orders" variant="borderless" style={{ width: "50%", height: "370px" }}>
                <div className='flex flex-col gap-y-2.5'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <b>John Doe</b>
                            <p>Wireless Headphones</p>
                        </div>
                        <b className='text-xl'>$129.99</b>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <b>Jane Smith</b>
                            <p>Smart Watch</p>
                        </div>
                        <b className='text-xl'>$299.99</b>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <b>Bob Johnson</b>
                            <p>Laptop Stand</p>
                        </div>
                        <b className='text-xl'>$49.99</b>
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
                            <b>Charlie Brown</b>
                            <p>Keyboard</p>
                        </div>
                        <b className='text-xl'>$89.99</b>
                    </div>
                </div>
            </Card>
        </>
    )
}