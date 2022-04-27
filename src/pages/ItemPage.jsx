import Item from "../components/Item"
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";


export default function ItemPage(props) {
    const params = useParams();
    const [item, setItemById] = useState(null);

    const getItemsById = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
        const data = await res.json()
        setItemById(data)
    }

    useEffect(() => {
        getItemsById();
    }, [])
  
    if (!item) return (
        <main className="main-page-container">
            <p>Loading...</p>
        </main>
    )

    const { image, price, title, description, categoty } = item;
    const { onAdd } = props;

    return (
        <main className="main-page-container">
            <div className="item-card">
                <div className="item-image">
                    <img className="image" src={image} />
                </div>
                <div className="item-details-info">
                    <p className="item-title">{title}</p>
                    <p className="item-price">{price}$</p>
                    <p >{categoty}</p>
                    <p>{description}</p>
                    <button className="add-to-bucket-details-info" onClick={() => onAdd(item)}>Add to Basket</button>
                </div>
            </div>
        </main>

    )
}