
import Item from "./Item";



export default function Items (props) {

    const {items, addToBucket} = props;

    if(!items) return <h2 style={{margin: ' 150px 600px'}}>Загрузка...</h2>;

    // if (items === null) {
    //   return null;
    // }

   
    return (
        <div className="items-wrapper"> 
        {items.map(item => <Item {...item} addToBucket={addToBucket}/>)}
        </div>
    )
}