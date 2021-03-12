import React from "react";
import Button from "../../../Button/Button";
import FormRow from "../../../Forms/FormRow";

export default function MovieForm(props) {
    const selectOptions = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

    return(
        <form action="#" className="movie-form">
            <h1>
                {props.isEditMovieForm ? (
                    "Edit"
                ): "Add"} movie
            </h1>
            <FormRow label="Title">
                <input id="Title" placeholder="Title" type="text" {...(props.isEditMovieForm && { defaultValue: props.movie.title })} />
            </FormRow>
            <FormRow label="Release date">
                <input id="Release date" placeholder="Select date" type="date" {...(props.isEditMovieForm && { defaultValue: "Moana" })} />
            </FormRow>
            <FormRow label="Movie URL">
                <input id="Movie URL" placeholder="Movie URL here" type="text" {...(props.isEditMovieForm && { defaultValue: "www.moana.com" })} />
            </FormRow>
            <FormRow label="Genre">
                <div className="select">
                    <select id="genre">
                        {selectOptions.map((option, index) => <option key={`option-${index}`} value={index}>{option}</option>)}
                    </select>
                </div>
            </FormRow>
            <FormRow label="Overview">
                <input id="Overview" placeholder="Overview" type="text" {...(props.isEditMovieForm && { defaultValue: props.movie.overview })} />
            </FormRow>
            <FormRow label="Runtime">
                <input id="Runtime" placeholder="Runtime" type="text" {...(props.isEditMovieForm && { defaultValue: props.movie.runtime })} />
            </FormRow>
            <div className="buttons-holder">
                <Button className="btn-outline" title="reset" type="reset"/>
                {props.isEditMovieForm ? (
                    <Button title="save" type="button"/>
                ): <Button title="submit" type="submit"/> }
            </div>
        </form>
    )
}