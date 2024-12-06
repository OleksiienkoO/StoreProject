import React, { useState } from "react";
import "./Card.css";
import Input from "../../../../components/Input/Input";
import InputBtn from "../../../../components/InputBtn/InputBtn";
import Logo from "../../../../assets/rozetkaLogoGreen.png";
import { IoEyeSharp } from "react-icons/io5";
import { GoEyeClosed } from "react-icons/go";

function Card() {
    const [IsPassword, setIsPassword] = useState(true);

    const handleClick = () => {
        setIsPassword((perv) => !perv);
    };
    return ( <
        div className = "login_card" >
        <
        img className = "rozetka-logo"
        src = { Logo }
        alt = "logo" / > { " " } <
        div className = "login_form" > { " " } <
        Input type = "text"
        placeholder = "User Name"
        className = "input__label" / >
        <
        Input type = { IsPassword ? "password" : "text" }
        placeholder = "Password"
        className = "input__label"
        IconComponent = { IsPassword ? IoEyeSharp : GoEyeClosed }
        ClassIconComponent = "eye__password"
        onClick = { handleClick }
        />{" "} <
        InputBtn type = "Login"
        className = "login-btn" / >
        <
        /div>{" "} <
        /div>
    );
}
export default Card;