import * as axios from "axios";
import { DateTime } from "luxon";
import React from "react";

const mapBackendMovieToAppMovie = (movie) => {
    return {
        releaseDate: DateTime.fromFormat(movie.release_date, "y-MM-dd"),
        id: movie.id,
        title: movie.title,
        tagline: movie.tagline,
        voteAverage: movie.vote_average,
        voteCount: movie.vote_count,
        posterPath: movie.poster_path,
        overview: movie.overview,
        budget: movie.budget,
        revenue: movie.revenue,
        genres: movie.genres,
        runtime: movie.runtime
    }
};

const mapAppMovieToBackendMovie = (movie) => {
    return {
        release_date: movie.releaseDate.toFormat("y-MM-dd"),
        id: movie.id,
        title: movie.title,
        tagline: movie.tagline,
        vote_average: movie.voteAverage,
        vote_count: movie.voteCount,
        poster_path: movie.posterPath,
        overview: movie.overview,
        budget: movie.budget,
        revenue: movie.revenue,
        genres: movie.genres,
        runtime: movie.runtime
    }
};

class Api {
    constructor() {
        this.instance = axios.create({
            baseURL: "http://localhost:4000/movies"
        });
    }

    getMovie(id) {
        return this.instance.get(id).then((response) => {
            const data = response.data;

            return {
                releaseDate: DateTime.fromFormat(data.release_date, "y-MM-dd"),
                id: data.id,
                title: data.title,
                tagline: data.tagline,
                voteAverage: data.vote_average,
                voteCount: data.vote_count,
                posterPath: data.poster_path,
                overview: data.overview,
                budget: data.budget,
                revenue: data.revenue,
                genres: data.genres,
                runtime: data.runtime
            };
        }).catch((error) => {
            console.log(error);
        });
    }

    editMovie(movie) {
        return this.instance.put("/", mapAppMovieToBackendMovie(movie)).catch((error) => {
            console.log(error);
        });
    }

    addMovie(movie) {
        return this.instance.post("/", mapAppMovieToBackendMovie(movie)).catch((error) => {
            console.log(error);
        });
    }

    deleteMovie(data){
        return this.instance.delete(data).catch((error) => {
            console.log(error);
        });
    }

    sortMovies(sortByParam, sortOrderParam){
        return this.instance.get("/", {
            params: {
                sortBy: sortByParam,
                sortOrder: sortOrderParam
            }
        }).then((response) => {
            const data = response.data;

            return {
                limit: data.limit,
                offset: data.offset,
                totalAmount: data.totalAmount,
                data: data.data.map(mapBackendMovieToAppMovie)
            };
        }).catch((error) => {
            console.log(error);
        });
    }

    filterMovies(filter){
        return this.instance.get("/", {
            params: {
                filter: filter
            }
        }).then((response) => {
            const data = response.data;

            return {
                limit: data.limit,
                offset: data.offset,
                totalAmount: data.totalAmount,
                data: data.data.map(mapBackendMovieToAppMovie)
            };
        }).catch((error) => {
            console.log(error);
        });
    }

    searchMovies(search, searchBy){
        return this.instance.get("/", {
            params: {
                search: search,
                searchBy: searchBy
            }
        }).then((response) => {
            const data = response.data;

            return {
                limit: data.limit,
                offset: data.offset,
                totalAmount: data.totalAmount,
                data: data.data.map(mapBackendMovieToAppMovie)
            };
        }).catch((error) => {
            console.log(error);
        });
    }
}

export default new Api();
