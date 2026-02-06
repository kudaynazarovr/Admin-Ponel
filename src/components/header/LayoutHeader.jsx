import { Layout } from 'antd'
import { MdMenu } from "react-icons/md";
import { Input, Space } from 'antd';
import { LayoutHeaderTheme } from './LayaoutHeaderTheme';
import { LayoutHeaderNotifications } from './LayoutHeaderNotifications';
import { LayoutHeaderProfile } from './LayoutHeaderProfile';

const { Header } = Layout;

export const LayoutHeader = () => {
    const { Search } = Input;
    const onSearch = (value, _e, info) => console.log(info?.source, value);
    return (
        <>
            <div className='fixed z-50 w-[90%] bg-white pl-[70px] pr-[70px] pt-[10px] pb-[10px] shadow-[4px_4px_14px_0px_rgba(34,60,80,0.2)] border-l border-gray-300 border-b border-gray-300'>
                <Header style={{ margin: 0, padding: 0, backgroundColor: "white" }}>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-x-3'>
                            <b className='text-[25px]'><MdMenu /></b>
                            <Space vertical>
                                <Search placeholder="input search text" onSearch={onSearch} enterButton />
                            </Space>
                        </div>
                        <div className='flex items-center gap-x-3'>
                            <LayoutHeaderTheme />
                            <LayoutHeaderNotifications />
                            <button className='bg-blue-800 cursor-pointer w-[80px] h-[40px] text-white rounded-2xl flex justify-center items-center'>
                                <LayoutHeaderProfile />
                            </button>
                        </div>
                    </div>
                </Header>
            </div>
        </>
    )
}