import { LayoutContentTop } from "./components/content/LayoutContentTop"
import { SettingsPageProfile } from "./components/Settings/SettingsPage"

export const SettingsPage = ({ title, text }) => {
    return (
        <>
            <div className="p-8 bg-white">
                <LayoutContentTop title={"Settings"} text={"Manage your account settings and preferences."} />
                <div className="mt-4">
                    <SettingsPageProfile />
                </div>
            </div>
        </>
    )
}