
import "./Item.css"

export default function Item(props) {
    const {id, title, price, categoty, description, image, addToBucket} = props
    return (
            <div className="item-card">
                <div className="item-image">
                    <img className="image" src={image} />
                </div>
                <div className="item-description">
                    <p>{title}</p>
                    <p>{price}$</p>
                    <p>{categoty}</p>
                    <p>{description}</p>
                    <button onClick={() => addToBucket(props)}>Add to Bucket</button>
                </div>
            </div>
       
    )
}