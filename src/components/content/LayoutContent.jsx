import { Layout } from 'antd';
import { LayoutContentQuantity } from './LayoutContentQuantity';
import { LayoutContentAnalytics } from './analytics/LayoutContentAnalytics';
import { LayoutContentTable } from './table/LayoutContentTable';

const { Content } = Layout;

export const LayoutContent = () => {
    return (
        <>
            <div>
                <Content className='h-screen p-4 bg-white mt-[70px]'>
                    <div>
                        <div>
                            <b className='text-3xl'>Dashboard Overview</b>
                            <p className='text-gray-400'>Welcome back! Here's what's happening with your business today.</p>
                        </div>
                        <div>
                            <LayoutContentQuantity />
                        </div>
                        <div>
                            <LayoutContentAnalytics />
                        </div>
                        <div>
                            <LayoutContentTable />
                        </div>
                    </div>
                </Content>
            </div>
        </>
    )
}