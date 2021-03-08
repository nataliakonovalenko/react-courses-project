import Modal from "../../Modal/Modal";
import React from "react";
import EditMovieForm from "../../Modal/ModalContent/EditMovieForm/EditMovieForm";
import DeleteMovie from "../../Modal/ModalContent/DeleteMovie/DeleteMovie";
import "./movie-dropdown-list.scss"

export default class MovieDropdownList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowModalEdit: false,
            isShowModalDelete: false
        }
    }

    handleShowModalEdit = (e) => {
      e.preventDefault();
      this.setState({
          isShowModalEdit: true
      })
    };

    handleShowModalDelete = (e) => {
        e.preventDefault();
        this.setState({
            isShowModalDelete: true
        })
    };

    handleCloseModalDelete = () => {
        this.setState({
            isShowModalDelete: false
        })
    };

    handleCloseModalEdit = () => {
        this.setState({
            isShowModalEdit: false
        })
    };

    render() {
        return (
            <ul className="movie-dropdown-list">
                <li>
                    <a href="#" onClick={this.handleShowModalEdit}>Edit</a>
                    <Modal isOpen={this.state.isShowModalEdit} onClose={this.handleCloseModalEdit}>
                        <EditMovieForm />
                    </Modal>
                </li>
                <li>
                    <a href="#" onClick={this.handleShowModalDelete}>Delete</a>
                    <Modal isOpen={this.state.isShowModalDelete} onClose={this.handleCloseModalDelete}>
                        <DeleteMovie />
                    </Modal>
                </li>
            </ul>
        )
    }
}