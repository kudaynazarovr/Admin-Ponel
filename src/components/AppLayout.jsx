import { Layout } from 'antd';
import { LayoutHeader } from '../components/header/LayoutHeader';
import { LayoutSider } from './sider/LayoutSider';
import { Outlet } from 'react-router-dom';


export const AppLayout = () => {
    return (
        <>
            <div>
                <Layout style={{ margin: 0, padding: 0 }} className='h-screen flex flex-col w-[100%]'>
                    <LayoutSider />
                    <Layout>
                        <LayoutHeader />
                        <Outlet />
                    </Layout>
                </Layout>
            </div >
        </>
    )
}