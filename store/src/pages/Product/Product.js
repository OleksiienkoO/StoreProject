import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Product.css";
import { LiaArrowLeftSolid } from "react-icons/lia";

import { MdOutlineDoneOutline } from "react-icons/md";

import Header from "../Products/components/Header/Header";
import InputBtn from "../../components/InputBtn/InputBtn";

const Product = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchProduct();
        document.body.style.backgroundColor = "#ffffff";

        return () => {
            document.body.style.backgroundColor = "#44b26f";
        };
    }, [id]);

    const fetchProduct = async() => {
        try {
            const response = await fetch(
                `https://6730ed9f7aaf2a9aff0f5b89.mockapi.io/householdAppliances/${id}`
            );
            const data = await response.json();
            setProduct(data);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    };

    if (isLoading) {
        return <p > Loading product details... < /p>;
    } else if (!product.id) {
        return <p > Product not found. < /p>;
    }

    return ( <
        div className = "product-container" >
        <
        div className = "header-container" > { " " } <
        Header / >
        <
        /div>{" "} <
        div className = "details-container" >
        <
        div className = "details_header" >
        <
        InputBtn className = { "go-back" }
        onClick = {
            () => navigate(-1) } >
        <
        LiaArrowLeftSolid className = "go-back_arrow" / > { " " } <
        /InputBtn>{" "} <
        h1 className = "product-name" > { product.name } < /h1>{" "} <
        /div>{" "} <
        div className = "details_main" >
        <
        img className = "product_img"
        src = { product.productImg }
        alt = { product.name }
        />{" "} <
        div className = "main_info" >
        <
        p className = "info_in-stock" >
        <
        MdOutlineDoneOutline / > Є в наявності { " " } <
        /p>{" "} <
        p className = "info_price" > { product.price }₴ < /p>{" "} <
        p className = "info_quantity" > Кількість: { product.quantity } < /p>{" "} <
        /div>{" "} <
        /div>{" "} <
        div className = "details_description" >
        <
        div className = "description-item" > { " " } <
        h5 > Опис < /h5> <p>{product.name}</p > { " " } <
        /div>{" "} <
        p className = "description-text" > { product.description } < /p>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
};

export default Product;