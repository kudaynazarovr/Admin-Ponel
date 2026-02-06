import { LayoutContentTop } from "./components/content/LayoutContentTop"
import { ProductData } from "./components/Product/ProductData"

export const Product = ({ text, title }) => {
    return (
        <>
            <div className="p-8">
                <LayoutContentTop title={"Product"} text={"Mange your product inventory and listings."} />
                <ProductData />
            </div>
        </>
    )
}