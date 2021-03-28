import * as axios from "axios";
import { DateTime } from "luxon";
import React from "react";

const mapBackendMovieToAppMovie = (movie) => {
    return Object.assign({},  movie, {
        release_date: DateTime.fromFormat(movie.release_date, "y-MM-dd"),
    })
};

const mapAppMovieToBackendMovie = (movie) => {
    return Object.assign( {}, movie, {
        release_date: movie.release_date.toFormat("y-MM-dd"),
    })
};

class Api {
    constructor() {
        this.instance = axios.create({
            baseURL: "http://localhost:4000/movies"
        });
    }

    getMovies() {
        return this.instance.get().then((response) => {
            const data = response.data;

            return {
                limit: data.limit,
                offset: data.offset,
                totalAmount: data.totalAmount,
                data: data.data.map(movie => mapBackendMovieToAppMovie(movie))
            };
        })
    }

    editMovie(movie) {
        return this.instance.put('/', mapAppMovieToBackendMovie(movie));
    }

    addMovie(movie) {
        return this.instance.post('/', mapAppMovieToBackendMovie(movie));
    }

    deleteMovie(data){
        return this.instance.delete(data);
    }

    sortMovies(sortByParam, sortOrderParam){
        return this.instance.get('/', {
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
                data: data.data.map(movie => mapBackendMovieToAppMovie(movie))
            };
        })
    }

    filterMovies(filter){
        return this.instance.get('/', {
            params: {
                filter: filter
            }
        }).then((response) => {
            const data = response.data;

            return {
                limit: data.limit,
                offset: data.offset,
                totalAmount: data.totalAmount,
                data: data.data.map(movie => mapBackendMovieToAppMovie(movie))
            };
        })
    }
}

export default new Api();
