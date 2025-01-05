import React from "react";
import "./InputBtn.css";

function InputBtn({ className, ActionImg, type, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {" "}
      {ActionImg && <ActionImg className="input__img" color="black" />} {type}{" "}
    </button>
  );
}

export default InputBtn;
