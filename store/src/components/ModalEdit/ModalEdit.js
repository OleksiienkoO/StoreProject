import React, { useState, useEffect } from "react";
import "./ModalEdit.css";

const ModalEdit = ({ show, onCancel, product, onSave }) => {
    const [editedProduct, setEditedProduct] = useState({
        category: "",
        name: "",
        quantity: "",
        price: "",
    });

    useEffect(() => {
        if (product) {
            setEditedProduct({
                category: product.category,
                name: product.name,
                quantity: product.quantity,
                price: product.price,
            });
        }
    }, [product]);

    if (!show) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(editedProduct);
    };

    return ( <
        div className = "modal-overlay" >
        <
        div className = "modal-content" >
        <
        h2 > Edit Product < /h2> <
        form onSubmit = { handleSubmit } >
        <
        div className = "form-group" >
        <
        label htmlFor = "category" > Category: < /label> <
        input type = "text"
        id = "category"
        name = "category"
        value = { editedProduct.category }
        onChange = { handleChange }
        /> <
        /div> <
        div className = "form-group" >
        <
        label htmlFor = "name" > Name: < /label> <
        input type = "text"
        id = "name"
        name = "name"
        value = { editedProduct.name }
        onChange = { handleChange }
        /> <
        /div> <
        div className = "form-group" >
        <
        label htmlFor = "quantity" > Quantity: < /label> <
        input type = "number"
        id = "quantity"
        name = "quantity"
        value = { editedProduct.quantity }
        onChange = { handleChange }
        /> <
        /div> <
        div className = "form-group" >
        <
        label htmlFor = "price" > Price: < /label> <
        input type = "number"
        id = "price"
        name = "price"
        value = { editedProduct.price }
        onChange = { handleChange }
        /> <
        /div> <
        div className = "modal-buttons" >
        <
        button type = "button"
        className = "cancel-button"
        onClick = { onCancel } >
        Cancel <
        /button> <
        button type = "submit"
        className = "save-button" >
        Save <
        /button> <
        /div> <
        /form> <
        /div> <
        /div>
    );
};

export default ModalEdit;