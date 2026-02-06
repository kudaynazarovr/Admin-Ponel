const transactions = [
    { title: "Software License Renewal", type: "Subscriptions", date: "21.10.2024", amount: "-$299.99", status: "Completed" },
    { title: "Client Payment - Project Alpha", type: "Services", date: "21.10.2024", amount: "+$5,000.00", status: "Completed" },
    { title: "Office Supplies", type: "Operations", date: "20.10.2024", amount: "-$156.78", status: "Completed" },
    { title: "Consulting Fee", type: "Services", date: "20.10.2024", amount: "+$1,500.00", status: "Pending" },
    { title: "Cloud Hosting", type: "Infrastructure", date: "19.10.2024", amount: "-$450.00", status: "Completed" },
    { title: "Product Sale", type: "Sales", date: "19.10.2024", amount: "+$899.99", status: "Failed" },
    { title: "Marketing Campaign", type: "Marketing", date: "18.10.2024", amount: "-$1,200.00", status: "Completed" },
    { title: "Client Payment - Project Beta", type: "Services", date: "18.10.2024", amount: "+$3,500.00", status: "Completed" },
]

const statusStyle = {
    Completed: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Failed: "bg-red-100 text-red-700",
}

export default function RightTable() {
    return (
        <div className="bg-white rounded-2xl border border-border shadow-sm">
            <div className="px-6 py-5">
                <h2 className="text-lg font-semibold">Recent Transactions</h2>
            </div>

            <table className="w-full text-sm border-t border-border">
                <thead className="text-left text-gray-500">
                    <tr>
                        <th className="px-6 py-3">Description</th>
                        <th className="px-6 py-3">Amount</th>
                        <th className="px-6 py-3">Status</th>
                    </tr>
                </thead>

                <tbody className="divide-y">
                    {transactions.map((t, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                                <div className="font-medium text-gray-900">{t.title}</div>
                                <div className="text-xs text-gray-500">
                                    {t.type} • {t.date}
                                </div>
                            </td>
                            <td className={`px-6 py-4 font-medium ${t.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                                {t.amount}
                            </td>
                            <td className="px-6 py-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle[t.status]}`}>
                                    {t.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
