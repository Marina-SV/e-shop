import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import OrderItemsPage from "./pages/OrderItemsPage"
import { useState, useEffect } from "react";

export default function App() {

    const [items, setItem] = useState(null);
    const [categories, setCategories] = useState([]);
    const [bucketItems, setBucketItems] = useState([]); 



    const sortDown = () => {
        const sortItemsDown = [...items];
        const sortItemsDown2 = [...categories]
        sortItemsDown.sort((a, b) => {
            if(a.price > b.price) return 1
            if(a.price < b.price) return -1
        }) 
        sortItemsDown2.sort((a, b) => {
            if(a.price > b.price) return 1
            if(a.price < b.price) return -1
        })
        setItem(sortItemsDown)
        setCategories(sortItemsDown2)
    }

    const sortUp = () => {
        const sortItemsDown = [...items];
        sortItemsDown.sort((a, b) => {
            if(a.price > b.price) return -1
            if(a.price < b.price) return 1
        }) 
        setItem(sortItemsDown)
    }



    const getItem = async () => {
        const res = await fetch("https://fakestoreapi.com/products?limit=10")
        const data = await res.json()
        setItem(data)
    }

    useEffect(() => {
        getItem();
        getCategories();
    }, [])



    const getCategories = async () => {
        const res = await fetch("https://fakestoreapi.com/products/categories")
        const data = await res.json()
        setCategories(data)
    }

    const getItemsByCotegoty = async (category) => {
        const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
        const data = await res.json()
        return data
    }

    const onCategoryClick = async (category) => {
        setItem(await getItemsByCotegoty(category))
    }

    const addToBucket = async (product) => {
        // const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        // const data = await res.json()
        setBucketItems([...bucketItems, product])
    }


    return (
        <div className="main-container">
            <Header categories={categories} onCategoryClick={onCategoryClick}/>
            <Routes>
                <Route path="/">
                    <Route index element={<MainPage items={items} addToBucket={addToBucket} sortDown={sortDown} sortUp={sortUp}/>} />
                    <Route path="/order" element={<OrderItemsPage bucketItems={bucketItems}/>} />
                </Route>
            </Routes>
        </div>
    )
}