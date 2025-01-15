import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";
import ProductsPreview from "./pages/ProductsPreview/ProductsPreview";
import LoginRouter from "./LoginRouter";
import Product from "./pages/Product/Product";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login />} />{" "}
        <Route path="/login" element={<Login />} />{" "}
        <Route element={<LoginRouter />}>
          <Route path="/products" element={<Products />} />{" "}
          <Route path="/products/product/:id" element={<Product />} />{" "}
          <Route path="/products-preview" element={<ProductsPreview />} />{" "}
        </Route>{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
};

export default Router;
