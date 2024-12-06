import React from "react";
import Logo from "../../../../assets/rozetkaLogoWhite.png";
import InputBtn from "../../../../components/InputBtn/InputBtn";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";

function Header() {
    return ( <
        div >
        <
        img src = { Logo }
        width = "240px" / > { " " } <
        div className = "left-side" >
        <
        InputBtn ActionImg = { IoPersonOutline }
        type = "Preview"
        className = "input-btn" /
        > { " " } <
        InputBtn ActionImg = { AiOutlinePlus }
        type = "Add product"
        className = "input-btn" /
        > { " " } <
        /div>{" "} <
        /div>
    );
}
export default Header;