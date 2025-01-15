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
        div className = "details-header" >
        <
        InputBtn className = { "go__back" }
        onClick = {
            () => navigate(-1) } >
        <
        LiaArrowLeftSolid className = "go__back__arrow" / > { " " } <
        /InputBtn>{" "} <
        h1 className = "product-name" > { product.name } < /h1>{" "} <
        /div>{" "} <
        div className = "details-main" >
        <
        img className = "product__img"
        src = { product.productImg }
        alt = { product.name }
        />{" "} <
        div className = "main-info" >
        <
        p className = "info__inStock" >
        <
        MdOutlineDoneOutline / > Є в наявності { " " } <
        /p>{" "} <
        p className = "info__price" > { product.price }₴ < /p>{" "} <
        p className = "info__quantity" > Кількість: { product.quantity } < /p>{" "} <
        /div>{" "} <
        /div>{" "} <
        div className = "details-description" >
        <
        div className = "description-header" > { " " } <
        h5 > Опис < /h5> <p>{product.name}</p > { " " } <
        /div>{" "} <
        h5 > 15.6 - дюймовий дисплей стандарту Full HD < /h5> <
        p >
        Фільми, малюнки та ігри немов оживають на дисплеї стандарту Full HD(1920 x 1080). <
        /p>{" "} <
        h5 > Динаміки преміум - класу < /h5> <
        p >
        Стереофонічні динаміки JBL, що забезпечують розкішне звучання з ефектом присутності, ідеально підходять для відео, ігор і музики. <
        /p>{" "} <
        h5 > Dolby Advanced Audio < /h5> <
        p >
        Dolby Advanced Audio— це технологія, завдяки якій на ноутбуці можна відтворити кришталево чіткий просторовий звук за допомогою вбудованих динаміків. <
        /p>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
};

export default Product;