import React from "react";
import "./movie-dropdown-list.scss"

export default class MovieDropdownList extends React.Component {
    constructor(props) {
        super(props);
    }

    handleEditClick = (e) => {
        e.preventDefault();
        this.props.onEditClick();
    };

    handleDeleteClick = (e) => {
        e.preventDefault();
        this.props.onDeleteClick();
    };

    render() {
        return (
            <ul className="movie-dropdown-list">
                <li>
                    <a href="#" onClick={this.handleEditClick} >Edit</a>
                </li>
                <li>
                    <a href="#" onClick={this.handleDeleteClick}>Delete</a>
                </li>
            </ul>
        )
    }
}