import React from "react";
import Select from "react-select";

const selectOptions = [
    { value: "All", label: "All" },
    { value: "Documentary", label: "Documentary" },
    { value: "Comedy", label: "Comedy" },
    { value: "Horror", label: "Horror" },
    { value: "Crime", label: "Crime" },
    { value: "Adventure", label: "Adventure" },
    { value: "Animation", label: "Animation" },
    { value: "Family", label: "Family" },
    { value: "Fantasy", label: "Fantasy" },
    { value: "Science Fiction", label: "Science Fiction" },
    { value: "Action", label: "Action" },
    { value: "Romance", label: "Romance" },
    { value: "Drama", label: "Drama" },
];

const customStyles = {
    option: (styles) => ({
        ...styles,
        borderBottom: '1px dotted #000',
        color: '#fff',
        background: "#555",
        padding: 10,
    }),
    valueContainer: (styles) => ({
        ...styles,
        padding: 0,
        background: "#555",
        border: 0,
    }),
    control: (styles) => ({
        ...styles,
        padding: 0,
        background: "#555",
        border: 0,
        minHeight: "60px",
    }),
};

const CustomSelect = (props) => {
    const {
        id, name, onChange, onBlur, value,
    } = props;

    const handleChange = (value) => {
        const optionsArray = [];

        value.forEach((option) => {
            optionsArray.push(option.value);
        });

        onChange('genres', optionsArray);
    };

    const handleBlur = () => {
        onBlur('genres', true);
    };

    const selectedValue = value.map((value) => {
        return {
            value,
            label: value,
        };
    });

    const filterOptions = (value, selectOptions) => {
        const res = selectOptions.filter((el) => {
            return !value.find((element) => {
                return element === el.value;
            });
        });

        return res;
    };

    return (
        <Select
            id={id}
            name={name}
            options={filterOptions(value, selectOptions)}
            isMulti
            onChange={handleChange}
            onBlur={handleBlur}
            value={selectedValue}
            styles={customStyles}
        />
    );
};

export default CustomSelect;
