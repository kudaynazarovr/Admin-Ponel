const products = [
    { name: "Wireless Headphones", code: "WH-2024-001", category: "Electronics", stock: 45, status: "In Stock" },
    { name: "Smart Watch Pro", code: "SW-2024-002", category: "Electronics", stock: 12, status: "Low Stock" },
    { name: "Laptop Stand", code: "LS-2024-003", category: "Accessories", stock: 0, status: "Out of Stock" },
    { name: "USB-C Hub", code: "UH-2024-004", category: "Accessories", stock: 67, status: "In Stock" },
    { name: "Mechanical Keyboard", code: "MK-2024-005", category: "Electronics", stock: 8, status: "Low Stock" },
    { name: "Gaming Mouse", code: "GM-2024-006", category: "Electronics", stock: 34, status: "In Stock" },
    { name: 'Monitor 27"', code: "MN-2024-007", category: "Electronics", stock: 15, status: "In Stock" },
    { name: "Desk Mat", code: "DM-2024-008", category: "Accessories", stock: 0, status: "Out of Stock" },
]

const statusStyle = {
    "In Stock": "bg-green-100 text-green-700",
    "Low Stock": "bg-yellow-100 text-yellow-700",
    "Out of Stock": "bg-red-100 text-red-700",
}

export default function LeftTable() {
    return (
        <div className="bg-white rounded-2xl border border-border shadow-sm">
            <div className="flex items-center justify-between px-6 py-5">
                <h2 className="text-lg font-semibold">Product Inventory</h2>
                <button className="flex items-center gap-2 border rounded-lg px-3 py-2 text-sm hover:bg-gray-50">
                    Filter
                </button>
            </div>

            <table className="w-full text-sm border-t border-border">
                <thead className="text-left text-gray-500">
                    <tr>
                        <th className="px-6 py-3">Product</th>
                        <th className="px-6 py-3">Stock</th>
                        <th className="px-6 py-3">Status</th>
                    </tr>
                </thead>

                <tbody className="divide-y">
                    {products.map(p => (
                        <tr key={p.code} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                                <div className="font-medium text-gray-900">{p.name}</div>
                                <div className="text-xs text-gray-500">
                                    {p.category} • {p.code}
                                </div>
                            </td>
                            <td className="px-6 py-4">{p.stock}</td>
                            <td className="px-6 py-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle[p.status]}`}>
                                    {p.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}