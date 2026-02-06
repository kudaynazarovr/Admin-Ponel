import { Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

export const LayoutSider = () => {
    return (
        <>
            <div className='h-screen w-[10%]'>
                <div className='h-full fixed'>
                    <Sider style={{ width: "15%", backgroundColor: "white", }}>
                        <div className='flex gap-x-2.5 items-center border-b border-gray-300 w-full p-[20px]'>
                            <b className='pl-3 pr-3 pt-2 pb-2 bg-blue-600 text-[18px] text-white rounded-[10px]'>T</b>
                            <h1 className='text-xl font-bold'>TailPanel</h1>
                        </div>
                        <div className='flex flex-col justify-center gap-y-3 pl-[30px] pt-[20px] pb-[20px]'>
                            <Link to={"/"} className='text-2xl font-bold'>Dashboard</Link>
                            <Link to={"/analytics"} className='text-2xl font-bold'>Analytics</Link>
                            <Link to={"/management"} className='text-2xl font-bold'>Management</Link>
                            <Link to={"/tables"} className='text-2xl font-bold' >Tables</Link>
                            <Link to={"/form"} className='text-2xl font-bold'>Form</Link>
                            <Link to={"/uielements"} className='text-2xl font-bold' >Ui Elements</Link>
                            <Link to={'/calendarpage'} className='text-2xl font-bold'>Calendar</Link>
                            <Link to={'/product'} className='text-2xl font-bold'>Product</Link>
                            <Link to={'/transactions'} className='text-2xl font-bold'>Transactions</Link>
                            <Link to={"/signup"} className='text-2xl font-bold' >SignUp</Link>
                            <Link to={"/login"} className='text-2xl font-bold'>Login</Link>
                            <Link to={'/settingspage'} className='text-2xl font-bold'>Settings</Link>
                            <Link to={"/profile"} className='text-2xl font-bold'>Profile</Link>
                        </div>
                    </Sider>
                </div>
            </div>
        </>
    )
}