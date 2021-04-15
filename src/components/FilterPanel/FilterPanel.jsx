import React from "react";
import FilterList from "../FilterList/FilterList";
import SortBox from "../SortBox/SortBox";
import "./filter-panel.scss"

const FilterPanel = () => {
    return(
        <div className="top-panel">
            <FilterList/>
            <SortBox />
        </div>
    )
};

export default FilterPanel;