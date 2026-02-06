import { Card } from 'antd';
import { Flex, Input } from 'antd';
import { Button } from 'antd';

export const ProfilePageCard = () => {
    return (
        <>
            <div className='bg-white mt-3 flex items-center justify-center mb-3'>
                <Card title="Personal Information" variant="borderless" className='w-[90%] shadow-[0px_0px_33px_0px_rgba(34,60,80,0.2)]'>
                    <Flex vertical gap="middle">
                        <div className='flex gap-x-4 items-center'>
                            <div className='w-[50%] flex flex-col gap-y-2.5'>
                                <b>Full Name</b>
                                <Input size="large" placeholder="Full name" />
                            </div>
                            <div className='w-[50%] flex flex-col gap-y-2.5'>
                                <b>Email Address</b>
                                <Input size="large" placeholder="Email" />
                            </div>
                        </div>

                        <div className='flex gap-x-4 items-center'>
                            <div className='w-[50%] flex flex-col gap-y-2.5'>
                                <b>Phone Number</b>
                                <Input size="large" placeholder="number" />
                            </div>
                            <div className='w-[50%] flex flex-col gap-y-2.5'>
                                <b>Location</b>
                                <Input size="large" placeholder="San Francisco, CA" />
                            </div>
                        </div>

                        <div className='flex gap-x-4 items-center'>
                            <div className='w-full flex flex-col gap-y-2.5'>
                                <b>Bio</b>
                                <Input size="large" className='h-[100px]' placeholder="Senior Product Designer with 8+ years of experience in creating user-centered designs for web and mobile applications. Passionate about building intuitive and accessible interfaces." />
                            </div>
                        </div>

                        <div className='flex gap-x-4 items-center'>
                            <div className='w-[50%] flex flex-col gap-y-2.5'>
                                <b>Company</b>
                                <Input size="large" placeholder="TechCorp Inc." />
                            </div>
                            <div className='w-[50%] flex flex-col gap-y-2.5'>
                                <b>Position</b>
                                <Input size="large" placeholder="Senior Product Designer" />
                            </div>
                        </div>

                        <div className='flex gap-x-4 items-center justify-end'>
                            <Button type="primary">Primary Button</Button>
                        </div>
                    </Flex>
                </Card>
            </div>
        </>
    )
}