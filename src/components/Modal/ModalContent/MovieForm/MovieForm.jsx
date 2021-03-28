import React, {useState, useContext} from "react";
import Button from "../../../Button/Button";
import FormRow from "../../../Forms/FormRow";
import {connect} from "react-redux";
import { DateTime } from "luxon";
import {Field, FieldArray, Formik} from "formik";
import {editMovie, addMovie} from "../../../../redux/ActionCreators";

const MovieForm = (props) => {
    const selectOptions = ["All", "Documentary", "Comedy", "Horror", "Crime"];

    const handleFormikSubmit = (values, { setSubmitting }) => {
        const date = DateTime.fromFormat(values.release_date, "dd/MM/y");

        setSubmitting(true);

        const formData = Object.assign({}, props.movie, values, {
            release_date: date,
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
    };

    return(
        <Formik
            initialValues={{
                title: props.isEditMovieForm ? props.movie.title : "",
                release_date: props.isEditMovieForm ? props.movie.release_date.toFormat("dd/MM/y") : "",
                poster_path: props.isEditMovieForm ? props.movie.poster_path : "",
                overview: props.isEditMovieForm ? props.movie.overview : "",
                runtime: props.isEditMovieForm ? props.movie.runtime : "",
                genres: props.isEditMovieForm ? props.movie.genres : [],
            }}
            validateOnChange={false}
            validate={values => {
                const errors = {};

                const date = DateTime.fromFormat(values.release_date, "dd/MM/y")

                if (!date.isValid) {
                    errors.release_date = "Date is invalid";
                }

                return errors;
            }}
            onSubmit={handleFormikSubmit}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  submitForm,
                  isSubmitting,
              }) => {
                return (
                    <form className="movie-form">
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
                        <FormRow label="Release date">
                            <input
                                id="Release date"
                                type="text"
                                name="release_date"
                                placeholder="Select Date"
                                value={values.release_date}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </FormRow>
                        {errors.release_date && touched.release_date && errors.release_date}
                        <FormRow label="Movie URL">
                            <input
                                id="Movie URL"
                                type="text"
                                name="poster_path"
                                placeholder="Movie URL here"
                                value={values.poster_path}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </FormRow>
                        {/*<FormRow label="Genre">*/}
                        {/*    <div className="select">*/}
                        {/*        <FieldArray*/}
                        {/*            as="select"*/}
                        {/*            name="genres"*/}
                        {/*            multiple={true}*/}
                        {/*            onChange={handleChange}*/}
                        {/*            onBlur={handleBlur}*/}
                        {/*        >*/}
                        {/*            {values.genres.map((option, index) => <option key={`option-${index}`} value={index}>{option}</option>)}*/}
                        {/*        </FieldArray>*/}
                        {/*    </div>*/}
                        {/*</FormRow>*/}
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
                        <FormRow label="Runtime">
                            <input
                                id="Runtime"
                                type="text"
                                name="runtime"
                                placeholder="Runtime here"
                                value={values.runtime}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </FormRow>

                        <div className="buttons-holder">
                            <Button type="button" className="btn-outline" title="reset" onButtonClick={() => {console.log("reset")}} />
                            {props.isEditMovieForm ? (
                                <Button title="save" type="button" onButtonClick={(e) => {submitForm(); e.preventDefault();}} />
                            ): <Button title="submit" type="submit" onButtonClick={(e) => {submitForm(); e.preventDefault();}}/> }
                        </div>
                    </form>
                )
            }}
        </Formik>
    )
};

const mapStateToProps = (state, ownProps) => {
     if (ownProps.isEditMovieForm) {
        const movieIndex = state.moviesList.findIndex(movie => movie.id === ownProps.movieId);

        let currentMovie = null;
        if (movieIndex !== -1) {
            currentMovie = state.moviesList[movieIndex];
        }

        return {
            movie: currentMovie
        }
     } else {
         return {}
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

export default connect(mapStateToProps, mapDispatchToProps)(MovieForm);
