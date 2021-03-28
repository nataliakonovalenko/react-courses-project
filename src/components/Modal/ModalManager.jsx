import React, {useContext, useCallback} from "react";
import Modal from "./Modal";
import MovieForm from "./ModalContent/MovieForm/MovieForm";
import DeleteMovie from "./ModalContent/DeleteMovie/DeleteMovie";
import ModalContext from "../../ModalContext";

const ModalManager = (props) => {
    const {modalData, modalToShow, setModalData, setModalToShow } = useContext(ModalContext);

    const modals={
        edit: () => <MovieForm isEditMovieForm={true} movieId={modalData.movieId} onClose={() => {handleClose()}} />,
        delete: () => <DeleteMovie onConfirm={() => {handleClose()}} />,
        add: () => <MovieForm onClose={() => {handleClose()}} />
    };

    const handleClose = () => {
        setModalToShow(null);
        setModalData({});
    };

    return modalToShow ? (
        <Modal onClose={handleClose}>
            {modals[modalToShow]()}
        </Modal>
    ) : null
};

export default ModalManager;
