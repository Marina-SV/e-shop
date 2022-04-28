import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OrderItemsPage from "./pages/OrderItemsPage";
import ItemPage from "./pages/ItemPage"; 
import AboutPage from "./pages/AboutPage";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import SuccessPage from "./pages/SuccessPage";

export default function App() {

    const [items, setItem] = useState(null);
    const [categories, setCategories] = useState([]);
    const [basketItems, setBasketItems] = useState([]); 

    const navigate = useNavigate();



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
        const res = await fetch("https://fakestoreapi.com/products")
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
        const res = await fetch(`https://fakestoreapi.com/products/${category ? `category/${category}` : ''}`)
        const data = await res.json()
        return data
    }

    const onCategoryClick = async (category) => {
        setItem(await getItemsByCotegoty(category))
        navigate('/')
    }

    const addToBasket = async (product) => {
        // const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        // const data = await res.json()
        setBasketItems([...basketItems, product])
    }

    return (
        <div className="main-container">
            <Header categories={categories} onCategoryClick={onCategoryClick} count={basketItems.length}/>
            <Routes>
                <Route path="/">
                    <Route index element={<MainPage items={items} addToBasket={addToBasket} sortDown={sortDown} sortUp={sortUp}/>} />
                    <Route path="/order" element={<OrderItemsPage basketItems={basketItems}/>} />
                    <Route path="/order/success" element={<SuccessPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/products/:id" element={<ItemPage onAdd={addToBasket}/>} />
                </Route>
            </Routes>
            <Footer />
        </div>
    )
}