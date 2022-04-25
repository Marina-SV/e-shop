
import Items from "../components/Items";
import "./MainPage.css";



export default function MainPage(props) {
    const {items, addToBucket, sortDown, sortUp} = props

        return (
            <main>
                <p className="main-page-title">Our Best Sellers:</p>
                <p>Sort by price:</p>
                <button onClick={() => sortUp()} className="sort-by-price">↑</button>
                <button onClick={() => sortDown()} className="sort-by-price">↓</button>
                <Items items={items} addToBucket={addToBucket}/>
            </main>
        )
}
