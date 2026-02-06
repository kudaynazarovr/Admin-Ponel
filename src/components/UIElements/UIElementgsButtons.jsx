import { Button, Flex } from "antd";
import {
    DownloadOutlined,
    UploadOutlined,
    MailOutlined,
    ShareAltOutlined,
} from "@ant-design/icons";

export const UiElementsButtons = () => {
    return (
        <div className="space-y-8">

            <div>
                <h3 className="mb-3 font-semibold text-[18px]">Primary Buttons</h3>
                <Flex gap="middle" wrap>
                    <Button type="primary" className="text-[14px] px-6 py-4">Small</Button>
                    <Button type="primary" className="text-[16px] px-8 py-5">Medium</Button>
                    <Button type="primary" className="text-[18px] px-10 py-6">Large</Button>
                    <Button type="primary" disabled className="text-[16px] px-8 py-5">
                        Disabled
                    </Button>
                </Flex>
            </div>

            <div>
                <h3 className="mb-3 font-semibold text-[18px]">Button Variants</h3>
                <Flex gap="middle" wrap>
                    <Button type="primary" className="text-[16px] px-8 py-5">Primary</Button>
                    <Button className="text-[16px] px-8 py-5 bg-gray-200">Secondary</Button>
                    <Button className="text-[16px] px-8 py-5 bg-green-500 text-white">Success</Button>
                    <Button className="text-[16px] px-8 py-5 bg-orange-500 text-white">Warning</Button>
                    <Button danger className="text-[16px] px-8 py-5">Danger</Button>
                    <Button ghost className="text-[16px] px-8 py-5">Outline</Button>
                </Flex>
            </div>

            <div>
                <h3 className="mb-3 font-semibold text-[18px]">Buttons with Icons</h3>
                <Flex gap="middle" wrap>
                    <Button
                        type="primary"
                        icon={<DownloadOutlined />}
                        className="text-[16px] px-8 py-5"
                    >
                        Download
                    </Button>
                    <Button
                        icon={<UploadOutlined />}
                        className="text-[16px] px-8 py-5 bg-green-500 text-white"
                    >
                        Upload
                    </Button>
                    <Button
                        icon={<MailOutlined />}
                        className="text-[16px] px-8 py-5 bg-gray-600 text-white"
                    >
                        Email
                    </Button>
                    <Button
                        icon={<ShareAltOutlined />}
                        className="text-[16px] px-8 py-5"
                    >
                        Share
                    </Button>
                </Flex>
            </div>

        </div>
    );
};
