import React, {useContext, useCallback} from "react";
import Modal from "./Modal";
import MovieForm from "./ModalContent/MovieForm/MovieForm";
import DeleteMovie from "./ModalContent/DeleteMovie/DeleteMovie";
import ModalContext from "../../ModalContext";

const ModalManager = (props) => {
    const {modalToShow} = useContext(ModalContext);

    const modals={
        edit: () => <MovieForm isEditMovieForm={true} />,
        delete: () => <DeleteMovie />,
        add: () => <MovieForm />
    };

    const handleClose = () => {
        props.onClose && props.onClose();
    };

    return modalToShow ? (
        <Modal onClose={handleClose}>
            {modals[modalToShow]()}
        </Modal>
    ) : null
};

export default ModalManager;
