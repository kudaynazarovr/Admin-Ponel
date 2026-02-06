import { CalendarPageCalendar } from "./components/CalendarPage/CalendarPageCalendar"
import { LayoutContentTop } from "./components/content/LayoutContentTop"

export const CalendarPage = ({ title, text }) => {
    return (
        <>
            <div className="p-8">
                <LayoutContentTop title={"Calendar"} text={"Schedule and manage your events and meetings."} />
                <div className="mt-3">
                    <CalendarPageCalendar />
                </div>
            </div>
        </>
    )
}