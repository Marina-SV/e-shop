
import Item from "./Item";



export default function Items (props) {

    const {items, addToBasket} = props;
   

    if(!items) return <h2 style={{margin: ' 150px 600px'}}>Загрузка...</h2>;

    // if (items === null) {
    //   return null;
    // }

   
    return (
        <div className="items-wrapper"> 
        {items.map(item => <Item {...item} addToBasket={addToBasket}/>)}
        </div>
    )
}