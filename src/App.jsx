import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import ModalManager from "./components/Modal/ModalManager";
import MovieContext from "./MovieContext";
import ModalContext from "./ModalContext";

export default function App() {
    const [modalToShow, setModalToShow] = React.useState(null);
    const [modalData, setModalData] = React.useState({});
    const [movie, setMovie] = React.useState(null);


    return(
        <ErrorBoundary>
            <ModalContext.Provider value={{
                modalData,
                modalToShow,
                setModalData,
                setModalToShow
            }}>
                <MovieContext.Provider value={{
                    movie,
                    setMovie
                }}>
                    <Header />
                    <Main />
                    <Footer />
                    <ModalManager />
                </MovieContext.Provider>
            </ModalContext.Provider>
        </ErrorBoundary>
    )
}