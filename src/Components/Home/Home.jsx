import React from 'react'
import Products from "../Products/Products"
import Cart from "../Cart/Cart"
import About from "../About/About"
import { Route, Routes } from 'react-router-dom'
import data from "../ProductData"

const Home = () => {
    return <Routes>
        <Route path="/" element={<Products data={data} />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/about" element={<About />}></Route>
    </Routes>
}

export default Home