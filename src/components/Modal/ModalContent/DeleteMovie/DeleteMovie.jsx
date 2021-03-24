import React, {useContext} from "react";
import Button from "../../../Button/Button";
import {deleteMovie} from "../../../../redux/reducer";
import {connect} from "react-redux";
import ModalContext from "../../../../ModalContext";

const DeleteMovie =(props) => {
    const {modalData} = useContext(ModalContext);

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

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCurrentMovie: (id) => {
            dispatch(deleteMovie(id))
        }
    };
};

export default connect(null, mapDispatchToProps)(DeleteMovie);