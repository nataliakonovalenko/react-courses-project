import React from "react";
import "./search-form.scss"
import Button from "../Button/Button";
import { Formik } from 'formik';
import {connect} from "react-redux";
import {searchMovies} from "../../store/movie/action-creators";

const SearchForm = (props) => {
    return(
        <div className="search-block">
            <h1>Find your movie</h1>
            <Formik
                initialValues={{ search: "" }}
                onSubmit={(values) => {
                    props.searchMovies(values.search, "title")
                }}
                >
                {props => (
                    <form onSubmit={props.handleSubmit} className="search-form">
                        <input
                            type="search"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            name="search"
                            placeholder="What do you want to watch?"
                            value={props.search}
                        />
                        <Button type="submit" title="submit" />
                    </form>
                )}
            </Formik>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchMovies: (search, searchBy) => {
            dispatch(searchMovies(search, searchBy))
        }
    };
};

export default connect(null, mapDispatchToProps)(SearchForm);

