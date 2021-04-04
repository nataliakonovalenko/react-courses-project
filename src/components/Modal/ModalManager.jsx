import React from "react";
import Modal from "./Modal";
import EnhancedForm from "./ModalContent/MovieForm/MovieForm";
import DeleteMovie from "./ModalContent/DeleteMovie/DeleteMovie";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {closeModal} from "../../store/modal/action-creators";

const ModalManager = (props) => {
    const { modalData, modalToShow, closeModal } = props;

    const modals={
        edit: () => <EnhancedForm isEditMovieForm={true} movieId={modalData.movieId} onClose={() => {handleClose()}} />,
        delete: () => <DeleteMovie onConfirm={() => {handleClose()}} />,
        add: () => <EnhancedForm onClose={() => {handleClose()}} />
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
        modalToShow: state.modal.modalToShow,
        modalData: state.modal.modalData,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalManager);
