import { LayoutContentTableProduct } from "./LayoutContentTableProduct"
import { LayoutContentTableRecent } from "./LayoutContentTableRacent"

export const LayoutContentTable = () => {
    return (
        <>
            <div className="flex gap-x-2.5">
                <LayoutContentTableRecent />
                <LayoutContentTableProduct />
            </div>
        </>
    )
}