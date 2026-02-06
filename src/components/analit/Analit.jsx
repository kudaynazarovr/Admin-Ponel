import { LayoutContentAnalyticsProfit } from "../content/analytics/LayoutContentAnalyticsProfit"
import { LayoutContentTop } from "../content/LayoutContentTop"
import { AnalitDevise } from "./AnalitDevise"
import { AnalitPerfoming } from "./AnalitPerfoming"
import { AnalitProgress } from "./AnalitProgress"
import { AnalitSources } from "./AnalitSources"
import { AnalitUser } from "./AnalitUser"
import { AnalyticsQuantity } from "./AnalyticsQuantity"

export const Analit = ({ title }) => {
    return (
        <>
            <div className="p-4 bg-white">
                <LayoutContentTop title={"Analytics Dashboard"} text={"Detailed analytics and insights for your business performance."} />
                <AnalyticsQuantity />
                <div className="flex flex-col gap-y-3">
                    <div className="flex gap-x-2.5">
                        <AnalitUser />
                        <LayoutContentAnalyticsProfit />
                    </div>
                    <div className="flex gap-x-2.5">
                        <AnalitSources />
                        <AnalitProgress />
                    </div>
                    <div className="flex gap-x-2.5">
                        <AnalitDevise />
                        <AnalitPerfoming />
                    </div>
                </div>
            </div>
        </>
    )
}