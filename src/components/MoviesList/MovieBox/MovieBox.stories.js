import React from "react";
import { withKnobs, text, files, date } from "@storybook/addon-knobs";
import MovieBox from "./MovieBox";
import BgImage from "../../../assets/hero-img.jpg";

export default {
    title: "MovieBox",
    decorators: [withKnobs],
    component: MovieBox,
};

export const Movie = () => {
    const image = files("img", '.jpg, jpeg, .png', BgImage);
    function myDateKnob(name, defaultValue) {
        const stringTimestamp = date(name, defaultValue);
        return new Date(stringTimestamp);
    }
    const movieDate = myDateKnob("date", new Date());
    const genresArray = ["Adventure", "Comedy", "Family"];
    const genresString = genresArray.join(", ");

    return (
        <div className="movie-box" role="button" tabIndex="0">
            <img src={image} width="500" height="750" alt="img description" />
            <div className="movie-description">
                <div className="movie-heading">
                    <h2>{text("title", "Movie title")}</h2>
                    <span className="movie-title">{text("genres", genresString)}</span>
                </div>
                <span className="movie-year">{movieDate.getFullYear()}</span>
            </div>
        </div>
    );
};
