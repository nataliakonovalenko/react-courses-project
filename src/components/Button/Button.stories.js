import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import Button from "./Button";

export default {
    title: "Button",
    component: Button,
    decorators: [withKnobs],
    argTypes: {
        onButtonClick: { action: "clicked" },
    },
};

export const Primary = () => (
    <button className="btn" title="Primary" disabled={boolean('Disabled', false)}>{text('Label', 'Primary button')}</button>
);

export const Secondary = () => (
    <button className="btn btn-outline" title="Secondary" disabled={boolean('Disabled', false)}>{text('Label', 'Secondary button')}</button>
);

export const Success = () => (
    <button className="btn btn-success" title="Success" disabled={boolean('Disabled', false)}>{text('Label', 'Success button')}</button>
);
