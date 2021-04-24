import * as actions from "./action-creators";
import * as types from "./action-types";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import api from "./../../api/api";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Movie action creators", () => {
    describe("LOAD_MOVIE_DETAILS", () => {
        describe("async actions", () => {
            afterEach(() => {
                jest.clearAllMocks();
            });

            it("creates LOAD_MOVIE_DETAILS when fetching get movie has been done", () => {
                const getMovieMock = jest.fn();

                jest.spyOn(api, "getMovie").mockImplementation(getMovieMock);

                getMovieMock.mockResolvedValue({id: 1, title: 1});

                const expectedActions = [
                    {
                        type: types.LOAD_MOVIE_DETAILS, payload: {
                            movieDetails: {id: 1, title: 1}
                        }
                    },
                ];

                const store = mockStore({});

                return store.dispatch(actions.getMovie(1)).then(() => {

                    expect(getMovieMock.mock.calls.length).toBe(1);
                    expect(store.getActions()).toEqual(expectedActions)
                })
            });
        });
    });

    describe("DELETE_MOVIE", () => {
        describe("async actions", () => {
            afterEach(() => {
                jest.clearAllMocks();
            });

            it("creates DELETE_MOVIE when fetching delete movie has been done", () => {
                const deleteMovieMock = jest.fn();

                jest.spyOn(api, "deleteMovie").mockImplementation(deleteMovieMock);

                deleteMovieMock.mockResolvedValue();

                const expectedActions = [
                    {
                        type: types.DELETE_MOVIE, payload: {
                            movieId: 2
                        }
                    },
                ];

                const store = mockStore({});

                return store.dispatch(actions.deleteMovie(2)).then(() => {

                    expect(deleteMovieMock.mock.calls.length).toBe(1);
                    expect(store.getActions()).toEqual(expectedActions)
                })
            });
        });
    });

    describe("EDIT_MOVIE", () => {
        describe("async actions", () => {
            afterEach(() => {
                jest.clearAllMocks();
            });

            it("creates EDIT_MOVIE when fetching edit movie has been done", () => {
                const editMovieMock = jest.fn();

                jest.spyOn(api, "editMovie").mockImplementation(editMovieMock);

                editMovieMock.mockResolvedValue({id: 1, title: 1});

                const expectedActions = [
                    {
                        type: types.EDIT_MOVIE, payload: {
                            formData: {id: 1, title: 1, name: "name"}
                        }
                    },
                ];

                const store = mockStore({});

                return store.dispatch(actions.editMovie({id: 1, title: 1, name: "name"})).then(() => {

                    expect(editMovieMock.mock.calls.length).toBe(1);
                    expect(store.getActions()).toEqual(expectedActions)
                })
            });
        });
    });

    describe("ADD_MOVIE", () => {
        describe("async actions", () => {
            afterEach(() => {
                jest.clearAllMocks();
            });

            it("creates ADD_MOVIE when fetching add movie has been done", () => {
                const addMovieMock = jest.fn();

                jest.spyOn(api, "addMovie").mockImplementation(addMovieMock);

                addMovieMock.mockResolvedValue({id: 1, title: 2, name: "name"});

                const expectedActions = [
                    {
                        type: types.ADD_MOVIE, payload: {
                            movie: {id: 1, title: 2, name: "name"}
                        }
                    },
                ];

                const store = mockStore({});

                return store.dispatch(actions.addMovie({id: 1, title: 2, name: "name"})).then(() => {

                    expect(addMovieMock.mock.calls.length).toBe(1);
                    expect(store.getActions()).toEqual(expectedActions)
                })
            });
        });
    });

    describe("SORT_MOVIES", () => {
        describe("async actions", () => {
            afterEach(() => {
                jest.clearAllMocks();
            });

            it("creates SORT_MOVIES when fetching sort desc movies has been done", () => {
                const sortMoviesMock = jest.fn();

                jest.spyOn(api, "sortMovies").mockImplementation(sortMoviesMock);

                sortMoviesMock.mockResolvedValue({
                    data: {
                        data: [
                            {id: 2, vote_average: 2},
                            {id: 1, vote_average: 1}
                        ]
                    }
                });

                const expectedActions = [
                    {
                        type: types.SORT_MOVIES, payload: {
                            moviesList: {
                                data: [
                                    {id: 2, vote_average: 2},
                                    {id: 1, vote_average: 1}
                                ]
                            }
                        }
                    },
                ];

                const store = mockStore({});

                return store.dispatch(actions.sortMoviesList("vote_average", "desc")).then(() => {

                    expect(sortMoviesMock.mock.calls.length).toBe(1);
                    expect(store.getActions()).toEqual(expectedActions)
                })
            });

            it("creates SORT_MOVIES when fetching sort asc movies has been done", () => {
                const sortMoviesMock = jest.fn();

                jest.spyOn(api, "sortMovies").mockImplementation(sortMoviesMock);

                sortMoviesMock.mockResolvedValue({
                    data: {
                        data: [
                            {id: 1, vote_average: 1},
                            {id: 2, vote_average: 2}
                        ]
                    }
                });

                const expectedActions = [
                    {
                        type: types.SORT_MOVIES, payload: {
                            moviesList: {
                                data: [
                                    {id: 1, vote_average: 1},
                                    {id: 2, vote_average: 2}
                                ]
                            }
                        }
                    },
                ];

                const store = mockStore({});

                return store.dispatch(actions.sortMoviesList("vote_average", "desc")).then(() => {

                    expect(sortMoviesMock.mock.calls.length).toBe(1);
                    expect(store.getActions()).toEqual(expectedActions)
                })
            });
        });
    });

    describe("FILTER_MOVIES", () => {
        describe("async actions", () => {
            afterEach(() => {
                jest.clearAllMocks();
            });

            it("creates FILTER_MOVIES when fetching filter movies by genres has been done", () => {
                const filterMoviesMock = jest.fn();

                jest.spyOn(api, "filterMovies").mockImplementation(filterMoviesMock);

                filterMoviesMock.mockResolvedValue({
                    data: {
                        data: [
                            {id: 2, genres: ["Comedy", "Family"]},
                            {id: 1, genres: ["Adventure", "Comedy"]}
                        ]
                    }
                });

                const expectedActions = [
                    {
                        type: types.FILTER_MOVIES, payload: {
                            moviesList: {
                                data: [
                                    {id: 2, genres: ["Comedy", "Family"]},
                                    {id: 1, genres: ["Adventure", "Comedy"]}
                                ]
                            }
                        }
                    },
                ];

                const store = mockStore({});

                return store.dispatch(actions.filterMoviesList("Comedy")).then(() => {

                    expect(filterMoviesMock.mock.calls.length).toBe(1);
                    expect(store.getActions()).toEqual(expectedActions)
                })
            });
        });
    });

    describe("SEARCH_MOVIES", () => {
        describe("async actions", () => {
            afterEach(() => {
                jest.clearAllMocks();
            });

            it("creates LOAD_MOVIE_LIST_SUCCESS when fetching search movies by title has been done", () => {
                const searchMoviesMock = jest.fn();

                jest.spyOn(api, "searchMovies").mockImplementation(searchMoviesMock);

                searchMoviesMock.mockResolvedValue({
                    data: {
                        data: [
                            {id: 2, title: "Coco"},
                            {id: 1, title: "Cocoon"}
                        ]
                    }
                });

                const expectedActions = [
                    {
                        type: types.LOAD_MOVIE_LIST_SUCCESS, payload: {
                            moviesList: {
                                data: [
                                    {id: 2, title: "Coco"},
                                    {id: 1, title: "Cocoon"}
                                ]
                            }
                        }
                    },
                ];

                const store = mockStore({});

                return store.dispatch(actions.searchMovies("Coco", "title")).then(() => {

                    expect(searchMoviesMock.mock.calls.length).toBe(1);
                    expect(store.getActions()).toEqual(expectedActions)
                })
            });
        });
    });
});

