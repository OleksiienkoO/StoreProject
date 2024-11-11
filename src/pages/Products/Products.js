import React from "react";
import Table from "../Products/components/ProductsList/ProductsList";
import Preview from "../../assets/preview.png";
import InputBtn from "../../components/InputBtn/InputBtn";
import "./Products.css";
import Logo from "../../assets/rozetkaLogoWhite.png";
import Plus from "../../assets/plus.png";

function Products() {
  return (
    <div className="container">
      <img src={Logo} width="240px" />{" "}
      <div className="left-side">
        <InputBtn actionImg={Preview} type="Preview" className="input-btn" />{" "}
        <InputBtn actionImg={Plus} type="Add product" className="input-btn" />{" "}
      </div>{" "}
      <div className="table">
        <h3 className="title-name"> Products </h3> <Table />
      </div>{" "}
    </div>
  );
}

export default Products;
