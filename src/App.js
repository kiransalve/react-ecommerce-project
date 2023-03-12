import "./App.css";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import Home from "./Components/Home/Home";
import { BrowserRouter } from "react-router-dom";
import Header from "../src/Components/Header/Header";
import CartProvider from "../src/Context/CartProvider";
import Products from "../src/Components/Products/Products";
import Cart from "../src/Components/Cart/Cart";
import About from "../src/Components/About/About";
import { Route, Routes } from "react-router-dom";
import data from "../src/Components/ProductData";
//import Movie from "./Components/Movie/Movie";
import Contact from "./Components/Contact/Contact";
import ProductDetail from "./Components/Products/ProductDetail";
import AuthPage from "./pages/AuthPage";
import UserProfile from "./Components/Profile/UserProfile";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />

        <Routes>
          {authCtx.isLoggedIn && (
            <Route
              exact
              path="/product"
              element={<Products data={data} />}
            ></Route>
          )}

          <Route path="/" element={<Home />}></Route>
          {!authCtx.isLoggedIn && (
            <Route path="*" element={<AuthPage />}></Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/cart" element={<Cart />}></Route>
          )}
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          {authCtx.isLoggedIn && (
            <Route path="/product/:id" element={<ProductDetail />}></Route>
          )}

          <Route path="/auth" element={<AuthPage />}></Route>
          {authCtx.isLoggedIn && (
            <Route path="/profile" element={<UserProfile />}></Route>
          )}
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
