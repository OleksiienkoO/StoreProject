import React from "react";
import "./Input.css";

function Eye(visible) {
    if (!visible) {}
}

function Input({
    type,
    placeholder,
    className,
    onClick,
    IconComponent,
    ClassIconComponent,
}) {
    return ( <
        label className = { className } >
        <
        input className = "input__login"
        type = { type }
        placeholder = { placeholder }
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