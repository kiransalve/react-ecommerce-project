import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter } from "react-router-dom";
import Header from "../src/Components/Header/Header";
import CartProvider from "../src/Context/CartProvider";
import Products from "../src/Components/Products/Products";
import Cart from "../src/Components/Cart/Cart";
import About from "../src/Components/About/About";
import { Route, Routes } from "react-router-dom";
import data from "../src/Components/ProductData";
import Movie from "./Components/Movie/Movie";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />

        <Routes>
          <Route path="/product" element={<Products data={data} />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/movie" element={<Movie />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
