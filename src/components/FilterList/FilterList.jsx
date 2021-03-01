import React from "react";
import "./FilterList.scss"

export default function FilterList() {
    return(
        <ul className="filter-list">
            <li className="active"><a href="">all</a></li>
            <li><a href="">documentary</a></li>
            <li><a href="">comedy</a></li>
            <li><a href="">horror</a></li>
            <li><a href="">crime</a></li>
        </ul>
    )
}