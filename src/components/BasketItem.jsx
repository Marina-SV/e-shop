
import "./BasketItem.css";

export default function BasketItem(props) {
    const { title, price, category, image } = props;
    const isShowSizes = category === "men's clothing" || category === "women's clothing"

    return (
        <div className="item-card-in-basket">
            <div className="item-image-in-basket">
                <img alt={""} className="image-in-basket" src={image} />
            </div>
            <div className="item-info-in-basket">
                <p className="item-title"> {title}</p>
                <div>
                    {isShowSizes && (
                        <>
                            <p className="size-title">Choose your size:</p>
                            <button className="button-size">XS</button>
                            <button className="button-size">S</button>
                            <button className="button-size">M</button>
                            <button className="button-size">L</button>
                            <button className="button-size">XL</button>
                        </>
                    )}

                </div>
                <p className="item-price">{price}$</p>
            </div>
        </div>
    )
}
