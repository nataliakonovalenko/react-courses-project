import {SHOW_MODAL, CLOSE_MODAL} from "./action-types";

const initialState = {
    modalToShow: null,
    modalData: {}
};

export default function reducer(state = initialState, {type, payload}) {
    switch (type) {
        case SHOW_MODAL:
            return {
                ...state,
                modalData: payload.modalData,
                modalToShow: payload.modalToShow
            };
        case CLOSE_MODAL:
            return {
                ...state,
                modalData: {},
                modalToShow: null
            };
        default:
            return state
    }
}