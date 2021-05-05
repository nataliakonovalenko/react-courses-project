import React from "react";

export default function FormRow(props) {
    const { label, children } = props;

    return (
        <div className="form-row">
            <label htmlFor={label}>{label}</label>
            {children}
        </div>
    );
}
