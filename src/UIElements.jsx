import { LayoutContentTop } from "./components/content/LayoutContentTop"
import { UiElementsButtons } from "./components/UIElements/UIElementgsButtons"
import { UIElementsAlerts } from "./components/UIElements/UIElementsAlerts"
import { UIElementsBudges } from "./components/UIElements/UIElementsBudges"

export const UIElements = ({ text, title }) => {
    return (
        <>
            <div className="p-8 bg-white">
                <LayoutContentTop title={"Ui ELements"} text={"Comprehensive collection of reusable UI components."} />
                <div className="bg-white shadow-[0px_0px_39px_0px_rgba(34,60,80,0.2)] h-[300px]  rounded-2xl flex p-4">
                    <UiElementsButtons />
                </div>
                <div className="mt-3">
                    <UIElementsBudges />
                </div>
                <div className="bg-white shadow-[0px_0px_39px_0px_rgba(34,60,80,0.2)] rounded-2xl mt-4 p-4">
                    <b className="text-2xl">Alerts</b>
                    <UIElementsAlerts />
                </div>
            </div>
        </>
    )
}