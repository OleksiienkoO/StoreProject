import React from "react";
import "./Input.css";

function Input({
    name,
    type,
    placeholder,
    className,
    onClick,
    IconComponent,
    ClassIconComponent,
    onChange,
}) {
    return ( <
        label className = { className } >
        <
        input name = { name }
        className = "input__login"
        type = { type }
        placeholder = { placeholder }
        onChange = { onChange }
        />{" "} {
            IconComponent && ( <
                IconComponent onClick = { onClick }
                className = { ClassIconComponent }
                />
            )
        } { " " } <
        /label>
    );
}
export default Input;