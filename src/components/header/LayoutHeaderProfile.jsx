import { LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import { Dropdown, } from 'antd';
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export const LayoutHeaderProfile = () => {
    const navigator = useNavigate()
    const items = [
        {
            key: '1',
            label: 'Profile',
            icon: <FaUserCircle />,
            onClick: () => navigator('/profile')
        },
        {
            key: '2',
            label: 'Settings',
            icon: <SettingOutlined />,
            onClick: () => navigator('/settingspage')
        },
        {
            type: 'divider',
        },
        {
            key: '3',
            label: 'Logout',
            icon: <LogoutOutlined />,
            danger: true,
            onClick: () => navigator('login')
        },
    ];
    return (
        <Dropdown trigger={['click']} menu={{ items }}>
            Profile
        </Dropdown>
    );
};
