import React from "react";
import "./InputBtn.css";

function InputBtn(props) {
  return (
    <button className={props.className}>
      {" "}
      {true && <img src={props.actionImg} alt="" />} {props.type}{" "}
    </button>
  );
}

export default InputBtn;
