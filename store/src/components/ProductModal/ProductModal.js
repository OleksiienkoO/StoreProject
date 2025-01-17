import React, { useState, useEffect } from "react";
import "./ProductModal.css";

const ProductModal = ({
    show,
    onCancel,
    onSave,
    mode = "add",
    product = null,
}) => {
    const [formData, setFormData] = useState({
        category: "",
        name: "",
        quantity: "",
        price: "",
        description: "",
    });

    useEffect(() => {
        if (product && mode === "edit") {
            setFormData({
                category: product.category,
                name: product.name,
                quantity: product.quantity,
                price: product.price,
                description: product.description,
            });
        } else {
            setFormData({
                category: "",
                name: "",
                quantity: "",
                price: "",
                description: "",
            });
        }
    }, [product, mode]);

    if (!show) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return ( <
        div className = "modal-overlay" >
        <
        div className = "modal-content" >
        <
        h2 className = "modal-title" > { " " } { mode === "edit" ? "Edit Product" : "Add New Product" } { " " } <
        /h2>{" "} <
        form onSubmit = { handleSubmit } >
        <
        div className = "form-group" >
        <
        label htmlFor = "category" > Category: < /label>{" "} <
        input type = "text"
        id = "category"
        name = "category"
        value = { formData.category }
        onChange = { handleChange }
        required /
        >
        <
        /div>{" "} <
        div className = "form-group" >
        <
        label htmlFor = "name" > Name: < /label>{" "} <
        input type = "text"
        id = "name"
        name = "name"
        value = { formData.name }
        onChange = { handleChange }
        required /
        >
        <
        /div>{" "} <
        div className = "form-group" >
        <
        label htmlFor = "quantity" > Quantity: < /label>{" "} <
        input type = "number"
        id = "quantity"
        name = "quantity"
        value = { formData.quantity }
        onChange = { handleChange }
        required /
        >
        <
        /div>{" "} <
        div className = "form-group" >
        <
        label htmlFor = "price" > Price(₴): < /label>{" "} <
        input type = "number"
        id = "price"
        name = "price"
        value = { formData.price }
        onChange = { handleChange }
        step = "0.01"
        required /
        >
        <
        /div>{" "} <
        div className = "form-group" >
        <
        label htmlFor = "description" > Description: < /label>{" "} <
        input type = "text"
        id = "description"
        name = "description"
        value = { formData.description }
        onChange = { handleChange }
        required /
        >
        <
        /div>{" "} <
        div className = "modal-actions" >
        <
        button type = "button"
        className = "cancel-btn"
        onClick = { onCancel } >
        Cancel { " " } <
        /button>{" "} <
        button type = "submit"
        className = "submit-btn" > { " " } { mode === "edit" ? "Save Changes" : "Add Product" } { " " } <
        /button>{" "} <
        /div>{" "} <
        /form>{" "} <
        /div>{" "} <
        /div>
    );
};

export default ProductModal;