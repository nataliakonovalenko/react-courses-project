import * as axios from "axios";

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
                data: data.data.map(movie => ({
                    id: movie.id,
                    title: movie.title,
                    tagline: movie.tagline,
                    vote_average: movie.vote_average,
                    vote_count: movie.vote_count,
                    release_date: movie.release_date,
                    poster_path: movie.poster_path,
                    overview: movie.overview,
                    budget: movie.budget,
                    revenue: movie.revenue,
                    genres: movie.genres,
                    runtime: movie.runtime
                }))
            };
        })
    }

    editMovie(data) {
        return this.instance.put('/', data);
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
                data: data.data.map(movie => ({
                    id: movie.id,
                    title: movie.title,
                    tagline: movie.tagline,
                    vote_average: movie.vote_average,
                    vote_count: movie.vote_count,
                    release_date: movie.release_date,
                    poster_path: movie.poster_path,
                    overview: movie.overview,
                    budget: movie.budget,
                    revenue: movie.revenue,
                    genres: movie.genres,
                    runtime: movie.runtime
                }))
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
                data: data.data.map(movie => ({
                    id: movie.id,
                    title: movie.title,
                    tagline: movie.tagline,
                    vote_average: movie.vote_average,
                    vote_count: movie.vote_count,
                    release_date: movie.release_date,
                    poster_path: movie.poster_path,
                    overview: movie.overview,
                    budget: movie.budget,
                    revenue: movie.revenue,
                    genres: movie.genres,
                    runtime: movie.runtime
                }))
            };
        })
    }
}

//release_date: new Date(movie.release_date.split('-')[0], movie.release_date.split('-')[1], movie.release_date.split('-')[2]),


export default new Api();
