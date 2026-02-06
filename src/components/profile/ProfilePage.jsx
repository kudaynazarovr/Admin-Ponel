import { LayoutContentTop } from "../content/LayoutContentTop"
import { ProfilePageCard } from "./ProifilePageCard"
import { ProfilePageAvatar } from "./ProfilePageAvatar"
import { ProfilePageCard2 } from "./ProfilePageCard2"

export const ProfilePage = ({ title, text }) => {
    return (
        <>
            <div className="p-8">
                <LayoutContentTop title={"Profile"} text={"Mange your profile information and settings"} />
                <div className="w-full">
                    <ProfilePageAvatar />
                </div>
                <div>
                    <ProfilePageCard />
                    <ProfilePageCard2 />
                </div>
            </div>
        </>
    )
}