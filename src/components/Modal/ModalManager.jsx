import React from "react";
import Modal from "./Modal";
import MovieForm from "./ModalContent/MovieForm/MovieForm";
import DeleteMovie from "./ModalContent/DeleteMovie/DeleteMovie";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {closeModal} from "../../redux/modal/action-creators";

const ModalManager = (props) => {
    const { modalData, modalToShow, closeModal } = props;

    const modals={
        edit: () => <MovieForm isEditMovieForm={true} movieId={modalData.movieId} onClose={() => {handleClose()}} />,
        delete: () => <DeleteMovie onConfirm={() => {handleClose()}} />,
        add: () => <MovieForm onClose={() => {handleClose()}} />
    };

    const handleClose = () => {
        props.closeModal();
    };

    return modalToShow ? (
        <Modal onClose={handleClose}>
            {modals[modalToShow]()}
        </Modal>
    ) : null
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ closeModal }, dispatch)
};

const mapStateToProps = (state) => {
    return {
        modalToShow: state.modalReducer.modalToShow,
        modalData: state.modalReducer.modalData,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalManager);
