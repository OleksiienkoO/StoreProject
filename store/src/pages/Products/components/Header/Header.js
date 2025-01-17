import React from "react";
import Logo from "../../../../assets/rozetkaLogoWhite.png";
import "./Header.css";

function Header({ children }) {
    return ( <
        div className = "logo-container" >
        <
        img src = { Logo }
        width = "240px" / > { " " } <
        div className = { children ? "header-btns " : "" } > { children } < /div>{" "} <
        /div>
    );
}
export default Header;