import { LayoutContentTop } from "./components/content/LayoutContentTop"
import { TransactionData } from "./components/Transactions/TransactionsData"
import { TransactionsQuantity } from "./components/Transactions/TransactionsQuantity"

export const Transactions = () => {
    return (
        <>
            <div className="p-8">
                <LayoutContentTop title={"Transactions"} text={"View and manage all your financial transactions."} />
                <TransactionsQuantity />
                <TransactionData />
            </div>
        </>
    )
}