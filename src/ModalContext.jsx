import React from "react";

const ModalContext = React.createContext({
    modalData: {},
    modalToShow: null,
    setModalData: () => {},
    setModalToShow: () => null
});

export default ModalContext;