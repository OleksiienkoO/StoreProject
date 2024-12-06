import React from "react";
import "./InputBtn.css";

function InputBtn({ className, ActionImg, type }) {
    return ( <
        button className = { className } > { " " } { ActionImg && < ActionImg className = "input__img"
            color = "black" / > } { type } { " " } <
        /button>
    );
}

export default InputBtn;