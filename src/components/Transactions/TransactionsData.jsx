export const TransactionData = () => {
    const transactions = [
        {
            id: 1,
            title: "Payment from Acme Corporation",
            code: "TXN-001 • INV-001",
            type: "income", // income | expense
            amount: 2499.99,
            method: "Bank Transfer",
            date: "Feb 5, 2026",
            status: "completed", // completed | pending | failed
        },
        {
            id: 2,
            title: "Office Supplies Purchase",
            code: "TXN-002 • PO-123",
            type: "expense",
            amount: -349.5,
            method: "Credit Card",
            date: "Feb 4, 2026",
            status: "completed",
        },
        {
            id: 3,
            title: "Payment from TechStart Inc",
            code: "TXN-003 • INV-002",
            type: "income",
            amount: 1299.5,
            method: "PayPal",
            date: "Feb 3, 2026",
            status: "pending",
        },
        {
            id: 4,
            title: "Payment from Global Dynamics",
            code: "TXN-004 • INV-003",
            type: "income",
            amount: 5499.0,
            method: "Bank Transfer",
            date: "Feb 1, 2026",
            status: "completed",
        },
        {
            id: 5,
            title: "Software License Renewal",
            code: "TXN-005 • SUB-456",
            type: "expense",
            amount: -899.0,
            method: "Credit Card",
            date: "Jan 30, 2026",
            status: "completed",
        },
        {
            id: 6,
            title: "Payment from Innovation Labs",
            code: "TXN-006 • INV-005",
            type: "income",
            amount: 3299.0,
            method: "Stripe",
            date: "Jan 29, 2026",
            status: "pending",
        },
        {
            id: 7,
            title: "Marketing Campaign",
            code: "TXN-007 • MKT-789",
            type: "expense",
            amount: -1500.0,
            method: "Credit Card",
            date: "Jan 27, 2026",
            status: "completed",
        },
        {
            id: 8,
            title: "Payment from Digital Ventures",
            code: "TXN-008 • INV-006",
            type: "income",
            amount: 1899.5,
            method: "Bank Transfer",
            date: "Jan 25, 2026",
            status: "completed",
        },
        {
            id: 9,
            title: "Cloud Hosting Services",
            code: "TXN-009 • SRV-321",
            type: "expense",
            amount: -450.0,
            method: "Credit Card",
            date: "Jan 23, 2026",
            status: "completed",
        },
        {
            id: 10,
            title: "Refund Processing",
            code: "TXN-010 • REF-147",
            type: "income",
            amount: 299.99,
            method: "PayPal",
            date: "Jan 22, 2026",
            status: "failed",
        },
    ]
    return (
        <>
            <div className="bg-white">
                {transactions.map((item) => (
                    <div key={item.id}>
                        <div className="flex justify-between items-center p-4 border-b border-gray-500">
                            <div className="w-[16%] flex flex-col gap-y-2.5">
                                <p className="font-bold">{item.title}</p>
                                <p>{item.code}</p>
                            </div>
                            <p className="w-[16%] text-center">{item.type}</p>
                            <p className="w-[16%] text-center">{item.amount}</p>
                            <p className="w-[16%] text-center">{item.method}</p>
                            <p className="w-[16$] text-center">{item.date}</p>
                            <p className="w-[16%] text-center">{item.status}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}