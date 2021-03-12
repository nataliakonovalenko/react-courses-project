import React from "react";

export default function DeleteMovie() {
    return(
        <>
            <h1>Delete movie</h1>
            <p>Are you sure want to delete this movie?</p>
            <div className="buttons-holder">
                <button type="button" className="btn">Confirm</button>
            </div>
        </>
    )
}