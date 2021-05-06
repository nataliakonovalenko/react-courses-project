import React from "react";
import { object, withKnobs } from "@storybook/addon-knobs";
import FilterList from "./FilterList";

const shortid = require("shortid");

export default {
    title: "FilterList",
    decorators: [withKnobs],
    component: FilterList,
};

export const List = () => {
    const filterArray = ["All", "Documentary", "Comedy", "Horror", "Crime"];

    const value = object("filterItems", filterArray);

    return (
        <ul className="filter-list">
            {value.map((filterLink) => {
                return (
                    <li key={shortid.generate()}>
                        <a href="#">{filterLink}</a>
                    </li>
                );
            })}
        </ul>
    );
};
