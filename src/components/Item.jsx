import "./Item.css"
import { useNavigate } from "react-router";

export default function Item(props) {
    const { id, title, price, categoty, description, image, addToBasket } = props;
    const navigate = useNavigate();

    const onCardClick = () => {
        navigate(`/products/${id}`);
    };

    const onAdd = (e) => {
        e.stopPropagation()
        addToBasket(props)
    }


    return (
        <div className="item-card" onClick={onCardClick}>
            <div className="item-image">
                <img alt={''} className="image" src={image} />
            </div>
            <div className="item-info">
                <p className="item-title">{title}</p>
                <p className="item-price">{price}$</p>
                <p >{categoty}</p>
                <p className="item-description">{description}</p>
                <button className="add-to-bucket" onClick={onAdd}>Add to Basket</button>
            </div>
        </div>
    )
}