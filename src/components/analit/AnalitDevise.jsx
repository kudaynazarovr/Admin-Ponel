import { Card, List, Avatar } from "antd";
import {
    DesktopOutlined,
    MobileOutlined,
    TabletOutlined,
} from "@ant-design/icons";

const data = [
    {
        title: "Desktop",
        users: "5 400 users",
        sessions: "12 300",
        icon: <DesktopOutlined />,
    },
    {
        title: "Mobile",
        users: "8 200 users",
        sessions: "15 800",
        icon: <MobileOutlined />,
    },
    {
        title: "Tablet",
        users: "1 800 users",
        sessions: "3 200",
        icon: <TabletOutlined />,
    },
];

export const AnalitDevise = () => {
    return (
        <>
            <Card title="Device Analytics" className="w-[50%] h-96">
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    className="h-full"
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={
                                    <Avatar
                                        icon={item.icon}
                                        style={{ backgroundColor: "#e6f4ff", color: "#1677ff" }}
                                    />
                                }
                                title={item.title}
                                description={item.users}
                            />
                            <div className="text-right">
                                <b>{item.sessions}</b>
                                <div className="text-gray-400">sessions</div>
                            </div>
                        </List.Item>
                    )}
                />
            </Card>
        </>
    )
}