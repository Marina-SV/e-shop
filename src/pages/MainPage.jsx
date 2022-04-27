
import Items from "../components/Items";
import { useState } from "react";
import "./MainPage.css";




export default function MainPage(props) {
    const { items, addToBasket, sortDown, sortUp } = props;
    const [pageCount, setPageCount] = useState(1);
    const limit = 4;
    const products = items ?? []; 
    const offset = (pageCount - 1) * limit;

    const handlePageClick = (page) => {
        setPageCount(page)
    }
    return (
        <main className="main-page-container">
            <div className="title-and-sorting">
            <div className="pagination">
                {
                    new Array(Math.ceil(products.length / 5)).fill(1).map((num, index) => {
                        const page = index + 1
                        return <button
                            className={"pagination__item" + ((pageCount === page) ? ' pagination__item_active' : '')}
                            onClick={() => handlePageClick(page)}
                        >
                            {page}
                        </button>
                    })
                }
            </div>
                <h2 className="main-page-title">Our Best Sellers:</h2>
                <p className="sort-by-price-title">Sort by price:</p>
                <button onClick={() => sortUp()} className="sort-by-price">↑</button>
                <button onClick={() => sortDown()} className="sort-by-price">↓</button>
            </div>
            <Items items={products.slice(offset, offset + limit)} addToBasket={addToBasket} />
        </main>
    )
}
