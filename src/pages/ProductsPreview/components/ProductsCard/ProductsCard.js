import React from "react";
import ProductsList from "../../../Products/components/ProductsList/ProductsList";
import "./ProductsCard.css";
import { TiShoppingCart } from "react-icons/ti";
class ProductsCard extends ProductsList {
    constructor(props) {
        super(props);
    }

    render() {
        return ( <
            div className = "cards__container" > { " " } {
                this.state.products.slice(0, 6).map((product) => ( <
                    div className = "card__container"
                    key = { product.id } >
                    <
                    img src = { product.productImg }
                    alt = "Product image" / >
                    <
                    h3 className = "card__name" > { product.name } < /h3>{" "} <
                    div className = "card__info" >
                    <
                    p className = "info-price" > { " " } { product.price } <
                    span > ₴ < /span>{" "} <
                    /p>{" "} <
                    p className = "info-quantity" > Кількість: { product.quantity } < /p>{" "} <
                    /div>{" "} <
                    div className = "card__order" >
                    <
                    TiShoppingCart color = "green"
                    size = { 28 }
                    /> <
                    p > Готовий до відправки < /p>{" "} <
                    /div>{" "} <
                    /div>
                ))
            } { " " } <
            /div>
        );
    }
}
export default ProductsCard;