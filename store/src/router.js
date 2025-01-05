import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";
import ProductsPreview from "./pages/ProductsPreview/ProductsPreview";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/products" element={<Products />} />{" "}
        <Route path="/products-preview" element={<ProductsPreview />} />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
};

export default Router;
