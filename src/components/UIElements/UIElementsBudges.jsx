import { Tag, Flex } from "antd";
import {
    CheckCircleOutlined,
    ClockCircleOutlined,
    CloseCircleOutlined,
    InfoCircleOutlined,
} from "@ant-design/icons";


export const UIElementsBudges = () => {
    return (
        <>
            <div className="space-y-8 bg-white p-6 rounded-xl shadow-sm">

                <h2 className="text-[20px] font-semibold">Badges</h2>

                <div>
                    <h3 className="mb-3 font-medium">Badge Sizes</h3>
                    <Flex gap="small">
                        <Tag className="text-[12px] px-3 py-1">Small</Tag>
                        <Tag className="text-[14px] px-4 py-1.5">Medium</Tag>
                        <Tag className="text-[16px] px-5 py-2">Large</Tag>
                    </Flex>
                </div>

                <div>
                    <h3 className="mb-3 font-medium">Badge Variants</h3>
                    <Flex gap="small" wrap>
                        <Tag color="blue">Primary</Tag>
                        <Tag color="default">Secondary</Tag>
                        <Tag color="success">Success</Tag>
                        <Tag color="warning">Warning</Tag>
                        <Tag color="error">Danger</Tag>
                        <Tag color="processing">Info</Tag>
                    </Flex>
                </div>

                <div>
                    <h3 className="mb-3 font-medium">Badges with Icons</h3>
                    <Flex gap="small" wrap>
                        <Tag icon={<CheckCircleOutlined />} color="success">
                            Completed
                        </Tag>
                        <Tag icon={<ClockCircleOutlined />} color="warning">
                            Pending
                        </Tag>
                        <Tag icon={<CloseCircleOutlined />} color="error">
                            Failed
                        </Tag>
                        <Tag icon={<InfoCircleOutlined />} color="processing">
                            Info
                        </Tag>
                    </Flex>
                </div>

                <div>
                    <h3 className="mb-3 font-medium">Removable Badges</h3>
                    <Flex gap="small" wrap>
                        <Tag closable color="blue">
                            React
                        </Tag>
                        <Tag closable color="green">
                            TypeScript
                        </Tag>
                        <Tag closable color="gold">
                            Tailwind
                        </Tag>
                    </Flex>
                </div>

            </div>
        </>
    )
}