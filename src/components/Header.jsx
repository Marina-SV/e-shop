import { Link } from "react-router-dom";
import Category from "./Category";
import "./Header.css";
import BasketImg from "../images/Basket.png"

export default function Header(props) {

    const { categories, onCategoryClick, count} = props

    return (
        <header className="header-container">
            <p className="shop-title">Cary Anderson</p>
            <Link className="about-brand" to={'/about'}>About Brand</Link>
            <div className="categories-container">
                <p className="categories">Categories:</p>
                {categories.map(category => <Category category={category} onClickButton={onCategoryClick} />)}
            </div>
            <Link className="go-shopping" to={'/'} onClick={() => onCategoryClick()}>All categories</Link>
            <Link to={'/order'} className="basket-link" >
                {/* <div className="basket-container"> */}
                    {!!count && <span className="basket-circle">{count}</span>}
                    <img className="basket-button" src={BasketImg} />
                {/* </div> */}
                
            </Link>
        </header>
    )
}