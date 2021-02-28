import React from "react";

export default function ErrorBoundary(props) {

    const ErrorText = () => (
        <h2>Something went wrong...</h2>
    );

    let isEverythingOk = true;

    return(
        <>{ isEverythingOk ? props.children : <ErrorText /> }</>
    )
}