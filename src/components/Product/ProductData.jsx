import { useState } from "react"

export const ProductData = () => {
    const [search, setSearch] = useState("")
    const product = [
        {
            id: 1,
            title: "Wireless Headphones",
            category: "Electronics",
            code: "WH-001",
            price: 79.99,
            status: "in_stock",
            stock: 45,
            sales: 125,
            image: "https://picsum.photos/seed/headphones/800/600",
        },
        {
            id: 2,
            title: "Smart Watch",
            category: "Electronics",
            code: "SW-002",
            price: 199.99,
            status: "low_stock",
            stock: 12,
            sales: 89,
            image: "https://picsum.photos/seed/smartwatch/800/600",
        },
        {
            id: 3,
            title: "Leather Backpack",
            category: "Accessories",
            code: "LB-003",
            price: 89.99,
            status: "out_of_stock",
            stock: 0,
            sales: 56,
            image: "https://picsum.photos/seed/backpack/800/600",
        },
        {
            id: 4,
            title: "Running Shoes",
            category: "Footwear",
            code: "RS-004",
            price: 129.99,
            status: "in_stock",
            stock: 28,
            sales: 142,
            image: "https://picsum.photos/seed/shoes/800/600",
        },
        {
            id: 5,
            title: "Coffee Maker",
            category: "Appliances",
            code: "CM-005",
            price: 149.99,
            status: "low_stock",
            stock: 8,
            sales: 73,
            image: "https://picsum.photos/seed/coffee/800/600",
        },
        {
            id: 6,
            title: "Desk Lamp",
            category: "Furniture",
            code: "DL-006",
            price: 49.99,
            status: "in_stock",
            stock: 67,
            sales: 201,
            image: "https://picsum.photos/seed/lamp/800/600",
        },
        {
            id: 7,
            title: "Bluetooth Speaker",
            category: "Electronics",
            code: "BS-007",
            price: 59.99,
            status: "in_stock",
            stock: 52,
            sales: 164,
            image: "https://picsum.photos/seed/speaker/800/600",
        },
        {
            id: 8,
            title: "Gaming Mouse",
            category: "Electronics",
            code: "GM-008",
            price: 39.99,
            status: "low_stock",
            stock: 9,
            sales: 98,
            image: "https://picsum.photos/seed/mouse/800/600",
        },
        {
            id: 9,
            title: "Mechanical Keyboard",
            category: "Electronics",
            code: "MK-009",
            price: 109.99,
            status: "in_stock",
            stock: 31,
            sales: 187,
            image: "https://picsum.photos/seed/keyboard/800/600",
        },
        {
            id: 10,
            title: "Office Chair",
            category: "Furniture",
            code: "OC-010",
            price: 249.99,
            status: "in_stock",
            stock: 22,
            sales: 64,
            image: "https://picsum.photos/seed/chair/800/600",
        },
        {
            id: 11,
            title: "Table Clock",
            category: "Decor",
            code: "TC-011",
            price: 29.99,
            status: "in_stock",
            stock: 84,
            sales: 311,
            image: "https://picsum.photos/seed/clock/800/600",
        },
        {
            id: 12,
            title: "Sunglasses",
            category: "Accessories",
            code: "SG-012",
            price: 69.99,
            status: "low_stock",
            stock: 6,
            sales: 97,
            image: "https://picsum.photos/seed/sunglasses/800/600",
        },
        {
            id: 13,
            title: "Fitness Tracker",
            category: "Electronics",
            code: "FT-013",
            price: 89.99,
            status: "in_stock",
            stock: 40,
            sales: 158,
            image: "https://picsum.photos/seed/fitness/800/600",
        },
        {
            id: 14,
            title: "Water Bottle",
            category: "Lifestyle",
            code: "WB-014",
            price: 19.99,
            status: "in_stock",
            stock: 120,
            sales: 402,
            image: "https://picsum.photos/seed/bottle/800/600",
        },
        {
            id: 15,
            title: "Notebook",
            category: "Stationery",
            code: "NB-015",
            price: 14.99,
            status: "in_stock",
            stock: 200,
            sales: 530,
            image: "https://picsum.photos/seed/notebook/800/600",
        },
        {
            id: 16,
            title: "Backpack Travel",
            category: "Accessories",
            code: "BT-016",
            price: 99.99,
            status: "low_stock",
            stock: 11,
            sales: 74,
            image: "https://picsum.photos/seed/travelbag/800/600",
        },
        {
            id: 17,
            title: "Wireless Charger",
            category: "Electronics",
            code: "WC-017",
            price: 34.99,
            status: "in_stock",
            stock: 59,
            sales: 188,
            image: "https://picsum.photos/seed/charger/800/600",
        },
        {
            id: 18,
            title: "Power Bank",
            category: "Electronics",
            code: "PB-018",
            price: 49.99,
            status: "out_of_stock",
            stock: 0,
            sales: 220,
            image: "https://picsum.photos/seed/powerbank/800/600",
        },
        {
            id: 19,
            title: "Headset Stand",
            category: "Accessories",
            code: "HS-019",
            price: 24.99,
            status: "in_stock",
            stock: 71,
            sales: 93,
            image: "https://picsum.photos/seed/headsetstand/800/600",
        },
        {
            id: 20,
            title: "Monitor 27”",
            category: "Electronics",
            code: "MN-020",
            price: 329.99,
            status: "low_stock",
            stock: 5,
            sales: 48,
            image: "https://picsum.photos/seed/monitor/800/600",
        },
    ]

    const filteredProducts = product.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()) ||
        item.code.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>
            <div>
                <input type="text" placeholder="Пойск" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full outline-0 border border-gray-500 p-2 rounded-2xl mt-2 mb-2" />
            </div>
            <div className="grid grid-cols-4 gap-x-3">
                {filteredProducts.map((item) => (
                    <div key={item.id} className="w-full h-[80%] flex flex-col gap-y-4 p-2 bg-white rounded-2xl mb-3 shadow-[0px_0px_52px_0px_rgba(34,60,80,0.2)]">
                        <img src={item.image} className="h-[50%] w-full" alt={item.title} />
                        <b className="text-xl">{item.title}</b>
                        <p className="text-gray-500 text-xl">{item.category}</p>
                        <p className="text-green-700 font-bold text-2xl">${item.price}</p>
                        <div className="flex justify-between text-xl text-gray-500">
                            <p>Stock:{item.stock}</p>
                            <p>Seles :{item.sales}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}