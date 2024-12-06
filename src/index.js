import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";
import ProductsCard from "./pages/ProductsPreview/components/ProductsCard/ProductsCard";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <
    React.StrictMode >
    <
    div className = "container" > { " " } {
        /* <Login />
              <Products /> */
    } <
    ProductsCard / >
    <
    /div>{" "} <
    /React.StrictMode>
);