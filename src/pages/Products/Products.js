import React from "react";
import Header from "./components/Header/Header";
import Table from "../Products/components/ProductsList/ProductsList";
import "./Products.css";

function Products() {
    return ( <
        div className = "container" >
        <
        Header / >
        <
        div className = "table" >
        <
        h3 className = "title-name" > Products < /h3> <
        Table / >
        <
        /div>{" "} <
        /div>
    );
}

export default Products;