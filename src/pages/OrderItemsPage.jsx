
import { useState } from "react";
import BucketItems from "../components/BucketItems"
import Form from "../components/Form";
import "./OrderItemsPage.css"

export default function OrderItemsPage(props) {
    const [isShowForm, setISShowForm] = useState(false);
    const {bucketItems} = props

    const show = () => setISShowForm(true);
    console.log(bucketItems)

    return (
        <main>
            <BucketItems bucketItems={bucketItems} />
            <button onClick={show} className="place-an-order">Place an order</button>
            <Form isHidden={!isShowForm}/>
        </main>
    )
}