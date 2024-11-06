import React from "react";
import "./Input.css";

function Input(props) {
  return (
    <input
      className="login_input"
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}
export default Input;
