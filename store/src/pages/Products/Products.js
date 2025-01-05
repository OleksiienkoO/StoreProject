import React from "react";
import Header from "./components/Header/Header";
import Table from "../Products/components/ProductsList/ProductsList";
import "./Products.css";
import InputBtn from "../../components/InputBtn/InputBtn";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <Header>
        {" "}
        <InputBtn
          ActionImg={IoPersonOutline}
          type="Preview"
          className="input-btn"
          onClick={() => navigate("/products-preview")}
        />{" "}
        <InputBtn
          ActionImg={AiOutlinePlus}
          type="Add product"
          className="input-btn"
        />{" "}
      </Header>{" "}
      <div className="table">
        <h3 className="title-name"> Products </h3> <Table />
      </div>{" "}
    </div>
  );
}

export default Products;
