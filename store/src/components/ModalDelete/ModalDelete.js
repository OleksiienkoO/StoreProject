import React from "react";
import "./ModalDelete.css";

const ModalDelete = ({ show, children }) => {
    if (!show) return null;

    return ( <
        div className = "modal-overlay" >
        <
        div className = "modal-content" >
        <
        p > Are u sure you want to delete this product ? < /p> <
        div className = "modal-buttons" > { children } < /div> <
        /div> <
        /div>
    );
};

export default ModalDelete;