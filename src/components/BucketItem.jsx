
import "./BucketItem.css";

export default function BucketItem(props) {
    const {id, title, price, categoty, description, image} = props

    return (
        <div className="item-card-in-bucket">
            <div className="item-image-in-bucket">
                <img className="image-in-bucket"src={image} />
            </div>
            <div>
                <p>{title}</p>
                <p>{price}$</p>
            </div>
        </div>
    )
}
