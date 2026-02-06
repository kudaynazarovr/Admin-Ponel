import { Badge, Dropdown, List, Avatar } from "antd";
import {
    BellOutlined,
    CheckCircleOutlined,
    MessageOutlined,
    ExclamationCircleOutlined,
} from "@ant-design/icons";

const items = [
    {
        title: "Order completed",
        description: "Your order #1234 has been completed",
        icon: <CheckCircleOutlined style={{ color: "#52c41a" }} />,
    },
    {
        title: "New message",
        description: "You have a new message from John Doe",
        icon: <MessageOutlined style={{ color: "#1677ff" }} />,
    },
    {
        title: "Payment pending",
        description: "Invoice #5678 payment is pending",
        icon: <ExclamationCircleOutlined style={{ color: "#faad14" }} />,
    },
];

const menu = (
    <div
        style={{
            width: 320,
            background: "#fff",
            borderRadius: 8,
            boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
        }}
    >
        <div style={{ padding: "12px 16px", fontWeight: 600 }}>
            Notifications
        </div>

        <List
            itemLayout="horizontal"
            dataSource={items}
            renderItem={(item) => (
                <List.Item style={{ padding: "12px 16px" }}>
                    <List.Item.Meta
                        avatar={
                            <Avatar
                                icon={item.icon}
                                style={{ backgroundColor: "#f5f5f5" }}
                            />
                        }
                        title={item.title}
                        description={item.description}
                    />
                </List.Item>
            )}
        />

        <div
            style={{
                padding: 12,
                textAlign: "center",
                borderTop: "1px solid #f0f0f0",
                color: "#1677ff",
                cursor: "pointer",
            }}
        >
            View all notifications
        </div>
    </div>
);

export const LayoutHeaderNotifications = () => {
    return (
        <Dropdown
            trigger={["click"]}
            placement="bottomRight"
            dropdownRender={() => menu}
        >
            <span style={{ cursor: "pointer" }}>
                <Badge count={2} size="small">
                    <BellOutlined style={{ fontSize: 22 }} />
                </Badge>
            </span>
        </Dropdown>
    );
};
