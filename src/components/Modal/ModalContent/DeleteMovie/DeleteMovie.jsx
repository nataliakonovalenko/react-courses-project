import React from "react";
import { connect } from "react-redux";
import Button from "../../../Button/Button";
import { deleteMovie } from "../../../../store/movie/action-creators";
import "../../../Forms/forms.scss";

const DeleteMovie = (props) => {
    const { modalData } = props;

    const handleDeleteMovie = () => {
        props.deleteCurrentMovie(modalData.movieId);
        props.onConfirm();
    };

    return (
        <>
            <h1>Delete movie</h1>
            <p>Are you sure want to delete this movie?</p>
            <div className="buttons-holder">
                <Button title="Confirm" type="button" onButtonClick={handleDeleteMovie} />
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        modalData: state.modal.modalData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCurrentMovie: (id) => {
            dispatch(deleteMovie(id));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteMovie);
