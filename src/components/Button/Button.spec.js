import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Button from "./Button";

describe("snapshot Button component", () => {
    it("should render Button component", () => {
        const component = shallow(<Button />);
        expect(toJson(component)).toMatchSnapshot();
    });
});