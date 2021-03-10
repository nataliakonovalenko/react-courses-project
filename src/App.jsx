import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import ModalManager from "./components/Modal/ModalManager";

export default function App() {
    const [modalToShow, setModalToShow] = React.useState(null);
    const [modalData, setModalData] = React.useState({});

    const handleAction = (type, movie) => {
        setModalData({
            movie
        });
        setModalToShow(type)
    };

    const handleAddMovie = () => {
        setModalData({});
        setModalToShow('add')
    };

    const handleClose = () => {
        setModalData({});
        setModalToShow(null);
    };

    return(
        <ErrorBoundary>
            <Header onAddMovie={handleAddMovie} />
            <Main onAction={handleAction} />
            <Footer />
            <ModalManager
                modalToShow={modalToShow}
                modalData={modalData}
                onClose={handleClose}
            />
        </ErrorBoundary>
    )
}