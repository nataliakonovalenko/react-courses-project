import React from "react";

export default function ErrorBoundary(props) {
    const ErrorText = () => (
        <h2>Something went wrong...</h2>
    );

    const isEverythingOk = true;

    return (
        <>{ isEverythingOk ? props.children : <ErrorText /> }</>
    );
}
