import { LayoutContentAnalyticsProfit } from "./LayoutContentAnalyticsProfit"
import { LayoutContentAnalyticsRevenue } from "./LayoutContentAnalyticsRevenue"

export const LayoutContentAnalytics = () => {
    return (
        <>
            <div>
                <div className="flex gap-x-2.5 mb-2.5">
                    <LayoutContentAnalyticsRevenue />
                    <LayoutContentAnalyticsProfit />
                </div>
            </div>
        </>
    )
}