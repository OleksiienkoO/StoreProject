import React from "react";
import "./ProductsCard.css";
import { TiShoppingCart } from "react-icons/ti";

function ProductsCard({ product }) {
    return ( <
        div className = "product-card"
        key = { product.id } >
        <
        img src = { product.productImg }
        className = "card_img"
        alt = "Product image" / >
        <
        h3 className = "card_name" > { product.name } < /h3>{" "} <
        div className = "card-info" >
        <
        p className = "card-info_price" > { " " } { product.price } < span > ₴ < /span>{" "} <
        /p>{" "} <
        p className = "card-info_quantity" > Кількість: { product.quantity } < /p>{" "} <
        /div>{" "} <
        div className = "card-info_order" >
        <
        TiShoppingCart color = "green"
        size = { 28 }
        /> <p> Готовий до відправки </p > { " " } <
        /div>{" "} <
        /div>
    );
}
export default ProductsCard;