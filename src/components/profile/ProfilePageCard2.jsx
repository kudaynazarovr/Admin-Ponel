import { Card } from "antd"
import { Input } from 'antd';

export const ProfilePageCard2 = () => {
    return (
        <>
            <div className="bg-white mt-3 flex items-center justify-center mb-3">
                <Card title="Social Links" variant="borderless" className='w-[70%] flex flex-col gap-y-3 shadow-[0px_0px_33px_0px_rgba(34,60,80,0.2)]' >
                    <div className="w-full flex flex-col gap-x-3">
                        <b>Twitter</b>
                        <Input size="large" placeholder="sarahjohnson" />
                    </div>
                    <div className="w-full flex flex-col gap-x-3">
                        <b>GitHub</b>
                        <Input size="large" placeholder="sarahjohnson" />
                    </div>
                    <div className="w-full flex flex-col gap-x-3">
                        <b>Linkedln</b>
                        <Input size="large" placeholder="sarah-johnson" />
                    </div>
                </Card>
            </div>
        </>
    )
}