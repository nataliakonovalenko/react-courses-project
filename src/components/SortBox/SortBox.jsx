import React, {useState} from "react";
import "./sort-box.scss"
import {sortMoviesList} from "../../redux/reducer";
import {connect} from "react-redux";

const SortBox = (props) => {
    const selectOptions = ['Release Date', 'Rating', 'Genre'];

    const handleOptionChange = (e) => {
        let sortByParam = '';
        if (e.target.value === 'Release Date') {
            sortByParam = 'release_date'
        } else if (e.target.value === 'Rating') {
            sortByParam = 'vote_average'
        } else if (e.target.value === 'Genre') {
            sortByParam = 'genres'
        }
        props.sortMovies(sortByParam, 'asc');
    };

    return(
        <div className="sort-box">
            <span className="sort-title">Sort by</span>
            <div className="select sort-select">
                <select onChange={handleOptionChange}>
                    {selectOptions.map((option, index) => <option key={`option-${index}`} value={option}>{option}</option>)}
                </select>
            </div>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        sortMovies: (sortByParam, orderByParam) => {
            dispatch(sortMoviesList(sortByParam, orderByParam))
        }
    };
};

export default connect(null, mapDispatchToProps)(SortBox);