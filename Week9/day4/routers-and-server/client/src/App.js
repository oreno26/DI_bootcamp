import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products";
import Product from "./components/product";
import { BrowserRouter, Route, route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
