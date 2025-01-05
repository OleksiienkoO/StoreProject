import React, { useState } from "react";
import "./Card.css";

import Input from "../../../../components/Input/Input";
import InputBtn from "../../../../components/InputBtn/InputBtn";
import Logo from "../../../../assets/rozetkaLogoGreen.png";
import { IoEyeSharp } from "react-icons/io5";
import { GoEyeClosed } from "react-icons/go";
import { FiLoader } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

function Card() {
  const [IsPassword, setIsPassword] = useState(true);
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState({ userName: false, password: false });
  const [Loading, setLoading] = useState(false);
  const [authenticationError, setAuthenticationError] = useState(false);
  const navigate = useNavigate();
  const btnHandleClick = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: loginValue,
        password: passwordValue,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("jwt_token", data.token);
      if (data.token) {
        navigate("/products");
      } else {
        setError("Invalid credentials or token mismatch.");
      }
      setLoading(false);
      setAuthenticationError(false);
    } else {
      setAuthenticationError(true);
      setLoading(false);
    }
  };

  function handleChange(e) {
    const { name } = e.target;
    if (authenticationError) setAuthenticationError(false);

    setError((prev) => ({
      ...prev,
      [name]: e.target.value.trim() === "",
    }));

    if (e.target.value.trim.length === 0) {
    }
    if (name === "userName") {
      setLoginValue(e.target.value);
    }
    if (name === "password") {
      setPasswordValue(e.target.value);
    }
  }

  const handleClick = () => {
    setIsPassword((perv) => !perv);
  };

  return (
    <div className="login_card">
      <img className="rozetka-logo" src={Logo} alt="logo" />{" "}
      <div className="login_form">
        {" "}
        <div>
          {" "}
          <Input
            name="userName"
            type="text"
            placeholder="User Name"
            className={`input__label ${
              error.userName ? "input_error_label" : ""
            }`}
            value={loginValue}
            onChange={handleChange}
          />{" "}
          {error.userName && (
            <p className="card__error"> обов 'язково до заповнення</p>
          )}{" "}
        </div>{" "}
        <div>
          {" "}
          <Input
            name="password"
            className={`input__label ${
              error.password ? "input_error_label" : ""
            }`}
            type={IsPassword ? "password" : "text"}
            placeholder="Password"
            IconComponent={IsPassword ? IoEyeSharp : GoEyeClosed}
            ClassIconComponent="eye__password"
            value={passwordValue}
            onClick={handleClick}
            onChange={handleChange}
          />{" "}
          {error.password && (
            <p className="card__error"> обов 'язково до заповнення</p>
          )}{" "}
        </div>{" "}
        <InputBtn type="Login" className="login-btn" onClick={btnHandleClick} />{" "}
      </div>{" "}
      <div className="loader-container">
        {" "}
        {Loading && <FiLoader className="loader-icon" />}{" "}
      </div>{" "}
      <div className="error-container">
        {" "}
        {authenticationError && (
          <p className="authentication-login"> Invalid Login or Password </p>
        )}{" "}
      </div>{" "}
    </div>
  );
}
export default Card;
