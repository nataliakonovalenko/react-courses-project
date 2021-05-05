import { CLOSE_MODAL, SHOW_MODAL } from "./action-types";

export const showModal = (modalToShow, modalData) => ({
    type: SHOW_MODAL,
    payload: {
        modalToShow,
        modalData,
    },
});

export const closeModal = () => ({
    type: CLOSE_MODAL,
    payload: {},
});
