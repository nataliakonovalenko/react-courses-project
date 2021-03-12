import React from "react";

export default function FormRow(props) {
    return(
        <div className="form-row">
            <label htmlFor={props.label}>{props.label}</label>
            {props.children}
        </div>
    )
}