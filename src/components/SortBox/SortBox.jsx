import React from "react";
import "./SortBox.scss"

export default function SortBox() {
    return(
        <div className="sort-box">
            <span className="sort-title">Sort by</span>
            <div className="sort-select">
                <div className="sort-select__title">Release Date</div>
            </div>
        </div>
    )
}