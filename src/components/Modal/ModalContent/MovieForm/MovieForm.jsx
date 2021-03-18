import React, {useState, useContext} from "react";
import Button from "../../../Button/Button";
import FormRow from "../../../Forms/FormRow";
import ModalContext from "../../../../ModalContext";

function useResetInput(initialValue) {
    const[value, setValue] = useState(initialValue);

    const onChange = e => {
        setValue(e.target.value);
    };

    const reset = () => setValue('');

    return {
        value,
        onChange,
        reset
    }
}

export default function MovieForm(props) {
    const {modalData} = useContext(ModalContext);

    const selectOptions = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

    const inputTitle = useResetInput(modalData.title || '');
    const inputMovieURL = useResetInput(modalData.url || '');
    const inputOverview = useResetInput(modalData.overview || '');
    const inputRuntime = useResetInput(modalData.runtime || '');

    const handleFormReset = () => {
        inputTitle.reset();
        inputMovieURL.reset();
        inputOverview.reset();
        inputRuntime.reset();
    };

    return(
        <form action="#" className="movie-form">
            <h1>
                {props.isEditMovieForm ? (
                    "Edit"
                ): "Add"} movie
            </h1>
            <FormRow label="Title">
                <input id="Title" placeholder="Title" type="text" onChange={inputTitle.onChange} value={inputTitle.value} />
            </FormRow>
            <FormRow label="Release date">
                {/*TODO update date*/}
                <input id="Release date" placeholder="Select date" type="date" {...(props.isEditMovieForm && { defaultValue: "10/12/2021" })} />
            </FormRow>
            <FormRow label="Movie URL">
                <input id="Movie URL" placeholder="Movie URL here" type="text" onChange={inputMovieURL.onChange} value={inputMovieURL.value} />
            </FormRow>
            <FormRow label="Genre">
                {/*TODO update select options*/}
                <div className="select">
                    <select id="genre">
                        {selectOptions.map((option, index) => <option key={`option-${index}`} value={index}>{option}</option>)}
                    </select>
                </div>
            </FormRow>
            <FormRow label="Overview">
                <input id="Overview" placeholder="Overview" type="text" onChange={inputOverview.onChange} value={inputOverview.value} />
            </FormRow>
            <FormRow label="Runtime">
                <input id="Runtime" placeholder="Runtime" type="text" onChange={inputRuntime.onChange} value={inputRuntime.value} />
            </FormRow>
            <div className="buttons-holder">
                <Button type="button" className="btn-outline" title="reset" onButtonClick={handleFormReset} />
                {props.isEditMovieForm ? (
                    <Button title="save" type="button"/>
                ): <Button title="submit" type="submit"/> }
            </div>
        </form>
    )
};
