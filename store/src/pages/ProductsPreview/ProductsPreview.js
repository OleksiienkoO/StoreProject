import ProductsCard from "./components/ProductsCard/ProductsCard";
import React, { useEffect, useState } from "react";
import ProductsList from "../Products/components/ProductsList/ProductsList";
import Header from "../Products/components/Header/Header";
import "./ProductsPreview.css";
import { Link } from "react-router-dom";

function ProductsPreview() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async() => {
        const response = await fetch(
            "https://6730ed9f7aaf2a9aff0f5b89.mockapi.io/householdAppliances"
        );
        const data = await response.json();

        setProducts(data);
    };

    return ( <
        div className = "products-preview-container" > { " " } <
        Header / > { " " } <
        div className = "cards-container" > { " " } {
            products.slice(0, 6).map((product) => ( <
                Link to = { `/products/product/${product.id}` }
                key = { product.id } > { " " } <
                ProductsCard product = { product }
                />{" "} <
                /Link>
            ))
        } { " " } <
        /div>{" "} <
        /div>
    );
}
export default ProductsPreview;