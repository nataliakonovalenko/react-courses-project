import React from "react";
import Modal from "./Modal";
import MovieForm from "./ModalContent/MovieForm/MovieForm";
import DeleteMovie from "./ModalContent/DeleteMovie/DeleteMovie";

const ModalManager = (props) => {
    const modals={
        edit: (modalData) => <MovieForm isEditMovieForm={true} movie={modalData.movie}/>,
        delete: (modalData) => <DeleteMovie movie={modalData.movie} />,
        add: () => <MovieForm />
    };

    const handleClose = () => {
        props.onClose && props.onClose();
    };

    return props.modalToShow ? (
        <Modal onClose={handleClose}>
            {modals[props.modalToShow](props.modalData)}
        </Modal>
    ) : null
};

export default ModalManager;
