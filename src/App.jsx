import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

export default function App() {
    return(
        <ErrorBoundary>
            <Header />
            <Hero />
            <Main />
            <Footer />
        </ErrorBoundary>
    )
}