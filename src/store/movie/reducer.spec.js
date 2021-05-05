import * as types from "./action-types";
import reducer from "./reducer";

describe("Movie reducer", () => {
    describe("INITIAL_STATE", () => {
        it('should return the initial state', () => {
            expect(reducer(undefined, {})).toEqual(
                {
                    moviesList: [],
                    detailsLayoutMovie: null,
                    movieDetails: null,
                },
            );
        });
    });

    describe("LOAD_MOVIE_LIST_SUCCESS", () => {
        it("should set movie list into store", () => {
            expect(reducer({}, {
                type: types.LOAD_MOVIE_LIST_SUCCESS,
                payload: {
                    moviesList: [
                        {
                            id: 1,
                            title: "title",
                        },
                    ],
                },
            })).toEqual(
                expect.objectContaining({
                    moviesList: [
                        {
                            id: 1,
                            title: "title",
                        },
                    ],
                }),
            );
        });
    });

    describe("LOAD_MOVIE_DETAILS", () => {
        it("should set movie details into store", () => {
            expect(reducer({}, {
                type: types.LOAD_MOVIE_DETAILS,
                payload: {
                    movieDetails: {
                        id: 1,
                        title: "title",
                    },
                },
            })).toEqual(
                expect.objectContaining({
                    movieDetails: {
                        id: 1,
                        title: "title",
                    },
                }),
            );
        });
    });

    describe("DELETE_MOVIE", () => {
        it("should delete movie from movie list and set into the store", () => {
            const moviesList = [
                {
                    id: 1,
                    title: "title 1",
                },
                {
                    id: 2,
                    title: "title 2",
                },
                {
                    id: 3,
                    title: "title 3",
                },
            ];

            expect(reducer({ moviesList }, {
                type: types.DELETE_MOVIE,
                payload: {
                    movieId: 2,
                },
            })).toEqual(
                expect.objectContaining({
                    moviesList: [
                        {
                            id: 1,
                            title: "title 1",
                        },
                        {
                            id: 3,
                            title: "title 3",
                        },
                    ],
                }),
            );
        });
    });

    describe("SORT_MOVIES", () => {
        it("should set sorted movies into store", () => {
            expect(reducer({}, {
                type: types.SORT_MOVIES,
                payload: {
                    moviesList: [
                        {
                            id: 1,
                            title: "title 1",
                        },
                        {
                            id: 2,
                            title: "title 2",
                        },
                    ],
                },
            })).toEqual(
                expect.objectContaining({
                    moviesList: [
                        {
                            id: 1,
                            title: "title 1",
                        },
                        {
                            id: 2,
                            title: "title 2",
                        },
                    ],
                }),
            );
        });
    });

    describe("FILTER_MOVIES", () => {
        it("should set filtered movies into store", () => {
            expect(reducer({}, {
                type: types.FILTER_MOVIES,
                payload: {
                    moviesList: [
                        {
                            id: 1,
                            title: "title 1",
                        },
                        {
                            id: 2,
                            title: "title 2",
                        },
                    ],
                },
            })).toEqual(
                expect.objectContaining({
                    moviesList: [
                        {
                            id: 1,
                            title: "title 1",
                        },
                        {
                            id: 2,
                            title: "title 2",
                        },
                    ],
                }),
            );
        });
    });

    describe("ADD_MOVIE", () => {
        it("should add movie into the movies list and set into the store", () => {
            const moviesList = [
                {
                    id: 1,
                    title: "title 1",
                },
                {
                    id: 2,
                    title: "title 2",
                },
            ];

            expect(reducer({ moviesList }, {
                type: types.ADD_MOVIE,
                payload: {
                    movie: {
                        data: {
                            id: 5,
                            title: "title 5",
                        },
                    },
                },
            })).toEqual(
                expect.objectContaining({
                    moviesList: [
                        {
                            id: 1,
                            title: "title 1",
                        },
                        {
                            id: 2,
                            title: "title 2",
                        },
                        {
                            id: 5,
                            title: "title 5",
                        },
                    ],
                }),
            );
        });
    });

    describe("EDIT_MOVIE", () => {
        it("should edit movie and set into the store", () => {
            const moviesList = [
                {
                    id: 1,
                    title: "title 1",
                },
                {
                    id: 2,
                    title: "title 2",
                },
            ];

            expect(reducer({ moviesList }, {
                type: types.EDIT_MOVIE,
                payload: {
                    formData: {
                        id: 1,
                        title: "title 1",
                        name: "name",
                    },
                },
            })).toEqual(
                expect.objectContaining({
                    moviesList: [
                        {
                            id: 1,
                            title: "title 1",
                            name: "name",
                        },
                        {
                            id: 2,
                            title: "title 2",
                        },
                    ],
                }),
            );
        });
    });
});
