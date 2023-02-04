import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter } from "react-router-dom";
import Header from "../src/Components/Header/Header";
import CartProvider from "./Context/CartProvider";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Home />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
