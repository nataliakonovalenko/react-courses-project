import React from "react";
import "./search-form.scss"
import Button from "../Button/Button";
import { Formik } from 'formik';
import {useHistory} from 'react-router-dom';

const SearchForm = () => {
    const history = useHistory();

    const handleSubmit = (values) => {
        history.push({
            pathname: `/search/${values.search}`,
        })
    };

    return(
        <div className="search-block">
            <h1>Find your movie</h1>
            <Formik
                initialValues={{ search: "" }}
                onSubmit={handleSubmit}>
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

export default SearchForm;

