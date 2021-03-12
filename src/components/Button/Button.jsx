import React from "react";
import "./button.scss"

export default function Button(props) {
    const {className, ...rest} = props;

    return <button className={className ? `btn ${className}` : "btn" } onClick={props.onButtonClick}>{props.title}</button>
}