import { Button } from 'antd';

export const SettingsPageProfile = () => {
    return (
        <>
            <div className='w-[70%]'>
                <p className='box-shadow: 0px 0px 32px 0px rgba(34, 60, 80, 0.2) text-2xl font-bold mb-3'>Profile Information</p>
                <div className='box-shadow: 0px 0px 32px 0px rgba(34, 60, 80, 0.2) bg-white rounded-2xl p-4'>
                    <p className='mb-1 text-xl font-bold'>Profile Photo</p>
                    <div className='flex items-center gap-x-5'>
                        <p className='p-8 bg-blue-800 text-3xl text-white rounded-[50%]'>JD</p>
                        <Button type="primary">Change Photo</Button>
                        <Button danger>Remove</Button>
                    </div>
                    <div className='flex gap-x-5'>
                        <form className='w-[50%] flex flex-col gap-y-5'>
                            <div className='flex flex-col gap-y-3'>
                                <p className='font-bold text-xl text-gray-500'>First Name</p>
                                <input className='p-2 outline-0 border border-gray-500 rounded-2xl' type="text" placeholder='John' />
                            </div>
                            <div className='flex flex-col gap-y-3'>
                                <p className='font-bold text-xl text-gray-500'>Email Address</p>
                                <input className='p-2 outline-0 border border-gray-500 rounded-2xl' type="text" placeholder='john.doe@example.com' />
                            </div>
                        </form>
                        <form className='w-[50%] flex flex-col gap-y-5'>
                            <div className='flex flex-col gap-y-3'>
                                <p className='font-bold text-xl text-gray-500'>Last Name</p>
                                <input className='p-2 outline-0 border border-gray-500 rounded-2xl' type="text" placeholder='Doe' />
                            </div>
                            <div className='flex flex-col gap-y-3'>
                                <p className='font-bold text-xl text-gray-500'>Username</p>
                                <input className='p-2 outline-0 border border-gray-500 rounded-2xl' type="text" placeholder='johndoe' />
                            </div>
                        </form>
                    </div>
                    <div className='flex flex-col gap-y-3 mt-3'>
                        <p>Bio</p>
                        <textarea className='h-[150px] outline-0 border border-gray-500 text-gray-500 rounded-2xl p-4 w-full'>Product designer and developer</textarea>
                    </div>
                    <div className='flex gap-x-3 mt-3'>
                        <div className='w-[50%] flex flex-col gap-y-3'>
                            <b>Website</b>
                            <input className='p-2 border border-gray-500 rounded-2xl' type="text" placeholder='https://johndoe.com' />
                        </div>
                        <div className='w-[50%] flex flex-col gap-y-3 '>
                            <b>Location</b>
                            <input className='p-2 border border-gray-500 outline-0 rounded-2xl' type="text" placeholder='San Francisco, CA' />
                        </div>
                    </div>
                    <div className='flex gap-x-3 justify-end mt-3'>
                        <Button>Cancel</Button>
                        <Button type="primary">Save Changes</Button>
                    </div>
                </div>
            </div>
        </>
    )
}