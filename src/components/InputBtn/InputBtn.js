import React from "react";
import "./InputBtn.css";

function InputBtn(props) {
  return <button className="input-btn"> {props.type} </button>;
}

export default InputBtn;
