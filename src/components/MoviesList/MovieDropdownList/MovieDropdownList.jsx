import React from "react";
import "./movie-dropdown-list.scss";

const MovieDropdownList = (props) => {
    const handleEditClick = (e) => {
        e.preventDefault();
        props.onEditClick();
    };

    const handleDeleteClick = (e) => {
        e.preventDefault();
        props.onDeleteClick();
    };

    return (
        <ul className="movie-dropdown-list">
            <li>
                <a href="#" onClick={handleEditClick}>Edit</a>
            </li>
            <li>
                <a href="#" onClick={handleDeleteClick}>Delete</a>
            </li>
        </ul>
    );
};

export default MovieDropdownList;
