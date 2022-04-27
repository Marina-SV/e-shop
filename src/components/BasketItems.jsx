import BasketItem from "./BasketItem"


export default function BasketItems(props) {
    const {basketItems} = props
    console.log(basketItems)

    return (
        <div className="items-wrapper-in-bucket">
         {basketItems.map(item => <BasketItem {...item} />)}
        </div>
    )
}