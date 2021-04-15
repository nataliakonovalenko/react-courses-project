import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import ModalManager from "./components/Modal/ModalManager";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";

export default function App() {
    return(
        <Router>
            <ErrorBoundary>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/film/:id" component={Home} />
                    <Route path="/search/:searchQuery" component={Home} />
                    <Route path="*" component={NoMatch} />
                </Switch>
                <Footer />
                <ModalManager />
            </ErrorBoundary>
        </Router>
    )
}