import { Link } from "react-router-dom";
import Bucket from "./BucketItems";
import Category from "./Category";
import "./Header.css";

export default function Header(props) {

const {categories, onCategoryClick} = props
    

    return (
        <div className="header-container">
            <p className="shop-title">Myshop</p>
            <div>
            <p>Categories:</p>
            {categories.map(category => <Category category={category} onClickButton={onCategoryClick}/>)}
            </div>
            
             <Link className="bucket-button" to={'/order'}>Show My Bucket</Link>
        </div>
    )
}