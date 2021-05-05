import React from "react";
import "./button.scss";

export default function Button(props) {
    const { className, onButtonClick, title, ...rest } = props;

    return <button className={className ? `btn ${className}` : "btn"} onClick={onButtonClick}>{title}</button>;
}
