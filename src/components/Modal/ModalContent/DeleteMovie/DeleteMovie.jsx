import React from "react";
import Button from "../../../Button/Button";
import {connect} from "react-redux";
import {deleteMovie} from "../../../../redux/movie/action-creators";

const DeleteMovie =(props) => {
    const {modalData} = props;

    const handleDeleteMovie = () => {
        props.deleteCurrentMovie(modalData.movieId);
        props.onConfirm();
    };

    return(
        <>
            <h1>Delete movie</h1>
            <p>Are you sure want to delete this movie?</p>
            <div className="buttons-holder">
                <Button title="Confirm" type="button" onButtonClick={handleDeleteMovie} />
            </div>
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        modalData: state.modalReducer.modalData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCurrentMovie: (id) => {
            dispatch(deleteMovie(id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteMovie);