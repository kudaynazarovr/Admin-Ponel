import { LayoutContentTop } from "./components/content/LayoutContentTop"
import { ManagementTable } from "./components/content/table/ManagementTable"
import InvoiceTable from "./components/TablePageInvoices"
import LeftTable from './components/content/table/LeftTable'
import RightTable from "./components/content/table/RightTable"

export const Tables = ({ title, text }) => {
    return (
        <>
            <div className="p-8 bg-white flex flex-col gap-y-5">
                <LayoutContentTop title={"Data Tables"} text={"Advanced table components with sorting, filtering, and search functionality."} />
                <ManagementTable />
                <InvoiceTable />
                <LeftTable />
                <RightTable />
            </div>
        </>
    )
}