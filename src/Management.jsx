import { LayoutContentQuantity } from "./components/content/LayoutContentQuantity"
import { LayoutContentTop } from "./components/content/LayoutContentTop"
import { ManagementTable } from "./components/content/table/ManagementTable"

export const Management = ({ title, text }) => {
    return (
        <>
            <div className="bg-white p-8">
                <LayoutContentTop title={"Management"} text={"Manage your team members and their account permissions"} />
                <LayoutContentQuantity />
                <ManagementTable />
            </div>
        </>
    )
}