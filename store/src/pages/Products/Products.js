import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ProductsList from "../Products/components/ProductsList/ProductsList";
import "./Products.css";
import InputBtn from "../../components/InputBtn/InputBtn";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ProductModal from "../../components/ProductModal/ProductModal";

function Products() {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async() => {
        try {
            const response = await fetch(
                "https://6730ed9f7aaf2a9aff0f5b89.mockapi.io/householdAppliances"
            );
            const data = await response.json();

            const formattedData = data.map((product, index) => ({
                ...product,
                index: index + 1,
            }));

            setProducts(formattedData);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const addProduct = async(productData) => {
        try {
            const response = await fetch(
                "https://6730ed9f7aaf2a9aff0f5b89.mockapi.io/householdAppliances", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(productData),
                }
            );

            if (response.ok) {
                const newProduct = await response.json();
                setProducts((prevProducts) => [
                    ...prevProducts,
                    {...newProduct, index: prevProducts.length + 1 },
                ]);
                setShowAddModal(false);
            }
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    return ( <
        div className = "wrapper" > { " " } <
        div className = "products-container" >
        <
        Header > { " " } <
        InputBtn type = "Preview"
        className = "input-btn"
        onClick = {
            () => navigate("/products-preview") } >
        <
        IoPersonOutline className = "input_img"
        color = "black" / > { " " } <
        /InputBtn>{" "} <
        InputBtn type = "Add product"
        className = "input-btn"
        onClick = {
            () => setShowAddModal(true) } >
        <
        AiOutlinePlus className = "input_img"
        color = "black" / >
        <
        /InputBtn>{" "} <
        /Header>{" "} <
        div className = "table" >
        <
        h3 className = "title-name" > Products < /h3>{" "} <
        ProductsList products = { products }
        setProducts = { setProducts }
        onProductsChange = { setProducts }
        />{" "} <
        /div>{" "} <
        ProductModal show = { showAddModal }
        onCancel = {
            () => setShowAddModal(false) }
        onSave = { addProduct }
        mode = "add" /
        >
        <
        /div>{" "} <
        /div>
    );
}

export default Products;