import React from "react";
import Button from "../../../Button/Button";
import FormRow from "../../../Forms/FormRow";
import {connect} from "react-redux";
import { DateTime } from "luxon";
import { withFormik } from 'formik';
import {editMovie, addMovie} from "../../../../store/movie/action-creators";
import CustomSelect from "../../../Forms/Select";
import * as Yup from "yup";

const validation =  Yup.object().shape({
    title: Yup.string().required("Title is required"),
    /*releaseDate: Yup.string().required("Release date is required"),*/
    posterPath: Yup.string().required("Poster URL is required"),
    overview: Yup.string().required("Overview is required"),
    runtime: Yup.number().required("Runtime minimum is 0").positive().integer().min(0),
});

const MovieForm = (props) => {
    const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        setFieldValue,
        setFieldTouched,
        dirty,
        resetForm
    } = props;

    const handleResetForm = () => {
        resetForm({
            values: {
                title: "",
                releaseDate: "",
                posterPath: "",
                overview: "",
                runtime: "",
                genres: []
            }
        });
    };

    return(
        <form className="movie-form" onSubmit={handleSubmit} >
            {isSubmitting ? "...submiting" : null}
            <h1>
                {props.isEditMovieForm ? (
                    "Edit"
                ): "Add"} movie
            </h1>
            {props.isEditMovieForm ? (
                <>
                    <span className="label">Movie ID</span>
                    <div className="form-text">{props.movie.id}</div>
                </>
            ) : null}
            <FormRow label="Title">
                <input
                    id="Title"
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </FormRow>
            {touched.title && errors.title ? (
                <div>{errors.title}</div>
            ) : null}
            <FormRow label="Release date">
                <input
                    id="Release date"
                    type="text"
                    name="releaseDate"
                    placeholder="Select Date"
                    value={values.releaseDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </FormRow>
            <FormRow label="Movie URL">
                <input
                    id="Movie URL"
                    type="text"
                    name="posterPath"
                    placeholder="Movie URL here"
                    value={values.posterPath}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </FormRow>
            {touched.posterPath && errors.posterPath ? (
                <div>{errors.posterPath}</div>
            ) : null}
            <FormRow label="Genre">
                <CustomSelect
                    id="genres"
                    name="genres"
                    value={values.genres}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                />
            </FormRow>
            <FormRow label="Overview">
                <input
                    id="Overview"
                    type="text"
                    name="overview"
                    placeholder="Overview here"
                    value={values.overview}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </FormRow>
            {touched.overview && errors.overview ? (
                <div>{errors.overview}</div>
            ) : null}
            <FormRow label="Runtime">
                <input
                    id="Runtime"
                    type="number"
                    name="runtime"
                    placeholder="Runtime here"
                    value={values.runtime}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </FormRow>
            {touched.runtime && errors.runtime ? (
                <div>{errors.runtime}</div>
            ) : null}

            <div className="buttons-holder">
                <Button type="reset" className="btn-outline" title="reset" onButtonClick={handleResetForm} disabled={!dirty || isSubmitting} />
                {props.isEditMovieForm ? (
                    <Button title="save" type="submit" disabled={isSubmitting} />
                ): <Button title="submit" type="submit" disabled={isSubmitting} /> }
            </div>
        </form>
    )
};

const EnhancedForm  = withFormik({
    mapPropsToValues: (props ) => ({
        title: props.isEditMovieForm ? props.movie.title : "",
        releaseDate: props.isEditMovieForm ? props.movie.releaseDate.toFormat("dd/MM/y") : "",
        posterPath: props.isEditMovieForm ? props.movie.posterPath : "",
        overview: props.isEditMovieForm ? props.movie.overview : "",
        runtime: props.isEditMovieForm ? props.movie.runtime : "",
        genres: props.isEditMovieForm ? props.movie.genres : [],
    }),
    validateOnChange: false,
    validationSchema: validation,
    handleSubmit: (values, { props, setSubmitting }) => {
        const date = DateTime.fromFormat(values.releaseDate, "dd/MM/y");

        setSubmitting(true);

        const formData = Object.assign({}, props.movie, values, {
            releaseDate: date,
            runtime: Number(values.runtime),
        });

        if (props.isEditMovieForm) {
            props.editCurrentMovie(formData).then((data) => {
                setSubmitting(false);

                props.onClose();
            }, (err) => {
                setSubmitting(false);

                console.log("err", err);
            });
        } else {
            props.addMovie(formData).then((data) => {
                setSubmitting(false);

                props.onClose();
            }, (err) => {
                setSubmitting(false);

                console.log("err", err);
            });
        }
    },
})(MovieForm);

const mapStateToProps = (state, ownProps) => {
    const movieIndex = state.movie.moviesList.findIndex(movie => movie.id === ownProps.movieId);

    let currentMovie = null;
    if (movieIndex !== -1) {
        currentMovie = state.movie.moviesList[movieIndex];
    }

    return {
        movie: currentMovie
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        editCurrentMovie: (movieData) => {
            return dispatch(editMovie(movieData))
        },
        addMovie: (movieData) => {
            return dispatch(addMovie(movieData))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EnhancedForm);
