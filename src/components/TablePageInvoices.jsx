import { FiDownload, FiSearch } from "react-icons/fi"

const invoices = [
    { id: "INV-001", customer: "Acme Corporation", amount: "$12,500.00", date: "01.10.2024", due: "31.10.2024", status: "Paid" },
    { id: "INV-002", customer: "TechStart Inc.", amount: "$8,900.00", date: "10.10.2024", due: "10.11.2024", status: "Pending" },
    { id: "INV-003", customer: "Global Solutions", amount: "$15,300.00", date: "15.09.2024", due: "15.10.2024", status: "Overdue" },
    { id: "INV-004", customer: "Innovate Labs", amount: "$6,700.00", date: "05.10.2024", due: "05.11.2024", status: "Paid" },
    { id: "INV-005", customer: "Digital Ventures", amount: "$11,200.00", date: "12.10.2024", due: "12.11.2024", status: "Pending" },
    { id: "INV-006", customer: "Creative Agency", amount: "$4,500.00", date: "20.09.2024", due: "20.10.2024", status: "Cancelled" },
    { id: "INV-007", customer: "Smart Systems", amount: "$19,800.00", date: "08.10.2024", due: "08.11.2024", status: "Paid" },
    { id: "INV-008", customer: "Future Tech", amount: "$7,600.00", date: "14.10.2024", due: "14.11.2024", status: "Pending" },
]

const statusStyle = {
    Paid: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Overdue: "bg-red-100 text-red-700",
    Cancelled: "bg-gray-100 text-gray-600",
}

export default function InvoiceTable() {
    return (
        <div className="rounded-2xl bg-white shadow-sm border border-border">

            <div className="flex items-center justify-between px-6 py-5">
                <h2 className="text-lg font-semibold text-gray-900">
                    Recent Invoices
                </h2>

                <div className="flex items-center gap-3">
                    <div className="relative">
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            placeholder="Search invoices..."
                            className="pl-9 pr-3 py-2 text-sm border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
                        <FiDownload />
                        Export
                    </button>
                </div>
            </div>

            <table className="w-full border-t border-border text-sm">
                <thead className="text-left text-gray-500">
                    <tr>
                        <th className="px-6 py-3">Invoice ID</th>
                        <th className="px-6 py-3">Customer</th>
                        <th className="px-6 py-3">Amount</th>
                        <th className="px-6 py-3">Date</th>
                        <th className="px-6 py-3">Due Date</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3 text-right">Actions</th>
                    </tr>
                </thead>

                <tbody className="divide-y">
                    {invoices.map(inv => (
                        <tr key={inv.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 font-medium text-gray-900">{inv.id}</td>
                            <td className="px-6 py-4">{inv.customer}</td>
                            <td className="px-6 py-4 font-semibold">{inv.amount}</td>
                            <td className="px-6 py-4">{inv.date}</td>
                            <td className="px-6 py-4">{inv.due}</td>
                            <td className="px-6 py-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle[inv.status]}`}>
                                    {inv.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right text-gray-400 hover:text-gray-700 cursor-pointer">
                                <FiDownload />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
