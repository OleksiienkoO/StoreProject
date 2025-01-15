import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { PiArrowsDownUpThin } from "react-icons/pi";
import "./ProductsList.css";
import InputBtn from "../../../../components/InputBtn/InputBtn";

import ModalDelete from "../../../../components/ModalDelete/ModalDelete";
import ModalEdit from "../../../../components/ModalEdit/ModalEdit";

function ProductsList() {
    const [products, setProducts] = useState([]);
    const [ShowModalDelete, setShowModalDelete] = useState(false);
    const [ShowModalEdit, setShowModalEdit] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [deleteId, setDeleteId] = useState();

    useEffect(() => {
        getProducts();
    }, []);

    const deleteComponent = async(id) => {
        try {
            await fetch(
                `https://6730ed9f7aaf2a9aff0f5b89.mockapi.io/householdAppliances/${id}`, { method: "DELETE" }
            );
            const updatedProducts = products.filter((product) => product.id !== id);
            setProducts(updatedProducts);
        } catch (error) {
            console.error("Ошибка при удалении продукта:", error);
        }
    };

    const updateProduct = async(productData) => {
        try {
            const response = await fetch(
                `https://6730ed9f7aaf2a9aff0f5b89.mockapi.io/householdAppliances/${editingProduct.id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(productData),
                }
            );

            if (response.ok) {
                const updatedProduct = await response.json();
                setProducts(
                    products.map((product) =>
                        product.id === editingProduct.id ?
                        {...updatedProduct, index: product.index } :
                        product
                    )
                );
                setShowModalEdit(false);
            }
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    const getProducts = async() => {
        const response = await fetch(
            "https://6730ed9f7aaf2a9aff0f5b89.mockapi.io/householdAppliances"
        );
        const data = await response.json();

        const formattedData = data.map((product, index) => ({
            ...product,
            index: index + 1,
        }));

        setProducts(formattedData);
    };

    return ( <
        >
        <
        table >
        <
        thead >
        <
        tr >
        <
        th >
        <
        div className = "header-content" >
        ID < PiArrowsDownUpThin className = "icon" / >
        <
        /div>{" "} <
        /th>{" "} <
        th >
        <
        div className = "header-content" >
        Category < PiArrowsDownUpThin className = "icon" / >
        <
        /div>{" "} <
        /th>{" "} <
        th >
        <
        div className = "header-content" >
        Name < PiArrowsDownUpThin className = "icon" / >
        <
        /div>{" "} <
        /th>{" "} <
        th >
        <
        div className = "header-content" >
        Quantity < PiArrowsDownUpThin className = "icon" / >
        <
        /div>{" "} <
        /th>{" "} <
        th >
        <
        div className = "header-content" >
        Price(₴) < PiArrowsDownUpThin className = "icon" / >
        <
        /div>{" "} <
        /th>{" "} <
        th >
        <
        div className = "header-content" > < /div>{" "} <
        /th>{" "} <
        /tr>{" "} <
        /thead>{" "} <
        tbody > { " " } {
            products.map((product) => ( <
                tr key = { product.id } >
                <
                td > { product.index } < /td> <td> {product.category} </td > { " " } <
                td > { product.name } < /td> <td> {product.quantity} </td > { " " } <
                td > { product.price } < /td>{" "} <
                td >
                <
                FaPencil color = "black"
                onClick = {
                    () => {
                        setEditingProduct(product);
                        setShowModalEdit(true);
                    }
                }
                />{" "} <
                FaTrashAlt color = "black"
                onClick = {
                    () => {
                        setShowModalDelete(true);
                        setDeleteId(product.id);
                    }
                }
                />{" "} <
                /td>{" "} <
                /tr>
            ))
        } { " " } <
        /tbody>{" "} <
        /table>{" "} <
        ModalDelete show = { ShowModalDelete } >
        <
        InputBtn className = "cancel-button"
        type = "Cancel"
        onClick = {
            () => setShowModalDelete(false) }
        />{" "} <
        InputBtn className = "delete-button"
        type = "Delete"
        onClick = {
            () => {
                deleteComponent(deleteId);
                setShowModalDelete(false);
            }
        }
        />{" "} <
        /ModalDelete>{" "} <
        ModalEdit show = { ShowModalEdit }
        product = { editingProduct }
        onCancel = {
            () => {
                setShowModalEdit(false);
                setEditingProduct(null);
            }
        }
        onSave = { updateProduct }
        />{" "} <
        />
    );
}

export default ProductsList;