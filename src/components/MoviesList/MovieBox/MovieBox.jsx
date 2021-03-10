import React from "react";
import PropTypes from "prop-types";
import "./movie-box.scss"
import MovieDropdownList from "../MovieDropdownList/MovieDropdownList";

export default class MovieBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false,
            isShowModalEdit: false,
            isShowModalDelete: false
        }
    }

    showDropdown = () => {
        this.setState({
            showDropdown: true
        })
    };

    hideDropdown = () => {
        this.setState({
            showDropdown: false
        })
    };

    handleEditAction = () => {
        this.props.onAction('edit', this.props.movie);
    };

    handleDeleteAction = () => {
        this.props.onAction('delete', this.props.movie);
    };

    render() {
        const {poster_path, title, genres, release_date} = this.props.movie;

        return (
            <>
                <div className="movie-box">
                    <img src={poster_path} alt=""/>
                    <div className="movie-description">
                        <div className="movie-heading">
                            <h2>{title}</h2>
                            <span className="movie-title">{genres.join(', ')}</span>
                        </div>
                        <span className="movie-year">{release_date.getFullYear()}</span>
                    </div>
                    <div className="movie-dropdown">
                        <button type="button" onClick={this.showDropdown} className="movie-edit-icon"></button>
                        {
                            this.state.showDropdown ? (
                                <div className="movie-dropdown-wrap">
                                    <MovieDropdownList
                                        onEditClick={this.handleEditAction}
                                        onDeleteClick={this.handleDeleteAction} />
                                    <button
                                        className="movie-dropdown-close"
                                        onClick={this.hideDropdown}
                                    >X</button>
                                </div>
                            ): null
                        }
                    </div>
                </div>
            </>
        )
    }
};

MovieBox.propTypes = {
    movie: PropTypes.exact({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.string).isRequired,
        release_date: PropTypes.instanceOf(Date).isRequired,
        id: PropTypes.number.isRequired,
        tagline: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        vote_count: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired,
        budget: PropTypes.number.isRequired,
        revenue: PropTypes.number.isRequired,
        runtime: PropTypes.number.isRequired,
    }),
};
