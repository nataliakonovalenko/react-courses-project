import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import FilterList from "./FilterList";

export default {
    title: "FilterList",
    decorators: [withKnobs],
    component: FilterList,
};

const filterArray = ["All", "Documentary", "Comedy", "Horror", "Crime"];

export const List = () => {
    return (
        <ul className="filter-list">
            {filterArray.map((filterLink) => {
                return (
                    <li>
                        <a href="#">{filterLink}</a>
                    </li>
                );
            })}
        </ul>
    );
};
