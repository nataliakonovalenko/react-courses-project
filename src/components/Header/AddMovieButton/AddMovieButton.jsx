import React from "react";
import "./add-movie-button.scss"
import Modal from "../../Modal/Modal";
import AddMovieForm from "../../Modal/ModalContent/AddMovieForm/AddMovieForm";

export default class AddMovieButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowModal: false
        }
    }

    handleModalShow = () => {
        this.setState({
            isShowModal: true
        })
    };

    handleModalClose = () => {
        this.setState({
            isShowModal: false
        })
    };

    render() {
        return(
            <>
                <button className="add-movie-btn" onClick={this.handleModalShow}>+ Add Movie</button>
                <Modal isOpen={this.state.isShowModal} onClose={this.handleModalClose}>
                    <AddMovieForm />
                </Modal>
            </>
        )
    }
}

