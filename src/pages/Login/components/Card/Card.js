import React from "react";
import "./Card.css";
import Input from "../../../../components/Input/Input";
import InputBtn from "../../../../components/InputBtn/InputBtn";
import Logo from "../../../../assets/rozetkaLogoGreen.png";

function Card() {
  return (
    <div className="login_card">
      <img className="rozetka-logo" src={Logo} alt="logo" />{" "}
      <div className="login_form">
        {" "}
        <Input type="text" placeholder="User Name" />
        <Input type="password" placeholder="Password" />
        <InputBtn type="Login" className="login-btn" />
      </div>{" "}
    </div>
  );
}
export default Card;
