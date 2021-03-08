import React from "react";

export default function AddMovieForm() {
    return(
        <form action="#" className="add-movie-form">
            <h1>Add movie</h1>
            <div className="form-row">
                <label htmlFor="title">Title</label>
                <input id="title" type="text" placeholder="Title" defaultValue="Moana"/>
            </div>
            <div className="form-row">
                <label htmlFor="release-date">Release date</label>
                <input id="release-date" type="date" placeholder="Select date"/>
            </div>
            <div className="form-row">
                <label htmlFor="movie-url">Movie URL</label>
                <input id="movie-url" type="text" placeholder="Movie URL here"/>
            </div>
            <div className="form-row">
                <label htmlFor="genre">Genre</label>
                <div className="select">
                    <select id="genre" defaultValue='DEFAULT'>
                        <option value="DEFAULT" disabled>Select genre</option>
                        <option value="All">All</option>
                        <option value="Documentary">Documentary</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Horror">Horror</option>
                        <option value="Crime">Crime</option>
                    </select>
                </div>
            </div>
            <div className="form-row">
                <label htmlFor="overview">Overview</label>
                <input id="overview" type="text" placeholder="Overview here"/>
            </div>
            <div className="form-row">
                <label htmlFor="runtime">Runtime</label>
                <input id="runtime" type="text" placeholder="Runtime here"/>
            </div>
            <div className="buttons-holder">
                <button type="button" className="btn btn-outline">reset</button>
                <button type="button" className="btn">submit</button>
            </div>
        </form>
    )
}