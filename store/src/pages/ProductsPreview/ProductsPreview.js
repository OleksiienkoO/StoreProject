import ProductsCard from "./components/ProductsCard/ProductsCard";
import React from "react";
import ProductsList from "../Products/components/ProductsList/ProductsList";
import "./ProductsPreview.css";
class ProductsPreview extends ProductsList {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cards__container">
        {" "}
        {this.state.products.slice(0, 6).map((product) => (
          <ProductsCard product={product} />
        ))}{" "}
      </div>
    );
  }
}
export default ProductsPreview;
