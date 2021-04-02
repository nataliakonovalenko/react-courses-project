import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import ModalManager from "./components/Modal/ModalManager";

export default function App() {
    const [movie, setMovie] = React.useState(null);

    return(
        <ErrorBoundary>
            <Header />
            <Main />
            <Footer />
            <ModalManager />
        </ErrorBoundary>
    )
}