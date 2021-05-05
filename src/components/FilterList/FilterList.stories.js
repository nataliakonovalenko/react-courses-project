import React from "react";
import { text, withKnobs } from "@storybook/addon-knobs";
import FilterList from "./FilterList";

const shortid = require("shortid");

export default {
    title: "FilterList",
    decorators: [withKnobs],
    component: FilterList,
};

export const List = () => {
    const filterArray = ["All", "Documentary", "Comedy", "Horror", "Crime"];

    return (
        <ul className="filter-list">
            {filterArray.map((filterLink, index) => {
                return (
                    <li key={shortid.generate()}>
                        <a href="#">{text(`item${index}`, filterLink)}</a>
                    </li>
                );
            })}
        </ul>
    );
};
