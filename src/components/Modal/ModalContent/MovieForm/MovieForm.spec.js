import api from "../../../../api/api";

const addMovieMock = jest.fn();

jest.spyOn(api, "addMovie").mockImplementation(getMovieMock);

addMovieMock.mockResolvedValue({id: 1, title: 2, name: "name"});

// const editMovieMock = jest.fn();
//
// jest.spyOn(api, "editMovie").mockImplementation(editMovieMock);
//
// editMovieMock.mockResolvedValue({id: 1, title: 1});
