import React from "react";
import "./sort-box.scss"

export default function SortBox() {
    return(
        <div className="sort-box">
            <span className="sort-title">Sort by</span>
            <div className="select sort-select">
                {/*<div className="sort-select__title">Release Date</div>*/}
                <select>
                    <option>Release Date</option>
                    <option>Rating</option>
                </select>
            </div>
        </div>
    )
}