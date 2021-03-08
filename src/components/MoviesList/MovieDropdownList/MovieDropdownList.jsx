import Modal from "../../Modal/Modal";
import React from "react";
import EditMovieForm from "../../Modal/ModalContent/EditMovieForm/EditMovieForm";
import DeleteMovie from "../../Modal/ModalContent/DeleteMovie/DeleteMovie";
import "./movie-dropdown-list.scss"

export default class MovieDropdownList extends React.Component {
    constructor(props) {
        super(props);
    }

    handleEditClick = (e) => {
        e.preventDefault();
        this.props.onModalEditClick();
    };

    handleDeleteClick = (e) => {
        e.preventDefault();
        this.props.onModalDeleteClick();
    };

    render() {
        return (
            <ul className="movie-dropdown-list">
                <li>
                    <a href="#" onClick={this.handleEditClick}>Edit</a>
                </li>
                <li>
                    <a href="#" onClick={this.handleDeleteClick}>Delete</a>
                </li>
            </ul>
        )
    }
}