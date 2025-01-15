import React from "react";
import "./InputBtn.css";

function InputBtn({ className, type, onClick, children }) {
  return (
    <button className={className} onClick={onClick}>
      {" "}
      {children} {type}{" "}
    </button>
  );
}

export default InputBtn;
