
import { useState } from "react";
import BasketItems from "../components/BasketItems"
import Form from "../components/Form";
import "./OrderItemsPage.css"

export default function OrderItemsPage(props) {
    const [isShowForm, setISShowForm] = useState(false);
    const {basketItems} = props

    const show = () => setISShowForm(true);
    console.log(basketItems)

    return (
        <main className="order-page-main-container">
            <button onClick={show} className="place-an-order">Place an order</button>
            <Form isHidden={!isShowForm} />
            <BasketItems basketItems={basketItems} />
        </main>
    )
}