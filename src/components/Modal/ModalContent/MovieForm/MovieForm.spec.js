import React from "react";
import { mount } from "enzyme";
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import EnhancedForm from "./MovieForm";
import store from "../../../../store/store";

describe("Add movie", () => {
    it("should update title field on change", () => {
        const dispatch = jest.fn();

        const localStore = {
            ...store,
            dispatch,
        };

        const tree = mount(<Provider store={localStore}><EnhancedForm /></Provider>);
        const titleInput = tree.find("input[name='title']");
        titleInput.simulate("change", {
            target: {
                name: "title",
                value: "Movie 1",
            },
        });
        expect(titleInput.html()).toMatch("Movie 1");
    });

    it("should update releaseDate field on change", () => {
        const dispatch = jest.fn();

        const localStore = {
            ...store,
            dispatch,
        };

        const tree = mount(<Provider store={localStore}><EnhancedForm /></Provider>);
        const releaseDateInput = tree.find("input[name='releaseDate']");
        releaseDateInput.simulate("change", {
            persist: () => {
            },
            target: {
                name: "releaseDate",
                value: "18/04/2021",
            },
        });
        expect(releaseDateInput.html()).toMatch("18/04/2021");
    });

    it("should update releaseDate field on change", () => {
        const dispatch = jest.fn();

        const localStore = {
            ...store,
            dispatch,
        };

        const tree = mount(<Provider store={localStore}><EnhancedForm /></Provider>);
        const posterPathInput = tree.find("input[name='posterPath']");
        posterPathInput.simulate("change", {
            target: {
                name: "posterPath",
                value: "https://image.jpg",
            },
        });
        expect(posterPathInput.html()).toMatch("https://image.jpg");
    });

    it("should update overview field on change", () => {
        const dispatch = jest.fn();

        const localStore = {
            ...store,
            dispatch,
        };

        const tree = mount(<Provider store={localStore}><EnhancedForm /></Provider>);
        const overviewInput = tree.find("input[name='overview']");
        overviewInput.simulate("change", {
            target: {
                name: "overview",
                value: "overview 1",
            },
        });
        expect(overviewInput.html()).toMatch("overview 1");
    });

    it("should update runtime field on change", () => {
        const dispatch = jest.fn();

        const localStore = {
            ...store,
            dispatch,
        };

        const tree = mount(<Provider store={localStore}><EnhancedForm /></Provider>);
        const runtimeInput = tree.find("input[name='runtime']");
        runtimeInput.simulate("change", {
            target: {
                name: "runtime",
                value: "100",
            },
        });
        expect(runtimeInput.html()).toMatch("100");
    });

    it('should submit a valid form', async () => {
        const dispatch = jest.fn();

        const localStore = {
            ...store,
            dispatch,
        };

        const tree = mount(<Provider store={localStore}><EnhancedForm /></Provider>);
        tree.find("input[name='runtime']").simulate("change", {
            target: {
                name: "runtime",
                value: "100",
            },
        });

        tree.find("input[name='overview']").simulate("change", {
            target: {
                name: "overview",
                value: "overview 1",
            },
        });

        tree.find("input[name='posterPath']").simulate("change", {
            target: {
                name: "posterPath",
                value: "https://image.jpg",
            },
        });

        tree.find("input[name='releaseDate']").simulate("change", {
            persist: () => {
            },
            target: {
                name: "releaseDate",
                value: "18/04/2021",
            },
        });

        tree.find("input[name='title']").simulate("change", {
            target: {
                name: "title",
                value: "Movie 1",
            },
        });

        await act(async () => tree.find("form").simulate("submit"));

        expect(dispatch).toHaveBeenCalled();
    });

    it('should reset form', async () => {
        const dispatch = jest.fn();

        const localStore = {
            ...store,
            dispatch,
        };

        const tree = mount(<Provider store={localStore}><EnhancedForm /></Provider>);

        const titleInput = tree.find("input[name='title']");

        await act(async () => titleInput.simulate("change", {
            target: {
                name: "title",
                value: "Movie 1",
            },
        }));

        await act(async () => tree.find(".reset-btn").at(0).simulate("click"));

        expect(titleInput.getDOMNode().value).toBe("");
    });
});
